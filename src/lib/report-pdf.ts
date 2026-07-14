/**
 * Renderiza o relatório completo em PDF a partir do ReportData.
 *
 * Estrutura (decidida com o Hammis em 2026-05-31):
 *   1. Sumário + Legenda colorida (onde postar cada coisa)
 *   2. PARTE 1 · TUDO PRA POSTAR  → conteúdo curado em sequência, por destino,
 *      com títulos grandes e COR por destino.
 *   3. PARTE 2 · FONTES E MATERIAIS → fontes oficiais por país.
 *   4. PARTE 3 · DADOS TÉCNICOS → monitoramento detalhado país a país.
 *
 * Usa pdf-lib (StandardFonts, WinAnsi). Emojis são removidos via pdfSafe(); a
 * COR é o que sinaliza o destino de cada peça (a etiqueta [TAG] sai colorida).
 */

import { PDFDocument, type PDFFont, type PDFPage, type PDFImage, StandardFonts, rgb, type RGB } from "pdf-lib";
import {
  type ReportData,
  type ReportCountry,
  fmtDate,
  relativeAge,
  statusText,
  bulletinStatusText,
  categoryName,
  type ReportImage,
  readPublicImage,
  provenance,
} from "@/lib/report-data";
import {
  DESTINATIONS,
  buildPostables,
  consolidatedSources,
  totalPostables,
  type PostablePiece,
  type DestinationMeta,
  type EditorialSource,
} from "@/lib/editorial";

const A4 = { w: 595.28, h: 841.89 };
const MARGIN = 50;

const BLUE = rgb(0.122, 0.333, 1.0);
const BLUE_LIGHT = rgb(0.227, 0.42, 1.0);
const DARK = rgb(0.1, 0.1, 0.18);
const GREY = rgb(0.42, 0.45, 0.5);
const RULE = rgb(0.82, 0.84, 0.9);

function hexRgb(hex: string): RGB {
  const n = parseInt(hex, 16);
  return rgb(((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255);
}

/** Remove tudo que não é codificável em WinAnsi (emoji, símbolos), preservando
 *  acentos do português. Normaliza pontuação tipográfica pra ASCII. */
function pdfSafe(s: string): string {
  return s
    .replace(/[‘’‚‛]/g, "'")
    .replace(/[“”„‟]/g, '"')
    .replace(/[–—―]/g, "-")
    .replace(/…/g, "...")
    .replace(/[•‣◦⁃∙·]/g, "-")
    .replace(/ /g, " ")
    .replace(/[^\x20-\x7E¡-ÿ]/g, "")
    .replace(/ {2,}/g, " ")
    .trim();
}

type TextOpts = { size?: number; color?: RGB; oblique?: boolean; indent?: number; gapAfter?: number };
type HeadingOpts = { size?: number; color?: RGB; spaceBefore?: number; gapAfter?: number };

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
    this.page.drawLine({ start: { x: MARGIN, y: this.y }, end: { x: A4.w - MARGIN, y: this.y }, thickness: 0.7, color: RULE });
    this.y -= 10;
  }

  /** Embute uma imagem no documento (1x), pra desenhar depois com image(). */
  async embedImage(im: ReportImage): Promise<PDFImage> {
    return im.type === "png" ? this.doc.embedPng(im.data) : this.doc.embedJpg(im.data);
  }

  /** Desenha uma imagem já embutida na largura do conteúdo (limitada por maxH). */
  image(img: PDFImage, maxH = 200) {
    const scaleW = this.maxW / img.width;
    let drawW = this.maxW;
    let drawH = img.height * scaleW;
    if (drawH > maxH) {
      const s = maxH / img.height;
      drawW = img.width * s;
      drawH = maxH;
    }
    this.ensure(drawH + 8);
    this.page.drawImage(img, { x: MARGIN, y: this.y - drawH, width: drawW, height: drawH });
    this.y -= drawH + 8;
  }

  async bytes(): Promise<Uint8Array> {
    return this.doc.save();
  }
}

