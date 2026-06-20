// Gatilho de geração de conteúdo, acionado pelo clique no REPAVET.
//
// Decisão do Hammis (2026-06-18): a criação de posts/notícias/roteiros a partir
// das notícias (Italianismo e outras fontes de comunidade) acontece SOB
// SOLICITAÇÃO, e o gatilho é gerar o REPAVET. Quando o relatório é montado, se
// houver manchete de fonte de comunidade ainda sem curadoria, este helper cria
// UM pedido ⚡ pra Friday gerar o material (curar a veracidade + escrever pros 5
// destinos). A geração em si é feita pela Friday quando pega o ⚡ (modelo curado,
// sem IA no servidor).
//
// Dedup: não recria se já houver um pedido de geração aberto nas últimas 12h.
// Best-effort: nunca pode quebrar nem atrasar de forma sensível o download.
import { prisma } from "@/lib/prisma";
import { FRIDAY_MARKER } from "@/lib/api-helpers";
import type { ReportData } from "@/lib/report-data";

const TRIGGER_TAG = "GERAR-CONTEUDO";
const DEDUP_WINDOW_MS = 12 * 60 * 60 * 1000;

export async function acionarGeracaoConteudo(data: ReportData, userId: string): Promise<void> {
  try {
    const pendentes: Array<{ pais: string; titulo: string }> = [];
    for (const c of data.countries) {
      for (const h of c.headlines) {
        if (h.community && h.checagem?.status === "pendente") {
          pendentes.push({ pais: c.name, titulo: h.title });
        }
      }
    }
    if (pendentes.length === 0) return;

    // Dedup: já há um pedido de geração aberto e recente?
    const since = new Date(Date.now() - DEDUP_WINDOW_MS);
    const existing = await prisma.suggestion.findFirst({
      where: { status: "open", body: { contains: TRIGGER_TAG }, createdAt: { gt: since } },
      select: { id: true },
    });
    if (existing) return;

    const lista = pendentes.slice(0, 10).map((p) => `${p.pais}: "${p.titulo}"`).join(" · ");
    const extra = pendentes.length > 10 ? ` (+${pendentes.length - 10})` : "";
    const body =
      `${FRIDAY_MARKER} · ${TRIGGER_TAG} · Gerar conteúdo WiseHub de ${pendentes.length} notícia(s) nova(s): ` +
      `curar a veracidade e escrever pros destinos (Comunidade, Aba do país, WiseHub News, Dicas Práticas no tom do Hubby, YouTube, Instagram). ` +
      `${lista}${extra}`;
    await prisma.suggestion.create({ data: { userId, body } });
  } catch {
    // best-effort: o gatilho nunca pode quebrar o download do relatório.
  }
}
