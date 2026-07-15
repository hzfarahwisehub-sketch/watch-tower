/**
 * /api/internal/roteiro-usage-migrate (Bearer CRON_SECRET) — cria a tabela
 * RoteiroUsage em produção (o "já usei" compartilhado da aba 🎥 Conteúdo Digital).
 *
 * Existe porque o modelo entrou no schema.prisma mas NINGUÉM rodou `prisma db push`:
 * a DATABASE_URL do Vercel é `Sensitive` (write-only, ninguém lê o valor) e não há
 * acesso headless ao Neon. Mesmo padrão do mail-migrate. Roda DENTRO da produção,
 * onde a credencial existe.
 *
 * Sem a tabela, o recurso falha EM SILÊNCIO: o GET de /api/roteiros/usage estoura,
 * o client engole no catch, a marcação não persiste e a aba parece funcionar. É
 * exatamente o padrão "roda, retorna 0, não faz nada" que a auditoria de 2026-07-14
 * mapeou 31 vezes — por isso o GET aqui existe: para PROVAR o estado antes de mexer.
 *
 *  - GET  → diagnóstico: a tabela existe? quantas linhas?
 *  - POST → aplica o DDL (idempotente, CREATE ... IF NOT EXISTS)
 *
 * DDL FIXO, sem nenhum input do request. Espelha o modelo RoteiroUsage do
 * prisma/schema.prisma — se o modelo mudar, este DDL precisa acompanhar.
 */
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireCronSecret } from "@/lib/api-helpers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

const DDL: string[] = [
  `CREATE TABLE IF NOT EXISTS "RoteiroUsage" (
    "id" TEXT NOT NULL,
    "roteiroId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "usedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "RoteiroUsage_pkey" PRIMARY KEY ("id")
  )`,
  // roteiroId é UNIQUE porque "já usei" é fato de EQUIPE: uma linha por roteiro,
  // não uma por (roteiro, pessoa). O userId serve só pra atribuição.
  `CREATE UNIQUE INDEX IF NOT EXISTS "RoteiroUsage_roteiroId_key"
     ON "RoteiroUsage"("roteiroId")`,
  `CREATE INDEX IF NOT EXISTS "RoteiroUsage_usedAt_idx"
     ON "RoteiroUsage"("usedAt")`,
  // onDelete: Cascade — o usuário sai, a marcação dele sai junto.
  `DO $$
   BEGIN
     IF NOT EXISTS (
       SELECT 1 FROM pg_constraint WHERE conname = 'RoteiroUsage_userId_fkey'
     ) THEN
       ALTER TABLE "RoteiroUsage"
         ADD CONSTRAINT "RoteiroUsage_userId_fkey"
         FOREIGN KEY ("userId") REFERENCES "User"("id")
         ON DELETE CASCADE ON UPDATE CASCADE;
     END IF;
   END $$`,
];

async function estado() {
  const reg = await prisma.$queryRawUnsafe<Array<{ t: string | null }>>(
    `SELECT to_regclass('public."RoteiroUsage"')::text AS t`,
  );
  const existe = !!reg?.[0]?.t;
  let linhas: number | null = null;
  if (existe) {
    const c = await prisma.$queryRawUnsafe<Array<{ n: bigint }>>(
      `SELECT COUNT(*)::bigint AS n FROM "RoteiroUsage"`,
    );
    linhas = Number(c?.[0]?.n ?? 0);
  }
  return { existe, linhas };
}

export async function GET(req: NextRequest) {
  const gate = requireCronSecret(req);
  if (!gate.ok) return gate.response;
  try {
    const s = await estado();
    return NextResponse.json({
      ok: true,
      tabela: "RoteiroUsage",
      ...s,
      diagnostico: s.existe
        ? 'A tabela existe — o "já usei" compartilhado persiste de verdade.'
        : 'A tabela NAO existe — o "já usei" falha em silêncio. Rode o POST.',
    });
  } catch (err) {
    return NextResponse.json(
      { error: "check_failed", message: String((err as Error)?.message ?? err).slice(0, 300) },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  const gate = requireCronSecret(req);
  if (!gate.ok) return gate.response;

  try {
    const antes = await estado();
    for (const stmt of DDL) {
      await prisma.$executeRawUnsafe(stmt);
    }
    const depois = await estado();
    return NextResponse.json({ ok: true, statements: DDL.length, antes, depois });
  } catch (err) {
    return NextResponse.json(
      { error: "migration_failed", message: String((err as Error)?.message ?? err).slice(0, 300) },
      { status: 500 },
    );
  }
}
