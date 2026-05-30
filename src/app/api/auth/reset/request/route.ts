// Pede reset de senha: gera token expirável (1h) e manda e-mail (Resend).
// Sempre responde 200 (anti-enumeração): só dispara o e-mail se o endereço
// for autorizado E já tiver senha (senão o caminho certo é o primeiro acesso).
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { randomBytes } from "crypto";
import { prisma } from "@/lib/prisma";
import { badRequest } from "@/lib/api-helpers";
import { sendPasswordResetEmail } from "@/lib/mailer";

export const runtime = "nodejs";

const Body = z.object({ email: z.string().email().toLowerCase() });

function appUrl(req: NextRequest): string {
  return process.env.NEXT_PUBLIC_APP_URL ?? process.env.AUTH_URL ?? req.nextUrl.origin;
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const parsed = Body.safeParse(body);
  if (!parsed.success) return badRequest("invalid_body", parsed.error.format());

  const { email } = parsed.data;

  const allowed = await prisma.allowedEmail.findUnique({ where: { email } });
  const user = await prisma.user.findUnique({ where: { email } });

  if (allowed && user?.passwordHash) {
    const token = randomBytes(32).toString("hex");
    const expires = new Date(Date.now() + 60 * 60 * 1000); // 1h
    await prisma.user.update({
      where: { id: user.id },
      data: { passwordResetToken: token, passwordResetExpires: expires },
    });
    const url = `${appUrl(req)}/auth/reset?token=${token}`;
    try {
      await sendPasswordResetEmail(email, url);
    } catch (e) {
      // Não vaza estado pro cliente; só loga pra diagnóstico.
      console.error("[reset] envio falhou:", e);
    }
  } else {
    console.warn(`[reset] pedido ignorado (não autorizado ou sem senha): ${email}`);
  }

  // Resposta uniforme, independente de o e-mail existir ou não.
  return NextResponse.json({ ok: true });
}