const H2: HeadingOpts = { size: 11.5, color: BLUE_LIGHT, spaceBefore: 6, gapAfter: 3 };
const H3: HeadingOpts = { size: 11, color: DARK, spaceBefore: 6, gapAfter: 3 };

function bodyPdf(b: PdfBuilder, text: string) {
  for (const para of text.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean)) {
    b.text(para, { size: 10, gapAfter: 3 });
  }
}

/** Sufixo de procedência pra provar a fonte: site visível + selo (fonte oficial
 *  quando for governo/órgão público, senão referência). Só texto ASCII-safe pro
 *  pdfSafe não engolir. Ex.: " · canada.ca · [fonte oficial]". */
function provSuffix(url: string | undefined | null): string {
  const { site, official } = provenance(url);
  const siteTxt = site ? ` · ${site}` : "";
  const seal = official ? " · [fonte oficial]" : " · [referencia]";
  return `${siteTxt}${seal}`;
}

function sourcesPdf(b: PdfBuilder, sources: EditorialSource[] | undefined, prefix: string) {
  if (!sources?.length) return;
  b.text(prefix, { size: 8.5, color: GREY, oblique: true, gapAfter: 0 });
  for (const s of sources) {
    const official = provenance(s.url).official;
    b.text(`${s.label}${provSuffix(s.url)}`, { size: 8, color: official ? BLUE_LIGHT : GREY, indent: 12, gapAfter: 0 });
    b.text(s.url, { size: 8, color: GREY, indent: 18, gapAfter: 1 });
  }
  b.text("", { gapAfter: 2 });
}

/** Uma peça pronta pra postar (título grande colorido + etiqueta + corpo + fontes). */
function piecePdf(b: PdfBuilder, p: PostablePiece, dest: DestinationMeta) {
  const color = hexRgb(dest.colorHex);
  b.heading(`${p.countryName} - ${p.title}`, { size: 14, color, spaceBefore: 10, gapAfter: 2 });
  b.text(`[ ${dest.tag} ]`, { size: 9, color, gapAfter: 2 });
  if (p.standfirst) b.text(p.standfirst, { size: 9.5, color: GREY, oblique: true, gapAfter: 3 });
  bodyPdf(b, p.body);
  if (p.keyFacts?.length) {
    b.text("Dados-chave:", { size: 10, color: DARK, gapAfter: 1 });
    p.keyFacts.forEach((f) => b.bullet(f, { size: 10, gapAfter: 0 }));
    b.text("", { gapAfter: 2 });
  }
  if (p.cta) b.text(p.cta, { size: 10, color: BLUE, gapAfter: 2 });
  if (p.tags?.length) b.text(`Tags: ${p.tags.join(" - ")}`, { size: 8.5, color: GREY, gapAfter: 2 });
  sourcesPdf(b, p.sources, "Fontes pra inserir no post:");
}

