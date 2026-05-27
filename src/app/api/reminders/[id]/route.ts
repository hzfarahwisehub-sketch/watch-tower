import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireSession, badRequest, notFound } from "@/lib/api-helpers";

export const runtime = "nodejs";

const UpdateReminder = z.object({
  title: z.string().min(1).max(500).optional(),
  triggerAt: z.string().datetime().optional(),
  recurring: z.enum(["daily", "weekly", "monthly"]).nullish().optional(),
  done: z.boolean().optional(),
});

export async function PATCH(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const result = await requireSession();
  if (!result.ok) return result.response;

  const { id } = await ctx.params;
  const body = await req.json().catch(() => null);
  const parsed = UpdateReminder.safeParse(body);
  if (!parsed.success) return badRequest("invalid_body", parsed.error.format());

  const owned = await prisma.reminder.findFirst({
    where: { id, userId: result.session.userId },
    select: { id: true },
  });
  if (!owned) return notFound();

  const updateData: Record<string, unknown> = {};
  if (parsed.data.title !== undefined) updateData.title = parsed.data.title;
  if (parsed.data.triggerAt !== undefined) updateData.triggerAt = new Date(parsed.data.triggerAt);
  if (parsed.data.recurring !== undefined) updateData.recurring = parsed.data.recurring;
  if (parsed.data.done !== undefined) updateData.done = parsed.data.done;

  const reminder = await prisma.reminder.update({ where: { id }, data: updateData });
  return NextResponse.json({ reminder });
}

export async function DELETE(_req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const result = await requireSession();
  if (!result.ok) return result.response;

  const { id } = await ctx.params;
  const owned = await prisma.reminder.findFirst({
    where: { id, userId: result.session.userId },
    select: { id: true },
  });
  if (!owned) return notFound();

  await prisma.reminder.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
