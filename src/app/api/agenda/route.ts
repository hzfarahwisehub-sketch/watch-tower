import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireSession, requireAdmin, badRequest, getScope, friendlyName } from "@/lib/api-helpers";
import { notifyTeamChange, notifyItemCreated } from "@/lib/team-notify";

export const runtime = "nodejs";

const CreateAgenda = z.object({
  title: z.string().min(1).max(500),
  description: z.string().max(5000).nullish(),
  scheduledAt: z.string().datetime(),
  durationMin: z.number().int().min(1).max(1440).default(30),
  location: z.string().max(200).nullish(),
});

export async function GET(req: NextRequest) {
  const result = await requireSession();
  if (!result.ok) return result.response;
  // Regra do Hammis (2026-07-02): Agenda é SÓ de admin. Igor (editor) NÃO enxerga a agenda dos sócios.
  const adminGate = requireAdmin(result.session);
  if (adminGate) return adminGate;
  const scope = getScope(req);

  const where: Record<string, unknown> =
    scope === "team" ? { scope: "team" } : { userId: result.session.userId, scope: "personal" };

  const fromStr = req.nextUrl.searchParams.get("from");
  const toStr = req.nextUrl.searchParams.get("to");
  if (fromStr || toStr) {
    const dateFilter: Record<string, Date> = {};
    if (fromStr) dateFilter.gte = new Date(fromStr);
    if (toStr) dateFilter.lte = new Date(toStr);
    where.scheduledAt = dateFilter;
  }

  if (scope === "team") {
    const rows = await prisma.agendaItem.findMany({
      where,
      orderBy: { scheduledAt: "asc" },
      include: { user: { select: { name: true, email: true } } },
    });
    const items = rows.map(({ user, ...i }) => ({ ...i, author: friendlyName(user?.email, user?.name) }));
    return NextResponse.json({ items });
  }

  const items = await prisma.agendaItem.findMany({ where, orderBy: { scheduledAt: "asc" } });
  return NextResponse.json({ items });
}

export async function POST(req: NextRequest) {
  const result = await requireSession();
  if (!result.ok) return result.response;
  // Regra do Hammis (2026-07-02): Agenda é SÓ de admin. Igor (editor) NÃO enxerga a agenda dos sócios.
  const adminGate = requireAdmin(result.session);
  if (adminGate) return adminGate;
  const scope = getScope(req);

  const body = await req.json().catch(() => null);
  const parsed = CreateAgenda.safeParse(body);
  if (!parsed.success) return badRequest("invalid_body", parsed.error.format());

  const item = await prisma.agendaItem.create({
    data: {
      userId: result.session.userId,
      scope,
      title: parsed.data.title,
      description: parsed.data.description ?? null,
      scheduledAt: new Date(parsed.data.scheduledAt),
      durationMin: parsed.data.durationMin,
      location: parsed.data.location ?? null,
    },
  });
  if (scope === "team") {
    await notifyTeamChange({ actorEmail: result.session.email, action: "criou", entity: "item de agenda", title: item.title });
    await notifyItemCreated({ actorName: friendlyName(result.session.email), entity: "compromisso", title: item.title });
  }
  return NextResponse.json({ item }, { status: 201 });
}
