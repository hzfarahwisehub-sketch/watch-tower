/**
 * GET /api/calendar/google/callback — Google redireciona aqui com ?code&state.
 * A identidade do usuário vem do `state` ASSINADO (verificado por HMAC), NÃO do
 * cookie de sessão — assim o callback sobrevive à volta do Google mesmo quando o
 * cookie não vem (SameSite / contexto de PWA / expiração de 24h dos não-admin),
 * que era o que dava {"error":"unauthenticated"} na cara do usuário. O state foi
 * assinado no /auth, quando a sessão e o isFounder já tinham sido checados, então
 * um state válido já prova identidade + permissão. Troca o code por tokens e
 * guarda o refresh token criptografado. Redirect URI a registrar no Google Cloud:
 * https://watchtower.wisehubnow.online/api/calendar/google/callback
 */
import { NextRequest, NextResponse } from "next/server";
import { isFounder } from "@/lib/mail/config";
import { googleConfigured, exchangeCode } from "@/lib/calendar/google";
import { saveAccount, cryptoReady } from "@/lib/calendar/google-store";
import { readVerifiedState } from "@/lib/calendar/oauth-state";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function back(reason: string): NextResponse {
  const base = process.env.GOOGLE_REDIRECT_URI?.replace(/\/api\/.*$/, "") || "https://watchtower.wisehubnow.online";
  return NextResponse.redirect(`${base}/?gcal=${encodeURIComponent(reason)}`);
}

export async function GET(req: NextRequest) {
  if (!googleConfigured() || !cryptoReady()) return back("not_configured");

  const url = new URL(req.url);
  const err = url.searchParams.get("error");
  if (err) return back(err === "access_denied" ? "cancelled" : "error");

  const code = url.searchParams.get("code") || "";
  const state = url.searchParams.get("state") || "";
  // Identidade a partir do state assinado (não da sessão). Se o state não bate,
  // volta pro painel com aviso — nunca mostra JSON cru de "unauthenticated".
  const email = readVerifiedState(state);
  if (!code || !email) return back("bad_state");
  if (!isFounder(email)) return back("forbidden");

  try {
    const tok = await exchangeCode(code);
    if (!tok.refreshToken) {
      // sem refresh token (re-autorização sem prompt=consent, ou já concedido)
      return back("no_refresh");
    }
    await saveAccount(email, tok.email, tok.refreshToken);
    return back("connected");
  } catch {
    return back("exchange_failed");
  }
}
