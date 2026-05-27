// Middleware edge-safe — usa apenas auth.config (sem Prisma/Resend).
// Pra checar autorizacao + redirecionar pra signin.
import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";

export default NextAuth(authConfig).auth;

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
