/**
 * Coleta TUDO que a WiseHub monitora numa estrutura única (ReportData),
 * país por país. É a fonte de verdade compartilhada pelos três renderizadores
 * do relatório completo: Markdown (.md), Word (.docx) e PDF.
 *
 * Conteúdo por país:
 *  - Bandeira + nome + autoridade + status interno + coordenadas
 *  - Panorama (resumo editorial)
 *  - Status do boletim oficial monitorado pelo cron (fonte, frequência, URL,
 *    última varredura, última mudança detectada, hash)
 *  - Marcos editoriais (lista curada pela equipe)
 *  - Atividade ao vivo via RSS (manchetes dos feeds dos Centros de Informação)
 *  - Centros de Informação (todas as fontes externas com link)
 */

import { COUNTRIES } from "@/lib/data";
import { INFO_CENTERS, type InfoSource } from "@/lib/infoCenters";
import { BULLETINS, type BulletinStatus, type StatusFile } from "@/lib/bulletins";
import { getEditorial, editorialStats, type CountryEditorial } from "@/lib/editorial";
import { normalizeTitle, type TransMap } from "@/lib/rss-translations";
import { resolverChecagem, type ChecagemResultado } from "@/lib/italianismo-checagem";
import { promises as fs } from "node:fs";
import path from "node:path";

export type ReportHeadline = {
  title: string;
  link: string;
  pubDate?: string;
  source: string;
  /** Manchete vinda de fonte de comunidade (não-oficial), ex.: Italianismo. */
  community?: boolean;
  /** Veredito da checagem cruzada curada pela Friday (só em fontes community). */
  checagem?: ChecagemResultado;
};

export type ReportBulletin = {
  source: string;
  frequency: string;
  url: string;
  lastStatus: string | null;
  lastCheckedAt: string | null;
  lastChangedAt: string | null;
  hash: string | null;
} | null;

export type ReportCountry = {
  code: string;
  name: string;
  authority: string;
  status: string;
  coords: [number, number];
  summary?: string;
  bulletin: ReportBulletin;
  events: Array<{ title: string; desc: string; src: string }>;
  /** manchetes RSS já ordenadas (mais recente primeiro) */
  headlines: ReportHeadline[];
  sources: InfoSource[];
  /** conteúdo jornalístico curado pela Friday (3 destinos), se houver */
  editorial?: CountryEditorial;
  /** imagem representativa do país (landmark) · caminho público local, ex.: /landmarks/ca.jpg */
  imageUrl?: string;
};

export type ReportStats = {
  totalCountries: number;
  totalBulletins: number;
  bulletinChanged: number;
  bulletinErrors: number;
  totalRssFeeds: number;
  totalHeadlines: number;
  lastRun: string | null;
  /** países com conteúdo editorial já curado pela Friday */
  editorialCountries: number;
  /** total de peças editoriais prontas (posts + notícias + matérias) */
  editorialPieces: number;
};

export type ReportData = {
  generatedAt: Date;
  generatedAtStr: string;
  stats: ReportStats;
  countries: ReportCountry[];
};

// Busca as manchetes pelo MESMO /api/rss de produção que o app + o cron usam,
// pra os títulos virem idênticos (mesmo parse/decode) e baterem com as chaves do
// rss-translated.json — senão a tradução do relatório não casaria nas manchetes
// acentuadas. Também foge do bloqueio US (o /api/rss roda em gru) e melhora a
// decodificação das manchetes no relatório.
const APP_BASE = (process.env.WT_APP_URL || "https://watchtower.wisehubnow.online").replace(/\/$/, "");

async function fetchFeed(rssUrl: string, sourceName: string, maxItems = 5, community = false): Promise<ReportHeadline[]> {
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 12000);
    const res = await fetch(`${APP_BASE}/api/rss?url=${encodeURIComponent(rssUrl)}`, { signal: ctrl.signal });
    clearTimeout(t);
    if (!res.ok) return [];
    const data = await res.json();
    const items: Array<{ title?: string; link?: string; pubDate?: string }> = Array.isArray(data?.items) ? data.items : [];
    return items.slice(0, maxItems).map((it) => ({
      title: (it.title || "").trim(),
      link: it.link || "",
      pubDate: it.pubDate,
      source: sourceName,
      community: community || undefined,
    }));
  } catch {
    return [];
  }
}

