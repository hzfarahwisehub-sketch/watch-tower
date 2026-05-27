import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireSession, badRequest, notFound } from "@/lib/api-helpers";

export const runtime = "nodejs";

const UpdateTask = z.object({
  title: z.string().min(1).max(500).optional(),
  done: z.boolean().optional(),
  priority: z.enum(["low", "normal", "high", "critical"]).optional(),
  dueDate: z.string().datetime().nullish().optional(),
  notes: z.string().max(5000).nullish().optional(),
});

export async function PATCH(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const result = await requireSession();
  if (!result.ok) return result.response;

  const { id } = await ctx.params;
  const body = await req.json().catch(() => null);
  const parsed = UpdateTask.safeParse(body);
  if (!parsed.success) return badRequest("invalid_body", parsed.error.format());

  const owned = await prisma.task.findFirst({
    where: { id, userId: result.session.userId },
    select: { id: true },
  });
  if (!owned) return notFound();

  const updateData: Record<string, unknown> = {};
  if (parsed.data.title !== undefined) updateData.title = parsed.data.title;
  if (parsed.data.done !== undefined) updateData.done = parsed.data.done;
  if (parsed.data.priority !== undefined) updateData.priority = parsed.data.priority;
  if (parsed.data.dueDate !== undefined) {
    updateData.dueDate = parsed.data.dueDate ? new Date(parsed.data.dueDate) : null;
  }
  if (parsed.data.notes !== undefined) updateData.notes = parsed.data.notes;

  const task = await prisma.task.update({ where: { id }, data: updateData });
  return NextResponse.json({ task });
}

export async function DELETE(_req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const result = await requireSession();
  if (!result.ok) return result.response;

  const { id } = await ctx.params;
  const owned = await prisma.task.findFirst({
    where: { id, userId: result.session.userId },
    select: { id: true },
  });
  if (!owned) return notFound();

  await prisma.task.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
