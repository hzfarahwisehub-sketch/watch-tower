# Watch Tower · Geo-Proxy

Cloudflare Worker que faz proxy de fetch pros sites EU bloqueados pro IP do GitHub Actions.

## Por quê

O cron `check-bulletins.mjs` roda no Azure US-East (datacenter do GitHub Actions). Alguns sites governamentais europeus bloqueiam IPs de datacenter US → cron retorna 403/empty.

Cloudflare Workers roda em PoPs globais (incluindo Europa). Worker faz fetch como se fosse usuário EU normal, devolve body pro cron.

## Estado atual

**O Worker NÃO está deployado (confirmado 2026-05-27).** Os 40 boletins funcionam por fetch direto + URLs alternativas (BOE RSS, DRE feed, eesti.ee). Mas alguns sites retornam body vazio (challenge HTML) — deploy do Worker resolve esses casos limítrofes.

## Deploy (3 passos · 10min · $0 free tier)

### 1. Instalar wrangler

```bash
npm install -g wrangler
```

### 2. Login no Cloudflare

```bash
wrangler login
```

Abre browser, autoriza com sua conta Cloudflare (cria grátis em [cloudflare.com](https://cloudflare.com) se ainda não tem).

### 3. Deploy

Daqui (`cloudflare-worker/`):

```bash
wrangler deploy
```

Output esperado:

```
Uploaded wt-geo-proxy (X.XX KB)
Published wt-geo-proxy (X.XXs)
  https://wt-geo-proxy.<seu-username>.workers.dev
```

**Anota essa URL** — vai precisar nos próximos passos.

### 4. (Opcional, recomendado) Adicionar secret de autenticação

Pra evitar que terceiros usem teu worker como proxy aberto:

```bash
wrangler secret put PROXY_SECRET
```

Digita uma string forte. Sugestão pra gerar: `openssl rand -hex 32`. Anota também.

### 5. Setar secrets no GitHub

Você pode fazer via CLI:

```bash
gh secret set WT_GEO_PROXY_URL --body "https://wt-geo-proxy.<seu-username>.workers.dev"
gh secret set WT_GEO_PROXY_SECRET --body "<a-string-do-passo-4>"
```

Ou via UI: Repo Watch Tower → Settings → Secrets and variables → Actions → New repository secret.

O workflow `.github/workflows/check-bulletins.yml` já está configurado pra ler essas vars.

### 6. Validar com smoke test

```bash
WT_GEO_PROXY_URL=https://wt-geo-proxy.<seu-username>.workers.dev \
WT_GEO_PROXY_SECRET=<opcional> \
node smoke-test.mjs
```

Testa healthcheck + 7 sites geo-proxied. Sai com erro se algum falhar.

### 7. Disparar workflow manualmente pra validar em produção

```bash
gh workflow run check-bulletins.yml
gh run watch <run-id>
```

E confirmar que `public/bulletins-status.json` mostra `0 erros`.

## Como o cron usa

O `scripts/check-bulletins.mjs` tem fallback:

1. Se `WT_GEO_PROXY_URL` setado E entry tem `geoProxy: true` → usa Worker
2. Senão → fetch direto

Entries em `public/bulletins-status.json` com `"geoProxy": true` (7 países atualmente):
- 🇵🇹 PT (DRE RSS · monitorUrl)
- 🇪🇸 ES (BOE RSS · monitorUrl)
- 🇪🇪 EE (Eesti.ee · monitorUrl)
- 🇧🇬 BG (ARef Bulgaria)
- 🇷🇴 RO (IGI Romania)
- 🇫🇷 FR (OFII · monitorUrl)
- 🇩🇪 DE (Destatis · monitorUrl)

## Healthcheck

Visita `https://<teu-worker>.workers.dev/` → JSON com status.

```json
{
  "service": "watch-tower-geo-proxy",
  "ok": true,
  "allowed_domains": 30,
  "usage": "GET /?url=<target>&secret=<optional>"
}
```

## Allow-list

`proxy.js` tem array `ALLOWED_DOMAINS` com whitelist explícita (gov.pt/es/uk/br/etc). Tentativa de proxy pra outros domínios retorna 403. Não vira open proxy.

## Limites Cloudflare Free

- 100.000 requests/dia
- 10ms CPU por request
- Cache CF nativo (10min configurado)

Pro nosso uso (1 cron/dia × ~8 sites = ~8 requests/dia) sobra muito.

## Tutorial em PDF

Tem um tutorial PDF na raiz do projeto: `cloudflare-worker-deploy.pdf` (gerado em 2026-05-24).
