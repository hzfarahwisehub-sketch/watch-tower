#!/usr/bin/env node
/**
 * Smoke test do Cloudflare Worker geo-proxy.
 *
 * Uso:
 *   WT_GEO_PROXY_URL=https://wt-geo-proxy.<user>.workers.dev \
 *   WT_GEO_PROXY_SECRET=<opcional> \
 *   node smoke-test.mjs
 *
 * Testa healthcheck + os 7 sites geo-proxied (PT/ES/EE/BG/RO/FR/DE).
 * Sai com codigo 1 se algum falhar.
 */

const URL = process.env.WT_GEO_PROXY_URL;
const SECRET = process.env.WT_GEO_PROXY_SECRET || "";

if (!URL) {
  console.error("Erro: WT_GEO_PROXY_URL nao setada. Exemplo:");
  console.error('  WT_GEO_PROXY_URL="https://wt-geo-proxy.user.workers.dev" node smoke-test.mjs');
  process.exit(1);
}

const TARGETS = [
  ["healthcheck",     URL],
  ["PT · DRE RSS",    `${URL}/?url=${encodeURIComponent("https://dre.pt/dre/feeds/diariodarepublica")}`],
  ["ES · BOE RSS",    `${URL}/?url=${encodeURIComponent("https://www.boe.es/rss/canal.php?c=ultimas10dias")}`],
  ["EE · Eesti.ee",   `${URL}/?url=${encodeURIComponent("https://www.eesti.ee/en/")}`],
  ["BG · ARef",       `${URL}/?url=${encodeURIComponent("https://aref.government.bg/?explnum=21")}`],
  ["RO · IGI",        `${URL}/?url=${encodeURIComponent("https://igi.mai.gov.ro/en")}`],
  ["FR · OFII",       `${URL}/?url=${encodeURIComponent("https://www.ofii.fr/actualites/")}`],
  ["DE · Destatis",   `${URL}/?url=${encodeURIComponent("https://www.destatis.de/EN/Themes/Society-Environment/Population/Migration-Integration/_node.html")}`],
];

let failed = 0;
let ok = 0;

for (const [name, target] of TARGETS) {
  const finalUrl = SECRET ? `${target}${target.includes("?") ? "&" : "?"}secret=${SECRET}` : target;
  const start = Date.now();
  try {
    const res = await fetch(finalUrl);
    const elapsed = Date.now() - start;
    const ct = res.headers.get("content-type") || "";
    const len = res.headers.get("content-length") || "?";
    if (res.ok) {
      const sample = (await res.text()).slice(0, 80).replace(/\s+/g, " ");
      console.log(`✓ ${res.status} ${name.padEnd(18)} ${elapsed}ms · ${len}B · ${ct.slice(0,30)}`);
      console.log(`           preview: ${sample}…`);
      ok++;
    } else {
      console.log(`✗ ${res.status} ${name.padEnd(18)} ${elapsed}ms · ${ct}`);
      failed++;
    }
  } catch (err) {
    const elapsed = Date.now() - start;
    console.log(`✗ ERR ${name.padEnd(18)} ${elapsed}ms · ${err.message}`);
    failed++;
  }
}

console.log("");
console.log(`Resultado: ${ok}/${TARGETS.length} OK · ${failed} falha(s)`);

if (failed > 0) process.exit(1);
