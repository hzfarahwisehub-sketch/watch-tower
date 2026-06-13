import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { requireSession, badRequest, getScope, friendlyName } from "@/lib/api-helpers";
import { notifyTeamChange, notifyItemCreated } from "@/lib/team-notify";

export const runtime = "nodejs";

// Aceita expressao cron padrao de 5 campos (minuto hora dia mes dia-semana)
const CRON_RE = /^[\d*/,\-\s]+$/;

const CreateScheduled = z.object({
  name: z.string().min(1).max(200),
  cronExpr: z.string().min(1).regex(CRON_RE, "expressao cron invalida"),
  active: z.boolean().default(true),
  payload: z.unknown().optional(),
});

export async function GET(req: NextRequest) {
  const result = await requireSession();
  if (!result.ok) return result.response;
  const scope = getScope(req);

  if (scope === "team") {
    const rows = await prisma.scheduledAction.findMany({
      where: { scope: "team" },
      orderBy: [{ active: "desc" }, { name: "asc" }],
      include: { user: { select: { name: true, email: true } } },
    });
    const actions = rows.map(({ user, ...a }) => ({ ...a, author: friendlyName(user?.email, user?.name) }));
    return NextResponse.json({ actions });
  }

  const actions = await prisma.scheduledAction.findMany({
    where: { userId: result.session.userId, scope: "personal" },
    orderBy: [{ active: "desc" }, { name: "asc" }],
  });
  return NextResponse.json({ actions });
}

export async function POST(req: NextRequest) {
  const result = await requireSession();
  if (!result.ok) return result.response;
  const scope = getScope(req);

  const body = await req.json().catch(() => null);
  const parsed = CreateScheduled.safeParse(body);
  if (!parsed.success) return badRequest("invalid_body", parsed.error.format());

  const action = await prisma.scheduledAction.create({
    data: {
      userId: result.session.userId,
      scope,
      name: parsed.data.name,
      cronExpr: parsed.data.cronExpr,
      active: parsed.data.active,
      payload: (parsed.data.payload ?? Prisma.JsonNull) as Prisma.InputJsonValue,
    },
  });
  if (scope === "team") {
    await notifyTeamChange({ actorEmail: result.session.email, action: "criou", entity: "ação programada", title: action.name });
    await notifyItemCreated({ actorName: friendlyName(result.session.email), entity: "ação programada", title: action.name });
  }
  return NextResponse.json({ action }, { status: 201 });
}
