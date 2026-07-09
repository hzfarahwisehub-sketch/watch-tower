/**
 * POST /api/calendar/google/sync — reconcilia a Agenda do Watch Tower com a
 * agenda dedicada "Watch Tower" do Google do usuário (mão dupla). Chamado
 * best-effort pelo cliente depois de mexer na agenda e ao carregar o painel.
 * Só fundadores (mesma trava das outras rotas de calendar).
 */
import { NextResponse } from "next/server";
import { requireSession } from "@/lib/api-helpers";
import { isFounder } from "@/lib/mail/config";
import { googleConfigured } from "@/lib/calendar/google";
import { reconcile } from "@/lib/calendar/google-sync";
import { rateAllow } from "@/lib/mail/ratelimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function POST() {
  const gate = await requireSession();
  if (!gate.ok) return gate.response;
  const { session } = gate;
  if (!isFounder(session.email)) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }
  if (!googleConfigured()) {
    return NextResponse.json({ ok: false, reason: "not_configured" });
  }
  // Sync toca Google + banco: contém a cadência por usuário.
  if (!rateAllow(`gcal-sync:${session.userId}`, 12, 60_000)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }
  const result = await reconcile(session.email, session.userId);
  return NextResponse.json(result);
}
