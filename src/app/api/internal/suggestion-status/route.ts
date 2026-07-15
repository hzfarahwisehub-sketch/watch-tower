/**
 * /api/internal/suggestion-status (Bearer CRON_SECRET) — conserta as linhas da
 * tabela Suggestion com o status legado "closed".
 *
 * Até 2026-07-14 a ponte /api/friday-requests gravava `status: "closed"`, um
 * quarto valor fora do vocabulário da tabela (open | applied | rejected). Efeito
 * na caixa de solicitações: o item perdia os botões de aplicar/rejeitar (que
 * comparam com "open" literal) mas o selo continuava dizendo "Aberta", porque o
 * STATUS_META não conhecia "closed" e caía no fallback. A rota já foi corrigida
 * (started → applied, dismissed → rejected); aqui mora o conserto do que ficou
 * gravado ANTES da correção.
 *
 * Roda DENTRO da produção, pelo mesmo motivo do mail-migrate: a DATABASE_URL do
 * Vercel é `Sensitive` (write-only, ninguém lê o valor) e não há acesso headless
 * ao Neon. Sem nenhum input do request — o que ele faz é fixo.
 *
 *  - GET  → dry-run: contagem por status + o que cada "closed" viraria
 *  - POST → aplica a tradução
 *
 * Idempotente: depois de aplicado, o POST não acha mais nada. O GET continua
 * útil como auditoria barata do vocabulário (denuncia qualquer valor novo fora
 * da lista).
 */
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireCronSecret } from "@/lib/api-helpers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

const VOCAB = ["open", "applied", "rejected"];
const LEGACY = "closed";

/** Espelha a nota que a rota deixava: só "Dispensada..." era um descarte. */
function traduzir(response: string | null): "applied" | "rejected" {
  return response?.trim().toLowerCase().startsWith("dispensada") ? "rejected" : "applied";
}

async function auditar() {
  const contagem = await prisma.suggestion.groupBy({
    by: ["status"],
    _count: { _all: true },
    orderBy: { status: "asc" },
  });
  return contagem.map((c) => ({
    status: c.status,
    total: c._count._all,
    foraDoVocabulario: !VOCAB.includes(c.status),
  }));
}

export async function GET(req: NextRequest) {
  const gate = requireCronSecret(req);
  if (!gate.ok) return gate.response;

  try {
    const legadas = await prisma.suggestion.findMany({
      where: { status: LEGACY },
      orderBy: { createdAt: "asc" },
      select: { id: true, body: true, response: true, createdAt: true },
    });

    return NextResponse.json({
      dryRun: true,
      statusCounts: await auditar(),
      pendentes: legadas.length,
      linhas: legadas.map((s) => ({
        id: s.id,
        createdAt: s.createdAt,
        de: LEGACY,
        para: traduzir(s.response),
        response: s.response,
        body: s.body.slice(0, 160),
      })),
    });
  } catch (err) {
    return NextResponse.json(
      { error: "audit_failed", message: String((err as Error)?.message ?? err).slice(0, 300) },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  const gate = requireCronSecret(req);
  if (!gate.ok) return gate.response;

  try {
    const legadas = await prisma.suggestion.findMany({
      where: { status: LEGACY },
      select: { id: true, response: true },
    });

    for (const s of legadas) {
      await prisma.suggestion.update({
        where: { id: s.id },
        data: { status: traduzir(s.response) },
      });
    }

    return NextResponse.json({
      ok: true,
      atualizadas: legadas.length,
      statusCounts: await auditar(),
    });
  } catch (err) {
    return NextResponse.json(
      { error: "migration_failed", message: String((err as Error)?.message ?? err).slice(0, 300) },
      { status: 500 },
    );
  }
}
