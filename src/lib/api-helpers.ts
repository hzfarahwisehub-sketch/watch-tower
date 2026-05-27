// Helpers compartilhados pelas API routes da Fase 2
import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export type ApiSession = {
  userId: string;
  email: string;
  role: "admin" | "editor";
};

/**
 * Garante sessao autenticada + verifica allowlist. Retorna NextResponse
 * 401 quando nao autenticado, 403 quando fora da allowlist.
 */
export async function requireSession(): Promise<
  { ok: true; session: ApiSession } | { ok: false; response: NextResponse }
> {
  const session = await auth();
  if (!session?.user?.email || !session.user.id) {
    return {
      ok: false,
      response: NextResponse.json({ error: "unauthenticated" }, { status: 401 }),
    };
  }
  const allowed = await prisma.allowedEmail.findUnique({
    where: { email: session.user.email },
  });
  if (!allowed) {
    return {
      ok: false,
      response: NextResponse.json({ error: "forbidden" }, { status: 403 }),
    };
  }
  return {
    ok: true,
    session: {
      userId: session.user.id,
      email: session.user.email,
      role: (allowed.role as "admin" | "editor") ?? "editor",
    },
  };
}

export function requireAdmin(session: ApiSession): NextResponse | null {
  if (session.role !== "admin") {
    return NextResponse.json({ error: "admin_only" }, { status: 403 });
  }
  return null;
}

export function badRequest(message: string, details?: unknown): NextResponse {
  return NextResponse.json({ error: "bad_request", message, details }, { status: 400 });
}

export function notFound(): NextResponse {
  return NextResponse.json({ error: "not_found" }, { status: 404 });
}
