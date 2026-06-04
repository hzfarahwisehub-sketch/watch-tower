import { NextRequest, NextResponse } from "next/server";

/**
 * /api/geofetch?url=<target>&secret=<opcional>
 *
 * Reverse-proxy de leitura pra o cron de boletins (check-bulletins.mjs).
 * O cron roda no datacenter Azure US-East do GitHub Actions, cujo range de IP
 * e bloqueado por varios sites de governo (BR/BG/RO/PT/ES/FR/DE/EE). Este
 * endpoint busca o site do lado do Vercel (regiao preferida gru1 = Sao Paulo,
 * fora do range bloqueado) e devolve o HTML pro cron calcular o hash.
 *
 * Liga via secret WT_GEO_PROXY_URL no GitHub Actions apontando pra este path.
 * Allow-list de dominios evita uso como open-proxy. Mesma lista do
 * cloudflare-worker/proxy.js.
 */

export const runtime = "nodejs";
export const revalidate = 0;
export const preferredRegion = ["gru1"]; // Sao Paulo, fora do bloqueio US

const ALLOWED_DOMAINS = [
  "aima.gov.pt",
  "dre.pt",
  "inclusion.gob.es",
  "boe.es",
  "immigration.interieur.gouv.fr",
  "ofii.fr",
  "bamf.de",
  "destatis.de",
  "bmi.bund.de",
  "make-it-in-germany.com",
  "politsei.ee",
  "eesti.ee",
  "aref.government.bg",
  "government.bg",
  "mai.gov.ro",
  "igi.mai.gov.ro",
  "gov.uk",
  "gov.br",
  "gov.pl",
  "udi.no",
  "utl.is",
  "migri.fi",
  "migrationsverket.se",
  "sem.admin.ch",
  "nyidanmark.dk",
  "siri.dk",
  "migration.gov.gr",
  "irishimmigration.ie",
  "pmlp.gov.lv",
  "migracija.lt",
  "guichet.public.lu",
  "identita.gov.mt",
  "ind.nl",
];

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

const FETCH_TIMEOUT_MS = 35_000;

export async function GET(req: NextRequest) {
  const target = req.nextUrl.searchParams.get("url");
  const provided = req.nextUrl.searchParams.get("secret");

  // Healthcheck
  if (!target) {
    return NextResponse.json({
      service: "watch-tower-geofetch",
      ok: true,
      allowed_domains: ALLOWED_DOMAINS.length,
      usage: "GET /api/geofetch?url=<target>&secret=<opcional>",
    });
  }

  // Secret (se configurado via env WT_GEO_PROXY_SECRET)
  const expected = process.env.WT_GEO_PROXY_SECRET;
  if (expected && provided !== expected) {
    return new NextResponse("unauthorized", { status: 401 });
  }

  let targetUrl: URL;
  try {
    targetUrl = new URL(target);
  } catch {
    return new NextResponse("invalid url", { status: 400 });
  }
  if (!/^https?:$/.test(targetUrl.protocol)) {
    return new NextResponse("only http(s)", { status: 400 });
  }
  const allowed = ALLOWED_DOMAINS.some(
    (d) => targetUrl.hostname === d || targetUrl.hostname.endsWith("." + d),
  );
  if (!allowed) {
    return new NextResponse(`domain not allowed: ${targetUrl.hostname}`, { status: 403 });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const upstream = await fetch(target, {
      headers: {
        "User-Agent": UA,
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "pt-PT,pt;q=0.9,en;q=0.8,es;q=0.7,fr;q=0.6,de;q=0.5,it;q=0.4",
        "Accept-Encoding": "gzip, deflate, br",
        "Cache-Control": "no-cache",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "none",
        "Sec-Fetch-User": "?1",
        "Upgrade-Insecure-Requests": "1",
      },
      redirect: "follow",
      cache: "no-store",
      signal: controller.signal,
    });
    const body = await upstream.text();
    return new NextResponse(body, {
      status: upstream.status,
      headers: {
        "Content-Type": upstream.headers.get("Content-Type") || "text/html; charset=utf-8",
        "X-Proxied-By": "watch-tower-geofetch",
        "X-Upstream-Status": String(upstream.status),
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "fetch failed";
    return new NextResponse(`proxy_fetch_failed: ${msg}`, { status: 502 });
  } finally {
    clearTimeout(timeout);
  }
}
