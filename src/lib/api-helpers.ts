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

/** Nome amigável do executor pra exibir nos itens de equipe ("por Friday"). */
const NAME_MAP: Record<string, string> = {
  "hzfarah.wisehub@gmail.com": "Hammis",
  "lucasbin181@gmail.com": "Lucas",
  "marcelanogueiracidadania@gmail.com": "Marcela",
  "diver.wisehub@gmail.com": "Jessé",
  "adm.wisehub@gmail.com": "Admin",
  "adm@wisehubnow.com": "Admin",
  "friday@wisehubnow.online": "Friday",
};
export function friendlyName(email: string | null | undefined, name?: string | null): string {
  if (email && NAME_MAP[email.toLowerCase()]) return NAME_MAP[email.toLowerCase()];
  if (name?.trim()) return name.trim();
  if (email) return email.split("@")[0];
  return "—";
}

/** Lê ?scope= da URL. "team" = quadro compartilhado; default "personal". */
export function getScope(req: { url: string }): "team" | "personal" {
  try {
    return new URL(req.url).searchParams.get("scope") === "team" ? "team" : "personal";
  } catch {
    return "personal";
  }
}

/**
 * Pode editar/apagar um item de EQUIPE? Sim se for o criador (executor) ou
 * a conta master (Hammis). Itens pessoais usam a checagem de userId normal.
 */
export function canMutateTeamItem(itemUserId: string, session: ApiSession): boolean {
  return itemUserId === session.userId || session.email.toLowerCase() === "hzfarah.wisehub@gmail.com";
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
