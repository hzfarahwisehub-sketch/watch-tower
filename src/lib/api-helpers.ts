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

/**
 * Protege rotas de cron (chamadas por GitHub Actions / scheduler externo).
 * Aceita o segredo via `Authorization: Bearer <CRON_SECRET>` ou header
 * `x-cron-secret`. Sem CRON_SECRET configurado → 503 (feature desligada).
 */
export function requireCronSecret(
  req: Request,
): { ok: true } | { ok: false; response: NextResponse } {
  const secret = process.env.CRON_SECRET;
  if (!secret) {
    return {
      ok: false,
      response: NextResponse.json({ error: "cron_not_configured" }, { status: 503 }),
    };
  }
  const authHeader = req.headers.get("authorization") ?? "";
  const bearer = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";
  const headerSecret = req.headers.get("x-cron-secret") ?? "";
  if (bearer !== secret && headerSecret !== secret) {
    return {
      ok: false,
      response: NextResponse.json({ error: "unauthorized" }, { status: 401 }),
    };
  }
  return { ok: true };
}

export function badRequest(message: string, details?: unknown): NextResponse {
  return NextResponse.json({ error: "bad_request", message, details }, { status: 400 });
}

export function notFound(): NextResponse {
  return NextResponse.json({ error: "not_found" }, { status: 404 });
}
