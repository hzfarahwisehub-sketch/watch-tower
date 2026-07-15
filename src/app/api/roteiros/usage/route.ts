/**
 * "Já usei este roteiro" da aba 🎥 Conteúdo Digital.
 *
 * É um fato de EQUIPE: qualquer usuário logado marca, e TODOS os usuários
 * enxergam (a ideia é evitar que dois fundadores gravem o mesmo texto). Por
 * isso não há filtro por userId na leitura, e qualquer um pode desmarcar — o
 * `userId` guardado serve só pra atribuição ("usado por Fulano").
 *
 *  - GET  → todas as marcações
 *  - POST { roteiroId, used } → marca (upsert) ou desmarca (delete)
 *
 * O roteiro em si NÃO mora no banco: vive em src/lib/roteiros-data.ts,
 * versionado no Git. Aqui só fica a marcação.
 */
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireSession, badRequest, friendlyName } from "@/lib/api-helpers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const result = await requireSession();
  if (!result.ok) return result.response;

  const rows = await prisma.roteiroUsage.findMany({
    orderBy: { usedAt: "desc" },
    include: { user: { select: { name: true, email: true } } },
  });

  const usage = rows.map((r) => ({
    roteiroId: r.roteiroId,
    usedBy: friendlyName(r.user?.email, r.user?.name),
    usedAt: r.usedAt,
  }));
  return NextResponse.json({ usage });
}

const Toggle = z.object({
  roteiroId: z.string().min(1).max(64),
  used: z.boolean(),
});

export async function POST(req: NextRequest) {
  const result = await requireSession();
  if (!result.ok) return result.response;

  const body = await req.json().catch(() => null);
  const parsed = Toggle.safeParse(body);
  if (!parsed.success) return badRequest("invalid_body", parsed.error.format());

  const { roteiroId, used } = parsed.data;

  if (!used) {
    // Desmarcar: qualquer um do time pode. `deleteMany` em vez de `delete`
    // porque não é erro desmarcar o que já não estava marcado (dois cliques
    // simultâneos de pessoas diferentes não podem virar 500).
    await prisma.roteiroUsage.deleteMany({ where: { roteiroId } });
    return NextResponse.json({ ok: true, roteiroId, used: false });
  }

  // Marcar: upsert mantém a autoria de quem marcou PRIMEIRO (não sobrescreve
  // o crédito nem o horário se alguém clicar de novo em cima).
  await prisma.roteiroUsage.upsert({
    where: { roteiroId },
    create: { roteiroId, userId: result.session.userId },
    update: {},
  });
  return NextResponse.json({ ok: true, roteiroId, used: true });
}
