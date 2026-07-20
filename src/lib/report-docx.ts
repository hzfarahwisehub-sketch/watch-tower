/**
 * Renderiza o relatório completo em Word (.docx) editável a partir do ReportData.
 *
 * Estrutura (decidida com o Hammis em 2026-05-31):
 *   1. Sumário + Legenda colorida (onde postar cada coisa)
 *   2. PARTE 1 · TUDO PRA POSTAR  → conteúdo curado em sequência, por destino,
 *      com TÍTULOS GRANDES e COR por destino + etiqueta colorida.
 *   3. PARTE 2 · FONTES E MATERIAIS → fontes oficiais por país.
 *   4. PARTE 3 · DADOS TÉCNICOS → monitoramento detalhado país a país.
 */

import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  ExternalHyperlink,
  Table,
  TableRow,
  TableCell,
  WidthType,
  BorderStyle,
  AlignmentType,
  ShadingType,
  ImageRun,
} from "docx";
import {
  type ReportData,
  type ReportCountry,
  fmtDate,
  relativeAge,
  statusLabel,
  bulletinStatusLabel,
  flagEmoji,
  categoryEmoji,
  categoryName,
  type ReportImage,
  readPublicImage,
  fitDims,
  siteLabel,
  isOfficialUrl,
  fmtPieceDate,
  isFreshPiece,
  freshCutoffISO,
  urgentCutoffISO,
  FRESH_WINDOW_DAYS,
} from "@/lib/report-data";
import {
  DESTINATIONS,
  buildPostables,
  groupPiecesByCountry,
  consolidatedSources,
  totalPostables,
  countFreshPostables,
  urgentPieces,
  isUrgentPiece,
  type PostablePiece,
  type DestinationMeta,
  type EditorialSource,
} from "@/lib/editorial";

const BLUE = "1F55FF";
const BLUE_LIGHT = "3A6BFF";
const GREY = "6B7280";
const DARK = "1A1A2E";
const HEADER_BG = "EEF2FF";
/** Vermelho do selo NOVO (peça dentro da janela de recência). */
const NEW_RED = "D92D20";
/**
 * Vermelho do selo URGENTE. Mais ESCURO e saturado que o NOVO (#D92D20), que é
 * um vermelho-sinal claro: lado a lado no mesmo documento, o tom mais fechado
 * lê como o mais grave, e a diferença sobrevive à impressão. Na prática os dois
 * quase nunca aparecem juntos (URGENTE substitui NOVO na mesma peça), então o
 * contraste que importa é o de uma peça pra outra.
 */
const URGENT_RED = "B42318";

function link(label: string, url: string): ExternalHyperlink {
  return new ExternalHyperlink({
    link: url,
    children: [new TextRun({ text: label, style: "Hyperlink" })],
  });
}

const OFFICIAL_GREEN = "10A570";

/**
 * Runs de proveniência pra anexar logo depois do link/nome de uma fonte:
 * o SITE visível (domínio amigável) + um selo dizendo se é FONTE OFICIAL
 * (governo/órgão público) ou apenas referência. Prova que a notícia saiu de
 * fonte conhecida e confirmada. Devolve [] quando não há URL utilizável, então
 * é seguro dar spread em qualquer lista de children.
 */
function provenanceRuns(url: string | undefined | null, size = 18): TextRun[] {
  const site = siteLabel(url);
  if (!site) return [];
  const official = isOfficialUrl(url);
  return [
    new TextRun({ text: ` (${site} · `, color: GREY, size }),
    official
      ? new TextRun({ text: "✓ fonte oficial", bold: true, color: OFFICIAL_GREEN, size })
      : new TextRun({ text: "referência", color: GREY, size }),
    new TextRun({ text: ")", color: GREY, size }),
  ];
}

function bullet(children: (TextRun | ExternalHyperlink)[]): Paragraph {
  return new Paragraph({ bullet: { level: 0 }, spacing: { after: 40 }, children });
}

function h1(text: string): Paragraph {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 280, after: 120 },
    children: [new TextRun({ text, bold: true, color: BLUE, size: 30 })],
  });
}

function h2(text: string): Paragraph {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 180, after: 80 },
    children: [new TextRun({ text, bold: true, color: BLUE_LIGHT, size: 24 })],
  });
}

function h3(text: string): Paragraph {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 140, after: 60 },
    children: [new TextRun({ text, bold: true, color: DARK, size: 22 })],
  });
}

