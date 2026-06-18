// Gerenciamento das Atividades Programadas pela Friday, via CRON_SECRET (sem
// depender de sessão de navegador). Usado pra arrumar a casa: listar todas as
// ScheduledActions e deletar/desativar as que estão erradas (ex.: espelhos de
// rotinas que já rodam por cron e geram pedidos ⚡ duplicados).
//   GET  /api/internal/scheduled-admin            → lista todas
//   POST /api/internal/scheduled-admin  { op, ids } → delete | deactivate | activate
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireCronSecret } from "@/lib/api-helpers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const gate = requireCronSecret(req);
  if (!gate.ok) return gate.response;

  const actions = await prisma.scheduledAction.findMany({
    orderBy: [{ active: "desc" }, { name: "asc" }],
    include: { user: { select: { email: true, name: true } } },
  });

  return NextResponse.json({
    count: actions.length,
    actions: actions.map((a) => ({
      id: a.id,
      name: a.name,
      cronExpr: a.cronExpr,
      active: a.active,
      scope: a.scope,
      lastRunAt: a.lastRunAt,
      nextRunAt: a.nextRunAt,
      author: a.user?.email ?? null,
    })),
  });
}

const Op = z.object({
  op: z.enum(["delete", "deactivate", "activate"]),
  ids: z.array(z.string().min(1)).min(1).max(200),
});

export async function POST(req: NextRequest) {
  const gate = requireCronSecret(req);
  if (!gate.ok) return gate.response;

  const body = await req.json().catch(() => null);
  const parsed = Op.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_body", details: parsed.error.format() }, { status: 400 });
  }
  const { op, ids } = parsed.data;

  if (op === "delete") {
    const r = await prisma.scheduledAction.deleteMany({ where: { id: { in: ids } } });
    return NextResponse.json({ ok: true, op, affected: r.count });
  }

  const r = await prisma.scheduledAction.updateMany({
    where: { id: { in: ids } },
    data: { active: op === "activate" },
  });
  return NextResponse.json({ ok: true, op, affected: r.count });
}
