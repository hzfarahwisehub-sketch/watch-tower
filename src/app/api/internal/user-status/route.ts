// Verifica o status de um usuário no Watch Tower, via CRON_SECRET (sem sessão).
// Usado pela Friday pra checar coisas como "fulano já fez o primeiro acesso
// (definiu senha)?" antes de mandar lembrete/email.
//   GET /api/internal/user-status?email=<email>
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireCronSecret } from "@/lib/api-helpers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const gate = requireCronSecret(req);
  if (!gate.ok) return gate.response;

  const email = new URL(req.url).searchParams.get("email")?.toLowerCase().trim();
  if (!email) {
    return NextResponse.json({ error: "email_required" }, { status: 400 });
  }

  const [user, allowed] = await Promise.all([
    prisma.user.findUnique({
      where: { email },
      select: { id: true, name: true, role: true, passwordHash: true, emailVerified: true, createdAt: true, updatedAt: true },
    }),
    prisma.allowedEmail.findUnique({ where: { email } }),
  ]);

  if (!user) {
    return NextResponse.json({ email, exists: false, allowlisted: !!allowed });
  }

  return NextResponse.json({
    email,
    exists: true,
    name: user.name,
    role: user.role,
    allowlisted: !!allowed,
    // hasPassword=true significa que já definiu senha = JÁ FEZ O PRIMEIRO ACESSO.
    hasPassword: !!user.passwordHash,
    emailVerified: user.emailVerified,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  });
}
