import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireSession, badRequest, notFound, canMutateTeamItem } from "@/lib/api-helpers";
import { notifyTeamChange } from "@/lib/team-notify";

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

  const item = await prisma.task.findUnique({ where: { id }, select: { id: true, userId: true, scope: true } });
  if (!item) return notFound();
  // Pessoal: só dono. Equipe: criador ou Hammis.
  if (item.scope === "team") {
    if (!canMutateTeamItem(item.userId, result.session)) {
      return NextResponse.json({ error: "forbidden" }, { status: 403 });
    }
  } else if (item.userId !== result.session.userId) {
    return notFound();
  }

  const updateData: Record<string, unknown> = {};
  if (parsed.data.title !== undefined) updateData.title = parsed.data.title;
  if (parsed.data.done !== undefined) updateData.done = parsed.data.done;
  if (parsed.data.priority !== undefined) updateData.priority = parsed.data.priority;
  if (parsed.data.dueDate !== undefined) {
    updateData.dueDate = parsed.data.dueDate ? new Date(parsed.data.dueDate) : null;
  }
  if (parsed.data.notes !== undefined) updateData.notes = parsed.data.notes;

  const task = await prisma.task.update({ where: { id }, data: updateData });
  if (item.scope === "team") {
    await notifyTeamChange({
      actorEmail: result.session.email,
      action: parsed.data.done === true ? "concluiu" : "editou",
      entity: "tarefa",
      title: task.title,
    });
  }
  return NextResponse.json({ task });
}

export async function DELETE(_req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const result = await requireSession();
  if (!result.ok) return result.response;

  const { id } = await ctx.params;
  const item = await prisma.task.findUnique({ where: { id }, select: { id: true, userId: true, scope: true, title: true } });
  if (!item) return notFound();
  if (item.scope === "team") {
    if (!canMutateTeamItem(item.userId, result.session)) {
      return NextResponse.json({ error: "forbidden" }, { status: 403 });
    }
  } else if (item.userId !== result.session.userId) {
    return notFound();
  }

  await prisma.task.delete({ where: { id } });
  if (item.scope === "team") {
    await notifyTeamChange({ actorEmail: result.session.email, action: "apagou", entity: "tarefa", title: item.title });
  }
  return NextResponse.json({ ok: true });
}
