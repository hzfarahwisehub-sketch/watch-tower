import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireSession, badRequest } from "@/lib/api-helpers";

export const runtime = "nodejs";

const CreateTask = z.object({
  title: z.string().min(1).max(500),
  priority: z.enum(["low", "normal", "high", "critical"]).default("normal"),
  dueDate: z.string().datetime().nullish(),
  notes: z.string().max(5000).nullish(),
});

export async function GET() {
  const result = await requireSession();
  if (!result.ok) return result.response;

  const tasks = await prisma.task.findMany({
    where: { userId: result.session.userId },
    orderBy: [{ done: "asc" }, { priority: "desc" }, { dueDate: "asc" }, { createdAt: "desc" }],
  });
  return NextResponse.json({ tasks });
}

export async function POST(req: NextRequest) {
  const result = await requireSession();
  if (!result.ok) return result.response;

  const body = await req.json().catch(() => null);
  const parsed = CreateTask.safeParse(body);
  if (!parsed.success) return badRequest("invalid_body", parsed.error.format());

  const task = await prisma.task.create({
    data: {
      userId: result.session.userId,
      title: parsed.data.title,
      priority: parsed.data.priority,
      dueDate: parsed.data.dueDate ? new Date(parsed.data.dueDate) : null,
      notes: parsed.data.notes ?? null,
    },
  });
  return NextResponse.json({ task }, { status: 201 });
}
