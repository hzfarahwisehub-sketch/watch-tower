import { NextRequest, NextResponse } from "next/server";
import { requireSession } from "@/lib/api-helpers";
import { calendarToken } from "@/lib/calendar-feed";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Devolve a URL do feed de calendário do usuário LOGADO (com o token assinado),
 * pronta pra assinar no Google Agenda / Apple / Outlook. Não expõe o segredo,
 * só o HMAC derivado.
 */
export async function GET(req: NextRequest) {
  const result = await requireSession();
  if (!result.ok) return result.response;

  const userId = result.session.userId;
  const token = calendarToken(userId);
  const origin = new URL(req.url).origin;

  const httpsUrl = `${origin}/api/calendar?u=${userId}&t=${token}`;
  const webcalUrl = httpsUrl.replace(/^https?:/, "webcal:");
  // Link que abre o Google Agenda já no fluxo de "adicionar calendário por URL".
  const googleAddUrl = `https://calendar.google.com/calendar/r?cid=${encodeURIComponent(webcalUrl)}`;

  return NextResponse.json({ url: httpsUrl, webcalUrl, googleAddUrl });
}
