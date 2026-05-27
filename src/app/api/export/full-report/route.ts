/**
 * GET /api/export/full-report
 *
 * Compila TUDO que o Watch Tower monitora num único Markdown, país por país,
 * detalhado nos mínimos detalhes. Pra que admins (sócios) baixem e usem como
 * material de referência ou base pra outros documentos.
 *
 * Conteúdo por país:
 *  - Bandeira + nome + autoridade + status interno
 *  - Panorama (resumo editorial)
 *  - Marcos editoriais (lista curada pela equipe)
 *  - Status do boletim oficial monitorado pelo cron (URL, última varredura,
 *    última mudança detectada, hash)
 *  - Atividade ao vivo via RSS (top 5 manchetes por feed dos InfoCenters)
 *  - Centros de Informação (lista de fontes externas com link)
 *
 * Cache: 30min em memória do Node runtime.
 * Acesso: admin-only (middleware ja garante).
 */

import { NextResponse } from "next/server";
import { COUNTRIES } from "@/lib/data";
import { INFO_CENTERS } from "@/lib/infoCenters";
import { BULLETINS, type BulletinStatus, type StatusFile } from "@/components/OfficialBulletins";
import { requireSession, requireAdmin } from "@/lib/api-helpers";
import { promises as fs } from "node:fs";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CACHE_TTL_MS = 30 * 60 * 1000;
let cache: { generatedAt: number; markdown: string } | null = null;

type Headline = { title: string; link: string; pubDate?: string; source: string };

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

