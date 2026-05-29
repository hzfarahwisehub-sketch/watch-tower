/**
 * Renderiza o relatório completo em PDF a partir do ReportData.
 *
 * Usa pdf-lib (JS puro, fontes StandardFonts embutidas) — sem dependência de
 * arquivos de fonte/chromium, então roda sem problemas no serverless da Vercel.
 * As StandardFonts só codificam WinAnsi (Latin-1), então emojis e símbolos
 * decorativos são removidos via pdfSafe(); todo o TEXTO/INFORMAÇÃO é preservado.
 * Layout (quebra de linha + paginação) é feito à mão por um mini-motor.
 */

import { PDFDocument, type PDFFont, type PDFPage, StandardFonts, rgb, type RGB } from "pdf-lib";
import {
  type ReportData,
  fmtDate,
  relativeAge,
  statusText,
  bulletinStatusText,
  categoryName,
} from "@/lib/report-data";

const A4 = { w: 595.28, h: 841.89 };
const MARGIN = 50;

const BLUE = rgb(0.122, 0.333, 1.0);
const BLUE_LIGHT = rgb(0.227, 0.42, 1.0);
const DARK = rgb(0.1, 0.1, 0.18);
const GREY = rgb(0.42, 0.45, 0.5);
const RULE = rgb(0.82, 0.84, 0.9);

/** Remove tudo que não é codificável em WinAnsi (emoji, símbolos), preservando
 *  acentos do português. Normaliza pontuação tipográfica pra ASCII. */
function pdfSafe(s: string): string {
  return s
    .replace(/[‘’‚‛]/g, "'")
    .replace(/[“”„‟]/g, '"')
    .replace(/[–—―]/g, "-")
    .replace(/…/g, "...")
    .replace(/[•‣◦⁃∙·]/g, "-")
    .replace(/ /g, " ")
    .replace(/[^\x20-\x7E¡-ÿ]/g, "")
    .replace(/ {2,}/g, " ")
    .trim();
}

type TextOpts = {
  size?: number;
  color?: RGB;
  oblique?: boolean;
  indent?: number;
  gapAfter?: number;
};

type HeadingOpts = {
  size?: number;
  color?: RGB;
  spaceBefore?: number;
  gapAfter?: number;
};

class PdfBuilder {
  private doc!: PDFDocument;
  private page!: PDFPage;
  private reg!: PDFFont;
  private bold!: PDFFont;
  private obl!: PDFFont;
  private y = 0;

  async init() {
    this.doc = await PDFDocument.create();
    this.reg = await this.doc.embedFont(StandardFonts.Helvetica);
    this.bold = await this.doc.embedFont(StandardFonts.HelveticaBold);
    this.obl = await this.doc.embedFont(StandardFonts.HelveticaOblique);
    this.addPage();
  }

  private get maxW() {
    return A4.w - MARGIN * 2;
  }

  private addPage() {
    this.page = this.doc.addPage([A4.w, A4.h]);
    this.y = A4.h - MARGIN;
  }

  private ensure(space: number) {
    if (this.y - space < MARGIN) this.addPage();
  }

  private wrap(text: string, font: PDFFont, size: number, width: number): string[] {
    const out: string[] = [];
    for (const rawLine of text.split("\n")) {
      const words = rawLine.split(/\s+/).filter(Boolean);
      if (words.length === 0) {
        out.push("");
        continue;
      }
      let line = "";
      for (const w of words) {
        const trial = line ? `${line} ${w}` : w;
        if (line && font.widthOfTextAtSize(trial, size) > width) {
          out.push(line);
          line = w;
        } else {
          line = trial;
        }
        // quebra forçada de tokens enormes (URLs longas)
        while (font.widthOfTextAtSize(line, size) > width && line.length > 1) {
          let cut = line.length;
          while (cut > 1 && font.widthOfTextAtSize(line.slice(0, cut), size) > width) cut--;
          out.push(line.slice(0, cut));
          line = line.slice(cut);
        }
      }
      if (line) out.push(line);
    }
    return out;
  }

  text(raw: string, o: TextOpts = {}) {
    const size = o.size ?? 10;
    const font = o.oblique ? this.obl : this.reg;
    const color = o.color ?? DARK;
    const indent = o.indent ?? 0;
    const lineGap = size * 1.38;
    const lines = this.wrap(pdfSafe(raw), font, size, this.maxW - indent);
    for (const ln of lines) {
      this.ensure(lineGap);
      if (ln) this.page.drawText(ln, { x: MARGIN + indent, y: this.y - size, size, font, color });
      this.y -= lineGap;
    }
    this.y -= o.gapAfter ?? 2;
  }

