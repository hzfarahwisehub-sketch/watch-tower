// Config edge-safe do NextAuth v5 (sem Prisma, sem Resend).
// Usado pelo middleware.ts pra evitar estourar o limite 1MB Edge Function.
// auth.ts importa daqui e ADICIONA adapter + EmailProvider (nao-edge).
import type { NextAuthConfig } from "next-auth";

export const authConfig: NextAuthConfig = {
  // Uso interno (4 sócios, máx ~10 pessoas) em devices próprios → sessão longa
  // pra não forçar re-login a cada visita. 90 dias, renovada a cada 24h de uso.
  session: {
    strategy: "jwt",
    maxAge: 90 * 24 * 60 * 60, // 90 dias
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
      const isProtectedPage = pathname.startsWith("/admin");

      if (!isProtectedApi && !isProtectedPage) return true;
      return isLoggedIn;
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
};
