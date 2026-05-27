// Middleware: protege /api/tasks · /api/agenda · /api/reminders · /api/scheduled
// · /api/admin · /admin. Redireciona pra signin quando rota pede UI.
//
// /api/auth/* NAO eh protegido (eh a propria rota do NextAuth).
// /api/rss + /bulletins-status.json sao publicos.

import { NextResponse } from "next/server";
import { auth } from "@/auth";

const PROTECTED_API = [
  "/api/tasks",
  "/api/agenda",
  "/api/reminders",
  "/api/scheduled",
  "/api/admin",
];

const PROTECTED_PAGES = ["/admin"];

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const session = req.auth;

  const isProtectedApi = PROTECTED_API.some((p) => pathname.startsWith(p));
  const isProtectedPage = PROTECTED_PAGES.some((p) => pathname.startsWith(p));

  if (!isProtectedApi && !isProtectedPage) {
    return NextResponse.next();
  }

  if (!session?.user?.email) {
    if (isProtectedApi) {
      return NextResponse.json({ error: "unauthenticated" }, { status: 401 });
    }
    const signInUrl = new URL("/auth/signin", req.url);
    signInUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static, _next/image (assets do Next)
     * - favicon, logos, brand
     * - bulletins-status.json (publico)
     * - api/auth/* (rota do NextAuth)
     */
    "/((?!_next/static|_next/image|favicon.ico|brand/|bulletins-status.json|api/auth).*)",
  ],
};
