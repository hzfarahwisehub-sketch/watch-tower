/**
 * GET /api/calendar/google/events — próximos eventos do Google Calendar do
 * usuário (só-leitura, MULTI-CONTA). Busca de TODAS as contas Google conectadas
 * pelo login, mescla e ordena. Cache curto em memória por usuário.
 */
import { NextResponse } from "next/server";
import { requireSession } from "@/lib/api-helpers";
import { isFounder } from "@/lib/mail/config";
import { googleConfigured, refreshAccessToken, fetchUpcomingEventsDetailed, type GoogleEvent, type GcalDiag } from "@/lib/calendar/google";
import { getAccountsWithTokens, removeAccount } from "@/lib/calendar/google-store";
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
    return NextResponse.json({ connected: true, configured: true, events: hit.events, accounts: hit.accounts });
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
        // token revogado/expirado dessa conta → remove SÓ ela (não mexe nas outras)
        if (EXPIRED_RE.test(m) && acc.googleEmail) {
          await removeAccount(session.email, acc.googleEmail).catch(() => {});
        }
        return { email, ok: false, events: [] as GoogleEvent[], diag: undefined as GcalDiag | undefined };
      }
    }),
  );

  // Mescla os eventos de todas as contas, dedupe (mesma reunião em 2 contas),
  // ordena por horário e corta o total.
  const seen = new Set<string>();
  const merged = perAccount
    .flatMap((r) => r.events)
    .filter((ev) => {
      const k = `${ev.account ?? ""}|${ev.id}|${ev.start ?? ""}`;
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    })
    .sort((a, b) => (a.start ?? "").localeCompare(b.start ?? ""))
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
    ...(merged.length === 0 ? { diag: diags } : {}),
  });
}
