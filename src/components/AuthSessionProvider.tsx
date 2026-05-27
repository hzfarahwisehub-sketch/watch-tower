"use client";
import { SessionProvider } from "next-auth/react";
import type { ReactNode } from "react";

/**
 * Wrapper do SessionProvider do NextAuth pra usar dentro de Client Components.
 * Importado no layout.tsx envolvendo toda a arvore.
 */
export function AuthSessionProvider({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
