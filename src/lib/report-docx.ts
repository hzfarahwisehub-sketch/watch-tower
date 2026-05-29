/**
 * Renderiza o relatório completo em Word (.docx) editável a partir do ReportData.
 * Word nativo: os sócios podem abrir, editar e salvar normalmente. Inclui
 * tabela de sumário, índice por país, hyperlinks reais e títulos navegáveis.
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
} from "@/lib/report-data";

const BLUE = "1F55FF";
const BLUE_LIGHT = "3A6BFF";
const GREY = "6B7280";
const DARK = "1A1A2E";
const HEADER_BG = "EEF2FF";

function link(label: string, url: string): ExternalHyperlink {
  return new ExternalHyperlink({
    link: url,
    children: [new TextRun({ text: label, style: "Hyperlink" })],
  });
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

function metaLine(labelTxt: string, value: string): Paragraph {
  return new Paragraph({
    spacing: { after: 30 },
    children: [
      new TextRun({ text: `${labelTxt}: `, bold: true, color: DARK }),
      new TextRun({ text: value, color: DARK }),
    ],
  });
}

function summaryTable(data: ReportData): Table {
  const { stats } = data;
  const rows: Array<[string, string]> = [
    ["🌎 Países monitorados", String(stats.totalCountries)],
    ["📜 Boletins oficiais via cron", String(stats.totalBulletins)],
    ["✦ Boletins com mudança na última varredura", String(stats.bulletinChanged)],
    ["⚠ Boletins em erro", String(stats.bulletinErrors)],
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
          new TableCell({
            children: [new Paragraph({ children: [new TextRun({ text: v, bold: true, color: DARK })] })],
          }),
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

function countrySection(c: ReportCountry): (Paragraph | Table)[] {
  const out: (Paragraph | Table)[] = [];

  out.push(h1(`${flagEmoji(c.code)} ${c.name}`));
  out.push(metaLine("Autoridade", c.authority));
  out.push(metaLine("Status interno (dashboard)", statusLabel(c.status)));
  out.push(metaLine("Coordenadas", `${c.coords[0].toFixed(2)}, ${c.coords[1].toFixed(2)}`));

  if (c.summary) {
    out.push(h2("📋 Panorama"));
    out.push(new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: c.summary, color: DARK })] }));
  }

  if (c.bulletin) {
    const b = c.bulletin;
    out.push(h2("📜 Boletim oficial monitorado"));
    out.push(bullet([new TextRun({ text: "Fonte: ", bold: true }), new TextRun(b.source)]));
    out.push(bullet([new TextRun({ text: "Frequência declarada: ", bold: true }), new TextRun(b.frequency)]));
    out.push(bullet([new TextRun({ text: "URL pública: ", bold: true }), link(b.url, b.url)]));
    if (b.lastStatus || b.lastCheckedAt || b.lastChangedAt || b.hash) {
      out.push(
        bullet([
          new TextRun({ text: "Status última varredura: ", bold: true }),
          new TextRun(bulletinStatusLabel(b.lastStatus)),
        ]),
      );
      out.push(
        bullet([
          new TextRun({ text: "Última varredura: ", bold: true }),
          new TextRun(`${fmtDate(b.lastCheckedAt, { full: true })} (${relativeAge(b.lastCheckedAt)})`),
        ]),
      );
      out.push(
        bullet([
          new TextRun({ text: "Última mudança detectada: ", bold: true }),
          new TextRun(`${fmtDate(b.lastChangedAt, { full: true })} (${relativeAge(b.lastChangedAt)})`),
        ]),
      );
      if (b.hash) {
        out.push(
          bullet([
            new TextRun({ text: "Hash atual (SHA-256, 16 chars): ", bold: true }),
            new TextRun({ text: `${b.hash.slice(0, 16)}…`, font: "Consolas" }),
          ]),
        );
      }
    } else {
      out.push(
        new Paragraph({
          spacing: { after: 60 },
          children: [
            new TextRun({ text: "Sem dados de status (bulletin não monitorado ainda).", italics: true, color: GREY }),
          ],
        }),
      );
    }
  }

  if (c.events.length > 0) {
    out.push(h2(`📜 Marcos editoriais (${c.events.length})`));
    out.push(
      new Paragraph({
        spacing: { after: 80 },
        children: [
          new TextRun({ text: "Contexto histórico selecionado pela equipe WiseHub.", italics: true, color: GREY }),
        ],
      }),
    );
    c.events.forEach((ev, i) => {
      out.push(
        new Paragraph({
          spacing: { before: 80, after: 20 },
          children: [new TextRun({ text: `${i + 1}. ${ev.title}`, bold: true, color: DARK })],
        }),
      );
      out.push(new Paragraph({ spacing: { after: 20 }, children: [new TextRun({ text: ev.desc, color: DARK })] }));
      out.push(new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: `Fonte: ${ev.src}`, italics: true, color: GREY })] }));
    });
  }

  if (c.headlines.length > 0) {
    const sorted = c.headlines;
    out.push(h2(`📡 Atividade ao vivo · ${sorted.length} manchete${sorted.length !== 1 ? "s" : ""} via RSS`));
    sorted.slice(0, 12).forEach((hd) => {
      const when = hd.pubDate ? ` (${fmtDate(hd.pubDate, { full: true })})` : "";
      out.push(
        bullet([
          new TextRun({ text: `${hd.source}: `, bold: true }),
          link(hd.title, hd.link),
          new TextRun({ text: when, color: GREY, italics: true }),
        ]),
      );
    });
  } else {
    out.push(h2("📡 Atividade ao vivo"));
    out.push(
      new Paragraph({
        spacing: { after: 60 },
        children: [
          new TextRun({
            text: "Sem manchetes RSS disponíveis no momento (feed pode estar offline ou fora de horário comercial).",
            italics: true,
            color: GREY,
          }),
        ],
      }),
    );
  }

  if (c.sources.length > 0) {
    out.push(h2(`🌐 Centros de Informação (${c.sources.length} fonte${c.sources.length !== 1 ? "s" : ""})`));
    const byCategory = new Map<string, typeof c.sources>();
    for (const s of c.sources) {
      const arr = byCategory.get(s.category) ?? [];
      arr.push(s);
      byCategory.set(s.category, arr);
    }
    for (const [cat, srcs] of byCategory) {
      out.push(
        new Paragraph({
          spacing: { before: 80, after: 20 },
          children: [new TextRun({ text: `${categoryEmoji(cat)} ${categoryName(cat)} (${srcs.length})`, bold: true, color: DARK })],
        }),
      );
      for (const src of srcs) {
        const runs: (TextRun | ExternalHyperlink)[] = [link(src.name, src.url), new TextRun({ text: ` (${src.language.toUpperCase()})`, color: GREY })];
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

  // Capa / cabeçalho
  children.push(
    new Paragraph({
      spacing: { after: 60 },
      children: [new TextRun({ text: "WiseHub Watch Tower", bold: true, color: BLUE, size: 44 })],
    }),
  );
  children.push(
    new Paragraph({
      spacing: { after: 40 },
      children: [new TextRun({ text: "Relatório Completo · Monitoramento Global de Imigração", color: DARK, size: 24 })],
    }),
  );
  children.push(
    new Paragraph({
      spacing: { after: 200 },
      children: [new TextRun({ text: `Gerado em: ${data.generatedAtStr} (BRT)`, italics: true, color: GREY })],
    }),
  );

  // Sumário executivo
  children.push(h1("Sumário executivo"));
  children.push(summaryTable(data));

  // Índice por país
  children.push(h1("Índice por país"));
  for (const c of data.countries) {
    children.push(bullet([new TextRun({ text: `${flagEmoji(c.code)} ${c.name}`, color: DARK })]));
  }

  // Seções por país
  for (const c of data.countries) {
    children.push(...countrySection(c));
  }

  // Rodapé
  children.push(
    new Paragraph({
      spacing: { before: 280, after: 40 },
      border: { top: { style: BorderStyle.SINGLE, size: 4, color: "D0D7E6", space: 8 } },
      children: [new TextRun({ text: `Gerado automaticamente pelo Watch Tower em ${data.generatedAtStr}.`, color: GREY, size: 18 })],
    }),
  );
  children.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 80 },
      children: [new TextRun({ text: "© WiseHub US LLC · Watch Tower v2 · Friday", color: GREY, size: 16 })],
    }),
  );

  const doc = new Document({
    creator: "WiseHub Watch Tower",
    title: "WiseHub Watch Tower — Relatório Completo",
    description: "Relatório completo de monitoramento global de imigração",
    sections: [
      {
        properties: { page: { margin: { top: 1080, bottom: 1080, left: 1080, right: 1080 } } },
        children,
      },
    ],
  });

  return Packer.toBuffer(doc);
}