/** Título de PARTE (bem grande). */
function partTitle(text: string): Paragraph {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 360, after: 60 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "D0D7E6", space: 6 } },
    children: [new TextRun({ text, bold: true, color: BLUE, size: 40 })],
  });
}

/** Título grande e colorido da seção de um destino. */
function destSectionTitle(text: string, colorHex: string): Paragraph {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 280, after: 80 },
    children: [new TextRun({ text, bold: true, color: colorHex, size: 34 })],
  });
}

/** Título do bloco de um PAÍS dentro da seção de um destino. É o agrupamento
 *  que a equipe usa pra varrer o documento. */
function countryGroupTitle(text: string, colorHex: string): Paragraph {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 260, after: 40 },
    children: [new TextRun({ text, bold: true, color: colorHex, size: 26 })],
  });
}

/**
 * Título grande e colorido de uma peça pronta pra postar, com no máximo UM
 * selo antes do texto. URGENTE tem precedência sobre NOVO: quase toda peça
 * urgente também é fresca, e empilhar os dois polui o título e dilui os dois.
 */
type PieceSeal = "urgent" | "fresh" | null;

function pieceTitle(text: string, colorHex: string, seal: PieceSeal = null): Paragraph {
  const badge =
    seal === "urgent"
      ? [new TextRun({ text: "URGENTE · ", bold: true, color: URGENT_RED, size: 30 })]
      : seal === "fresh"
        ? [new TextRun({ text: "NOVO · ", bold: true, color: NEW_RED, size: 30 })]
        : [];
  return new Paragraph({
    // HEADING_4 porque a peça agora vive dentro do bloco HEADING_3 do país
    // (HEADING_2 = destino), e é isso que dá a árvore certa no painel do Word.
    heading: HeadingLevel.HEADING_4,
    spacing: { before: 220, after: 30 },
    children: [...badge, new TextRun({ text, bold: true, color: colorHex, size: 30 })],
  });
}

/** Etiqueta colorida ([COMUNIDADE], [ABA DO PAÍS], [BLOG]) + carimbo de data
 *  da peça. Peça legada sem data sai só com a etiqueta. */
function tagChip(tag: string, colorHex: string, when = ""): Paragraph {
  return new Paragraph({
    spacing: { after: 60 },
    children: [
      new TextRun({ text: `[ ${tag} ]`, bold: true, color: colorHex, size: 18 }),
      ...(when ? [new TextRun({ text: `  ·  ${when}`, color: GREY, size: 18 })] : []),
    ],
  });
}

function metaLine(labelTxt: string, value: string): Paragraph {
  return new Paragraph({
    spacing: { after: 30 },
    children: [
      new TextRun({ text: `${labelTxt}: `, bold: true, color: DARK }),
      new TextRun({ text: value, color: DARK }),
    ],
  });
}

/** Quebra um corpo em "\n\n" e devolve um parágrafo por bloco. */
function bodyParas(text: string): Paragraph[] {
  return text
    .split(/\n{2,}/)
    .map((blk) => blk.trim())
    .filter(Boolean)
    .map(
      (blk) =>
        new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: blk, color: DARK })] }),
    );
}

/** Linha de fontes com hyperlinks reais. */
function sourcesLine(sources: EditorialSource[] | undefined, prefix: string): Paragraph | null {
  if (!sources?.length) return null;
  const children: (TextRun | ExternalHyperlink)[] = [new TextRun({ text: prefix, bold: true, color: GREY, size: 18 })];
  sources.forEach((s, i) => {
    if (i > 0) children.push(new TextRun({ text: " · ", color: GREY, size: 18 }));
    children.push(link(s.label, s.url));
    children.push(...provenanceRuns(s.url, 18));
  });
  return new Paragraph({ spacing: { after: 160 }, children });
}

