import { NextResponse } from "next/server";
import { requireSession } from "@/lib/api-helpers";
import { sendPushToUser } from "@/lib/push";

export const runtime = "nodejs";

// Dispara uma notificação de teste pros devices do próprio usuário logado.
export async function POST() {
  const result = await requireSession();
  if (!result.ok) return result.response;

  const out = await sendPushToUser(result.session.userId, {
    title: "Watch Tower",
    body: "Notificações ativas ✅ Você vai receber alertas de boletins e lembretes aqui.",
    url: "/",
    tag: "wt-test",
  });
  return NextResponse.json({ ok: true, ...out });
}
