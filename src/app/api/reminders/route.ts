import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireSession, badRequest } from "@/lib/api-helpers";

export const runtime = "nodejs";

const CreateReminder = z.object({
  title: z.string().min(1).max(500),
  triggerAt: z.string().datetime(),
  recurring: z.enum(["daily", "weekly", "monthly"]).nullish(),
});

export async function GET() {
  const result = await requireSession();
  if (!result.ok) return result.response;

  const reminders = await prisma.reminder.findMany({
    where: { userId: result.session.userId },
    orderBy: [{ done: "asc" }, { triggerAt: "asc" }],
  });
  return NextResponse.json({ reminders });
}

export async function POST(req: NextRequest) {
  const result = await requireSession();
  if (!result.ok) return result.response;

  const body = await req.json().catch(() => null);
  const parsed = CreateReminder.safeParse(body);
  if (!parsed.success) return badRequest("invalid_body", parsed.error.format());

  const reminder = await prisma.reminder.create({
    data: {
      userId: result.session.userId,
      title: parsed.data.title,
      triggerAt: new Date(parsed.data.triggerAt),
      recurring: parsed.data.recurring ?? null,
    },
  });
  return NextResponse.json({ reminder }, { status: 201 });
}
