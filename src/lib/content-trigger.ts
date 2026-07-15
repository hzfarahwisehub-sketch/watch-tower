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

// Gatilho DIÁRIO dos roteiros de vídeo dos fundadores (Lucas e Marcela), pra
// Instagram + YouTube. Nasce junto com o ciclo da Watch Tower: o cron diário lê
// as mudanças frescas dos países e abre UM pedido ⚡ pra Friday gerar o lote do
// dia. A geração em si é da Friday (modelo curado, sem IA no servidor), com a
// revisão adversarial embutida. Dedup ~20h garante 1 lote por dia.
const TRIGGER_ROTEIROS_TAG = "GERAR-ROTEIROS";
const ROTEIROS_DEDUP_MS = 20 * 60 * 60 * 1000;

export async function acionarGeracaoRoteiros(mudancas: string[], userId: string): Promise<boolean> {
  try {
    const since = new Date(Date.now() - ROTEIROS_DEDUP_MS);
    const existing = await prisma.suggestion.findFirst({
      where: { status: "open", body: { contains: TRIGGER_ROTEIROS_TAG }, createdAt: { gt: since } },
      select: { id: true },
    });
    if (existing) return false;

    const fuel = mudancas.length
      ? `Novidades do dia pra ancorar (use como gancho, sem inventar número): ${mudancas.slice(0, 12).join(" · ")}.`
      : `Sem mudança oficial nova hoje. Puxe uma atualização ou tema relevante de imigração/empreendedorismo pra ancorar.`;

    const body =
      `${FRIDAY_MARKER} · ${TRIGGER_ROTEIROS_TAG} · Gerar o LOTE DIÁRIO de roteiros de vídeo da WiseHub (fundadores Lucas e Marcela, YouTube + Instagram/Reels). ` +
      `Estrutura: Lucas = 2 longos + 2 curtos (mercado, empreendedorismo, investimento, o provedor, equilíbrio financeiro e mental); Marcela = 2 longos + 2 curtos (família, mulher, criança, acolhimento, a mãezona) e também mercado de trabalho. ` +
      `Ângulos SEMPRE novos, nunca repetir nem copiar; personas separadas; voz WiseHub (fluida, acolhedora, sem travessão no meio da frase); sem clichê, sem escassez forçada, sem gancho de manual, sem comparação padronizada, sem dica de IA; ` +
      `honestidade obrigatória (não promete visto, renda nem resultado; conteúdo educativo não substitui profissional habilitado); NUNCA citar programa interno ou ranking. ` +
      `Ao puxar notícia ou informação com profundidade, usar o gancho pra WiseHub (estar conectado, acesso rápido e imediato, gente que vive isso). Rodar a revisão adversarial (voz/clichê, persona/repetição, marca/fatos) antes de entregar. ${fuel} ` +
      // A ENTREGA faz parte do pedido. Sem estes 4 passos o lote morre no disco
      // do Hammis e a aba 🎥 Conteúdo Digital congela no lote anterior — foi
      // exatamente o que aconteceu com os lotes 01 e 02 (2026-07-13/14).
      `ENTREGA (sem isto o lote não chega nos fundadores): 1) ler os lotes anteriores em "D:\\FRIDAY-BRAIN\\05 - Conteúdo\\Roteiros Fundadores" pra não repetir eixo; ` +
      `2) salvar o lote novo lá como "<AAAA-MM-DD> - Lote <NN>.md" no mesmo formato (## n · Persona · Canal (longo|curto) + linha "Título:"); ` +
      `3) rodar "python scripts/parse-lotes.py" no repo watch-tower (regenera src/lib/roteiros-data.ts); ` +
      `4) commitar e dar push na main — o deploy sai do Git (REGRA 4) e é o que publica o lote na aba 🎥 Conteúdo Digital.`;

    await prisma.suggestion.create({ data: { userId, body } });
    return true;
  } catch {
    return false;
  }
}

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