/** Uma peça pronta pra postar (título grande colorido + etiqueta + corpo + fontes). */
function pieceDocx(p: PostablePiece, dest: DestinationMeta, cutoffISO: string, urgentISO: string): Paragraph[] {
  const out: Paragraph[] = [];
  const seal: PieceSeal = isUrgentPiece(p, urgentISO)
    ? "urgent"
    : isFreshPiece(p.publishedAt, cutoffISO)
      ? "fresh"
      : null;
  out.push(pieceTitle(`${flagEmoji(p.countryCode)} ${p.countryName} · ${p.title}`, dest.colorHex, seal));
  out.push(tagChip(dest.tag, dest.colorHex, fmtPieceDate(p.publishedAt)));
  if (p.standfirst) {
    out.push(new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: p.standfirst, italics: true, color: DARK })] }));
  }
  out.push(...bodyParas(p.body));
  if (p.keyFacts?.length) {
    out.push(new Paragraph({ spacing: { before: 40, after: 30 }, children: [new TextRun({ text: "Dados-chave:", bold: true, color: DARK })] }));
    p.keyFacts.forEach((f) => out.push(bullet([new TextRun({ text: f, color: DARK })])));
  }
  if (p.cta) {
    out.push(new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: `👉 ${p.cta}`, bold: true, color: BLUE })] }));
  }
  if (p.tags?.length) {
    out.push(new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: `Tags: ${p.tags.join(" · ")}`, color: GREY, size: 18 })] }));
  }
  const sl = sourcesLine(p.sources, "📎 Fontes pra inserir no post: ");
  if (sl) out.push(sl);
  return out;
}

function summaryTable(data: ReportData, postCount: number, freshCount: number, urgentCount: number): Table {
  const { stats } = data;
  const rows: Array<[string, string]> = [
    ["📝 Peças prontas pra postar", String(postCount)],
    [`🆕 Peças novas (últimos ${FRESH_WINDOW_DAYS} dias)`, String(freshCount)],
    ["🔴 Peças URGENTES (postar primeiro)", String(urgentCount)],
    ["✍️ Países com conteúdo editorial", String(stats.editorialCountries)],
    ["🌎 Países monitorados", String(stats.totalCountries)],
    ["📜 Boletins oficiais via cron", String(stats.totalBulletins)],
    ["✦ Boletins com mudança na última varredura", String(stats.bulletinChanged)],
    ["📡 Feeds RSS curados (Centros de Informação)", String(stats.totalRssFeeds)],
    ["📰 Manchetes ao vivo capturadas neste relatório", String(stats.totalHeadlines)],
    ["🤖 Última varredura do cron", stats.lastRun ? fmtDate(stats.lastRun, { full: true }) : "—"],
  ];

  const headerRow = new TableRow({
    tableHeader: true,
    children: ["Métrica", "Valor"].map(
      (t) =>
        new TableCell({
          shading: { type: ShadingType.CLEAR, fill: HEADER_BG, color: "auto" },
          children: [new Paragraph({ children: [new TextRun({ text: t, bold: true, color: BLUE })] })],
        }),
    ),
  });

  const bodyRows = rows.map(
    ([k, v]) =>
      new TableRow({
        children: [
          new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: k, color: DARK })] })] }),
          new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: v, bold: true, color: DARK })] })] }),
        ],
      }),
  );

  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 2, color: "D0D7E6" },
      bottom: { style: BorderStyle.SINGLE, size: 2, color: "D0D7E6" },
      left: { style: BorderStyle.SINGLE, size: 2, color: "D0D7E6" },
      right: { style: BorderStyle.SINGLE, size: 2, color: "D0D7E6" },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 1, color: "E5E9F2" },
      insideVertical: { style: BorderStyle.SINGLE, size: 1, color: "E5E9F2" },
    },
    rows: [headerRow, ...bodyRows],
  });
}

