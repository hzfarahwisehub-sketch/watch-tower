/**
 * Watch Tower · Geo-Proxy via Cloudflare Workers
 *
 * Problema: o cron de boletins (.github/workflows/check-bulletins.yml) roda no
 * datacenter Azure US-East do GitHub Actions. Alguns sites governamentais EU
 * (AIMA Portugal, Ministerio Inclusión Espanha, DGEF França, BAMF Alemanha)
 * bloqueiam range de IPs de datacenter US → cron sempre retorna 403.
 *
 * Solução: este Worker, deployado em Cloudflare (rede distribuída global com
 * PoPs em Europa), faz fetch dos sites alvos COMO SE fosse usuário Europeu, e
 * devolve o body pro cron. O cron usa o Worker como reverse-proxy.
 *
 * ╔══════════════════════════════════════════════════════════════╗
 * ║ DEPLOY (3 passos · ~10min · custo $0)                       ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║ 1. npm install -g wrangler                                  ║
 * ║ 2. wrangler login                                            ║
 * ║ 3. Daqui de cloudflare-worker/:                              ║
 * ║      wrangler deploy                                         ║
 * ║                                                              ║
 * ║ A URL retornada (ex: https://wt-geo-proxy.<seu-user>.workers.dev)
 * ║ vai pro secret WT_GEO_PROXY_URL do GitHub Actions.           ║
 * ║                                                              ║
 * ║ OPCIONAL — secret de autenticação:                          ║
 * ║   wrangler secret put PROXY_SECRET                          ║
 * ║   (digite uma string aleatória forte)                       ║
 * ║   Depois adicione ?secret=<string> nas URLs de proxy.       ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

const ALLOWED_DOMAINS = [
  "aima.gov.pt",
  "inclusion.gob.es",
  "immigration.interieur.gouv.fr",
  "ofii.fr",
  "bamf.de",
  "destatis.de",
  "bmi.bund.de",
  "make-it-in-germany.com",
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

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Healthcheck — visita raiz pra confirmar deploy OK
    if (url.pathname === "/" && !url.searchParams.has("url")) {
      return new Response(
        JSON.stringify({
          service: "watch-tower-geo-proxy",
          ok: true,
          allowed_domains: ALLOWED_DOMAINS.length,
          usage: "GET /?url=<target>&secret=<optional>",
        }),
        { headers: { "Content-Type": "application/json" } }
      );
    }

    const target = url.searchParams.get("url");
    if (!target) {
      return new Response("missing ?url=", { status: 400 });
    }

    // Validação do secret (se configurado via wrangler secret put PROXY_SECRET)
    if (env.PROXY_SECRET) {
      const provided = url.searchParams.get("secret");
      if (provided !== env.PROXY_SECRET) {
        return new Response("unauthorized", { status: 401 });
      }
    }

    // Allow-list de domínios — evita uso como open proxy
    let targetUrl;
    try {
      targetUrl = new URL(target);
    } catch {
      return new Response("invalid url", { status: 400 });
    }
    if (!/^https?:$/.test(targetUrl.protocol)) {
      return new Response("only http(s)", { status: 400 });
    }
    const allowed = ALLOWED_DOMAINS.some(
      (d) => targetUrl.hostname === d || targetUrl.hostname.endsWith("." + d)
    );
    if (!allowed) {
      return new Response(`domain not allowed: ${targetUrl.hostname}`, { status: 403 });
    }

    // Fetch upstream com headers de browser real EU
    try {
      const upstream = await fetch(target, {
        headers: {
          "User-Agent": USER_AGENT,
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
          "Accept-Language": "pt-PT,pt;q=0.9,en;q=0.8,es;q=0.7,fr;q=0.6,de;q=0.5,it;q=0.4",
          "Accept-Encoding": "gzip, deflate, br",
          "Cache-Control": "no-cache",
          "Sec-Fetch-Dest": "document",
          "Sec-Fetch-Mode": "navigate",
          "Sec-Fetch-Site": "none",
          "Sec-Fetch-User": "?1",
          "Upgrade-Insecure-Requests": "1",
        },
        cf: {
          // Cache pelo CF — reduz hits no upstream
          cacheTtl: 600, // 10min
          cacheEverything: true,
        },
        redirect: "follow",
      });

      const body = await upstream.text();
      return new Response(body, {
        status: upstream.status,
        headers: {
          "Content-Type": upstream.headers.get("Content-Type") || "text/html; charset=utf-8",
          "X-Proxied-By": "watch-tower-geo-proxy",
          "X-Upstream-Status": String(upstream.status),
          "Cache-Control": "public, s-maxage=600",
        },
      });
    } catch (err) {
      return new Response(
        JSON.stringify({ error: "proxy_fetch_failed", message: String(err?.message ?? err) }),
        { status: 502, headers: { "Content-Type": "application/json" } }
      );
    }
  },
};