/** Ordena manchetes mais recentes primeiro (sem data vai pro fim). */
function sortHeadlines(arr: ReportHeadline[]): ReportHeadline[] {
  return [...arr].sort((a, b) => {
    const ta = a.pubDate ? new Date(a.pubDate).getTime() : 0;
    const tb = b.pubDate ? new Date(b.pubDate).getTime() : 0;
    return tb - ta;
  });
}

/**
 * Faz a coleta completa: lê bulletins-status.json, busca todos os feeds RSS
 * dos Centros de Informação (em lotes de 8 pra ser gentil com os servidores)
 * e monta a estrutura país a país.
 */
export async function gatherReportData(lang: "pt" | "en" = "pt"): Promise<ReportData> {
  const generatedAt = new Date();
  const generatedAtStr = generatedAt.toLocaleString("pt-BR", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "America/Sao_Paulo",
  });

  // Carrega bulletins-status.json
  let statusFile: StatusFile | null = null;
  try {
    const p = path.join(process.cwd(), "public", "bulletins-status.json");
    const raw = await fs.readFile(p, "utf-8");
    statusFile = JSON.parse(raw) as StatusFile;
  } catch {
    // ignora — relatório sai sem dados de status do cron
  }

  const statusByKey = new Map<string, BulletinStatus>();
  if (statusFile) {
    for (const b of statusFile.bulletins) statusByKey.set(b.key, b);
  }

  // Traduções das manchetes (mesmo padrão fs do bulletins-status). Gerado pelo
  // cron collect-rss. Traduz o título da notícia pro idioma do app no download.
  let rssTrans: TransMap = {};
  try {
    const tp = path.join(process.cwd(), "public", "rss-translated.json");
    const raw = await fs.readFile(tp, "utf-8");
    rssTrans = (JSON.parse(raw)?.translations ?? {}) as TransMap;
  } catch {
    // sem traduções → manchetes saem no idioma original
  }
  const translateTitle = (title: string): string => {
    const tr = rssTrans[normalizeTitle(title)];
    const want = lang === "en" ? tr?.en : tr?.pt;
    return want && normalizeTitle(want) !== normalizeTitle(title) ? want : title;
  };

  // Junta todos os feeds RSS catalogados nos Centros de Informação
  const allFeeds: Array<{ countryCode: string; sourceName: string; rss: string; community?: boolean }> = [];
  for (const center of INFO_CENTERS) {
    for (const src of center.sources) {
      if (src.rss) allFeeds.push({ countryCode: center.countryCode, sourceName: src.name, rss: src.rss, community: src.community });
    }
  }

  // Busca em lotes de 8 simultâneos
  const headlinesByCountry = new Map<string, ReportHeadline[]>();
  const BATCH = 8;
  for (let i = 0; i < allFeeds.length; i += BATCH) {
    const batch = allFeeds.slice(i, i + BATCH);
    const results = await Promise.all(batch.map((f) => fetchFeed(f.rss, f.sourceName, 5, f.community)));
    batch.forEach((f, idx) => {
      const existing = headlinesByCountry.get(f.countryCode) ?? [];
      headlinesByCountry.set(f.countryCode, [...existing, ...results[idx]]);
    });
  }

  // Monta país a país
  const countries: ReportCountry[] = COUNTRIES.map((c) => {
    const meta = BULLETINS.find((b) => b.key === c.code);
    const st = statusByKey.get(c.code);
    const bulletin: ReportBulletin = meta
      ? {
          source: meta.source,
          frequency: meta.frequency,
          url: meta.url,
          lastStatus: st?.lastStatus ?? null,
          lastCheckedAt: st?.lastCheckedAt ?? null,
          lastChangedAt: st?.lastChangedAt ?? null,
          hash: st?.hash ?? null,
        }
      : null;
    const center = INFO_CENTERS.find((ic) => ic.countryCode === c.code);

    return {
      code: c.code,
      name: c.name,
      authority: c.authority,
      status: c.status,
      coords: c.coords,
      summary: c.summary,
      bulletin,
      events: c.events.map((ev) => ({ title: ev.title, desc: ev.desc, src: ev.src })),
      headlines: sortHeadlines(headlinesByCountry.get(c.code) ?? []).map((h) => ({
        ...h,
        title: translateTitle(h.title),
        // Fonte de comunidade (Italianismo): anexa a checagem cruzada curada.
        checagem: h.community ? resolverChecagem(h.link, h.title) : undefined,
      })),
      sources: center?.sources ?? [],
      editorial: getEditorial(c.code, lang === "en" ? "en" : "pt-BR"),
      imageUrl: c.imageUrl,
    };
  });

  // Estatísticas globais
  const stats: ReportStats = {
    totalCountries: COUNTRIES.length,
    totalBulletins: BULLETINS.length,
    bulletinChanged: statusFile ? statusFile.bulletins.filter((b) => b.lastStatus === "changed").length : 0,
    bulletinErrors: statusFile ? statusFile.bulletins.filter((b) => b.lastStatus?.startsWith("error")).length : 0,
    totalRssFeeds: allFeeds.length,
    totalHeadlines: countries.reduce((s, c) => s + c.headlines.length, 0),
    lastRun: statusFile?.lastRun ?? null,
    editorialCountries: editorialStats().countries,
    editorialPieces: editorialStats().pieces,
  };

  return { generatedAt, generatedAtStr, stats, countries };
}

