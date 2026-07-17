/**
 * GET /api/calendar/google/events — próximos eventos do Google Calendar do
 * usuário (só-leitura, MULTI-CONTA). Busca de TODAS as contas Google conectadas
 * pelo login, mescla e ordena. Cache curto em memória por usuário.
 */
import { NextResponse } from "next/server";
import { requireSession } from "@/lib/api-helpers";
import { isFounder } from "@/lib/mail/config";
import { googleConfigured, refreshAccessToken, fetchUpcomingEventsDetailed, windowEndISO, type GoogleEvent, type GcalDiag } from "@/lib/calendar/google";
import { getAccountsWithTokens } from "@/lib/calendar/google-store";
import { rateAllow } from "@/lib/mail/ratelimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

interface AccountView {
  email: string;
  ok: boolean; // false = token expirado/removido nesta chamada
}
interface CacheEntry {
  at: number;
  events: GoogleEvent[];
  accounts: AccountView[];
}
const cache = new Map<string, CacheEntry>();
const TTL = 5 * 60 * 1000;

const EXPIRED_RE = /invalid_grant|unauthorized|google_token_400|google_token_401/i;

export async function GET() {
  const gate = await requireSession();
  if (!gate.ok) return gate.response;
  const { session } = gate;
  if (!isFounder(session.email)) return NextResponse.json({ error: "forbidden" }, { status: 403 });
  if (!googleConfigured()) return NextResponse.json({ connected: false, configured: false, events: [] });

  if (!rateAllow(`gcal:${session.userId}`, 40, 60_000)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  let stored;
  try {
    stored = await getAccountsWithTokens(session.email);
  } catch {
    return NextResponse.json({ error: "db_unavailable" }, { status: 503 });
  }
  if (stored.length === 0) {
    return NextResponse.json({ connected: false, configured: true, events: [], accounts: [] });
  }

  const key = session.email.toLowerCase();
  const hit = cache.get(key);
  if (hit && Date.now() - hit.at < TTL) {
    return NextResponse.json({ connected: true, configured: true, events: hit.events, accounts: hit.accounts, windowEnd: windowEndISO() });
  }

  // Busca cada conta em paralelo. Uma conta que falha NÃO derruba as outras.
  const perAccount = await Promise.all(
    stored.map(async (acc) => {
      // e-mail REAL (pode ser "" em conta antiga) — é a chave usada pra remover.
      const email = acc.googleEmail || "";
      try {
        const access = await refreshAccessToken(acc.refreshToken);
        const { events, diag } = await fetchUpcomingEventsDetailed(access, 15);
        const tagged = events.map((ev) => ({ ...ev, account: acc.googleEmail || null }));
        return { email, ok: true, events: tagged, diag };
      } catch (e) {
        const m = String((e as Error)?.message ?? e);
        // Token com problema (expirado/revogado/transitório): NÃO remove a conta
        // sozinho — marca ok:false pra aparecer como "expirou" e o Hammis decidir
        // (reconectar ou remover no ×). Remover sozinho fazia a conta "sumir".
        const expired = EXPIRED_RE.test(m);
        return { email, ok: false, expired, events: [] as GoogleEvent[], diag: undefined as GcalDiag | undefined };
      }
    }),
  );

  // Mescla os eventos de todas as contas, dedupe (mesma reunião em 2 contas),
  // ordena por horário e corta o total.
  //
  // A chave NÃO leva a conta: o mesmo convite que cai na adm. e na hzfarah. tem
  // o MESMO id do Google e é uma reunião só — com a conta na chave ele aparecia
  // duas vezes na tela. Fica a 1ª conta da lista, que é quem vira a etiqueta.
  const seen = new Set<string>();
  const merged = perAccount
    .flatMap((r) => r.events)
    .filter((ev) => {
      const k = `${ev.id}|${ev.start ?? ""}`;
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    })
    // Pelo INSTANTE, não pela string: cada agenda do Google responde no fuso dela,
    // e ordenar o texto punha "T09:00:00-04:00" (13:00Z) antes de "T10:00:00+02:00"
    // (08:00Z). Como o corte abaixo vem depois, isso também cortava o evento errado.
    .sort((a, b) => {
      const ta = a.start ? Date.parse(a.start) : Number.POSITIVE_INFINITY;
      const tb = b.start ? Date.parse(b.start) : Number.POSITIVE_INFINITY;
      return (Number.isNaN(ta) ? Number.POSITIVE_INFINITY : ta) - (Number.isNaN(tb) ? Number.POSITIVE_INFINITY : tb);
    })
    .slice(0, 30);

  const accounts: AccountView[] = perAccount.map((r) => ({ email: r.email, ok: r.ok }));

  // Só cacheia quando veio ALGO (evita prender vazio transitório).
  if (merged.length > 0) {
    cache.set(key, { at: Date.now(), events: merged, accounts });
  }

  // diagnóstico só quando vazio (fundadores-only)
  const diags = perAccount
    .filter((r) => r.diag)
    .map((r) => ({ account: r.email, ...(r.diag as GcalDiag) }));

  return NextResponse.json({
    connected: true,
    configured: true,
    events: merged,
    accounts,
    windowEnd: windowEndISO(),
    ...(merged.length === 0 ? { diag: diags } : {}),
  });
}
