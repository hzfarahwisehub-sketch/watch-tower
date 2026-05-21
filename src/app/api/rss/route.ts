import { NextRequest, NextResponse } from "next/server";

/**
 * /api/rss?url=<feedUrl>
 *
 * Server-side fetch + parse de feeds RSS 2.0 e Atom.
 * Cache em memória do Node runtime (15 min) + Cache-Control pra CDN.
 *
 * Por que server-side?
 *  - Evita CORS (a maioria dos feeds não envia Access-Control-Allow-Origin)
 *  - Permite cache compartilhado entre usuários
 *  - User-Agent realista pra reduzir 403 anti-bot
 *
 * Resposta: { items: [{ title, link, pubDate }] } limitada a 5 manchetes.
 * Pra erros: { error: string } com status 4xx/5xx.
 */

export const runtime = "nodejs"; // precisamos de fetch sem edge restrictions
export const revalidate = 0;     // controle de cache feito manualmente

type RssItem = { title: string; link: string; pubDate?: string };
type CacheEntry = { fetchedAt: number; items: RssItem[] };

const CACHE_TTL_MS = 15 * 60 * 1000; // 15min
const FETCH_TIMEOUT_MS = 12_000;
const MAX_ITEMS = 5;

// Cache global ao processo Node — reset em cada cold start do serverless
const cache = new Map<string, CacheEntry>();

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  if (!url || !/^https?:\/\//.test(url)) {
    return NextResponse.json({ error: "missing or invalid url" }, { status: 400 });
  }

  // Allow-list rudimentar de domínios pra evitar abuso (SSRF-lite).
  // Não é segurança definitiva — em produção deveria ser allowlist explícita.
  if (/^https?:\/\/(localhost|127\.|10\.|192\.168\.|0\.)/i.test(url)) {
    return NextResponse.json({ error: "private url not allowed" }, { status: 403 });
  }

  // Cache check
  const cached = cache.get(url);
  if (cached && Date.now() - cached.fetchedAt < CACHE_TTL_MS) {
    return NextResponse.json(
      { items: cached.items, cached: true, age: Math.floor((Date.now() - cached.fetchedAt) / 1000) },
      { headers: { "Cache-Control": "public, s-maxage=900, stale-while-revalidate=1800" } }
    );
  }

  // Fetch
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": UA,
        "Accept": "application/rss+xml, application/atom+xml, application/xml, text/xml, */*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9,pt;q=0.7",
      },
      signal: controller.signal,
      // Não usar cache do fetch nativo — controlamos manualmente
      cache: "no-store",
    });
    if (!res.ok) {
      return NextResponse.json(
        { error: `upstream ${res.status}` },
        { status: 502, headers: { "Cache-Control": "no-store" } }
      );
    }
    const xml = await res.text();
    const items = parseFeed(xml).slice(0, MAX_ITEMS);
    cache.set(url, { fetchedAt: Date.now(), items });
    return NextResponse.json(
      { items, cached: false },
      { headers: { "Cache-Control": "public, s-maxage=900, stale-while-revalidate=1800" } }
    );
  } catch (err) {
    const msg = err instanceof Error ? err.message : "fetch failed";
    return NextResponse.json({ error: msg }, { status: 502 });
  } finally {
    clearTimeout(timeout);
  }
}

/* ============== Parser ============== */

function parseFeed(xml: string): RssItem[] {
  // Tenta RSS 2.0 (<item>) primeiro
  const rssItems = parseRssItems(xml);
  if (rssItems.length > 0) return rssItems;
  // Fallback pra Atom (<entry>)
  return parseAtomEntries(xml);
}

function parseRssItems(xml: string): RssItem[] {
  const items: RssItem[] = [];
  const itemRegex = /<item\b[^>]*>([\s\S]*?)<\/item>/gi;
  let match;
  while ((match = itemRegex.exec(xml)) !== null) {
    const block = match[1] ?? "";
    const title = extractTag(block, "title");
    const link = extractTag(block, "link");
    const pubDate = extractTag(block, "pubDate") || extractTag(block, "dc:date");
    if (title && link) items.push({ title, link, pubDate: pubDate || undefined });
  }
  return items;
}

function parseAtomEntries(xml: string): RssItem[] {
  const items: RssItem[] = [];
  const entryRegex = /<entry\b[^>]*>([\s\S]*?)<\/entry>/gi;
  let match;
  while ((match = entryRegex.exec(xml)) !== null) {
    const block = match[1] ?? "";
    const title = extractTag(block, "title");
    // Atom usa <link href="..." rel="alternate"/>
    const linkMatch =
      block.match(/<link[^>]*rel=["']alternate["'][^>]*href=["']([^"']+)["']/i) ||
      block.match(/<link[^>]*href=["']([^"']+)["'][^>]*\/?>/i);
    const link = linkMatch ? linkMatch[1] : "";
    const pubDate = extractTag(block, "published") || extractTag(block, "updated");
    if (title && link) items.push({ title, link, pubDate: pubDate || undefined });
  }
  return items;
}

function extractTag(block: string, tag: string): string {
  // Suporta CDATA + namespace prefixes (dc:date etc)
  const re = new RegExp(
    `<${tag}\\b[^>]*>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?<\\/${tag}>`,
    "i"
  );
  const m = block.match(re);
  if (!m) return "";
  return decodeEntities(m[1].trim());
}

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/<[^>]+>/g, "") // strip HTML residual
    .trim();
}
