// Config edge-safe do NextAuth v5 (sem Prisma, sem Resend).
// Usado pelo middleware.ts pra evitar estourar o limite 1MB Edge Function.
// auth.ts importa daqui e ADICIONA adapter + EmailProvider (nao-edge).
import type { NextAuthConfig } from "next-auth";

export const authConfig: NextAuthConfig = {
  // Uso interno (4 sócios, máx ~10 pessoas) em devices próprios.
  // Regra de sessão por papel (aplicada no callback jwt abaixo):
  //   • admin  (os 4 sócios) → PERMANENTE: logou uma vez, não desloga mais.
  //   • editor (demais autorizados) → 24h absolutas, depois cai.
  // maxAge global = teto longo (10 anos) que cobre os admins; o editor é
  // derrubado antes via carimbo `editorExpiresAt` no token.
  session: {
    strategy: "jwt",
    maxAge: 10 * 365 * 24 * 60 * 60, // ~10 anos (permanente p/ admins)
    updateAge: 24 * 60 * 60, // renova o token no máx 1x/dia
  },
  pages: {
    signIn: "/auth/signin",
    verifyRequest: "/auth/verify",
    error: "/auth/error",
  },
  providers: [],
  callbacks: {
    // Authorized callback usado pelo middleware. Retorna true se a rota
    // pode prosseguir; false → redirect pra signIn.
    authorized({ auth, request }) {
      const { pathname } = request.nextUrl;
      const isLoggedIn = !!auth?.user?.email;

      const isProtectedApi =
        pathname.startsWith("/api/tasks") ||
        pathname.startsWith("/api/agenda") ||
        pathname.startsWith("/api/reminders") ||
        pathname.startsWith("/api/scheduled") ||
        pathname.startsWith("/api/admin");
      // Todas as páginas do app exigem login (só /auth/* e assets ficam públicos).
      const isProtectedPage =
        pathname === "/" ||
        pathname.startsWith("/janela") ||
        pathname.startsWith("/admin");

      if (!isProtectedApi && !isProtectedPage) return true;
      return isLoggedIn;
    },
    async jwt({ token, user }) {
      const t = token as { role?: string; editorExpiresAt?: number };
      // No sign-in (user presente): grava papel e carimba expiração.
      // admin → sem carimbo (permanente). editor → 24h absolutas.
      if (user) {
        const role = (user as { role?: string }).role ?? "editor";
        t.role = role;
        if (role === "admin") {
          delete t.editorExpiresAt;
        } else {
          t.editorExpiresAt = Date.now() + 24 * 60 * 60 * 1000;
        }
      }
      // A cada leitura: se não-admin e passou das 24h, derruba a sessão.
      // Retornar null limpa o cookie (logout) — comportamento do @auth/core.
      if (
        t.role !== "admin" &&
        typeof t.editorExpiresAt === "number" &&
        Date.now() > t.editorExpiresAt
      ) {
        return null;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        // Propaga o id do usuário (token.sub) — requireSession() exige
        // session.user.id; sem isto toda rota autenticada devolve 401.
        (session.user as { id?: string }).id = (token.sub as string) ?? "";
        (session.user as { role?: string }).role = (token.role as string) ?? "editor";
      }
      return session;
    },
  },
};