/** Bloco de dados técnicos de um país. */
function technicalPdf(b: PdfBuilder, c: ReportCountry, img?: PDFImage) {
  b.heading(c.name, { size: 15, color: BLUE, spaceBefore: 14, gapAfter: 4 });
  if (img) b.image(img);
  b.text(`Autoridade: ${c.authority}`, { size: 10, gapAfter: 1 });
  b.text(`Status interno (dashboard): ${statusText(c.status)}`, { size: 10, gapAfter: 1 });
  b.text(`Coordenadas: ${c.coords[0].toFixed(2)}, ${c.coords[1].toFixed(2)}`, { size: 10, gapAfter: 2 });

  if (c.summary) {
    b.heading("Panorama", H2);
    b.text(c.summary, { size: 10, gapAfter: 3 });
  }

  if (c.labor) {
    const L = c.labor;
    b.heading("Mercado de Trabalho", H2);
    b.text(L.overview, { size: 10, gapAfter: 3 });
    if (L.hotSectors.length) b.text(`Setores em alta: ${L.hotSectors.join(" · ")}`, { size: 10, gapAfter: 1 });
    if (L.coolingSectors?.length) b.text(`Setores em baixa: ${L.coolingSectors.join(" · ")}`, { size: 10, gapAfter: 2 });
    if (L.inDemandRoles.length) {
      b.heading("Profissões em demanda", H3);
      L.inDemandRoles.forEach((r) => b.bullet(`${r.role}${r.note ? `: ${r.note}` : ""}`, { size: 10, gapAfter: 0 }));
      b.text("", { gapAfter: 2 });
    }
    if (L.byQualification?.length) {
      b.heading("Por formação", H3);
      L.byQualification.forEach((q) => b.bullet(`${q.area}: ${q.advice}`, { size: 10, gapAfter: 0 }));
      b.text("", { gapAfter: 2 });
    }
    if (L.salaries?.length) {
      b.heading("Faixas salariais", H3);
      L.salaries.forEach((s) => {
        b.bullet(`${s.role}: ${s.range}`, { size: 10, gapAfter: 0 });
        if (s.source) b.text(`${s.source.label}: ${s.source.url}`, { size: 8, color: GREY, indent: 12, gapAfter: 1 });
      });
      b.text("", { gapAfter: 2 });
    }
    if (L.foreignerRules) {
      b.heading("Regras pra estrangeiro", H3);
      b.text(L.foreignerRules, { size: 10, gapAfter: 2 });
    }
    if (L.opportunityWindows?.length) {
      b.heading("Janelas de oportunidade", H3);
      L.opportunityWindows.forEach((w) => b.bullet(w, { size: 10, gapAfter: 0 }));
      b.text("", { gapAfter: 2 });
    }
    if (L.jobBoards.length) {
      b.heading("Onde se candidatar", H3);
      L.jobBoards.forEach((bd) => {
        b.bullet(bd.label, { size: 10, gapAfter: 0 });
        b.text(bd.url, { size: 8, color: GREY, indent: 12, gapAfter: 1 });
      });
    }
  }

  if (c.bulletin) {
    const bl = c.bulletin;
    b.heading("Boletim oficial monitorado", H2);
    b.bullet(`Fonte: ${bl.source}${provSuffix(bl.url)}`, { size: 10 });
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
      b.text(`Fonte:${provSuffix(hd.link)}`, { size: 8, color: provenance(hd.link).official ? BLUE_LIGHT : GREY, indent: 12, gapAfter: 0 });
      b.text(hd.link, { size: 8, color: GREY, indent: 12, gapAfter: 0 });
      // Imagem original da notícia: se veio no feed ou via og:image, mostra a URL;
      // senão deixa claro que a imagem daquela manchete não foi encontrada.
      if (hd.image) {
        b.text(`Imagem da noticia: ${hd.image}`, { size: 8, color: BLUE_LIGHT, indent: 12, gapAfter: hd.community ? 0 : 2 });
      } else {
        b.text("Imagem desta noticia nao encontrada.", { size: 8, color: GREY, oblique: true, indent: 12, gapAfter: hd.community ? 0 : 2 });
      }
      if (hd.community && hd.checagem) {
        const ck = hd.checagem;
        b.text(`Fonte de comunidade (nao-oficial) - ${ck.rotulo}`, { size: 8.5, color: GREY, oblique: true, indent: 12, gapAfter: 0 });
        if (ck.nota) b.text(ck.nota, { size: 8.5, color: GREY, indent: 12, gapAfter: 0 });
        if (ck.fontesCitadas.length) {
          const refs = ck.fontesCitadas.map((f) => `${f.oficial ? "[oficial] " : ""}${f.nome}${f.url ? ` (${f.url})` : ""}`).join("; ");
          b.text(`Fontes que a materia usou de referencia: ${refs}`, { size: 8, color: GREY, indent: 12, gapAfter: 2 });
        }
      }
    });
  } else {
    b.heading("Atividade ao vivo", H2);
    b.text("SEM NOTÍCIAS · nenhuma manchete nova nos feeds monitorados.", { size: 10, gapAfter: 2 });
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
        const official = provenance(src.url).official;
        b.bullet(`${src.name} (${src.language.toUpperCase()})${rssFlag}${noteSuffix}`, { size: 10, gapAfter: 0 });
        b.text(`Site:${provSuffix(src.url)}`, { size: 8, color: official ? BLUE_LIGHT : GREY, indent: 12, gapAfter: 0 });
        b.text(src.url, { size: 8, color: GREY, indent: 12, gapAfter: 2 });
      }
    }
  }

  b.rule();
}

