// Middleware edge-safe — usa apenas auth.config (sem Prisma/Resend).
// Pra rotas /api retorna 401 JSON; pra paginas redireciona pra signin.
import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import { authConfig } from "@/auth.config";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isLoggedIn = !!req.auth?.user?.email;

  const isProtectedApi =
    pathname.startsWith("/api/tasks") ||
    pathname.startsWith("/api/agenda") ||
    pathname.startsWith("/api/reminders") ||
    pathname.startsWith("/api/scheduled") ||
    pathname.startsWith("/api/admin") ||
    pathname.startsWith("/api/export");
  // App é de acesso restrito: TODAS as páginas do app exigem login. Sem sessão,
  // cai na tela de login e não renderiza nada (evita vazar resíduo gravado no
  // navegador de quem já teve acesso antes). Só ficam públicas as telas /auth/*
  // e os assets (excluídos pelo matcher abaixo).
  const isProtectedPage =
    pathname === "/" ||
    pathname.startsWith("/janela") ||
    pathname.startsWith("/admin");

  if (!isProtectedApi && !isProtectedPage) return NextResponse.next();
  if (isLoggedIn) return NextResponse.next();

  // Nao autenticado:
  if (isProtectedApi) {
    return NextResponse.json({ error: "unauthenticated" }, { status: 401 });
  }
  const signInUrl = new URL("/auth/signin", req.url);
  signInUrl.searchParams.set("callbackUrl", pathname);
  return NextResponse.redirect(signInUrl);
});

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static, _next/image (assets do Next)
     * - favicon, brand assets, bulletins-status.json publico
     * - api/auth/* (rota do NextAuth)
     */
    "/((?!_next/static|_next/image|favicon.ico|brand/|bulletins-status.json|api/auth).*)",
  ],
};
