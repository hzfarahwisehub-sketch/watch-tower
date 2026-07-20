import { NextRequest, NextResponse } from "next/server";
import { requireCronSecret } from "@/lib/api-helpers";
import { prisma } from "@/lib/prisma";
import { acionarGeracaoRoteiros } from "@/lib/content-trigger";
import { BULLETIN_COUNTRY_NAMES } from "@/lib/bulletin-names";
import { COUNTRIES } from "@/lib/data";
import { buildPostables, getEditorial, urgentPieces } from "@/lib/editorial";
import { promises as fs } from "node:fs";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * /api/cron/gerar-roteiros
 *
 * Chamado 1x por dia pelo workflow gerar-roteiros.yml. Lê as mudanças frescas
 * (últimas 48h) e abre UM pedido ⚡ pra Friday gerar o lote diário de roteiros de
 * vídeo (Lucas e Marcela, YouTube + Instagram). Assim os roteiros nascem junto
 * com o ciclo da Watch Tower, alimentados pelas notícias dela. A geração é da
 * Friday (curada); aqui só criamos o pedido, com dedup 1/dia.
 *
 * SÃO DOIS SINAIS de urgência, somados (2026-07-20):
 *   1. boletim OFICIAL com lastStatus "changed" nas últimas 48h;
 *   2. peça editorial CURADA como `urgency: "urgent"` nas últimas 48h, escrita
 *      pela rotina watch-tower-editorial-diario (00:30 BRT, que dá push antes
 *      deste cron das 09:00 UTC / 06:00 BRT rodar sobre o deploy novo).
 *
 * O sinal 2 existe porque o 1 sozinho é cego pra metade do que corre: mudança
 * que chega por RSS/imprensa oficial e é triada pela Friday não mexe em nenhum
 * boletim monitorado, então o pedido ⚡ sairia no tom perene de sempre e o
 * fundador gravaria a semana toda sem saber o que perde validade amanhã.
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

  // Sinal 2: peça editorial curada como URGENTE nas últimas 48h. Uma entrada por
  // país (a primeira peça urgente dele), com o título junto: é o gancho concreto
  // que o fundador precisa pra saber o que gravar hoje, e não só o nome do país.
  try {
    const dia = 86_400_000;
    const cutoff = new Date(Date.now() - 2 * dia).toISOString().slice(0, 10);
    const eds = COUNTRIES.map((c) => ({
      code: c.code,
      name: c.name,
      editorial: getEditorial(c.code, "pt-BR"),
    }));
    // Chave = nome do país, porque é assim que o sinal 1 identifica cada item.
    // País que aparece nos DOIS sinais fica com a versão do editorial, que é a
    // mais informativa (traz o título). Set de strings não serviria aqui:
    // "Alemanha" e "Alemanha: <título>" são strings diferentes e o país entraria
    // duas vezes no pedido ⚡.
    const porPais = new Map<string, string>(mudancas.map((m) => [m, m]));
    const jaTemTitulo = new Set<string>();
    for (const p of urgentPieces(buildPostables(eds), cutoff)) {
      if (jaTemTitulo.has(p.countryName)) continue;
      jaTemTitulo.add(p.countryName);
      porPais.set(p.countryName, `${p.countryName}: ${p.title}`);
    }
    mudancas = Array.from(porPais.values());
  } catch {
    // best-effort igual ao sinal 1: o pedido ⚡ do dia nunca pode deixar de nascer
    // por causa da leitura do editorial.
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
