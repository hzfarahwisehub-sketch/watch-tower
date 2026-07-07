/**
 * POST /api/calendar/google/disconnect — remove conta(s) do Google Calendar do
 * usuário. Body opcional { email }: remove SÓ aquela conta. Sem body: remove
 * todas. (Multi-conta.)
 */
import { NextRequest, NextResponse } from "next/server";
import { requireSession } from "@/lib/api-helpers";
import { isFounder } from "@/lib/mail/config";
import { removeAccount, removeAllAccounts } from "@/lib/calendar/google-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const gate = await requireSession();
  if (!gate.ok) return gate.response;
  if (!isFounder(gate.session.email)) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }
  const body = (await req.json().catch(() => ({}))) as { email?: string };
  // Presença do campo `email` (mesmo "") = remover UMA conta específica (inclui
  // a conta antiga sem e-mail). Sem o campo = remover TODAS.
  const hasEmailField = body != null && typeof body.email === "string";
  try {
    if (hasEmailField) await removeAccount(gate.session.email, (body.email as string).trim());
    else await removeAllAccounts(gate.session.email);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "db_unavailable" }, { status: 503 });
  }
}
