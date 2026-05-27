# Watch Tower · Fase 2 — Setup (10min Hammis)

Auth + Neon Postgres + API REST está **toda implementada no código** (commit `<hash>`). Falta apenas você criar a conta Neon + setar 5 env vars no Vercel. Friday valida e dispara a migração depois.

## O que ganha quando ativar

- Login Magic Link via e-mail (sem senha) usando Resend (mesma key do WiseRank)
- Allowlist de e-mails autorizados (admin / editor) gerenciada via API
- 4 entidades persistidas em Postgres: Tasks · Agenda · Reminders · ScheduledActions
- Refresh 15s no dashboard quando alguém edita
- Friday pode adicionar tarefas via API com bearer token (futuro)

## Custo

**$0/mês** — Neon free tier (0.5GB storage, sem cold start) + Resend free tier (3k emails/mês) + Vercel Hobby.

---

## Passo 1 · Criar conta Neon (3min)

1. https://neon.tech → Sign up com GitHub
2. Create project: nome `watch-tower`, região `US East (Ohio)` (mais perto do Vercel US East)
3. Pegue 2 connection strings (em "Connection details"):
   - **Pooled** (para `DATABASE_URL`) — termina com `?sslmode=require&pgbouncer=true`
   - **Direct** (para `DIRECT_URL`) — termina com `?sslmode=require`

## Passo 2 · Gerar AUTH_SECRET

```bash
openssl rand -hex 32
```

Anota o output (32 caracteres hex).

## Passo 3 · Reaproveitar RESEND_API_KEY

Pega a mesma chave do WiseRank. Está em `vercel env ls --project wiserank` ou no painel Vercel do WiseRank.

## Passo 4 · Setar env vars no Vercel

Roda no terminal (daqui · pasta watch-tower):

```bash
vercel env add DATABASE_URL production
# cola a Pooled connection string

vercel env add DIRECT_URL production
# cola a Direct connection string

vercel env add AUTH_SECRET production
# cola o hex do passo 2

vercel env add NEXTAUTH_URL production
# digita: https://watchtower.wisehubnow.online

vercel env add AUTH_TRUST_HOST production
# digita: true

vercel env add RESEND_API_KEY production
# cola a key do WiseRank

vercel env add EMAIL_FROM production
# digita: Watch Tower <noreply@wisehubnow.online>
```

## Passo 5 · Avisar a Friday

Manda mensagem "Friday, Fase 2 env setado". Eu rodo:

1. `npx prisma migrate deploy` — cria as tabelas no Neon
2. `npx prisma db seed` — insere você (hzfarah.wisehub@gmail.com) + os 2 adm@ na allowlist como admin
3. Re-deploy do Vercel
4. Smoke test: `gh workflow run check-bulletins.yml` continua funcionando + `https://watchtower.wisehubnow.online/auth/signin` carrega + Magic Link chega no seu e-mail
5. Confirmo no chat que está tudo verde

## Endpoints da API (depois do setup)

| Método | URL | O que faz |
|---|---|---|
| GET | `/api/tasks` | Lista tuas tasks |
| POST | `/api/tasks` | Cria task (`title`, `priority`, `dueDate`, `notes`) |
| PATCH | `/api/tasks/:id` | Edita task |
| DELETE | `/api/tasks/:id` | Apaga task |
| GET / POST / PATCH / DELETE | `/api/agenda` | Idem pra eventos de agenda |
| GET / POST / PATCH / DELETE | `/api/reminders` | Idem pra lembretes |
| GET / POST / PATCH / DELETE | `/api/scheduled` | Idem pra ações cron |
| GET / POST / DELETE | `/api/admin/allowlist` | Gerenciar allowlist (admin-only) |

## Hooks client prontos

`src/lib/use-api.ts` exporta:
- `useTasks()`, `useAgenda()`, `useReminders()`, `useScheduled()`
- Cada um retorna `{ state, reload, create, update, remove }`
- Polling 15s automático

Pra usar no Dashboard:

```tsx
import { useTasks } from "@/lib/use-api";

function MinhasTasks() {
  const tasks = useTasks();
  if (tasks.state.status !== "ok") return <div>Carregando…</div>;
  return <ul>{tasks.state.data.map(t => <li key={t.id}>{t.title}</li>)}</ul>;
}
```

## Estrutura dos arquivos novos (referência)

```
prisma/
  schema.prisma          ← schema 5 entidades + NextAuth
  seed.ts                ← popula allowlist com Hammis + 2 adm@

src/
  auth.ts                ← NextAuth v5 + Magic Link Resend
  auth-handlers.ts       ← reexport handlers
  middleware.ts          ← protege /api/(tasks|agenda|...) e /admin

  app/
    auth/
      signin/page.tsx    ← form de e-mail
      verify/page.tsx    ← "confira sua caixa"
      error/page.tsx     ← erros
    api/
      auth/[...nextauth]/route.ts ← rota NextAuth
      tasks/route.ts + [id]/route.ts
      agenda/route.ts + [id]/route.ts
      reminders/route.ts + [id]/route.ts
      scheduled/route.ts + [id]/route.ts
      admin/allowlist/route.ts

  lib/
    prisma.ts            ← singleton client
    api-helpers.ts       ← requireSession, requireAdmin
    use-api.ts           ← hooks client das 4 entidades

  components/
    AuthSessionProvider.tsx ← wrapper SessionProvider
```

## Próximo passo (Fase 3)

Quando Fase 2 estiver no ar, atacamos o Inbox de 8 e-mails (`*@wisehubnow.com`) — você precisa criar OAuth Gmail client + me passar as senhas IMAP cPanel.
