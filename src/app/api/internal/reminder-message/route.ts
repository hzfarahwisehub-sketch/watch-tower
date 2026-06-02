import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireCronSecret } from "@/lib/api-helpers";
import { sendPushToUser } from "@/lib/push";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CreateReminderMessage = z.object({
  targetEmail: z.string().email(),
  title: z.string().min(1).max(500),
  triggerAt: z.string().datetime().optional(),
  notifyNow: z.boolean().optional(),
});

const REMINDERS_URL = "/?panel=reminders&scope=personal";

export async function POST(req: NextRequest) {
  const gate = requireCronSecret(req);
  if (!gate.ok) return gate.response;

  const body = await req.json().catch(() => null);
  const parsed = CreateReminderMessage.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_body", details: parsed.error.format() }, { status: 400 });
  }

  const targetEmail = parsed.data.targetEmail.toLowerCase();
  const allowed = await prisma.allowedEmail.findUnique({ where: { email: targetEmail } });
  if (!allowed) {
    return NextResponse.json({ error: "target_not_allowed" }, { status: 404 });
  }

  const user = await prisma.user.upsert({
    where: { email: targetEmail },
    create: {
      email: targetEmail,
      name: targetEmail === "marcelanogueiracidadania@gmail.com" ? "Marcela" : null,
      role: allowed.role,
      allowlisted: true,
    },
    update: {
      role: allowed.role,
      allowlisted: true,
    },
    select: { id: true },
  });

  const triggerAt = parsed.data.triggerAt ? new Date(parsed.data.triggerAt) : new Date();
  const reminder = await prisma.reminder.create({
    data: {
      userId: user.id,
      scope: "personal",
      title: parsed.data.title,
      triggerAt,
    },
  });

  let sent = 0;
  let pruned = 0;
  if (parsed.data.notifyNow ?? true) {
    const out = await sendPushToUser(user.id, {
      title: "Watch Tower · mensagem para MARCELA",
      body: "Você tem uma mensagem nova nos lembretes.",
      url: REMINDERS_URL,
      tag: `wt-reminder-message-${reminder.id}`,
    });
    sent = out.sent;
    pruned = out.pruned;
    if (sent > 0) {
      await prisma.reminder.update({
        where: { id: reminder.id },
        data: { notifiedAt: new Date() },
      });
    }
  }

  return NextResponse.json({ ok: true, reminderId: reminder.id, sent, pruned, url: REMINDERS_URL }, { status: 201 });
}
