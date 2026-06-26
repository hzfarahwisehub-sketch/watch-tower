import { readFile, writeFile } from "node:fs/promises";

const OUT = process.argv[2];
const DATA_FILE = "src/lib/labor-market-data.ts";

// Data da rodada: argv[3] (YYYY-MM-DD) ou HOJE. Carimba os paises desta rodada
// com a data REAL. (Bug antigo: era fixo "2026-06-22" -> o app mostrava
// "atualizado em 22/06" pra sempre, mesmo apos pesquisa nova.)
const STAMP = (process.argv[3] && /^\d{4}-\d{2}-\d{2}$/.test(process.argv[3]))
  ? process.argv[3]
  : new Date().toISOString().slice(0, 10);

const outText = await readFile(OUT, "utf-8");

// GUARDA MOJIBAKE: se o .output veio com UTF-8 lido como Latin-1 (gotcha do
// PowerShell), abortar em vez de gravar acento corrompido na producao.
if (/[ÂÃ][-¿]/.test(outText)) {
  console.error("ABORTADO: o .output parece ter mojibake (UTF-8 lido como Latin-1, tipo 'Ã©'/'Ã£'). Releia a fonte como UTF-8; nao vou gravar.");
  process.exit(5);
}

const raw = JSON.parse(outText);
const result = raw.result ?? raw;
const countries = result.countries ?? [];
const review = result.review ?? null;

// GUARDA CRIVO: se o crivo editorial reprovou, NAO publica (nada e escrito).
if (review && review.ok === false) {
  console.error("ABORTADO: crivo editorial reprovou (review.ok=false). " + (review.summary || "") + " Re-rodar a pesquisa; nao vou publicar conteudo reprovado.");
  process.exit(6);
}

