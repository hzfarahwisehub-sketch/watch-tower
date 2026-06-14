#!/usr/bin/env node
/**
 * collect-rss.ts — tradutor das manchetes RSS dos países (olho de dados da
 * Friday, conectado à central Watch Tower).
 *
 * As manchetes chegam na língua de cada fonte oficial (alemão, francês, croata,
 * etc.). Este cron pega os títulos LIMPOS reusando o /api/rss de produção (que
 * já parseia + decodifica + roda em gru, fora do bloqueio US), traduz cada
 * título NOVO pra PT e EN via MyMemory (grátis, sem chave, NÃO é LLM → não fere
 * "sem IA na Vercel"), e grava o mapa em public/rss-translated.json.
 *
 * Incremental: carrega o JSON existente e só traduz títulos que ainda não estão
 * lá (respeita o limite diário do MyMemory e o timeout do Action). O app lê esse
 * JSON client-side e mostra a tradução + o original + selo "auto".
 *
 * Custo: $0 (Node + tsx + API HTTP grátis). SEM banco, SEM segredo obrigatório.
 * Roda via GitHub Actions cron (.github/workflows/collect-rss.yml):
 *   node --import tsx scripts/collect-rss.ts
 */

import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { INFO_CENTERS } from "../src/lib/infoCenters";
import { normalizeTitle, type TransMap, type Translation } from "../src/lib/rss-translations";

const OUT = resolve(process.cwd(), "public/rss-translated.json");
const APP = (process.env.WT_APP_URL || "https://watchtower.wisehubnow.online").replace(/\/$/, "");
// E-mail (qualquer válido) sobe o limite do MyMemory de ~5k pra ~50k palavras/dia.
const MM_EMAIL = process.env.MYMEMORY_EMAIL || "adm.wisehub@gmail.com";

const PER_FEED = 3;             // top-N manchetes por feed (igual ao app)
const MAX_NEW_PER_RUN = 600;    // teto de títulos novos traduzidos por execução
const POOL = 4;                 // títulos em paralelo
const TARGETS = [
  { key: "pt" as const, pair: "pt-br" },
  { key: "en" as const, pair: "en-gb" },
];

function srcCode(lang: string): string {
  const l = (lang || "").toLowerCase();
  if (l.startsWith("pt")) return "pt-br";
  if (l.startsWith("en")) return "en-gb";
  return l || "auto";
}

async function getJson(url: string): Promise<unknown | null> {
  try {
    const res = await fetch(url, { headers: { "User-Agent": "watch-tower-collect-rss" } });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

/** Traduz um texto via MyMemory. Devolve null em erro/quota/no-op. */
async function mm(text: string, src: string, tgt: string): Promise<string | null> {
  const q = text.slice(0, 480); // MyMemory limita o tamanho do q
  const u = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(q)}&langpair=${encodeURIComponent(src + "|" + tgt)}&de=${encodeURIComponent(MM_EMAIL)}`;
  const data = (await getJson(u)) as { responseStatus?: number | string; responseData?: { translatedText?: string } } | null;
  if (!data) return null;
  const status = Number(data.responseStatus);
  const out = data.responseData?.translatedText ?? "";
  if (status !== 200 || !out) return null;
  // MyMemory devolve avisos em CAIXA ALTA quando estoura quota / par inválido.
  if (/MYMEMORY WARNING|YOU USED ALL|INVALID|PLEASE SELECT|NO QUERY SPECIFIED/i.test(out)) return null;
  return out.trim();
}

async function main() {
  // 1) Carrega o que já existe (incremental)
  let existing: TransMap = {};
  let meta = { version: 1, lastRun: "", count: 0 };
  try {
    const raw = JSON.parse(await readFile(OUT, "utf-8"));
    if (raw && raw.translations) existing = raw.translations as TransMap;
    if (raw && typeof raw.version === "number") meta.version = raw.version;
  } catch {
    // primeiro run: arquivo ainda não existe
  }

  // 2) Junta (título, idioma) de todos os feeds RSS, via o /api/rss de prod
  const feeds: { rss: string; lang: string }[] = [];
  for (const c of INFO_CENTERS) {
    for (const s of c.sources) {
      if (s.rss) feeds.push({ rss: s.rss, lang: s.language });
    }
  }
  console.log(`[collect-rss] ${feeds.length} feeds · app=${APP}`);

  const titleLang = new Map<string, string>(); // normTitle -> sourceLang
  let feedOk = 0;
  for (const f of feeds) {
    const data = (await getJson(`${APP}/api/rss?url=${encodeURIComponent(f.rss)}`)) as
      | { items?: { title?: string }[] }
      | null;
    const items = data?.items ?? [];
    if (items.length) feedOk++;
    for (const it of items.slice(0, PER_FEED)) {
      const title = (it.title || "").trim();
      if (!title) continue;
      const key = normalizeTitle(title);
      if (!titleLang.has(key)) titleLang.set(key, f.lang);
    }
  }
  console.log(`[collect-rss] feeds com itens: ${feedOk}/${feeds.length} · títulos únicos: ${titleLang.size}`);

  // 3) Descobre o que é NOVO (ainda não traduzido pros 2 alvos quando preciso)
  const todo: { title: string; lang: string }[] = [];
  for (const [title, lang] of titleLang) {
    const have = existing[title];
    const needs = TARGETS.some((t) => !srcCode(lang).startsWith(t.key) && !(have && have[t.key]));
    if (needs) todo.push({ title, lang });
  }
  const capped = todo.slice(0, MAX_NEW_PER_RUN);
  console.log(`[collect-rss] novos a traduzir: ${todo.length}${todo.length > capped.length ? ` (limitado a ${capped.length} neste run)` : ""}`);

  // 4) Traduz em pool
  const result: TransMap = { ...existing };
  let done = 0;
  let translated = 0;
  async function worker(item: { title: string; lang: string }) {
    const src = srcCode(item.lang);
    const cur: Translation = { ...(result[item.title] || {}) };
    for (const t of TARGETS) {
      if (src.startsWith(t.key)) continue; // fonte já está nesse idioma
      if (cur[t.key]) continue;            // já temos
      const out = await mm(item.title, src, t.pair);
      if (out) { cur[t.key] = out; translated++; }
    }
    if (cur.pt || cur.en) result[item.title] = cur;
    done++;
    if (done % 50 === 0) console.log(`[collect-rss] ${done}/${capped.length}…`);
  }
  // pool simples
  const queue = capped.slice();
  await Promise.all(
    Array.from({ length: POOL }, async () => {
      while (queue.length) {
        const next = queue.shift();
        if (next) await worker(next);
      }
    }),
  );

  // 5) Poda: mantém só títulos que ainda aparecem nos feeds (evita crescer infinito)
  const live: TransMap = {};
  for (const key of titleLang.keys()) {
    if (result[key]) live[key] = result[key];
  }

  const out = {
    version: meta.version,
    lastRun: new Date().toISOString(),
    count: Object.keys(live).length,
    translations: live,
  };
  await writeFile(OUT, JSON.stringify(out, null, 2) + "\n", "utf-8");
  console.log(`[collect-rss] done · ${translated} traduções novas · ${out.count} títulos no mapa`);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
