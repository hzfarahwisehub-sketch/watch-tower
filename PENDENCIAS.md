# Watch Tower — Pendências

**Última atualização:** 2026-05-28
**Status:** Fase 1 ✅ · Boletins (40 países) ✅ · Fase 2 (Auth+DB+API) ✅ · PWA+Push ✅ (1 gargalo humano) · Fase 3 (e-mails) ⏳ bloqueada

> Lista canônica completa em `D:\FRIDAY-BRAIN\skills\watch-tower-deploy\PENDENCIAS-WATCH-TOWER.md`
> Versão consolidada Friday Memory: `~/.claude/projects/D--FRIDAY-BRAIN/memory/watch_tower_pendencias.md`

## 🔴 Gargalo humano aberto — migração do banco (PWA/Push)
Friday precisa da **DATABASE_URL pooled** do Neon `watch_tower` (env do Vercel é write-only, não dá pra puxar). Ao colar, Friday roda:
1. `npx prisma db push` → tabela `PushSubscription` + coluna `Reminder.notifiedAt`
2. `node --import tsx prisma/seed.ts` → ativa Marcela + Jessé na allowlist
3. `gh secret set WT_APP_URL https://watchtower.wisehubnow.online` → liga os 2 crons de push

Até lá: `/api/push/subscribe`, `/api/cron/reminders` e `/api/cron/notify-bulletins` (com mudanças) dão 500. O resto roda.

## 🟡 Pendente do Hammis
- [ ] **Ícone do olho** — Hammis cria o logo (formato de olho, ligado à marca WiseHub) e envia. Friday troca via `node scripts/gen-pwa-icons.mjs <arquivo>`. App já roda com placeholder.

## 🎨 Visual / UX (Friday faz sozinha quando priorizar)
- [ ] Feed de Mudanças — respiro nas bordas em cards estreitos
- [ ] Header — alinhamento logo + título em alguns viewports

## 📧 Fase 3 — E-mails reais (bloqueado por credenciais)
- [ ] Gmail API OAuth (`hzfarah.wisehub@gmail.com`)
- [ ] IMAP cPanel (8× `*@wisehubnow.com`)
- 🔴 Hammis fornece: config IMAP + senhas + Google OAuth client

## 🌐 Fase 5 — Infra
- [x] Domínio `watchtower.wisehubnow.online` ✅
- [ ] Sentry · UptimeRobot · Backup mensal Neon → Drive

## ✅ Entregue
- Fase 1: Next.js + Vercel + paleta WiseHub + DailyGrid + mapa Leaflet + dark/light
- Boletins Oficiais: 40 jurisdições, detecção automática de mudança (cron + SHA-256), Feed/KpiRow/AlertsBanner ao vivo
- Fase 2: Auth Magic Link (Resend) + Neon Postgres + API REST + allowlist + /admin/allowlist (4 sócios admin)
- PWA + Push: manifest nativo + service worker offline + Web Push (VAPID) + PushToggle + 2 crons + sessão 90d + security headers
