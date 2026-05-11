# Watch Tower — Pendências

**Última atualização:** 2026-05-11
**Status:** Fase 1 ✅ entregue · Fase 2 ⏳ aguardando sinal

> Lista canônica completa em `D:\FRIDAY-BRAIN\skills\watch-tower-deploy\PENDENCIAS-WATCH-TOWER.md`
> Versão consolidada Friday Memory: `~/.claude/projects/D--FRIDAY-BRAIN/memory/watch_tower_pendencias.md`

## 🎨 Visual / UX
- [ ] Feed de Mudanças — respiro nas bordas (texto colado em cards estreitos)
- [ ] Header — logo + escritas alinhamento em alguns viewports

## 🔐 Fase 2 — Backend
- [ ] NextAuth + Google OAuth (4 pessoas max)
- [ ] Allowlist de e-mails autorizados
- [ ] Neon Postgres schema (tasks, agenda, reminders, scheduled, users)
- [ ] API REST `/api/{tasks,agenda,reminders,scheduled}`
- [ ] Friday escreve via bearer token
- [ ] Migração localStorage → DB no 1º login
- [ ] Polling 15s ou SSE

## 📧 Fase 3 — E-mails reais (bloqueado por credenciais)
- [ ] Gmail API OAuth (`hzfarah.wisehub@gmail.com`)
- [ ] IMAP cPanel (8× `*@wisehubnow.com`)
- 🔴 Hammis fornece: config IMAP + senhas + Google OAuth client

## 👥 Fase 4 — Time + dados ao vivo
- [ ] Allowlist 4 pessoas + roles admin/editor
- [ ] Tavily + Apify pra dados imigração reais
- [ ] Cron refresh mapa
- [ ] Google Drive integration

## 🌐 Fase 5 — Infra
- [ ] Domínio `watchtower.wisehubnow.com`
- [ ] Sentry
- [ ] UptimeRobot
- [ ] Backup mensal Neon → Drive
