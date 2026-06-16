import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { buildIcs, verifyCalendarToken, type CalEvent } from "@/lib/calendar-feed";
import { friendlyName } from "@/lib/api-helpers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DOMAIN = "watchtower.wisehubnow.online";

/**
 * Feed iCalendar do usuário (Lembretes + Agenda). Público por TOKEN na URL
 * (?u=<userId>&t=<HMAC>), pra o Google/Apple/Outlook poderem puxar sem login.
 * Inclui os itens PESSOAIS do dono + os de EQUIPE (mesma visão do app).
 */
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const u = url.searchParams.get("u") ?? "";
  const t = url.searchParams.get("t") ?? "";
  if (!u || !verifyCalendarToken(u, t)) {
    return new NextResponse("forbidden", { status: 403 });
  }

  const scopeFilter = { OR: [{ userId: u, scope: "personal" }, { scope: "team" }] };

  const [reminders, agenda, user] = await Promise.all([
    prisma.reminder.findMany({
      where: scopeFilter,
      select: { id: true, title: true, triggerAt: true, recurring: true },
      take: 500,
    }),
    prisma.agendaItem.findMany({
      where: scopeFilter,
      select: { id: true, title: true, description: true, scheduledAt: true, durationMin: true, location: true },
      take: 500,
    }),
    prisma.user.findUnique({ where: { id: u }, select: { name: true, email: true } }),
  ]);

  const events: CalEvent[] = [];

  for (const r of reminders) {
    events.push({
      uid: `wt-rem-${r.id}@${DOMAIN}`,
      start: new Date(r.triggerAt),
      summary: `🔔 ${r.title}`,
      recurring: (r.recurring as CalEvent["recurring"]) ?? null,
    });
  }

  for (const a of agenda) {
    const start = new Date(a.scheduledAt);
    events.push({
      uid: `wt-agd-${a.id}@${DOMAIN}`,
      start,
      end: new Date(start.getTime() + (a.durationMin || 30) * 60_000),
      summary: a.title,
      location: a.location ?? undefined,
      description: a.description ?? undefined,
    });
  }

  const calName = `Watch Tower — ${friendlyName(user?.email, user?.name)}`;
  const ics = buildIcs(calName, events, new Date());

  return new NextResponse(ics, {
    status: 200,
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'inline; filename="watchtower.ics"',
      "Cache-Control": "public, max-age=900",
    },
  });
}
