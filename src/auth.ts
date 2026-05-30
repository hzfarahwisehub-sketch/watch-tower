// NextAuth v5 completo (Node runtime). Importa edge config + adiciona
// PrismaAdapter + EmailProvider Resend. NAO importar daqui no middleware
// (1MB limit). Pro middleware, usar src/middleware.ts que importa
// auth.config.ts diretamente.
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Resend } from "resend";
import bcrypt from "bcryptjs";
import { authConfig } from "@/auth.config";
import { prisma } from "@/lib/prisma";

// Lazy-init: constructor do Resend explode se a key for vazia.
function getResend(): Resend {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error("RESEND_API_KEY nao configurada — Fase 2 nao ativa");
  }
  return new Resend(key);
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  providers: [
    // ── Login + senha (PRIMÁRIO) ──────────────────────────────────────────
    // Allowlist + senha (bcrypt). Sessão JWT; expiração por papel é aplicada
    // no callback jwt do auth.config.ts (admin = permanente · editor = 24h).
    Credentials({
      id: "password",
      name: "E-mail e senha",
      credentials: {
        email: { label: "E-mail", type: "email" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(raw) {
        const email = String(raw?.email ?? "").trim().toLowerCase();
        const password = String(raw?.password ?? "");
        if (!email || !password) return null;

        // Gate allowlist: só quem está autorizado pode logar.
        const allowed = await prisma.allowedEmail.findUnique({ where: { email } });
        if (!allowed) {
          console.warn(`[auth] login fora da allowlist: ${email}`);
          return null;
        }

        // Usuário precisa existir E ter senha definida (primeiro acesso usa
        // /api/auth/register pra criar a senha).
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user?.passwordHash) return null;

        const ok = await bcrypt.compare(password, user.passwordHash);
        if (!ok) return null;

        // role autoritativo vem da allowlist (não do User).
        return {
          id: user.id,
          email: user.email,
          name: user.name ?? undefined,
          role: allowed.role,
        };
      },
    }),
    // ── Magic link (FALLBACK / emergência) ────────────────────────────────
    // Mantido como rede de segurança e reaproveitado pelo reset de senha.
    {
      id: "resend",
      name: "Email",
      type: "email",
      maxAge: 24 * 60 * 60, // 24h
      async sendVerificationRequest({ identifier: email, url }) {
        const allowed = await prisma.allowedEmail.findUnique({ where: { email } });
        if (!allowed) {
          console.warn(`[auth] tentativa de login fora da allowlist: ${email}`);
          return;
        }
        const from = process.env.EMAIL_FROM ?? "Watch Tower <noreply@wisehubnow.online>";
        const { error } = await getResend().emails.send({
          from,
          to: email,
          subject: "Watch Tower · Acessar painel",
          html: magicLinkHtml(url, email),
          text: magicLinkText(url),
        });
        if (error) {
          throw new Error(`Resend falhou: ${JSON.stringify(error)}`);
        }
      },
    } as const,
  ],
  callbacks: {
    ...authConfig.callbacks,
    async signIn({ user }) {
      if (!user.email) return false;
      const allowed = await prisma.allowedEmail.findUnique({ where: { email: user.email } });
      return !!allowed;
    },
  },
  events: {
    // Disparam DEPOIS que o PrismaAdapter cria/atualiza o User.
    // updateMany nao explode quando count=0 (caso edge de timing).
    async createUser({ user }) {
      if (!user.email || !user.id) return;
      const allowed = await prisma.allowedEmail.findUnique({ where: { email: user.email } });
      if (allowed) {
        await prisma.user.update({
          where: { id: user.id },
          data: { allowlisted: true, role: allowed.role },
        });
      }
    },
    async signIn({ user }) {
      if (!user?.email) return;
      const allowed = await prisma.allowedEmail.findUnique({ where: { email: user.email } });
      if (allowed) {
        // Sync role/allowlisted em todo login (caso allowedEmail tenha mudado)
        await prisma.user.updateMany({
          where: { email: user.email },
          data: { allowlisted: true, role: allowed.role },
        });
      }
    },
  },
});

function magicLinkHtml(url: string, email: string): string {
  return `<!DOCTYPE html>
<html><body style="font-family:Inter,sans-serif;background:#0F0C1E;color:#E8E6F4;padding:32px;">
  <div style="max-width:520px;margin:0 auto;background:#1A1730;border:1px solid rgba(123,160,255,.3);border-radius:14px;padding:32px;">
    <h1 style="font-size:22px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:#7BA0FF;margin:0 0 8px">Watch Tower</h1>
    <p style="color:#9F9DBE;font-size:12px;letter-spacing:2px;text-transform:uppercase;margin:0 0 24px">Monitoramento Global de Imigração</p>
    <p style="font-size:15px;line-height:1.6">Clique no botão abaixo pra acessar o painel.</p>
    <p><a href="${url}" style="display:inline-block;background:linear-gradient(135deg,#1F55FF,#7BA0FF);color:white;padding:14px 28px;border-radius:10px;text-decoration:none;font-weight:700;letter-spacing:1px;text-transform:uppercase;font-size:13px;margin:16px 0">Acessar painel</a></p>
    <p style="font-size:12px;color:#9F9DBE;margin-top:24px">O link expira em 24h. Solicitado por <b>${email}</b>. Se não foi você, ignore este email.</p>
  </div>
</body></html>`;
}

function magicLinkText(url: string): string {
  return `Watch Tower — Acessar painel\n\nClique no link: ${url}\n\nLink expira em 24h.`;
}