export async function renderPdf(data: ReportData): Promise<Uint8Array> {
  const { generatedAtStr, stats, countries } = data;
  const b = new PdfBuilder();
  await b.init();
  const postables = buildPostables(countries);
  const postCount = totalPostables(countries);
  const sourcesByCountry = consolidatedSources(countries);

  // Cabeçalho
  b.heading("WiseHub", { size: 22, color: BLUE, gapAfter: 2 });
  b.text("Relatório Completo · Conteúdo pronto pra publicar + Monitoramento Global", { size: 11, color: DARK, gapAfter: 2 });
  b.text(`Gerado em: ${generatedAtStr} (BRT)`, { size: 9, color: GREY, oblique: true, gapAfter: 4 });
  b.rule();

  // Sumário
  b.heading("Sumário executivo", { size: 15, color: BLUE, spaceBefore: 4 });
  const sm: Array<[string, string]> = [
    ["Peças prontas pra postar", String(postCount)],
    ["Países com conteúdo editorial", String(stats.editorialCountries)],
    ["Países monitorados", String(stats.totalCountries)],
    ["Boletins oficiais via cron", String(stats.totalBulletins)],
    ["Boletins com mudança na última varredura", String(stats.bulletinChanged)],
    ["Feeds RSS curados (Centros de Informação)", String(stats.totalRssFeeds)],
    ["Manchetes ao vivo capturadas neste relatório", String(stats.totalHeadlines)],
    ["Última varredura do cron", stats.lastRun ? fmtDate(stats.lastRun, { full: true }) : "—"],
  ];
  for (const [k, v] of sm) b.bullet(`${k}: ${v}`, { size: 10, gapAfter: 1 });

  // Legenda
  const COLOR_NAME: Record<string, string> = { community: "Azul", countryTab: "Verde", blog: "Laranja" };
  b.heading("Como usar este documento", { size: 15, color: BLUE, spaceBefore: 12, gapAfter: 4 });
  b.text("Este relatório está organizado em 3 partes, pra equipe achar tudo rápido:", { size: 10, gapAfter: 3 });
  b.text("PARTE 1 · Tudo pra postar: todo o conteúdo já redigido e pronto pra publicar, separado pelo lugar onde vai. Cada peça vem com uma cor e uma etiqueta indicando o destino.", { size: 9.5, color: DARK, gapAfter: 1 });
  b.text("PARTE 2 · Fontes e materiais: as fontes oficiais de cada país, pra anexar a cada post como embasamento.", { size: 9.5, color: DARK, gapAfter: 1 });
  b.text("PARTE 3 · Dados técnicos: o monitoramento detalhado por país (boletins oficiais, mercado de trabalho, marcos e manchetes ao vivo), que embasa as Partes 1 e 2.", { size: 9.5, color: DARK, gapAfter: 3 });
  b.text("As cores e as etiquetas indicam ONDE publicar cada peça:", { size: 10, gapAfter: 2 });
  for (const d of DESTINATIONS) {
    const color = hexRgb(d.colorHex);
    b.text(`[ ${COLOR_NAME[d.key] ?? ""} · ${d.tag} ]`, { size: 11, color, gapAfter: 0 });
    b.text(d.legend, { size: 9.5, color: DARK, indent: 12, gapAfter: 2 });
  }
  b.text("Regra de ouro: toda repostagem leva junto a fonte oficial correspondente. Ela aparece logo abaixo de cada peça e também reunida na Parte 2. É o que dá credibilidade e embasamento ao post.", { size: 9.5, color: DARK, oblique: true, gapAfter: 3 });
  b.rule();

  // ── PARTE 1 · TUDO PRA POSTAR ──
  b.heading("PARTE 1 - TUDO PRA POSTAR", { size: 19, color: BLUE, spaceBefore: 8, gapAfter: 4 });
  b.text("Sequência pronta pra publicar, separada por destino. Cada peça indica o lugar (cor + etiqueta) e traz as fontes pra anexar.", { size: 10, gapAfter: 4 });
  for (const { dest, pieces } of postables) {
    b.heading(`${dest.label} (${pieces.length})`, { size: 16, color: hexRgb(dest.colorHex), spaceBefore: 12, gapAfter: 3 });
    b.text(dest.legend, { size: 9.5, color: GREY, oblique: true, gapAfter: 3 });
    if (pieces.length === 0) {
      b.text("Nada nesta seção ainda.", { size: 9.5, color: GREY, oblique: true, gapAfter: 2 });
      continue;
    }
    for (const p of pieces) piecePdf(b, p, dest);
  }
  b.rule();

  // ── PARTE 2 · FONTES E MATERIAIS ──
  b.heading("PARTE 2 - FONTES E MATERIAIS", { size: 19, color: BLUE, spaceBefore: 8, gapAfter: 4 });
  b.text("Fontes oficiais usadas no conteúdo acima, por país. Inclua a fonte correspondente em cada post pra servir de referência e embasamento.", { size: 10, gapAfter: 4 });
  if (sourcesByCountry.length === 0) {
    b.text("Sem fontes editoriais ainda.", { size: 9.5, color: GREY, oblique: true, gapAfter: 2 });
  } else {
    for (const grp of sourcesByCountry) {
      b.heading(grp.countryName, { size: 12.5, color: DARK, spaceBefore: 6, gapAfter: 2 });
      for (const s of grp.sources) {
        const official = provenance(s.url).official;
        b.bullet(`${s.label}${provSuffix(s.url)}`, { size: 10, color: official ? BLUE_LIGHT : DARK, gapAfter: 0 });
        b.text(s.url, { size: 8, color: GREY, indent: 12, gapAfter: 1 });
      }
    }
  }
  b.rule();

  // ── PARTE 3 · DADOS TÉCNICOS ──
  b.heading("PARTE 3 - DADOS TÉCNICOS - monitoramento", { size: 19, color: BLUE, spaceBefore: 8, gapAfter: 4 });
  b.text("Tudo que a WiseHub monitora, detalhado país a país: boletins oficiais, marcos, manchetes ao vivo e Centros de Informação. É a base factual das Partes 1 e 2.", { size: 10, gapAfter: 4 });
  b.heading("Índice por país", { size: 13, color: BLUE, spaceBefore: 6, gapAfter: 3 });
  for (const c of countries) b.bullet(c.name, { size: 10, gapAfter: 0 });
  b.text("", { gapAfter: 4 });
  const pdfImgMap = new Map<string, PDFImage>();
  for (const c of countries) {
    const im = await readPublicImage(c.imageUrl);
    if (im) {
      try { pdfImgMap.set(c.code, await b.embedImage(im)); } catch { /* ignora imagem ruim */ }
    }
  }
  for (const c of countries) technicalPdf(b, c, pdfImgMap.get(c.code));

  // Rodapé
  b.text(`Gerado automaticamente pela WiseHub em ${generatedAtStr}.`, { size: 8, color: GREY, gapAfter: 1 });
  b.text("© WiseHub US LLC · Conteúdo curado pela Friday", { size: 8, color: GREY });

  return b.bytes();
}
