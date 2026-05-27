import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireSession, badRequest, notFound } from "@/lib/api-helpers";

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

  const owned = await prisma.scheduledAction.findFirst({
    where: { id, userId: result.session.userId },
    select: { id: true },
  });
  if (!owned) return notFound();

  const updateData: Record<string, unknown> = {};
  if (parsed.data.name !== undefined) updateData.name = parsed.data.name;
  if (parsed.data.cronExpr !== undefined) updateData.cronExpr = parsed.data.cronExpr;
  if (parsed.data.active !== undefined) updateData.active = parsed.data.active;
  if (parsed.data.payload !== undefined) updateData.payload = parsed.data.payload;

  const action = await prisma.scheduledAction.update({ where: { id }, data: updateData });
  return NextResponse.json({ action });
}

export async function DELETE(_req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const result = await requireSession();
  if (!result.ok) return result.response;

  const { id } = await ctx.params;
  const owned = await prisma.scheduledAction.findFirst({
    where: { id, userId: result.session.userId },
    select: { id: true },
  });
  if (!owned) return notFound();

  await prisma.scheduledAction.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
