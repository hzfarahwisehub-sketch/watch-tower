/**
 * GET /api/calendar/google/auth — inicia o fluxo OAuth: redireciona o usuário
 * pro consentimento do Google (escopo calendar.readonly). state assinado
 * (anti-CSRF). Só fundadores (mesma regra do Inbox).
 */
import { NextResponse } from "next/server";
import { requireSession } from "@/lib/api-helpers";
import { isFounder } from "@/lib/mail/config";
import { googleConfigured, buildAuthUrl, signState } from "@/lib/calendar/google";
import { cryptoReady } from "@/lib/calendar/google-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const gate = await requireSession();
  if (!gate.ok) return gate.response;
  if (!isFounder(gate.session.email)) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }
  if (!googleConfigured() || !cryptoReady()) {
    return NextResponse.json({ error: "google_not_configured" }, { status: 503 });
  }
  const url = buildAuthUrl(signState(gate.session.email));
  return NextResponse.redirect(url);
}
