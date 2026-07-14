import { NextRequest, NextResponse } from "next/server";
import { requireCronSecret } from "@/lib/api-helpers";
import { prisma } from "@/lib/prisma";
import { acionarGeracaoRoteiros } from "@/lib/content-trigger";
import { BULLETIN_COUNTRY_NAMES } from "@/lib/bulletin-names";
import { promises as fs } from "node:fs";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * /api/cron/gerar-roteiros
 *
 * Chamado 1x por dia pelo workflow gerar-roteiros.yml. Lê as mudanças frescas
 * dos boletins oficiais (últimas 48h) e abre UM pedido ⚡ pra Friday gerar o
 * lote diário de roteiros de vídeo (Lucas e Marcela, YouTube + Instagram). Assim
 * os roteiros nascem junto com o ciclo da Watch Tower, alimentados pelas notícias
 * dela. A geração é da Friday (curada); aqui só criamos o pedido, com dedup 1/dia.
 */
async function handler(req: NextRequest) {
  const gate = requireCronSecret(req);
  if (!gate.ok) return gate.response;

  // Mudanças frescas (últimas 48h) a partir do bulletins-status.json
  let mudancas: string[] = [];
  try {
    const p = path.join(process.cwd(), "public", "bulletins-status.json");
    const raw = await fs.readFile(p, "utf-8");
    const data = JSON.parse(raw) as {
      bulletins?: Array<{ key: string; lastChangedAt?: string | null; lastStatus?: string | null }>;
    };
    const now = Date.now();
    const day = 86_400_000;
    mudancas = (data.bulletins ?? [])
      .filter((b) => b.lastStatus === "changed" && b.lastChangedAt && now - new Date(b.lastChangedAt).getTime() < 2 * day)
      .map((b) => BULLETIN_COUNTRY_NAMES[b.key] || b.key);
  } catch {
    // sem status → segue sem combustível; a Friday puxa um tema ao gerar
  }

  // O pedido ⚡ precisa de um dono. Usa um admin da allowlist.
  const admin = await prisma.user.findFirst({
    where: { role: "admin", allowlisted: true },
    orderBy: { createdAt: "asc" },
    select: { id: true },
  });
  if (!admin) {
    return NextResponse.json({ ok: true, created: false, note: "no_admin" });
  }

  const created = await acionarGeracaoRoteiros(mudancas, admin.id);
  return NextResponse.json({ ok: true, created, mudancas });
}

export async function GET(req: NextRequest) {
  return handler(req);
}
export async function POST(req: NextRequest) {
  return handler(req);
}
