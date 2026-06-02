import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireCronSecret } from "@/lib/api-helpers";
import { sendPushToUser } from "@/lib/push";

export const runtime = "nodejs";

// Janela de tolerância: ignora lembretes atrasados há mais de 24h, pra evitar
// uma avalanche de notificações antigas na primeira execução do cron.
const STALE_WINDOW_MS = 24 * 60 * 60 * 1000;

function nextOccurrence(from: Date, recurring: string): Date {
  const d = new Date(from);
  if (recurring === "daily") d.setDate(d.getDate() + 1);
  else if (recurring === "weekly") d.setDate(d.getDate() + 7);
  else if (recurring === "monthly") d.setMonth(d.getMonth() + 1);
  else d.setFullYear(d.getFullYear() + 100); // recurring desconhecido → joga pro futuro distante
  return d;
}

// Cron de lembretes (chamado pelo workflow check-reminders.yml a cada ~15min).
// Acha lembretes vencidos ainda não notificados, dispara push pro dono e marca
// como notificado. Recorrentes avançam pra próxima ocorrência (re-armam).
export async function POST(req: NextRequest) {
  const gate = requireCronSecret(req);
  if (!gate.ok) return gate.response;

  const now = new Date();
  const floor = new Date(now.getTime() - STALE_WINDOW_MS);

  const due = await prisma.reminder.findMany({
    where: {
      done: false,
      notifiedAt: null,
      triggerAt: { lte: now, gte: floor },
    },
    select: { id: true, userId: true, title: true, recurring: true, triggerAt: true },
    take: 200,
  });

  let sent = 0;
  let pruned = 0;
  for (const r of due) {
    const out = await sendPushToUser(r.userId, {
      title: "⏰ Lembrete",
      body: r.title,
      url: "/?panel=reminders&scope=personal",
      tag: `wt-reminder-${r.id}`,
    });
    sent += out.sent;
    pruned += out.pruned;

    if (r.recurring) {
      // Recorrente: agenda a próxima ocorrência futura e re-arma (notifiedAt=null).
      let next = nextOccurrence(r.triggerAt, r.recurring);
      while (next <= now) next = nextOccurrence(next, r.recurring); // pula períodos perdidos
      await prisma.reminder.update({
        where: { id: r.id },
        data: { triggerAt: next, notifiedAt: null },
      });
    } else {
      // One-shot: marca como notificado pra não repetir nas próximas execuções.
      await prisma.reminder.update({
        where: { id: r.id },
        data: { notifiedAt: now },
      });
    }
  }

  return NextResponse.json({ ok: true, due: due.length, sent, pruned });
}
