#!/usr/bin/env node
/**
 * check-bulletins.mjs
 *
 * Verifica os 11 boletins oficiais de imigração diariamente.
 * Calcula SHA-256 do corpo HTML, compara com o snapshot anterior em
 * public/bulletins-status.json. Se mudou, atualiza hash + lastChangedAt.
 *
 * Custo: $0 (Node 20+ nativo, sem dependências externas).
 * Executado via GitHub Actions cron (.github/workflows/check-bulletins.yml).
 */

import { readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { resolve } from "node:path";

const STATUS_PATH = resolve(process.cwd(), "public/bulletins-status.json");
const TIMEOUT_MS = 40000;
const RETRY_COUNT = 2;
const RETRY_BACKOFF_MS = 3000;
// User-Agent realista de Chrome — sites governamentais (PT/ES/AU) bloqueiam
// strings óbvias de bot. Mantemos uma referência ao projeto em headers extras.
const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

/**
 * Normaliza o HTML pra evitar falsos positivos:
 *  - remove scripts/styles inline (mudam toda request por cache-bust)
 *  - remove comentários HTML
 *  - remove tokens de CSRF e nonces (params típicos que rotacionam)
 *  - normaliza espaços em branco
 *
 * O hash final reflete só o conteúdo estrutural do HTML.
 */
function normalize(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/(csrfmiddlewaretoken|nonce|sessionid|__VIEWSTATE)[^"'\s>]*/gi, "")
    .replace(/data-[a-z-]+="[^"]*"/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function sha256(text) {
  return createHash("sha256").update(text).digest("hex");
}

async function fetchWithTimeout(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": USER_AGENT,
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9,pt-BR;q=0.8,pt;q=0.7,fr;q=0.6,es;q=0.5,it;q=0.4,de;q=0.3",
        "Accept-Encoding": "gzip, deflate, br",
        "Cache-Control": "no-cache",
        "Pragma": "no-cache",
        "Sec-Ch-Ua": '"Not_A Brand";v="8", "Chromium";v="131", "Google Chrome";v="131"',
        "Sec-Ch-Ua-Mobile": "?0",
        "Sec-Ch-Ua-Platform": '"Windows"',
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "none",
        "Sec-Fetch-User": "?1",
        "Upgrade-Insecure-Requests": "1",
      },
      signal: controller.signal,
      redirect: "follow",
    });
    const text = await res.text();
    return { ok: res.ok, status: res.status, text };
  } finally {
    clearTimeout(timeout);
  }
}

async function checkOne(entry) {
  const start = Date.now();
  const now = new Date().toISOString();
  const fetchUrl = entry.monitorUrl || entry.url;
  let lastError = null;

  for (let attempt = 0; attempt <= RETRY_COUNT; attempt++) {
    try {
      const { ok, status, text } = await fetchWithTimeout(fetchUrl);
      const elapsed = Date.now() - start;

      if (!ok) {
        lastError = `http_${status}`;
        if (status >= 500 && attempt < RETRY_COUNT) {
          await new Promise((r) => setTimeout(r, RETRY_BACKOFF_MS));
          continue;
        }
        console.log(`✗ ${entry.key.toUpperCase()} HTTP ${status} (${elapsed}ms)`);
        return {
          ...entry,
          lastCheckedAt: now,
          lastStatus: `error_http_${status}`,
        };
      }

      const normalized = normalize(text);
      const hash = sha256(normalized);
      const changed = entry.hash !== null && entry.hash !== hash;

      const result = {
        ...entry,
        hash,
        lastCheckedAt: now,
        lastStatus: changed ? "changed" : entry.hash === null ? "seed" : "unchanged",
      };

      if (changed || entry.lastChangedAt === null) {
        result.lastChangedAt = now;
      }

      const flag = changed ? "✓ CHANGED" : entry.hash === null ? "✓ seed" : "= same";
      const retryNote = attempt > 0 ? ` (retry ${attempt})` : "";
      console.log(`${flag} ${entry.key.toUpperCase()} ${hash.slice(0, 8)} (${elapsed}ms)${retryNote}`);
      return result;
    } catch (err) {
      lastError = err.name === "AbortError" ? "timeout" : err.message || "fetch_error";
      if (attempt < RETRY_COUNT) {
        await new Promise((r) => setTimeout(r, RETRY_BACKOFF_MS));
      }
    }
  }

  const elapsed = Date.now() - start;
  console.log(`✗ ${entry.key.toUpperCase()} ERROR ${lastError} (${elapsed}ms · ${RETRY_COUNT} retries)`);
  return {
    ...entry,
    lastCheckedAt: now,
    lastStatus: `error_${lastError}`.slice(0, 80),
  };
}

async function main() {
  console.log(`\n[check-bulletins] start ${new Date().toISOString()}\n`);

  const raw = await readFile(STATUS_PATH, "utf-8");
  const data = JSON.parse(raw);

  const updated = [];
  for (const entry of data.bulletins) {
    const result = await checkOne(entry);
    updated.push(result);
    // pequena pausa pra não bombardear servidores
    await new Promise((r) => setTimeout(r, 800));
  }

  const out = {
    lastRun: new Date().toISOString(),
    bulletins: updated,
  };

  await writeFile(STATUS_PATH, JSON.stringify(out, null, 2) + "\n", "utf-8");

  const changedCount = updated.filter((e) => e.lastStatus === "changed").length;
  const errorCount = updated.filter((e) => e.lastStatus?.startsWith("error_")).length;

  console.log(
    `\n[check-bulletins] done · ${updated.length} checked · ${changedCount} changed · ${errorCount} errors\n`,
  );

  if (errorCount === updated.length) {
    process.exit(1); // se TUDO falhou, sinaliza erro no workflow
  }
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