/** Bloco de dados técnicos de um país. */
function technicalDocx(c: ReportCountry, img?: ReportImage): (Paragraph | Table)[] {
  const out: (Paragraph | Table)[] = [];

  out.push(h1(`${flagEmoji(c.code)} ${c.name}`));
  if (img) {
    const { width, height } = fitDims(img.width, img.height, 500, 300);
    out.push(new Paragraph({ spacing: { after: 100 }, children: [new ImageRun({ type: img.type, data: img.data, transformation: { width, height } })] }));
  }
  out.push(metaLine("Autoridade", c.authority));
  out.push(metaLine("Status interno (dashboard)", statusLabel(c.status)));
  out.push(metaLine("Coordenadas", `${c.coords[0].toFixed(2)}, ${c.coords[1].toFixed(2)}`));

  if (c.summary) {
    out.push(h2("📋 Panorama"));
    out.push(new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: c.summary, color: DARK })] }));
  }

  if (c.labor) {
    const L = c.labor;
    out.push(h2("💼 Mercado de Trabalho"));
    out.push(new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: L.overview, color: DARK })] }));
    if (L.hotSectors.length) out.push(metaLine("Setores em alta", L.hotSectors.join(" · ")));
    if (L.coolingSectors?.length) out.push(metaLine("Setores em baixa", L.coolingSectors.join(" · ")));
    if (L.inDemandRoles.length) {
      out.push(h3("Profissões em demanda"));
      L.inDemandRoles.forEach((r) =>
        out.push(bullet([new TextRun({ text: r.role, bold: true, color: DARK }), ...(r.note ? [new TextRun({ text: `: ${r.note}`, color: DARK })] : [])])),
      );
    }
    if (L.byQualification?.length) {
      out.push(h3("Por formação"));
      L.byQualification.forEach((q) =>
        out.push(bullet([new TextRun({ text: `${q.area}: `, bold: true, color: DARK }), new TextRun({ text: q.advice, color: DARK })])),
      );
    }
    if (L.salaries?.length) {
      out.push(h3("Faixas salariais"));
      L.salaries.forEach((s) =>
        out.push(
          bullet([
            new TextRun({ text: `${s.role}: `, bold: true, color: DARK }),
            new TextRun({ text: s.range, color: DARK }),
            ...(s.source ? [new TextRun({ text: " · ", color: GREY }), link(s.source.label, s.source.url)] : []),
          ]),
        ),
      );
    }
    if (L.foreignerRules) {
      out.push(h3("Regras pra estrangeiro"));
      out.push(new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: L.foreignerRules, color: DARK })] }));
    }
    if (L.opportunityWindows?.length) {
      out.push(h3("Janelas de oportunidade"));
      L.opportunityWindows.forEach((w) => out.push(bullet([new TextRun({ text: w, color: DARK })])));
    }
    if (L.jobBoards.length) {
      out.push(h3("Onde se candidatar"));
      L.jobBoards.forEach((bd) => out.push(bullet([link(bd.label, bd.url)])));
    }
  }

  if (c.bulletin) {
    const b = c.bulletin;
    out.push(h3("📜 Boletim oficial monitorado"));
    out.push(bullet([new TextRun({ text: "Fonte: ", bold: true }), new TextRun(b.source)]));
    out.push(bullet([new TextRun({ text: "Frequência declarada: ", bold: true }), new TextRun(b.frequency)]));
    out.push(bullet([new TextRun({ text: "URL pública: ", bold: true }), link(b.url, b.url), ...provenanceRuns(b.url, 18)]));
    if (b.lastStatus || b.lastCheckedAt || b.lastChangedAt || b.hash) {
      out.push(bullet([new TextRun({ text: "Status última varredura: ", bold: true }), new TextRun(bulletinStatusLabel(b.lastStatus))]));
      out.push(bullet([new TextRun({ text: "Última varredura: ", bold: true }), new TextRun(`${fmtDate(b.lastCheckedAt, { full: true })} (${relativeAge(b.lastCheckedAt)})`)]));
      out.push(bullet([new TextRun({ text: "Última mudança detectada: ", bold: true }), new TextRun(`${fmtDate(b.lastChangedAt, { full: true })} (${relativeAge(b.lastChangedAt)})`)]));
      if (b.hash) out.push(bullet([new TextRun({ text: "Hash atual (SHA-256, 16 chars): ", bold: true }), new TextRun({ text: `${b.hash.slice(0, 16)}…`, font: "Consolas" })]));
    } else {
      out.push(new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "Sem dados de status (bulletin não monitorado ainda).", italics: true, color: GREY })] }));
    }
  }

  if (c.events.length > 0) {
    out.push(h3(`📜 Marcos editoriais (${c.events.length})`));
    out.push(new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "Contexto histórico selecionado pela equipe WiseHub.", italics: true, color: GREY })] }));
    c.events.forEach((ev, i) => {
      out.push(new Paragraph({ spacing: { before: 80, after: 20 }, children: [new TextRun({ text: `${i + 1}. ${ev.title}`, bold: true, color: DARK })] }));
      out.push(new Paragraph({ spacing: { after: 20 }, children: [new TextRun({ text: ev.desc, color: DARK })] }));
      out.push(new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: `Fonte: ${ev.src}`, italics: true, color: GREY })] }));
    });
  }

  if (c.headlines.length > 0) {
    const sorted = c.headlines;
    out.push(h3(`📡 Atividade ao vivo · ${sorted.length} manchete${sorted.length !== 1 ? "s" : ""} via RSS`));
    sorted.slice(0, 12).forEach((hd) => {
      const when = hd.pubDate ? ` (${fmtDate(hd.pubDate, { full: true })})` : "";
      out.push(bullet([new TextRun({ text: `${hd.source}: `, bold: true }), link(hd.title, hd.link), new TextRun({ text: when, color: GREY, italics: true }), ...provenanceRuns(hd.link, 18)]));
      // Imagem original da notícia (do feed ou og:image do artigo), logo abaixo da manchete.
      if (hd.image) {
        out.push(
          new Paragraph({
            indent: { left: 460 },
            spacing: { after: 20 },
            children: [
              new TextRun({ text: "🖼 Imagem da notícia: ", color: GREY, size: 17 }),
              link(hd.image, hd.image),
            ],
          }),
        );
      } else {
        out.push(
          new Paragraph({
            indent: { left: 460 },
            spacing: { after: 20 },
            children: [new TextRun({ text: "🖼 Imagem desta notícia não encontrada.", italics: true, color: GREY, size: 17 })],
          }),
        );
      }
      if (hd.community && hd.checagem) {
        const ck = hd.checagem;
        out.push(new Paragraph({ indent: { left: 460 }, spacing: { after: 10 }, children: [new TextRun({ text: `🏘 Fonte de comunidade (não-oficial) · ${ck.rotulo}`, italics: true, color: GREY, size: 17 })] }));
        if (ck.nota) out.push(new Paragraph({ indent: { left: 460 }, spacing: { after: 10 }, children: [new TextRun({ text: `🔎 ${ck.nota}`, color: GREY, size: 17 })] }));
        if (ck.fontesCitadas.length) {
          const runs: (TextRun | ExternalHyperlink)[] = [new TextRun({ text: "📎 Fontes que a matéria usou de referência: ", color: GREY, size: 16 })];
          ck.fontesCitadas.forEach((f, i) => {
            if (i > 0) runs.push(new TextRun({ text: " · ", color: GREY, size: 16 }));
            const label = `${f.oficial ? "✓ " : ""}${f.nome}`;
            runs.push(f.url ? link(label, f.url) : new TextRun({ text: label, color: GREY, size: 16 }));
            const fSite = siteLabel(f.url);
            if (fSite) runs.push(new TextRun({ text: ` (${fSite})`, color: GREY, size: 16 }));
          });
          out.push(new Paragraph({ indent: { left: 460 }, spacing: { after: 40 }, children: runs }));
        }
      }
    });
  } else {
    out.push(h3("📡 Atividade ao vivo"));
    out.push(new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "SEM NOTÍCIAS", bold: true }), new TextRun({ text: " · nenhuma manchete nova nos feeds monitorados.", color: GREY })] }));
  }

  if (c.sources.length > 0) {
    out.push(h3(`🌐 Centros de Informação (${c.sources.length} fonte${c.sources.length !== 1 ? "s" : ""})`));
    const byCategory = new Map<string, typeof c.sources>();
    for (const s of c.sources) {
      const arr = byCategory.get(s.category) ?? [];
      arr.push(s);
      byCategory.set(s.category, arr);
    }
    for (const [cat, srcs] of byCategory) {
      out.push(new Paragraph({ spacing: { before: 80, after: 20 }, children: [new TextRun({ text: `${categoryEmoji(cat)} ${categoryName(cat)} (${srcs.length})`, bold: true, color: DARK })] }));
      for (const src of srcs) {
        const runs: (TextRun | ExternalHyperlink)[] = [link(src.name, src.url), ...provenanceRuns(src.url, 18), new TextRun({ text: ` (${src.language.toUpperCase()})`, color: GREY })];
        if (src.rss) runs.push(new TextRun({ text: " · RSS ao vivo", color: "10A570" }));
        if (src.note) runs.push(new TextRun({ text: ` — ${src.note}`, italics: true, color: GREY }));
        out.push(bullet(runs));
      }
    }
  }

  return out;
}

