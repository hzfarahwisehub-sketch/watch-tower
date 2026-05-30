/**
 * Coleta TUDO que o Watch Tower monitora numa estrutura única (ReportData),
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
import { promises as fs } from "node:fs";
import path from "node:path";

export type ReportHeadline = { title: string; link: string; pubDate?: string; source: string };

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
};

export type ReportStats = {
  totalCountries: number;
  totalBulletins: number;
  bulletinChanged: number;
  bulletinErrors: number;
  totalRssFeeds: number;
  totalHeadlines: number;
  lastRun: string | null;
};

export type ReportData = {
  generatedAt: Date;
  generatedAtStr: string;
  stats: ReportStats;
  countries: ReportCountry[];
};

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

async function fetchFeed(rssUrl: string, sourceName: string, maxItems = 5): Promise<ReportHeadline[]> {
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 12000);
    const res = await fetch(rssUrl, {
      headers: { "User-Agent": UA, Accept: "application/rss+xml,application/xml,*/*" },
      signal: ctrl.signal,
    });
    clearTimeout(t);
    if (!res.ok) return [];
    const xml = await res.text();
    return parseRss(xml, sourceName).slice(0, maxItems);
  } catch {
    return [];
  }
}

function parseRss(xml: string, source: string): ReportHeadline[] {
  const items: ReportHeadline[] = [];
  // RSS 2.0
  const itemRe = /<item\b[^>]*>([\s\S]*?)<\/item>/gi;
  let m: RegExpExecArray | null;
  while ((m = itemRe.exec(xml)) !== null && items.length < 10) {
    const block = m[1];
    const title = pick(block, /<title>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/i);
    const link = pick(block, /<link>([\s\S]*?)<\/link>/i);
    const pubDate = pick(block, /<pubDate>([\s\S]*?)<\/pubDate>/i);
    if (title && link) items.push({ title: title.trim(), link: link.trim(), pubDate, source });
  }
  // Atom fallback
  if (items.length === 0) {
    const entryRe = /<entry\b[^>]*>([\s\S]*?)<\/entry>/gi;
    while ((m = entryRe.exec(xml)) !== null && items.length < 10) {
      const block = m[1];
      const title = pick(block, /<title[^>]*>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/i);
      const link = pickAttr(block, /<link[^>]*href=["']([^"']+)["']/i);
      const pubDate = pick(block, /<(?:updated|published)>([\s\S]*?)<\/(?:updated|published)>/i);
      if (title && link) items.push({ title: title.trim(), link, pubDate, source });
    }
  }
  return items;
}

function pick(s: string, re: RegExp): string | undefined {
  const m = s.match(re);
  return m?.[1]?.replace(/<[^>]+>/g, "").trim();
}
function pickAttr(s: string, re: RegExp): string | undefined {
  const m = s.match(re);
  return m?.[1];
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
export async function gatherReportData(): Promise<ReportData> {
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

  // Junta todos os feeds RSS catalogados nos Centros de Informação
  const allFeeds: Array<{ countryCode: string; sourceName: string; rss: string }> = [];
  for (const center of INFO_CENTERS) {
    for (const src of center.sources) {
      if (src.rss) allFeeds.push({ countryCode: center.countryCode, sourceName: src.name, rss: src.rss });
    }
  }

  // Busca em lotes de 8 simultâneos
  const headlinesByCountry = new Map<string, ReportHeadline[]>();
  const BATCH = 8;
  for (let i = 0; i < allFeeds.length; i += BATCH) {
    const batch = allFeeds.slice(i, i + BATCH);
    const results = await Promise.all(batch.map((f) => fetchFeed(f.rss, f.sourceName)));
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
      headlines: sortHeadlines(headlinesByCountry.get(c.code) ?? []),
      sources: center?.sources ?? [],
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
  if (!s) return "—";
  if (s === "changed") return "✦ Mudança detectada";
  if (s === "unchanged") return "✓ Sem mudanças";
  if (s.startsWith("error")) return `⚠ Erro · ${s}`;
  return s;
}

/** Status do boletim SEM emoji (PDF). */
export function bulletinStatusText(s: string | null | undefined): string {
  if (!s) return "—";
  if (s === "changed") return "Mudança detectada";
  if (s === "unchanged") return "Sem mudanças";
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