// ─────────────────────────────────────────────────────────────────────────
// Helpers de formatação compartilhados pelos renderizadores
// ─────────────────────────────────────────────────────────────────────────

export function fmtDate(iso: string | null | undefined, opts: { full?: boolean } = {}): string {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  if (opts.full) {
    return d.toLocaleString("pt-BR", { dateStyle: "long", timeStyle: "short", timeZone: "America/Sao_Paulo" });
  }
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
}

export function relativeAge(iso: string | null | undefined): string {
  if (!iso) return "—";
  const ms = Date.now() - new Date(iso).getTime();
  const h = Math.floor(ms / 3_600_000);
  if (h < 1) return "agora";
  if (h < 24) return `há ${h}h`;
  const d = Math.floor(h / 24);
  if (d < 30) return `há ${d}d`;
  const mo = Math.floor(d / 30);
  return `há ${mo}mês`;
}

/** Rótulo de status interno COM emoji (Markdown/Word). */
export function statusLabel(s: string): string {
  switch (s) {
    case "crit": return "🔴 Crítico";
    case "warn": return "🟡 Atenção";
    case "stable": return "🟢 Estável";
    default: return s;
  }
}

/** Rótulo de status interno SEM emoji (PDF). */
export function statusText(s: string): string {
  switch (s) {
    case "crit": return "Crítico";
    case "warn": return "Atenção";
    case "stable": return "Estável";
    default: return s;
  }
}

/** Status do boletim COM emoji (Markdown/Word). */
export function bulletinStatusLabel(s: string | null | undefined): string {
  if (!s) return "✓ SEM ATUALIZAÇÕES";
  if (s === "changed") return "✦ Mudança detectada";
  if (s === "unchanged") return "✓ SEM ATUALIZAÇÕES";
  if (s.startsWith("error")) return `⚠ Erro · ${s}`;
  return s;
}

/** Status do boletim SEM emoji (PDF). */
export function bulletinStatusText(s: string | null | undefined): string {
  if (!s) return "SEM ATUALIZAÇÕES";
  if (s === "changed") return "Mudança detectada";
  if (s === "unchanged") return "SEM ATUALIZAÇÕES";
  if (s.startsWith("error")) return `Erro · ${s}`;
  return s;
}