export async function renderDocx(data: ReportData): Promise<Buffer> {
  const children: (Paragraph | Table)[] = [];
  const cutoffISO = freshCutoffISO(data.generatedAt);
  const urgentISO = urgentCutoffISO(data.generatedAt);
  const postables = buildPostables(data.countries, { urgentCutoffISO: urgentISO });
  const postCount = totalPostables(data.countries);
  const freshCount = countFreshPostables(data.countries, cutoffISO);
  const urgentes = urgentPieces(postables, urgentISO);
  const sourcesByCountry = consolidatedSources(data.countries);
  const destTagOf = new Map(DESTINATIONS.map((d) => [d.key, d]));

  // Capa
  children.push(new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "WiseHub", bold: true, color: BLUE, size: 44 })] }));
  children.push(new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text: "Relatório Completo · Conteúdo pronto pra publicar + Monitoramento Global", color: DARK, size: 24 })] }));
  children.push(new Paragraph({ spacing: { after: 200 }, children: [new TextRun({ text: `Gerado em: ${data.generatedAtStr} (BRT)`, italics: true, color: GREY })] }));

  // Sumário
  children.push(h1("Sumário executivo"));
  children.push(summaryTable(data, postCount, freshCount, urgentes.length));

  // Legenda
  const COLOR_NAME: Record<string, string> = { community: "Azul", countryTab: "Verde", blog: "Laranja" };
  children.push(h1("🧭 Como usar este documento"));
  children.push(new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "Este relatório está organizado em 3 partes, pra equipe achar tudo rápido:", color: DARK })] }));
  children.push(new Paragraph({ spacing: { after: 30 }, children: [new TextRun({ text: "PARTE 1 · Tudo pra postar. ", bold: true, color: BLUE }), new TextRun({ text: "Todo o conteúdo já redigido e pronto pra publicar, separado pelo lugar onde vai. Cada peça vem com uma cor e uma etiqueta indicando o destino.", color: DARK })] }));
  children.push(new Paragraph({ spacing: { after: 30 }, children: [new TextRun({ text: "PARTE 2 · Fontes e materiais. ", bold: true, color: BLUE }), new TextRun({ text: "As fontes oficiais de cada país, pra anexar a cada post como embasamento.", color: DARK })] }));
  children.push(new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "PARTE 3 · Dados técnicos. ", bold: true, color: BLUE }), new TextRun({ text: "O monitoramento detalhado por país (boletins oficiais, mercado de trabalho, marcos e manchetes ao vivo), que embasa as Partes 1 e 2.", color: DARK })] }));
  children.push(new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "As cores e as etiquetas indicam ONDE publicar cada peça:", bold: true, color: DARK })] }));
  for (const d of DESTINATIONS) {
    children.push(
      new Paragraph({
        spacing: { after: 50 },
        children: [
          new TextRun({ text: `[ ${COLOR_NAME[d.key] ?? ""} · ${d.tag} ] `, bold: true, color: d.colorHex, size: 22 }),
          new TextRun({ text: d.legend, color: DARK }),
        ],
      }),
    );
  }
  children.push(
    new Paragraph({
      spacing: { before: 80, after: 80 },
      children: [
        new TextRun({ text: "📎 Regra de ouro: ", bold: true, color: DARK }),
        new TextRun({ text: "toda repostagem deve levar junto a fonte oficial correspondente (logo abaixo de cada peça e reunida na Parte 2). É o que dá credibilidade e embasamento ao post.", color: DARK }),
      ],
    }),
  );

  // ── PARTE 1 · TUDO PRA POSTAR ──
  children.push(partTitle("🟦 PARTE 1 · TUDO PRA POSTAR"));
  children.push(new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Sequência pronta pra publicar, separada por destino e, dentro de cada destino, agrupada por país. Cada peça indica o lugar (cor + etiqueta) e traz as fontes pra anexar.", color: DARK })] }));

  // ── PRIORIDADE · urgentes de todos os países ──
  // Índice cross-country pra quem quer agir primeiro no que corre risco de
  // perder validade. Só ponteiro (etiqueta + país + título + data): a peça
  // completa continua no bloco do país dela, sem duplicar corpo no documento.
  children.push(destSectionTitle(`🔴 PRIORIDADE · urgentes de todos os países (${urgentes.length})`, URGENT_RED));
  children.push(
    new Paragraph({
      spacing: { after: 80 },
      children: [
        new TextRun({
          text: "Mudança de lei ou regra, ato oficial publicado, fato das últimas 48h ou prazo que abre/fecha em poucos dias. Perde validade rápido: publique estas primeiro. A peça completa está no bloco do país dela, mais abaixo.",
          italics: true,
          color: GREY,
        }),
      ],
    }),
  );
  if (urgentes.length === 0) {
    children.push(new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "Nada urgente nesta rodada.", italics: true, color: GREY })] }));
  } else {
    for (const p of urgentes) {
      const d = destTagOf.get(p.destination);
      const when = fmtPieceDate(p.publishedAt);
      children.push(
        bullet([
          new TextRun({ text: "URGENTE ", bold: true, color: URGENT_RED, size: 18 }),
          new TextRun({ text: `[ ${d?.tag ?? p.destination} ] `, bold: true, color: d?.colorHex ?? DARK, size: 18 }),
          new TextRun({ text: `${flagEmoji(p.countryCode)} ${p.countryName} · ${p.title}`, color: DARK, size: 20 }),
          ...(when ? [new TextRun({ text: `  ·  ${when}`, color: GREY, size: 18 })] : []),
        ]),
      );
    }
  }

  for (const { dest, pieces } of postables) {
    children.push(destSectionTitle(`${dest.emoji} ${dest.label} (${pieces.length})`, dest.colorHex));
    children.push(new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: dest.legend, italics: true, color: GREY })] }));
    if (pieces.length === 0) {
      children.push(new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "Nada nesta seção ainda.", italics: true, color: GREY })] }));
      continue;
    }
    // Agrupado por PAÍS (o jeito que a equipe varre o documento). Dentro de cada
    // país, urgente primeiro e depois a mais nova.
    for (const grp of groupPiecesByCountry(pieces)) {
      children.push(countryGroupTitle(`${flagEmoji(grp.countryCode)} ${grp.countryName} — ${dest.tag} (${grp.pieces.length})`, dest.colorHex));
      for (const p of grp.pieces) children.push(...pieceDocx(p, dest, cutoffISO, urgentISO));
    }
  }

  // ── PARTE 2 · FONTES E MATERIAIS ──
  children.push(partTitle("🗂 PARTE 2 · FONTES E MATERIAIS"));
  children.push(new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Fontes oficiais usadas no conteúdo acima, por país. Inclua a fonte correspondente em cada post pra servir de referência e embasamento.", color: DARK })] }));
  if (sourcesByCountry.length === 0) {
    children.push(new Paragraph({ children: [new TextRun({ text: "Sem fontes editoriais ainda.", italics: true, color: GREY })] }));
  } else {
    for (const grp of sourcesByCountry) {
      children.push(h3(`${flagEmoji(grp.countryCode)} ${grp.countryName}`));
      for (const s of grp.sources) children.push(bullet([link(s.label, s.url), ...provenanceRuns(s.url, 18)]));
    }
  }

  // ── PARTE 3 · DADOS TÉCNICOS ──
  children.push(partTitle("🔧 PARTE 3 · DADOS TÉCNICOS · monitoramento"));
  children.push(new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Tudo que a WiseHub monitora, detalhado país a país: boletins oficiais, marcos, manchetes ao vivo e Centros de Informação. É a base factual das Partes 1 e 2.", color: DARK })] }));
  const imgMap = new Map<string, ReportImage>();
  await Promise.all(
    data.countries.map(async (c) => {
      const im = await readPublicImage(c.imageUrl);
      if (im) imgMap.set(c.code, im);
    }),
  );
  for (const c of data.countries) children.push(...technicalDocx(c, imgMap.get(c.code)));

  // Rodapé
  children.push(
    new Paragraph({
      spacing: { before: 280, after: 40 },
      border: { top: { style: BorderStyle.SINGLE, size: 4, color: "D0D7E6", space: 8 } },
      children: [new TextRun({ text: `Gerado automaticamente pela WiseHub em ${data.generatedAtStr}.`, color: GREY, size: 18 })],
    }),
  );
  children.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 80 },
      children: [new TextRun({ text: "© WiseHub US LLC · Conteúdo curado pela Friday", color: GREY, size: 16 })],
    }),
  );

  const doc = new Document({
    creator: "WiseHub",
    title: "WiseHub — Relatório Completo",
    description: "Conteúdo pronto pra publicar + monitoramento global de imigração",
    sections: [
      {
        properties: { page: { margin: { top: 1080, bottom: 1080, left: 1080, right: 1080 } } },
        children,
      },
    ],
  });

  return Packer.toBuffer(doc);
}
