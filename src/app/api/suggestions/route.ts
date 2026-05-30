import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireSession, badRequest, friendlyName } from "@/lib/api-helpers";
import { notifyNewSuggestion } from "@/lib/team-notify";

export const runtime = "nodejs";

const CreateSuggestion = z.object({
  body: z.string().min(1).max(4000),
});

export async function GET() {
  const result = await requireSession();
  if (!result.ok) return result.response;

  const rows = await prisma.suggestion.findMany({
    orderBy: [{ status: "asc" }, { createdAt: "desc" }],
    include: { user: { select: { name: true, email: true } } },
  });
  const suggestions = rows.map(({ user, userId, ...s }) => ({
    ...s,
    author: friendlyName(user?.email, user?.name),
    mine: userId === result.session.userId,
  }));
  return NextResponse.json({ suggestions });
}

export async function POST(req: NextRequest) {
  const result = await requireSession();
  if (!result.ok) return result.response;

  const body = await req.json().catch(() => null);
  const parsed = CreateSuggestion.safeParse(body);
  if (!parsed.success) return badRequest("invalid_body", parsed.error.format());

  const created = await prisma.suggestion.create({
    data: { userId: result.session.userId, body: parsed.data.body },
  });
  await notifyNewSuggestion({ actorEmail: result.session.email, body: created.body });

  return NextResponse.json(
    { suggestion: { ...created, author: friendlyName(result.session.email), mine: true } },
    { status: 201 },
  );
}
