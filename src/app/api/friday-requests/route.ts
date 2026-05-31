/**
 * Ponte Watch Tower → Friday (a IA).
 *
 * O botão "⚡ Executar" de cada lembrete cria uma MENSAGEM pra Friday (reusa a
 * tabela Suggestion, com o marcador `⚡ EXECUTAR` no início do corpo — sem
 * migração de banco). Quando a Friday abre uma sessão, ela lê os pedidos
 * pendentes por aqui (autenticada pelo CRON_SECRET, igual aos crons) e pergunta
 * ao Hammis se quer iniciar, explicando o quê foi e quem pediu.
 *
 *  - GET   → lista pedidos pendentes (Bearer CRON_SECRET)
 *  - PATCH → marca um pedido como iniciado/dispensado (Bearer CRON_SECRET)
 */
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireCronSecret, friendlyName } from "@/lib/api-helpers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const FRIDAY_MARKER = "⚡ EXECUTAR";

export async function GET(req: NextRequest) {
  const gate = requireCronSecret(req);
  if (!gate.ok) return gate.response;

  const rows = await prisma.suggestion.findMany({
    where: { status: "open", body: { startsWith: FRIDAY_MARKER } },
    orderBy: { createdAt: "desc" },
    include: { user: { select: { name: true, email: true } } },
  });

  const requests = rows.map((s) => ({
    id: s.id,
    body: s.body,
    requestedBy: friendlyName(s.user?.email, s.user?.name),
    createdAt: s.createdAt,
  }));

  return NextResponse.json({ count: requests.length, requests });
}

const Patch = z.object({
  id: z.string().min(1),
  status: z.enum(["started", "dismissed"]),
  response: z.string().max(4000).optional(),
});

export async function PATCH(req: NextRequest) {
  const gate = requireCronSecret(req);
  if (!gate.ok) return gate.response;

  const body = await req.json().catch(() => null);
  const parsed = Patch.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const note =
    parsed.data.response ??
    (parsed.data.status === "started" ? "Iniciada pela Friday." : "Dispensada pela Friday.");

  try {
    const updated = await prisma.suggestion.update({
      where: { id: parsed.data.id },
      data: { status: "closed", response: note },
    });
    return NextResponse.json({ ok: true, id: updated.id, status: updated.status });
  } catch {
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }
}
