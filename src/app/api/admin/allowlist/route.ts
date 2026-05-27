// Admin endpoint pra gerenciar allowlist. So admins acessam.
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireSession, requireAdmin, badRequest } from "@/lib/api-helpers";

export const runtime = "nodejs";

const AddEmail = z.object({
  email: z.string().email().toLowerCase(),
  role: z.enum(["admin", "editor"]).default("editor"),
  notes: z.string().max(500).optional(),
});

export async function GET() {
  const result = await requireSession();
  if (!result.ok) return result.response;
  const adminErr = requireAdmin(result.session);
  if (adminErr) return adminErr;

  const allowed = await prisma.allowedEmail.findMany({
    orderBy: { addedAt: "desc" },
  });
  return NextResponse.json({ allowed });
}

export async function POST(req: NextRequest) {
  const result = await requireSession();
  if (!result.ok) return result.response;
  const adminErr = requireAdmin(result.session);
  if (adminErr) return adminErr;

  const body = await req.json().catch(() => null);
  const parsed = AddEmail.safeParse(body);
  if (!parsed.success) return badRequest("invalid_body", parsed.error.format());

  const entry = await prisma.allowedEmail.upsert({
    where: { email: parsed.data.email },
    create: {
      email: parsed.data.email,
      role: parsed.data.role,
      addedBy: result.session.email,
      notes: parsed.data.notes,
    },
    update: {
      role: parsed.data.role,
      notes: parsed.data.notes,
    },
  });
  return NextResponse.json({ entry }, { status: 201 });
}

export async function DELETE(req: NextRequest) {
  const result = await requireSession();
  if (!result.ok) return result.response;
  const adminErr = requireAdmin(result.session);
  if (adminErr) return adminErr;

  const email = req.nextUrl.searchParams.get("email")?.toLowerCase();
  if (!email) return badRequest("missing email param");

  // Nao deixa admin remover a si proprio (evita lockout)
  if (email === result.session.email) {
    return badRequest("cannot remove yourself from allowlist");
  }

  await prisma.allowedEmail.delete({ where: { email } });
  return NextResponse.json({ ok: true });
}
