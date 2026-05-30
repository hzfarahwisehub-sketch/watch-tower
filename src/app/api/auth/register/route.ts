// Auto-cadastro / primeiro acesso: define a senha de um e-mail autorizado.
// Não exige sessão (é o fluxo de quem ainda NÃO tem senha), mas exige que o
// e-mail esteja na allowlist. Se já houver senha, manda usar o reset.
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { badRequest } from "@/lib/api-helpers";

export const runtime = "nodejs";

const Body = z.object({
  email: z.string().email().toLowerCase(),
  password: z.string().min(8).max(72),
});

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const parsed = Body.safeParse(body);
  if (!parsed.success) return badRequest("invalid_body", parsed.error.format());

  const { email, password } = parsed.data;

  // Gate allowlist: só quem foi autorizado pode criar senha.
  const allowed = await prisma.allowedEmail.findUnique({ where: { email } });
  if (!allowed) {
    return NextResponse.json(
      { error: "not_allowed", message: "Este e-mail não está autorizado a acessar o Watch Tower." },
      { status: 403 },
    );
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing?.passwordHash) {
    return NextResponse.json(
      { error: "already_set", message: 'Esta conta já tem senha. Use "Esqueci a senha" pra trocar.' },
      { status: 409 },
    );
  }

  const passwordHash = await bcrypt.hash(password, 10);

  if (existing) {
    await prisma.user.update({
      where: { id: existing.id },
      data: {
        passwordHash,
        allowlisted: true,
        role: allowed.role,
        emailVerified: existing.emailVerified ?? new Date(),
      },
    });
  } else {
    await prisma.user.create({
      data: {
        email,
        passwordHash,
        allowlisted: true,
        role: allowed.role,
        emailVerified: new Date(),
      },
    });
  }

  return NextResponse.json({ ok: true });
}
