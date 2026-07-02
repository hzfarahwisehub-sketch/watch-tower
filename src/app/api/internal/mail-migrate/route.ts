/**
 * POST /api/internal/mail-migrate (Bearer CRON_SECRET) — cria a tabela
 * MailAccount em produção. DDL FIXO e idempotente (CREATE ... IF NOT EXISTS),
 * sem nenhum input do request. Existe porque a DATABASE_URL do Vercel é
 * write-only e não há acesso headless ao Neon — mesmo padrão dos crons.
 */
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireCronSecret } from "@/lib/api-helpers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

const DDL: string[] = [
  `CREATE TABLE IF NOT EXISTS "MailAccount" (
    "id" TEXT NOT NULL,
    "ownerEmail" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "host" TEXT NOT NULL,
    "port" INTEGER NOT NULL DEFAULT 993,
    "encPassword" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "MailAccount_pkey" PRIMARY KEY ("id")
  )`,
  `CREATE UNIQUE INDEX IF NOT EXISTS "MailAccount_ownerEmail_address_key"
     ON "MailAccount"("ownerEmail", "address")`,
  `CREATE INDEX IF NOT EXISTS "MailAccount_ownerEmail_idx"
     ON "MailAccount"("ownerEmail")`,
];

export async function POST(req: NextRequest) {
  const gate = requireCronSecret(req);
  if (!gate.ok) return gate.response;

  try {
    for (const stmt of DDL) {
      await prisma.$executeRawUnsafe(stmt);
    }
    return NextResponse.json({ ok: true, statements: DDL.length });
  } catch (err) {
    return NextResponse.json(
      { error: "migration_failed", message: String((err as Error)?.message ?? err).slice(0, 300) },
      { status: 500 },
    );
  }
}
