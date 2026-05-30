import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireSession, badRequest, notFound } from "@/lib/api-helpers";
import { isMaster } from "@/lib/team-notify";

export const runtime = "nodejs";

const UpdateSuggestion = z.object({
  status: z.enum(["open", "applied", "rejected"]).optional(),
  response: z.string().max(4000).nullish().optional(),
});

// Aplicar / rejeitar uma solicitação (com justificativa) — só o Hammis (master).
export async function PATCH(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const result = await requireSession();
  if (!result.ok) return result.response;
  if (!isMaster(result.session.email)) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  const { id } = await ctx.params;
  const body = await req.json().catch(() => null);
  const parsed = UpdateSuggestion.safeParse(body);
  if (!parsed.success) return badRequest("invalid_body", parsed.error.format());

  const existing = await prisma.suggestion.findUnique({ where: { id }, select: { id: true } });
  if (!existing) return notFound();

  const updateData: Record<string, unknown> = {};
  if (parsed.data.status !== undefined) updateData.status = parsed.data.status;
  if (parsed.data.response !== undefined) updateData.response = parsed.data.response;

  const suggestion = await prisma.suggestion.update({ where: { id }, data: updateData });
  return NextResponse.json({ suggestion });
}

// Remover — o autor pode retirar a sua; o Hammis pode remover qualquer uma.
export async function DELETE(_req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const result = await requireSession();
  if (!result.ok) return result.response;

  const { id } = await ctx.params;
  const item = await prisma.suggestion.findUnique({ where: { id }, select: { id: true, userId: true } });
  if (!item) return notFound();
  if (item.userId !== result.session.userId && !isMaster(result.session.email)) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  await prisma.suggestion.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
