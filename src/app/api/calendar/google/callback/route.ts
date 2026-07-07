/**
 * GET /api/calendar/google/callback — Google redireciona aqui com ?code&state.
 * Verifica o state (anti-CSRF), troca o code por tokens, guarda o refresh token
 * criptografado, e volta pro dashboard. Redirect URI a registrar no Google Cloud:
 * https://watchtower.wisehubnow.online/api/calendar/google/callback
 */
import { NextRequest, NextResponse } from "next/server";
import { requireSession } from "@/lib/api-helpers";
import { isFounder } from "@/lib/mail/config";
import { googleConfigured, verifyState, exchangeCode } from "@/lib/calendar/google";
import { saveAccount, cryptoReady } from "@/lib/calendar/google-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function back(reason: string): NextResponse {
  const base = process.env.GOOGLE_REDIRECT_URI?.replace(/\/api\/.*$/, "") || "https://watchtower.wisehubnow.online";
  return NextResponse.redirect(`${base}/?gcal=${encodeURIComponent(reason)}`);
}

export async function GET(req: NextRequest) {
  const gate = await requireSession();
  if (!gate.ok) return gate.response;
  if (!isFounder(gate.session.email)) return back("forbidden");
  if (!googleConfigured() || !cryptoReady()) return back("not_configured");

  const url = new URL(req.url);
  const err = url.searchParams.get("error");
  if (err) return back(err === "access_denied" ? "cancelled" : "error");

  const code = url.searchParams.get("code") || "";
  const state = url.searchParams.get("state") || "";
  if (!code || !verifyState(state, gate.session.email)) return back("bad_state");

  try {
    const tok = await exchangeCode(code);
    if (!tok.refreshToken) {
      // sem refresh token (re-autorização sem prompt=consent, ou já concedido)
      return back("no_refresh");
    }
    await saveAccount(gate.session.email, tok.email, tok.refreshToken);
    return back("connected");
  } catch {
    return back("exchange_failed");
  }
}
