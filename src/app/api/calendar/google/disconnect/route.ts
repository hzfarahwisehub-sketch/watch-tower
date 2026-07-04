/**
 * POST /api/calendar/google/disconnect — remove a conexão do Google Calendar
 * do usuário (apaga o refresh token guardado).
 */
import { NextResponse } from "next/server";
import { requireSession } from "@/lib/api-helpers";
import { isFounder } from "@/lib/mail/config";
import { deleteConnection } from "@/lib/calendar/google-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST() {
  const gate = await requireSession();
  if (!gate.ok) return gate.response;
  if (!isFounder(gate.session.email)) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }
  try {
    await deleteConnection(gate.session.email);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "db_unavailable" }, { status: 503 });
  }
}