  bullet(raw: string, o: TextOpts = {}) {
    const size = o.size ?? 10;
    const font = o.oblique ? this.obl : this.reg;
    const color = o.color ?? DARK;
    const markerX = MARGIN + (o.indent ?? 0);
    const textIndent = (o.indent ?? 0) + 12;
    const lineGap = size * 1.38;
    const lines = this.wrap(pdfSafe(raw), font, size, this.maxW - textIndent);
    lines.forEach((ln, i) => {
      this.ensure(lineGap);
      if (i === 0) this.page.drawText("-", { x: markerX, y: this.y - size, size, font: this.reg, color });
      if (ln) this.page.drawText(ln, { x: MARGIN + textIndent, y: this.y - size, size, font, color });
      this.y -= lineGap;
    });
    this.y -= o.gapAfter ?? 1;
  }

  heading(raw: string, o: HeadingOpts = {}) {
    const size = o.size ?? 14;
    const color = o.color ?? BLUE;
    if (o.spaceBefore) this.y -= o.spaceBefore;
    const lineGap = size * 1.3;
    const lines = this.wrap(pdfSafe(raw), this.bold, size, this.maxW);
    for (const ln of lines) {
      this.ensure(lineGap);
      this.page.drawText(ln, { x: MARGIN, y: this.y - size, size, font: this.bold, color });
      this.y -= lineGap;
    }
    this.y -= o.gapAfter ?? 4;
  }

  rule() {
    this.ensure(12);
    this.y -= 2;
    this.page.drawLine({
      start: { x: MARGIN, y: this.y },
      end: { x: A4.w - MARGIN, y: this.y },
      thickness: 0.7,
      color: RULE,
    });
    this.y -= 10;
  }

  async bytes(): Promise<Uint8Array> {
    return this.doc.save();
  }
}

const H2: HeadingOpts = { size: 11.5, color: BLUE_LIGHT, spaceBefore: 6, gapAfter: 3 };

