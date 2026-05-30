// Confirma reset: valida token não-expirado e grava a senha nova.
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { badRequest } from "@/lib/api-helpers";

export const runtime = "nodejs";

const Body = z.object({
  token: z.string().min(10),
  password: z.string().min(8).max(72),
});

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const parsed = Body.safeParse(body);
  if (!parsed.success) return badRequest("invalid_body", parsed.error.format());

  const { token, password } = parsed.data;

  const user = await prisma.user.findUnique({ where: { passwordResetToken: token } });
  if (!user || !user.passwordResetExpires || user.passwordResetExpires < new Date()) {
    return NextResponse.json(
      { error: "invalid_token", message: "Link inválido ou expirado. Peça um novo." },
      { status: 400 },
    );
  }

  const passwordHash = await bcrypt.hash(password, 10);
  await prisma.user.update({
    where: { id: user.id },
    data: {
      passwordHash,
      passwordResetToken: null,
      passwordResetExpires: null,
      emailVerified: user.emailVerified ?? new Date(),
    },
  });

  return NextResponse.json({ ok: true });
}
