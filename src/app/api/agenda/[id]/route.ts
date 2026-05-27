import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireSession, badRequest, notFound } from "@/lib/api-helpers";

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

  const { id } = await ctx.params;
  const body = await req.json().catch(() => null);
  const parsed = UpdateAgenda.safeParse(body);
  if (!parsed.success) return badRequest("invalid_body", parsed.error.format());

  const owned = await prisma.agendaItem.findFirst({
    where: { id, userId: result.session.userId },
    select: { id: true },
  });
  if (!owned) return notFound();

  const updateData: Record<string, unknown> = {};
  if (parsed.data.title !== undefined) updateData.title = parsed.data.title;
  if (parsed.data.description !== undefined) updateData.description = parsed.data.description;
  if (parsed.data.scheduledAt !== undefined) updateData.scheduledAt = new Date(parsed.data.scheduledAt);
  if (parsed.data.durationMin !== undefined) updateData.durationMin = parsed.data.durationMin;
  if (parsed.data.location !== undefined) updateData.location = parsed.data.location;

  const item = await prisma.agendaItem.update({ where: { id }, data: updateData });
  return NextResponse.json({ item });
}

export async function DELETE(_req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const result = await requireSession();
  if (!result.ok) return result.response;

  const { id } = await ctx.params;
  const owned = await prisma.agendaItem.findFirst({
    where: { id, userId: result.session.userId },
    select: { id: true },
  });
  if (!owned) return notFound();

  await prisma.agendaItem.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