export async function renderPdf(data: ReportData): Promise<Uint8Array> {
  const { generatedAtStr, stats, countries } = data;
  const b = new PdfBuilder();
  await b.init();

  // Cabeçalho
  b.heading("WiseHub Watch Tower", { size: 22, color: BLUE, gapAfter: 2 });
  b.text("Relatório Completo · Monitoramento Global de Imigração", { size: 11, color: DARK, gapAfter: 2 });
  b.text(`Gerado em: ${generatedAtStr} (BRT)`, { size: 9, color: GREY, oblique: true, gapAfter: 4 });
  b.rule();

  // Sumário executivo
  b.heading("Sumário executivo", { size: 15, color: BLUE, spaceBefore: 4 });
  const sm: Array<[string, string]> = [
    ["Países monitorados", String(stats.totalCountries)],
    ["Boletins oficiais via cron", String(stats.totalBulletins)],
    ["Boletins com mudança na última varredura", String(stats.bulletinChanged)],
    ["Boletins em erro", String(stats.bulletinErrors)],
    ["Feeds RSS curados (Centros de Informação)", String(stats.totalRssFeeds)],
    ["Manchetes ao vivo capturadas neste relatório", String(stats.totalHeadlines)],
    ["Última varredura do cron", stats.lastRun ? fmtDate(stats.lastRun, { full: true }) : "—"],
  ];
  for (const [k, v] of sm) b.bullet(`${k}: ${v}`, { size: 10, gapAfter: 1 });

  // Índice por país
  b.heading("Índice por país", { size: 15, color: BLUE, spaceBefore: 10 });
  for (const c of countries) b.bullet(c.name, { size: 10, gapAfter: 0 });

  // Por país
  for (const c of countries) {
    b.heading(c.name, { size: 15, color: BLUE, spaceBefore: 14, gapAfter: 4 });
    b.text(`Autoridade: ${c.authority}`, { size: 10, gapAfter: 1 });
    b.text(`Status interno (dashboard): ${statusText(c.status)}`, { size: 10, gapAfter: 1 });
    b.text(`Coordenadas: ${c.coords[0].toFixed(2)}, ${c.coords[1].toFixed(2)}`, { size: 10, gapAfter: 2 });

    if (c.summary) {
      b.heading("Panorama", H2);
      b.text(c.summary, { size: 10, gapAfter: 3 });
    }

    if (c.bulletin) {
      const bl = c.bulletin;
      b.heading("Boletim oficial monitorado", H2);
      b.bullet(`Fonte: ${bl.source}`, { size: 10 });
      b.bullet(`Frequência declarada: ${bl.frequency}`, { size: 10 });
      b.bullet(`URL pública: ${bl.url}`, { size: 10 });
      if (bl.lastStatus || bl.lastCheckedAt || bl.lastChangedAt || bl.hash) {
        b.bullet(`Status última varredura: ${bulletinStatusText(bl.lastStatus)}`, { size: 10 });
        b.bullet(`Última varredura: ${fmtDate(bl.lastCheckedAt, { full: true })} (${relativeAge(bl.lastCheckedAt)})`, { size: 10 });
        b.bullet(`Última mudança detectada: ${fmtDate(bl.lastChangedAt, { full: true })} (${relativeAge(bl.lastChangedAt)})`, { size: 10 });
        if (bl.hash) b.bullet(`Hash atual (SHA-256, 16 chars): ${bl.hash.slice(0, 16)}…`, { size: 10 });
      } else {
        b.text("Sem dados de status (bulletin não monitorado ainda).", { size: 9.5, color: GREY, oblique: true, gapAfter: 2 });
      }
    }

    if (c.events.length > 0) {
      b.heading(`Marcos editoriais (${c.events.length})`, H2);
      b.text("Contexto histórico selecionado pela equipe WiseHub.", { size: 9.5, color: GREY, oblique: true, gapAfter: 3 });
      c.events.forEach((ev, i) => {
        b.text(`${i + 1}. ${ev.title}`, { size: 10.5, color: DARK, gapAfter: 1 });
        b.text(ev.desc, { size: 10, gapAfter: 1 });
        b.text(`Fonte: ${ev.src}`, { size: 9, color: GREY, oblique: true, gapAfter: 3 });
      });
    }

    if (c.headlines.length > 0) {
      const sorted = c.headlines;
      b.heading(`Atividade ao vivo · ${sorted.length} manchete${sorted.length !== 1 ? "s" : ""} via RSS`, H2);
      sorted.slice(0, 12).forEach((hd) => {
        const when = hd.pubDate ? ` (${fmtDate(hd.pubDate, { full: true })})` : "";
        b.bullet(`${hd.source}: ${hd.title}${when}`, { size: 10, gapAfter: 0 });
        b.text(hd.link, { size: 8, color: GREY, indent: 12, gapAfter: 2 });
      });
    } else {
      b.heading("Atividade ao vivo", H2);
      b.text("Sem manchetes RSS disponíveis no momento (feed pode estar offline ou fora de horário comercial).", { size: 9.5, color: GREY, oblique: true, gapAfter: 2 });
    }

    if (c.sources.length > 0) {
      b.heading(`Centros de Informação (${c.sources.length} fonte${c.sources.length !== 1 ? "s" : ""})`, H2);
      const byCategory = new Map<string, typeof c.sources>();
      for (const s of c.sources) {
        const arr = byCategory.get(s.category) ?? [];
        arr.push(s);
        byCategory.set(s.category, arr);
      }
      for (const [cat, srcs] of byCategory) {
        b.heading(`${categoryName(cat)} (${srcs.length})`, { size: 10.5, color: DARK, spaceBefore: 4, gapAfter: 2 });
        for (const src of srcs) {
          const rssFlag = src.rss ? " · RSS ao vivo" : "";
          const noteSuffix = src.note ? ` — ${src.note}` : "";
          b.bullet(`${src.name} (${src.language.toUpperCase()})${rssFlag}${noteSuffix}`, { size: 10, gapAfter: 0 });
          b.text(src.url, { size: 8, color: GREY, indent: 12, gapAfter: 2 });
        }
      }
    }

    b.rule();
  }

  // Rodapé
  b.text(`Gerado automaticamente pelo Watch Tower em ${generatedAtStr}.`, { size: 8, color: GREY, gapAfter: 1 });
  b.text("© WiseHub US LLC · Watch Tower v2 · Friday", { size: 8, color: GREY });

  return b.bytes();
}