async function fetchFeed(rssUrl: string, sourceName: string, maxItems = 5): Promise<Headline[]> {
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

function parseRss(xml: string, source: string): Headline[] {
  const items: Headline[] = [];
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

function fmtDate(iso: string | null | undefined, opts: { full?: boolean } = {}): string {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  if (opts.full) {
    return d.toLocaleString("pt-BR", { dateStyle: "long", timeStyle: "short", timeZone: "America/Sao_Paulo" });
  }
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
}

function relativeAge(iso: string | null | undefined): string {
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

function statusLabel(s: string): string {
  switch (s) {
    case "crit": return "🔴 Crítico";
    case "warn": return "🟡 Atenção";
    case "stable": return "🟢 Estável";
    default: return s;
  }
}

function bulletinStatusLabel(s: string | null | undefined): string {
  if (!s) return "—";
  if (s === "changed") return "✦ Mudança detectada";
  if (s === "unchanged") return "✓ Sem mudanças";
  if (s.startsWith("error")) return `⚠ Erro · ${s}`;
  return s;
}

async function compileMarkdown(): Promise<string> {
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
    // ignora
  }

  const statusByKey = new Map<string, BulletinStatus>();
  if (statusFile) {
    for (const b of statusFile.bulletins) statusByKey.set(b.key, b);
  }

  // Carrega RSS de TODOS os feeds dos InfoCenters em paralelo (com batches
  // pra não estourar memória / rede do serverless).
  const allFeeds: Array<{ countryCode: string; sourceName: string; rss: string }> = [];
  for (const center of INFO_CENTERS) {
    for (const src of center.sources) {
      if (src.rss) allFeeds.push({ countryCode: center.countryCode, sourceName: src.name, rss: src.rss });
    }
  }
  // Batches de 8 simultâneos pra ser gentil com os servidores
  const headlinesByCountry = new Map<string, Headline[]>();
  const BATCH = 8;
  for (let i = 0; i < allFeeds.length; i += BATCH) {
    const batch = allFeeds.slice(i, i + BATCH);
    const results = await Promise.all(batch.map((f) => fetchFeed(f.rss, f.sourceName)));
    batch.forEach((f, idx) => {
      const existing = headlinesByCountry.get(f.countryCode) ?? [];
      headlinesByCountry.set(f.countryCode, [...existing, ...results[idx]]);
    });
  }

  // Conta estatísticas globais
  const totalCountries = COUNTRIES.length;
  const totalBulletins = BULLETINS.length;
  const bulletinChanged = statusFile
    ? statusFile.bulletins.filter((b) => b.lastStatus === "changed").length
    : 0;
  const bulletinErrors = statusFile
    ? statusFile.bulletins.filter((b) => b.lastStatus?.startsWith("error")).length
    : 0;
  const totalRssFeeds = allFeeds.length;
  const totalHeadlines = Array.from(headlinesByCountry.values()).reduce((s, h) => s + h.length, 0);

  // ====== Compõe o markdown ======
  const lines: string[] = [];

  lines.push(`# WiseHub Watch Tower · Relatório Completo`);
  lines.push(``);
  lines.push(`**Gerado em:** ${generatedAtStr} (BRT)`);
  lines.push(``);
  lines.push(`---`);
  lines.push(``);
  lines.push(`## Sumário executivo`);
  lines.push(``);
  lines.push(`| Métrica | Valor |`);
  lines.push(`|---|---|`);
  lines.push(`| 🌎 Países monitorados | **${totalCountries}** |`);
  lines.push(`| 📜 Boletins oficiais via cron | **${totalBulletins}** |`);
  lines.push(`| ✦ Boletins com mudança na última varredura | **${bulletinChanged}** |`);
  lines.push(`| ⚠ Boletins em erro | **${bulletinErrors}** |`);
  lines.push(`| 📡 Feeds RSS curados (Centros de Informação) | **${totalRssFeeds}** |`);
  lines.push(`| 📰 Manchetes ao vivo capturadas neste relatório | **${totalHeadlines}** |`);
  lines.push(`| 🤖 Última varredura do cron | **${statusFile?.lastRun ? fmtDate(statusFile.lastRun, { full: true }) : "—"}** |`);
  lines.push(``);
  lines.push(`---`);
  lines.push(``);
  lines.push(`## Índice por país`);
  lines.push(``);
  for (const c of COUNTRIES) {
    lines.push(`- [${flagEmoji(c.code)} ${c.name}](#${slug(c.name)})`);
  }
  lines.push(``);
  lines.push(`---`);
  lines.push(``);

  // Por país
  for (const c of COUNTRIES) {
    const bulletin = statusByKey.get(c.code);
    const bulletinMeta = BULLETINS.find((b) => b.key === c.code);
    const headlines = headlinesByCountry.get(c.code) ?? [];

    lines.push(`## ${flagEmoji(c.code)} ${c.name}`);
    lines.push(``);
    lines.push(`**Autoridade:** ${c.authority}  `);
    lines.push(`**Status interno (dashboard):** ${statusLabel(c.status)}  `);
    lines.push(`**Coordenadas:** ${c.coords[0].toFixed(2)}, ${c.coords[1].toFixed(2)}`);
    lines.push(``);

    if (c.summary) {
      lines.push(`### 📋 Panorama`);
      lines.push(``);
      lines.push(c.summary);
      lines.push(``);
    }

    // Boletim oficial via cron
    if (bulletinMeta) {
      lines.push(`### 📜 Boletim oficial monitorado`);
      lines.push(``);
      lines.push(`- **Fonte:** ${bulletinMeta.source}`);
      lines.push(`- **Frequência declarada:** ${bulletinMeta.frequency}`);
      lines.push(`- **URL pública:** ${bulletinMeta.url}`);
      if (bulletin) {
        lines.push(`- **Status última varredura:** ${bulletinStatusLabel(bulletin.lastStatus)}`);
        lines.push(`- **Última varredura:** ${fmtDate(bulletin.lastCheckedAt, { full: true })} (${relativeAge(bulletin.lastCheckedAt)})`);
        lines.push(`- **Última mudança detectada:** ${fmtDate(bulletin.lastChangedAt, { full: true })} (${relativeAge(bulletin.lastChangedAt)})`);
        if (bulletin.hash) lines.push(`- **Hash atual (SHA-256, 16 chars):** \`${bulletin.hash.slice(0, 16)}…\``);
      } else {
        lines.push(`- _Sem dados de status (bulletin não monitorado ainda)._`);
      }
      lines.push(``);
    }

    // Marcos editoriais
    if (c.events.length > 0) {
      lines.push(`### 📜 Marcos editoriais (${c.events.length})`);
      lines.push(``);
      lines.push(`> _Contexto histórico selecionado pela equipe WiseHub._`);
      lines.push(``);
      c.events.forEach((ev, i) => {
        lines.push(`**${i + 1}. ${ev.title}**`);
        lines.push(``);
        lines.push(ev.desc);
        lines.push(``);
        lines.push(`_Fonte: ${ev.src}_`);
        lines.push(``);
      });
    }

    // Atividade ao vivo (RSS)
    if (headlines.length > 0) {
      const sorted = [...headlines].sort((a, b) => {
        const ta = a.pubDate ? new Date(a.pubDate).getTime() : 0;
        const tb = b.pubDate ? new Date(b.pubDate).getTime() : 0;
        return tb - ta;
      });
      lines.push(`### 📡 Atividade ao vivo · ${sorted.length} manchete${sorted.length !== 1 ? "s" : ""} via RSS`);
      lines.push(``);
      sorted.slice(0, 12).forEach((h) => {
        const when = h.pubDate ? ` _(${fmtDate(h.pubDate, { full: true })})_` : "";
        lines.push(`- **${h.source}**${when}: [${h.title}](${h.link})`);
      });
      lines.push(``);
    } else {
      lines.push(`### 📡 Atividade ao vivo`);
      lines.push(``);
      lines.push(`_Sem manchetes RSS disponíveis no momento (feed pode estar offline ou fora de horário comercial)._`);
      lines.push(``);
    }

    // Centros de Informação (todas as fontes, mesmo as sem RSS)
    const center = INFO_CENTERS.find((ic) => ic.countryCode === c.code);
    if (center && center.sources.length > 0) {
      lines.push(`### 🌐 Centros de Informação (${center.sources.length} fonte${center.sources.length !== 1 ? "s" : ""})`);
      lines.push(``);
      const byCategory = new Map<string, typeof center.sources>();
      for (const s of center.sources) {
        const arr = byCategory.get(s.category) ?? [];
        arr.push(s);
        byCategory.set(s.category, arr);
      }
      for (const [cat, srcs] of byCategory) {
        lines.push(`**${categoryEmoji(cat)} ${categoryName(cat)}** (${srcs.length})`);
        lines.push(``);
        for (const src of srcs) {
          const rssFlag = src.rss ? " · 🟢 RSS ao vivo" : "";
          const noteSuffix = src.note ? ` — _${src.note}_` : "";
          lines.push(`- [${src.name}](${src.url}) (${src.language.toUpperCase()})${rssFlag}${noteSuffix}`);
        }
        lines.push(``);
      }
    }

    lines.push(`---`);
    lines.push(``);
  }

  // Footer
  lines.push(``);
  lines.push(`## Fim do relatório`);
  lines.push(``);
  lines.push(`Gerado automaticamente pelo Watch Tower em ${generatedAtStr}.`);
  lines.push(``);
  lines.push(`Próxima geração: cache invalida em 30 minutos a partir desta geração.`);
  lines.push(``);
  lines.push(`© WiseHub US LLC · Watch Tower v2 · Friday`);

  return lines.join("\n");
}

function slug(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function flagEmoji(code: string): string {
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

function categoryEmoji(c: string): string {
  switch (c) {
    case "news": return "📰";
    case "finance": return "💰";
    case "crypto": return "🪙";
    case "legal": return "⚖";
    default: return "📌";
  }
}

function categoryName(c: string): string {
  switch (c) {
    case "news": return "Notícias gerais";
    case "finance": return "Finanças & Mercados";
    case "crypto": return "Cripto & Derivativos";
    case "legal": return "Leis & Regulação";
    default: return c;
  }
}

export async function GET() {
  const result = await requireSession();
  if (!result.ok) return result.response;
  const adminErr = requireAdmin(result.session);
  if (adminErr) return adminErr;

  // Cache
  if (cache && Date.now() - cache.generatedAt < CACHE_TTL_MS) {
    return new NextResponse(cache.markdown, {
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "X-Cache": "HIT",
        "X-Generated-At": new Date(cache.generatedAt).toISOString(),
        "Cache-Control": "private, max-age=300",
        "Content-Disposition": `attachment; filename="watch-tower-relatorio-${dateStamp()}.md"`,
      },
    });
  }

  const markdown = await compileMarkdown();
  cache = { generatedAt: Date.now(), markdown };

  return new NextResponse(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "X-Cache": "MISS",
      "X-Generated-At": new Date().toISOString(),
      "Cache-Control": "private, max-age=300",
      "Content-Disposition": `attachment; filename="watch-tower-relatorio-${dateStamp()}.md"`,
    },
  });
}

function dateStamp(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
