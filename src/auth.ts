// NextAuth v5 + Magic Link via Resend + PrismaAdapter
// Setup: env vars necessarias DATABASE_URL, AUTH_SECRET, RESEND_API_KEY,
//        EMAIL_FROM (ex: "Watch Tower <noreply@wisehubnow.online>")
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

// Lazy-init: o constructor do Resend explode se RESEND_API_KEY for vazia.
// Inicializamos so quando precisar enviar (sendVerificationRequest).
function getResend(): Resend {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error("RESEND_API_KEY nao configurada — Fase 2 nao ativa");
  }
  return new Resend(key);
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/signin",
    verifyRequest: "/auth/verify",
    error: "/auth/error",
  },
  providers: [
    {
      id: "resend",
      name: "Email",
      type: "email",
      maxAge: 24 * 60 * 60, // 24h
      async sendVerificationRequest({ identifier: email, url }) {
        // Allowlist check antes de enviar magic link
        const allowed = await prisma.allowedEmail.findUnique({ where: { email } });
        if (!allowed) {
          // Loga mas nao envia (pra nao vazar quais emails estao na allowlist)
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
    async signIn({ user }) {
      if (!user.email) return false;
      const allowed = await prisma.allowedEmail.findUnique({ where: { email: user.email } });
      if (!allowed) return false;
      // Sync role e allowlisted flag no User
      if (user.id) {
        await prisma.user.update({
          where: { id: user.id },
          data: { allowlisted: true, role: allowed.role },
        });
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as { role?: string }).role ?? "editor";
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as { role?: string }).role = (token.role as string) ?? "editor";
      }
      return session;
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