// Limpeza: tira HTML cru, normaliza escape literal "\n", REMOVE travessao (—)
// no meio das frases trocando por virgula (regra WiseHub: sem travessao; antes
// era so DETECTADO no fim, nao removido). Preserva en-dash (–) usado em FAIXAS
// de numero/salario. Colapsa espacos mas PRESERVA quebras de paragrafo (\n\n).
function clean(s) {
  if (typeof s !== "string") return s;
  let t = s
    .replace(/<\/?p>/gi, "\n\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/\\n/g, "\n")
    .replace(/\s*—\s*/g, ", ")          // travessao (em-dash) -> virgula
    .replace(/[ \t]{2,}/g, " ")
    .replace(/ *\n */g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/\s+,/g, ",")               // higiene apos a troca
    .replace(/,\s*,/g, ",")
    .replace(/,\s*\./g, ".");
  return t.trim();
}
function deepClean(v) {
  if (typeof v === "string") return clean(v);
  if (Array.isArray(v)) return v.map(deepClean);
  if (v && typeof v === "object") { const o = {}; for (const k in v) o[k] = deepClean(v[k]); return o; }
  return v;
}

function srcArr(a) {
  return Array.isArray(a)
    ? a.filter((s) => s && s.url).map((s) => ({ label: s.label || s.url, url: s.url, ...(s.official !== undefined ? { official: !!s.official } : {}) }))
    : [];
}

const map = {};
for (const c of countries) {
  if (!c || !c.code) continue;
  map[c.code] = {
    updatedAt: STAMP,
    overview: c.overview ?? "",
    hotSectors: c.hotSectors ?? [],
    ...(c.coolingSectors?.length ? { coolingSectors: c.coolingSectors } : {}),
    inDemandRoles: (c.inDemandRoles ?? []).map((r) => ({ role: r.role, ...(r.note ? { note: r.note } : {}) })),
    ...(c.byQualification?.length ? { byQualification: c.byQualification.map((q) => ({ area: q.area, advice: q.advice })) } : {}),
    ...(c.salaries?.length
      ? { salaries: c.salaries.map((s) => ({ role: s.role, range: s.range, ...(s.sourceUrl ? { source: { label: s.sourceLabel || s.sourceUrl, url: s.sourceUrl, official: (s.sourceOfficial !== undefined ? !!s.sourceOfficial : true) } } : {}) })) }
      : {}),
    foreignerRules: c.foreignerRules ?? "",
    ...(c.opportunityWindows?.length ? { opportunityWindows: c.opportunityWindows } : {}),
    jobBoards: srcArr(c.jobBoards),
    sources: srcArr(c.sources),
  };
}

// Limpeza dos novos.
for (const k of Object.keys(map)) map[k] = deepClean(map[k]);

// ===== MERGE SEGURO: preserva os paises ja em labor-market-data.ts =====
let existing = {};
let fileExisted = false;
let fileLen = 0;
try {
  const cur = await readFile(DATA_FILE, "utf-8");
  fileExisted = true;
  fileLen = cur.length;
  const m = cur.match(/LABOR_MARKET:\s*LaborMarketMap\s*=\s*(\{[\s\S]*\});\s*$/);
  if (!m) throw new Error("regex_nao_casou");
  existing = JSON.parse(m[1]);
} catch (e) {
  if (e && e.code === "ENOENT") {
    // primeira geracao: arquivo ainda nao existe -> ok
  } else if (fileExisted && fileLen > 500) {
    // GUARDA ANTI-APAGAMENTO: o arquivo existe com conteudo mas nao consegui ler
    // os paises existentes. NAO sobrescrever (apagaria os outros paises). Abortar.
    console.error("ABORTADO: labor-market-data.ts existe com conteudo mas o parse dos paises existentes falhou (" + (e && e.message) + "). Nao vou sobrescrever pra nao apagar paises.");
    process.exit(2);
  }
  // arquivo pequeno/ausente sem ENOENT: trata como primeira geracao
}

// Merge pais-a-pais: dados novos FRACOS/VAZIOS (agente falhou) NAO sobrescrevem
// um pais bom existente.
const merged = { ...existing };
const kept = [];
for (const [code, val] of Object.entries(map)) {
  const hasContent = !!(val.overview && val.overview.length > 50) && !!(val.sources && val.sources.length > 0);
  if (!hasContent && existing[code]) {
    kept.push(code);
    merged[code] = existing[code]; // preserva o pais bom
  } else {
    merged[code] = val;
  }
}

// GUARDA ANTI-ENCOLHIMENTO: o merge nunca pode ter MENOS paises que ja existiam.
if (Object.keys(merged).length < Object.keys(existing).length) {
  console.error("ABORTADO: o resultado teria menos paises (" + Object.keys(merged).length + ") que o arquivo atual (" + Object.keys(existing).length + ").");
  process.exit(3);
}

// Re-limpa o conjunto inteiro (aplica a regra de travessao tambem aos antigos).
const finalMap = deepClean(merged);

const body = `// GERADO pela equipe de agentes (rodada semanal do Mercado de Trabalho) · ultima geracao ${STAMP}.
// NAO editar a mao: regenerado a cada rodada de pesquisa (_gen-labor.mjs).
import type { LaborMarketMap } from "./labor-market";

export const LABOR_MARKET: LaborMarketMap = ${JSON.stringify(finalMap, null, 2)};
`;

// GUARDA FINAL: zero travessao na saida (se sobrou algum, abortar — nao publica texto com travessao).
if (body.includes("—")) {
  console.error("ABORTADO: ainda ha travessao (—) na saida depois da limpeza. Nao vou gravar.");
  process.exit(4);
}

await writeFile(DATA_FILE, body, "utf-8");

console.log("novos nesta rodada:", Object.keys(map).join(", "), "· carimbo:", STAMP);
if (kept.length) console.log("PRESERVADOS (dados novos fracos, manteve o existente):", kept.join(", "));
console.log("TOTAL no arquivo agora:", Object.keys(finalMap).length, "->", Object.keys(finalMap).sort().join(", "));
for (const code of Object.keys(map)) {
  const c = finalMap[code];
  if (!c) continue;
  console.log(`  [${code}] overview=${c.overview.length}c · setores=${c.hotSectors.length} · roles=${c.inDemandRoles.length} · salarios=${c.salaries?.length ?? 0} · jobBoards=${c.jobBoards.length} · sources=${c.sources.length}`);
}
console.log("\n=== CRIVO EDITORIAL ===");
console.log("ok:", review?.ok, "·", review?.summary);
if (review?.perCountry) for (const p of review.perCountry) console.log(` [${p.code}] sourcesOk=${p.sourcesOk} :: ${p.issues}`);
