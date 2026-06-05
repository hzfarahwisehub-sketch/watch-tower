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
export const preferredRegion = ["gru1"]; // Sao Paulo, fora do bloqueio US de varios sites gov (BR/DE/AE)

type RssItem = { title: string; link: string; pubDate?: string };
type CacheEntry = { fetchedAt: number; items: RssItem[] };

const CACHE_TTL_MS = 15 * 60 * 1000; // 15min
const CACHE_VERSION = "v5"; // bump invalida caches antigos quando o decoder muda
const FETCH_TIMEOUT_MS = 25_000;
const MAX_ITEMS = 5;

// Cache global ao processo Node — reset em cada cold start do serverless
const cache = new Map<string, CacheEntry>();

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

const SUCCESS_HEADERS = {
  "Cache-Control": "public, s-maxage=900, stale-while-revalidate=1800",
  "X-RSS-Decoder": "v6-demoji",
};

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

  const cacheKey = `${CACHE_VERSION}:${url}`;

  // Cache check
  const cached = cache.get(cacheKey);
  if (cached && Date.now() - cached.fetchedAt < CACHE_TTL_MS) {
    return NextResponse.json(
      { items: cached.items, cached: true, age: Math.floor((Date.now() - cached.fetchedAt) / 1000) },
      { headers: SUCCESS_HEADERS }
    );
  }

  // Fetch
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": UA,
        "Accept": "application/rss+xml, application/atom+xml, application/xml, text/xml, text/html;q=0.9, */*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9,pt;q=0.8,es;q=0.7,de;q=0.6,fr;q=0.5,it;q=0.4",
        // "identity" de proposito: alguns feeds gov tem a versao comprimida com o
        // encoding corrompido; pedir sem compressao reduz a chance disso.
        "Accept-Encoding": "identity",
        "Cache-Control": "no-cache",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "none",
        "Upgrade-Insecure-Requests": "1",
      },
      signal: controller.signal,
      redirect: "follow",
      // Não usar cache do fetch nativo, controlamos manualmente
      cache: "no-store",
    });
    if (!res.ok) {
      return NextResponse.json(
        { error: `upstream ${res.status}` },
        { status: 502, headers: { "Cache-Control": "no-store" } }
      );
    }
    const xml = decodeXml(await res.arrayBuffer());
    const items = parseFeed(xml).slice(0, MAX_ITEMS);
    cache.set(cacheKey, { fetchedAt: Date.now(), items });
    return NextResponse.json({ items, cached: false }, { headers: SUCCESS_HEADERS });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "fetch failed";
    return NextResponse.json({ error: msg }, { status: 502 });
  } finally {
    clearTimeout(timeout);
  }
}

/* ============== Decoder ============== */

// Lê os bytes crus e decodifica como UTF-8 (que cobre quase todos os feeds
// modernos); só cai pra Windows-1252 se aparecerem vários bytes inválidos de
// verdade, sinal de um feed Latin-1 legítimo. Depois passa pelo fixMojibake.
function decodeXml(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf);
  const utf8 = new TextDecoder("utf-8").decode(bytes);
  let bad = 0;
  for (let i = 0; i < utf8.length; i++) if (utf8.charCodeAt(i) === 0xfffd) bad++;
  const text = bad <= 2 ? utf8 : new TextDecoder("windows-1252").decode(bytes);
  return fixMojibake(text);
}

// Alguns feeds gov (DRE de Portugal, gov.br) entregam o conteúdo com UTF-8 DUPLO
// codificado de fábrica: o "á" virou "Ã¡" e isso foi regravado como UTF-8 válido
// (o decode normal não acusa erro, mas o texto já vem corrompido). Detectamos o
// par [C2-DF][80-BF] (byte UTF-8 de 2 octetos lido como dois chars Latin-1) e
// desfazemos a conta: reinterpretamos cada char como byte Latin-1 e
// redecodificamos como UTF-8. Comparação por código numérico pra não pôr
// caractere especial no fonte.
function fixMojibake(s: string): string {
  let moji = 0;
  for (let i = 0; i < s.length - 1; i++) {
    const a = s.charCodeAt(i);
    const b = s.charCodeAt(i + 1);
    if (a >= 0xc2 && a <= 0xdf && b >= 0x80 && b <= 0xbf) moji++;
  }
  if (moji < 2) return s;
  // Reinterpreta cada trecho contiguo de chars Latin-1 (0x80-0xFF) como bytes e,
  // se formarem UTF-8 valido, redecodifica. E LOCAL: nao toca em ASCII nem em
  // chars > 0xFF (emoji/CJK ja corretos), entao nao desiste do feed inteiro por
  // causa de um caractere solto, e acentos legitimos isolados (ex.: "cafe" -> e
  // acentuado) nao formam UTF-8 valido e ficam intactos.
  const re = new RegExp("[\\u0080-\\u00ff]+", "g");
  return s.replace(re, (seg) => {
    const raw = new Uint8Array(seg.length);
    for (let i = 0; i < seg.length; i++) raw[i] = seg.charCodeAt(i);
    try {
      return new TextDecoder("utf-8", { fatal: true }).decode(raw);
    } catch {
      return seg;
    }
  });
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
  const out = s
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
  // As entidades numericas (&#195;&#186;) so viram chars aqui; o demojibake
  // precisa rodar depois delas, nao so nos bytes crus do feed.
  return fixMojibake(out);
}