export function slug(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function flagEmoji(code: string): string {
  const map: Record<string, string> = {
    us: "🇺🇸", ca: "🇨🇦", uk: "🇬🇧", pt: "🇵🇹", es: "🇪🇸", it: "🇮🇹",
    fr: "🇫🇷", de: "🇩🇪", au: "🇦🇺", ae: "🇦🇪", br: "🇧🇷", sg: "🇸🇬", jp: "🇯🇵",
    cn: "🇨🇳", dk: "🇩🇰", pl: "🇵🇱", ie: "🇮🇪", ch: "🇨🇭", nz: "🇳🇿",
    at: "🇦🇹", be: "🇧🇪", bg: "🇧🇬", cy: "🇨🇾", hr: "🇭🇷", sk: "🇸🇰",
    si: "🇸🇮", ee: "🇪🇪", fi: "🇫🇮", gr: "🇬🇷", nl: "🇳🇱", hu: "🇭🇺",
    is: "🇮🇸", lv: "🇱🇻", lt: "🇱🇹", lu: "🇱🇺", mt: "🇲🇹", no: "🇳🇴",
    ro: "🇷🇴", ru: "🇷🇺", se: "🇸🇪", cz: "🇨🇿",
  };
  return map[code] ?? "🏳";
}

export function categoryEmoji(c: string): string {
  switch (c) {
    case "news": return "📰";
    case "finance": return "💰";
    case "crypto": return "🪙";
    case "legal": return "⚖";
    default: return "📌";
  }
}

export function categoryName(c: string): string {
  switch (c) {
    case "news": return "Notícias gerais";
    case "finance": return "Finanças & Mercados";
    case "crypto": return "Cripto & Derivativos";
    case "legal": return "Leis & Regulação";
    default: return c;
  }
}

// ─────────────────────────────────────────────────────────────────────────
// Imagens do relatório · cada país tem uma imagem local (public/landmarks/xx.jpg).
// Lidas direto do disco no servidor (sem rede) pra embutir no PDF/Word.
// ─────────────────────────────────────────────────────────────────────────

export type ReportImage = { data: Uint8Array; type: "jpg" | "png"; width: number; height: number };

/** Dimensões de um JPEG lendo o marcador SOF (sem decodificar a imagem). */
function jpegDims(b: Uint8Array): { width: number; height: number } | null {
  if (b[0] !== 0xff || b[1] !== 0xd8) return null;
  let i = 2;
  while (i + 9 < b.length) {
    if (b[i] !== 0xff) { i++; continue; }
    const marker = b[i + 1];
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
      const height = (b[i + 5] << 8) | b[i + 6];
      const width = (b[i + 7] << 8) | b[i + 8];
      return { width, height };
    }
    const len = (b[i + 2] << 8) | b[i + 3];
    if (len <= 0) return null;
    i += 2 + len;
  }
  return null;
}

/** Dimensões de um PNG lendo o IHDR. */
function pngDims(b: Uint8Array): { width: number; height: number } | null {
  if (b.length < 24) return null;
  const width = (b[16] << 24) | (b[17] << 16) | (b[18] << 8) | b[19];
  const height = (b[20] << 24) | (b[21] << 16) | (b[22] << 8) | b[23];
  return width > 0 && height > 0 ? { width, height } : null;
}

/**
 * Lê os bytes de uma imagem em public/ (ex.: "/landmarks/ca.jpg") + suas
 * dimensões. Retorna null se o arquivo não existir ou não for jpg/png válido —
 * o relatório segue sem a imagem (princípio "sempre que possível").
 */
export async function readPublicImage(publicPath: string | undefined): Promise<ReportImage | null> {
  if (!publicPath || !publicPath.startsWith("/")) return null;
  try {
    const p = path.join(process.cwd(), "public", publicPath.replace(/^\/+/, ""));
    const buf = await fs.readFile(p);
    const data = new Uint8Array(buf);
    const isPng = data[0] === 0x89 && data[1] === 0x50 && data[2] === 0x4e && data[3] === 0x47;
    const dims = isPng ? pngDims(data) : jpegDims(data);
    if (!dims) return null;
    return { data, type: isPng ? "png" : "jpg", width: dims.width, height: dims.height };
  } catch {
    return null;
  }
}

/** URL pública absoluta de um asset (pro Markdown, que abre fora do app). */
export function publicAssetUrl(publicPath: string): string {
  return `${APP_BASE}${publicPath.startsWith("/") ? publicPath : `/${publicPath}`}`;
}

/** Calcula largura/altura preservando o aspecto, cabendo em maxW × maxH. */
export function fitDims(w: number, h: number, maxW: number, maxH: number): { width: number; height: number } {
  if (w <= 0 || h <= 0) return { width: maxW, height: maxH };
  const s = Math.min(maxW / w, maxH / h);
  return { width: Math.round(w * s), height: Math.round(h * s) };
}
