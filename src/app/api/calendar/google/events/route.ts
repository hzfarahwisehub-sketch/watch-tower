/**
 * GET /api/calendar/google/events — próximos eventos do Google Calendar do
 * usuário (só-leitura). Usa o refresh token guardado pra obter um access token
 * na hora. Cache curto em memória por usuário pra não bater na API a cada abertura.
 */
import { NextResponse } from "next/server";
import { requireSession } from "@/lib/api-helpers";
import { isFounder } from "@/lib/mail/config";
import { googleConfigured, refreshAccessToken, fetchUpcomingEventsDetailed, type GoogleEvent } from "@/lib/calendar/google";
import { getRefreshToken, getConnection, deleteConnection } from "@/lib/calendar/google-store";
import { rateAllow } from "@/lib/mail/ratelimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

interface CacheEntry {
  at: number;
  events: GoogleEvent[];
  googleEmail: string | null;
}
const cache = new Map<string, CacheEntry>();
const TTL = 5 * 60 * 1000;

export async function GET() {
  const gate = await requireSession();
  if (!gate.ok) return gate.response;
  const { session } = gate;
  if (!isFounder(session.email)) return NextResponse.json({ error: "forbidden" }, { status: 403 });
  if (!googleConfigured()) return NextResponse.json({ connected: false, configured: false, events: [] });

  if (!rateAllow(`gcal:${session.userId}`, 40, 60_000)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  let conn: { googleEmail: string | null } | null = null;
  try {
    conn = await getConnection(session.email);
  } catch {
    return NextResponse.json({ error: "db_unavailable" }, { status: 503 });
  }
  if (!conn) return NextResponse.json({ connected: false, configured: true, events: [] });

  const key = session.email.toLowerCase();
  const hit = cache.get(key);
  if (hit && Date.now() - hit.at < TTL) {
    return NextResponse.json({ connected: true, configured: true, googleEmail: hit.googleEmail, events: hit.events });
  }

  const refresh = await getRefreshToken(session.email).catch(() => null);
  if (!refresh) return NextResponse.json({ connected: false, configured: true, events: [] });

  try {
    const access = await refreshAccessToken(refresh);
    const { events, diag } = await fetchUpcomingEventsDetailed(access, 15);
    // Só cacheia quando veio ALGO — evita prender um vazio (transitório) por 5 min.
    if (events.length > 0) {
      cache.set(key, { at: Date.now(), events, googleEmail: conn.googleEmail });
    }
    return NextResponse.json({
      connected: true,
      configured: true,
      googleEmail: conn.googleEmail,
      events,
      // diagnóstico só quando vazio (fundadores-only), pra entender o porquê
      ...(events.length === 0 ? { diag } : {}),
    });
  } catch (e) {
    const m = String((e as Error)?.message ?? e);
    // refresh token revogado/expirado (ex.: modo Teste 7 dias) → desconecta
    if (/invalid_grant|unauthorized|google_token_400|google_token_401/i.test(m)) {
      await deleteConnection(session.email).catch(() => {});
      return NextResponse.json({ connected: false, configured: true, expired: true, events: [] });
    }
    return NextResponse.json({ error: "google_unavailable", events: [] }, { status: 502 });
  }
}
