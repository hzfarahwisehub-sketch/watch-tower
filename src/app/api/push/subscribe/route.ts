import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireSession, badRequest } from "@/lib/api-helpers";

export const runtime = "nodejs";

// O navegador manda um PushSubscription serializado: { endpoint, keys:{p256dh,auth} }
const SubBody = z.object({
  endpoint: z.string().url(),
  keys: z.object({
    p256dh: z.string().min(1),
    auth: z.string().min(1),
  }),
});

export async function POST(req: NextRequest) {
  const result = await requireSession();
  if (!result.ok) return result.response;

  const body = await req.json().catch(() => null);
  const parsed = SubBody.safeParse(body);
  if (!parsed.success) return badRequest("invalid_subscription", parsed.error.format());

  const ua = req.headers.get("user-agent") ?? null;
  // endpoint é único: se já existe (mesmo device), só re-associa/atualiza.
  const sub = await prisma.pushSubscription.upsert({
    where: { endpoint: parsed.data.endpoint },
    create: {
      userId: result.session.userId,
      endpoint: parsed.data.endpoint,
      p256dh: parsed.data.keys.p256dh,
      auth: parsed.data.keys.auth,
      userAgent: ua,
    },
    update: {
      userId: result.session.userId,
      p256dh: parsed.data.keys.p256dh,
      auth: parsed.data.keys.auth,
      userAgent: ua,
    },
  });
  return NextResponse.json({ ok: true, id: sub.id }, { status: 201 });
}

export async function DELETE(req: NextRequest) {
  const result = await requireSession();
  if (!result.ok) return result.response;

  const body = await req.json().catch(() => null);
  const endpoint = body?.endpoint;
  if (typeof endpoint !== "string") return badRequest("missing_endpoint");

  await prisma.pushSubscription.deleteMany({
    where: { endpoint, userId: result.session.userId },
  });
  return NextResponse.json({ ok: true });
}
