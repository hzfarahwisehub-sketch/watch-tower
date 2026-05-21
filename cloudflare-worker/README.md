# Watch Tower · Geo-Proxy

Cloudflare Worker que faz proxy de fetch pros sites EU bloqueados pro IP do GitHub Actions.

## Por quê

O cron `check-bulletins.mjs` roda no Azure US-East (datacenter do GitHub Actions). Alguns sites governamentais europeus (AIMA Portugal, Inclusión Espanha, DGEF França, BAMF Alemanha) bloqueiam IPs de datacenter US → cron retorna 403.

Cloudflare Workers roda em PoPs globais (incluindo Europa). Worker faz fetch como se fosse usuário EU normal, devolve body pro cron.

## Deploy (3 passos · 10min · $0)

### 1. Instalar wrangler

```bash
npm install -g wrangler
```

### 2. Login no Cloudflare

```bash
wrangler login
```

Abre browser, autoriza com tua conta Cloudflare (cria grátis em cloudflare.com se ainda não tem).

### 3. Deploy

Daqui (`cloudflare-worker/`):

```bash
wrangler deploy
```

Output:

```
Uploaded wt-geo-proxy (X.XX KB)
Published wt-geo-proxy (X.XXs)
  https://wt-geo-proxy.<teu-username>.workers.dev
```

Anota essa URL.

### 4. (Opcional, recomendado) Adicionar secret de autenticação

Pra evitar que terceiros usem teu worker como proxy aberto:

```bash
wrangler secret put PROXY_SECRET
```

Digita uma string forte (ex: `openssl rand -hex 32`). Anota também.

### 5. Setar secrets no GitHub

Repo Watch Tower → Settings → Secrets and variables → Actions → New repository secret:

- **`WT_GEO_PROXY_URL`** = a URL do passo 3 (ex: `https://wt-geo-proxy.user.workers.dev`)
- **`WT_GEO_PROXY_SECRET`** (opcional) = a string do passo 4

O workflow `.github/workflows/check-bulletins.yml` já está configurado pra ler essas vars.

## Como o cron usa

O `check-bulletins.mjs` tem fallback:

1. Se `WT_GEO_PROXY_URL` setado E entry tem `geoProxy: true` → usa Worker
2. Senão → fetch direto

Entries em `public/bulletins-status.json` com `"geoProxy": true` passam pelo proxy:
- 🇵🇹 PT (AIMA)
- 🇪🇸 ES (Inclusión)
- 🇫🇷 FR (DGEF)
- 🇩🇪 DE (BAMF)

## Healthcheck

Visita `https://<teu-worker>.workers.dev/` → JSON com status.

## Allow-list

`proxy.js` tem array `ALLOWED_DOMAINS` com whitelist explícita (gov.pt/es/uk/br/etc). Tentativa de proxy pra outros domínios retorna 403. Não vira open proxy.

## Limites Cloudflare Free

- 100.000 requests/dia
- 10ms CPU por request
- Cache CF nativo (10min configurado)

Pro nosso uso (1 cron/dia × 4 sites = 4 requests/dia) sobra bastante.
