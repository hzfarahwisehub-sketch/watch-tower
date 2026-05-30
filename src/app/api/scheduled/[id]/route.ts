import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireSession, badRequest, notFound, canMutateTeamItem } from "@/lib/api-helpers";
import { notifyTeamChange } from "@/lib/team-notify";

export const runtime = "nodejs";

const CRON_RE = /^[\d*/,\-\s]+$/;

const UpdateScheduled = z.object({
  name: z.string().min(1).max(200).optional(),
  cronExpr: z.string().min(1).regex(CRON_RE).optional(),
  active: z.boolean().optional(),
  payload: z.unknown().optional(),
});

export async function PATCH(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const result = await requireSession();
  if (!result.ok) return result.response;

  const { id } = await ctx.params;
  const body = await req.json().catch(() => null);
  const parsed = UpdateScheduled.safeParse(body);
  if (!parsed.success) return badRequest("invalid_body", parsed.error.format());

  const item = await prisma.scheduledAction.findUnique({ where: { id }, select: { id: true, userId: true, scope: true } });
  if (!item) return notFound();
  if (item.scope === "team") {
    if (!canMutateTeamItem(item.userId, result.session)) return NextResponse.json({ error: "forbidden" }, { status: 403 });
  } else if (item.userId !== result.session.userId) {
    return notFound();
  }

  const updateData: Record<string, unknown> = {};
  if (parsed.data.name !== undefined) updateData.name = parsed.data.name;
  if (parsed.data.cronExpr !== undefined) updateData.cronExpr = parsed.data.cronExpr;
  if (parsed.data.active !== undefined) updateData.active = parsed.data.active;
  if (parsed.data.payload !== undefined) updateData.payload = parsed.data.payload;

  const action = await prisma.scheduledAction.update({ where: { id }, data: updateData });
  if (item.scope === "team") {
    await notifyTeamChange({ actorEmail: result.session.email, action: "editou", entity: "ação programada", title: action.name });
  }
  return NextResponse.json({ action });
}

export async function DELETE(_req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const result = await requireSession();
  if (!result.ok) return result.response;

  const { id } = await ctx.params;
  const item = await prisma.scheduledAction.findUnique({ where: { id }, select: { id: true, userId: true, scope: true, name: true } });
  if (!item) return notFound();
  if (item.scope === "team") {
    if (!canMutateTeamItem(item.userId, result.session)) return NextResponse.json({ error: "forbidden" }, { status: 403 });
  } else if (item.userId !== result.session.userId) {
    return notFound();
  }

  await prisma.scheduledAction.delete({ where: { id } });
  if (item.scope === "team") {
    await notifyTeamChange({ actorEmail: result.session.email, action: "apagou", entity: "ação programada", title: item.name });
  }
  return NextResponse.json({ ok: true });
}
