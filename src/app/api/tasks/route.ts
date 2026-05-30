import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireSession, badRequest, getScope, friendlyName } from "@/lib/api-helpers";
import { notifyTeamChange } from "@/lib/team-notify";

export const runtime = "nodejs";

const CreateTask = z.object({
  title: z.string().min(1).max(500),
  priority: z.enum(["low", "normal", "high", "critical"]).default("normal"),
  dueDate: z.string().datetime().nullish(),
  notes: z.string().max(5000).nullish(),
});

export async function GET(req: NextRequest) {
  const result = await requireSession();
  if (!result.ok) return result.response;
  const scope = getScope(req);

  if (scope === "team") {
    const rows = await prisma.task.findMany({
      where: { scope: "team" },
      orderBy: [{ done: "asc" }, { priority: "desc" }, { dueDate: "asc" }, { createdAt: "desc" }],
      include: { user: { select: { name: true, email: true } } },
    });
    const tasks = rows.map(({ user, ...t }) => ({ ...t, author: friendlyName(user?.email, user?.name) }));
    return NextResponse.json({ tasks });
  }

  const tasks = await prisma.task.findMany({
    where: { userId: result.session.userId, scope: "personal" },
    orderBy: [{ done: "asc" }, { priority: "desc" }, { dueDate: "asc" }, { createdAt: "desc" }],
  });
  return NextResponse.json({ tasks });
}

export async function POST(req: NextRequest) {
  const result = await requireSession();
  if (!result.ok) return result.response;
  const scope = getScope(req);

  const body = await req.json().catch(() => null);
  const parsed = CreateTask.safeParse(body);
  if (!parsed.success) return badRequest("invalid_body", parsed.error.format());

  const task = await prisma.task.create({
    data: {
      userId: result.session.userId,
      scope,
      title: parsed.data.title,
      priority: parsed.data.priority,
      dueDate: parsed.data.dueDate ? new Date(parsed.data.dueDate) : null,
      notes: parsed.data.notes ?? null,
    },
  });
  if (scope === "team") {
    await notifyTeamChange({ actorEmail: result.session.email, action: "criou", entity: "tarefa", title: task.title });
  }
  return NextResponse.json({ task }, { status: 201 });
}
