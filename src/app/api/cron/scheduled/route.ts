import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireCronSecret, friendlyName, FRIDAY_MARKER } from "@/lib/api-helpers";
import { nextRunFrom } from "@/lib/scheduled-cron";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Motor das ATIVIDADES PROGRAMADAS (ScheduledAction).
 *
 * Decisão do Hammis (2026-06-16): quando chega o horário de uma atividade ativa,
 * ela vira automaticamente uma SOLICITAÇÃO `⚡ EXECUTAR` pra Friday (mesma caixa
 * do botão "⚡ Friday" dos lembretes), e a atividade re-arma pro próximo horário.
 * Antes desta rota NÃO havia nenhum executor — as atividades só ficavam paradas.
 *
 * Chamado pelo workflow check-scheduled.yml (Bearer CRON_SECRET).
 *  - Sem `nextRunAt` → arma pro próximo horário, sem disparar agora (evita disparo
 *    imediato na criação).
 *  - `nextRunAt <= agora` → cria a solicitação ⚡ e avança `lastRunAt`/`nextRunAt`.
 *    Idempotente: como `nextRunAt` avança pro futuro, a próxima passagem não recria.
 */
export async function POST(req: NextRequest) {
  const gate = requireCronSecret(req);
  if (!gate.ok) return gate.response;

  const now = new Date();

  const actions = await prisma.scheduledAction.findMany({
    where: { active: true },
    include: { user: { select: { name: true, email: true } } },
  });

  let fired = 0;
  let armed = 0;
  for (const a of actions) {
    if (!a.nextRunAt) {
      await prisma.scheduledAction.update({
        where: { id: a.id },
        data: { nextRunAt: nextRunFrom(a.cronExpr, now) },
      });
      armed++;
      continue;
    }
    if (a.nextRunAt > now) continue; // ainda não venceu

    const quem = friendlyName(a.user?.email, a.user?.name);
    const body = `${FRIDAY_MARKER} · Atividade programada: "${a.name}" (de ${quem}). Disparada no horário agendado (${a.cronExpr}). Friday executa e avisa.`;
    await prisma.suggestion.create({ data: { userId: a.userId, body } });
    await prisma.scheduledAction.update({
      where: { id: a.id },
      data: { lastRunAt: now, nextRunAt: nextRunFrom(a.cronExpr, now) },
    });
    fired++;
  }

  return NextResponse.json({ ok: true, total: actions.length, fired, armed });
}
