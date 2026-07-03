import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireSession, badRequest, notFound, canMutateTeamItem } from "@/lib/api-helpers";
import { agendaAllowed } from "@/lib/agenda-access";
import { notifyTeamChange } from "@/lib/team-notify";

export const runtime = "nodejs";

const UpdateAgenda = z.object({
  title: z.string().min(1).max(500).optional(),
  description: z.string().max(5000).nullish().optional(),
  scheduledAt: z.string().datetime().optional(),
  durationMin: z.number().int().min(1).max(1440).optional(),
  location: z.string().max(200).nullish().optional(),
});

export async function PATCH(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const result = await requireSession();
  if (!result.ok) return result.response;
  // Agenda é dos sócios (admins), MENOS o Igor (regra do Hammis 2026-07-02, bloqueio por e-mail).
  if (!agendaAllowed(result.session.role, result.session.email)) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  const { id } = await ctx.params;
  const body = await req.json().catch(() => null);
  const parsed = UpdateAgenda.safeParse(body);
  if (!parsed.success) return badRequest("invalid_body", parsed.error.format());

  const item = await prisma.agendaItem.findUnique({ where: { id }, select: { id: true, userId: true, scope: true } });
  if (!item) return notFound();
  if (item.scope === "team") {
    if (!canMutateTeamItem(item.userId, result.session)) return NextResponse.json({ error: "forbidden" }, { status: 403 });
  } else if (item.userId !== result.session.userId) {
    return notFound();
  }

  const updateData: Record<string, unknown> = {};
  if (parsed.data.title !== undefined) updateData.title = parsed.data.title;
  if (parsed.data.description !== undefined) updateData.description = parsed.data.description;
  if (parsed.data.scheduledAt !== undefined) updateData.scheduledAt = new Date(parsed.data.scheduledAt);
  if (parsed.data.durationMin !== undefined) updateData.durationMin = parsed.data.durationMin;
  if (parsed.data.location !== undefined) updateData.location = parsed.data.location;

  const updated = await prisma.agendaItem.update({ where: { id }, data: updateData });
  if (item.scope === "team") {
    await notifyTeamChange({ actorEmail: result.session.email, action: "editou", entity: "item de agenda", title: updated.title });
  }
  return NextResponse.json({ item: updated });
}

export async function DELETE(_req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const result = await requireSession();
  if (!result.ok) return result.response;
  // Agenda é dos sócios (admins), MENOS o Igor (regra do Hammis 2026-07-02, bloqueio por e-mail).
  if (!agendaAllowed(result.session.role, result.session.email)) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  const { id } = await ctx.params;
  const item = await prisma.agendaItem.findUnique({ where: { id }, select: { id: true, userId: true, scope: true, title: true } });
  if (!item) return notFound();
  if (item.scope === "team") {
    if (!canMutateTeamItem(item.userId, result.session)) return NextResponse.json({ error: "forbidden" }, { status: 403 });
  } else if (item.userId !== result.session.userId) {
    return notFound();
  }

  await prisma.agendaItem.delete({ where: { id } });
  if (item.scope === "team") {
    await notifyTeamChange({ actorEmail: result.session.email, action: "apagou", entity: "item de agenda", title: item.title });
  }
  return NextResponse.json({ ok: true });
}
