import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireSession, badRequest, getScope, friendlyName } from "@/lib/api-helpers";
import { notifyTeamChange, notifyItemCreated } from "@/lib/team-notify";

export const runtime = "nodejs";

const CreateReminder = z.object({
  title: z.string().min(1).max(500),
  triggerAt: z.string().datetime(),
  recurring: z.enum(["daily", "weekly", "monthly"]).nullish(),
});

export async function GET(req: NextRequest) {
  const result = await requireSession();
  if (!result.ok) return result.response;
  const scope = getScope(req);

  if (scope === "team") {
    const rows = await prisma.reminder.findMany({
      where: { scope: "team" },
      orderBy: [{ done: "asc" }, { triggerAt: "asc" }],
      include: { user: { select: { name: true, email: true } } },
    });
    const reminders = rows.map(({ user, ...r }) => ({ ...r, author: friendlyName(user?.email, user?.name) }));
    return NextResponse.json({ reminders });
  }

  const reminders = await prisma.reminder.findMany({
    where: { userId: result.session.userId, scope: "personal" },
    orderBy: [{ done: "asc" }, { triggerAt: "asc" }],
  });
  return NextResponse.json({ reminders });
}

export async function POST(req: NextRequest) {
  const result = await requireSession();
  if (!result.ok) return result.response;
  const scope = getScope(req);

  const body = await req.json().catch(() => null);
  const parsed = CreateReminder.safeParse(body);
  if (!parsed.success) return badRequest("invalid_body", parsed.error.format());

  const reminder = await prisma.reminder.create({
    data: {
      userId: result.session.userId,
      scope,
      title: parsed.data.title,
      triggerAt: new Date(parsed.data.triggerAt),
      recurring: parsed.data.recurring ?? null,
    },
  });
  if (scope === "team") {
    await notifyTeamChange({ actorEmail: result.session.email, action: "criou", entity: "lembrete", title: reminder.title });
    await notifyItemCreated({ actorName: friendlyName(result.session.email), entity: "lembrete", title: reminder.title });
  }
  return NextResponse.json({ reminder }, { status: 201 });
}
