/**
 * /api/internal/contacts-migrate (Bearer CRON_SECRET) — cria a tabela
 * Contact em produção (a AGENDA DE CONTATOS do e-mail, Onda 3).
 *
 * Existe porque o modelo entrou no schema.prisma mas NINGUÉM roda `prisma db push`:
 * a DATABASE_URL do Vercel é `Sensitive` (write-only, ninguém lê o valor) e não há
 * acesso headless ao Neon. Mesmo padrão do mail-migrate / roteiro-usage-migrate.
 * Roda DENTRO da produção, onde a credencial existe.
 *
 * Sem a tabela, o recurso falha EM SILÊNCIO: o autocomplete de Para/Cc/Cco estoura
 * no servidor, o client engole no catch e a agenda parece "vazia" pra sempre — o
 * padrão "roda, retorna 0, não faz nada". Por isso o GET aqui existe: PROVAR o
 * estado (existe? quantas linhas?) antes de mexer.
 *
 *  - GET  → diagnóstico: a tabela existe? quantas linhas?
 *  - POST → aplica o DDL (idempotente, CREATE ... IF NOT EXISTS)
 *
 * DDL FIXO, sem nenhum input do request. Espelha o modelo Contact do
 * prisma/schema.prisma (tabela "Contact", nome default do Prisma — sem @@map).
 * Se o modelo mudar, este DDL precisa acompanhar.
 */
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireCronSecret } from "@/lib/api-helpers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

const DDL: string[] = [
  `CREATE TABLE IF NOT EXISTS "Contact" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
  )`,
  // uma linha por (dono, e-mail) — o auto-save faz upsert nesta chave.
  `CREATE UNIQUE INDEX IF NOT EXISTS "Contact_userId_email_key"
     ON "Contact"("userId", "email")`,
  `CREATE INDEX IF NOT EXISTS "Contact_userId_idx"
     ON "Contact"("userId")`,
  // onDelete: Cascade — o usuário sai, a agenda dele sai junto.
  `DO $$
   BEGIN
     IF NOT EXISTS (
       SELECT 1 FROM pg_constraint WHERE conname = 'Contact_userId_fkey'
     ) THEN
       ALTER TABLE "Contact"
         ADD CONSTRAINT "Contact_userId_fkey"
         FOREIGN KEY ("userId") REFERENCES "User"("id")
         ON DELETE CASCADE ON UPDATE CASCADE;
     END IF;
   END $$`,
];

async function estado() {
  const reg = await prisma.$queryRawUnsafe<Array<{ t: string | null }>>(
    `SELECT to_regclass('public."Contact"')::text AS t`,
  );
  const existe = !!reg?.[0]?.t;
  let linhas: number | null = null;
  if (existe) {
    const c = await prisma.$queryRawUnsafe<Array<{ n: bigint }>>(
      `SELECT COUNT(*)::bigint AS n FROM "Contact"`,
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
      tabela: "Contact",
      ...s,
      diagnostico: s.existe
        ? "A tabela existe — a agenda de contatos persiste de verdade."
        : "A tabela NAO existe — o autocomplete/auto-save falha em silêncio. Rode o POST.",
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
