// Helpers compartilhados pelas API routes da Fase 2
import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export type ApiSession = {
  userId: string;
  email: string;
  role: "admin" | "editor";
};

// Allowlist de RESERVA: usada SOMENTE quando o banco esta fora (ex.: Neon com
// cota de compute esgotada). Mantem a equipe conhecida acessando recursos de
// LEITURA (ex.: REPAVET) durante uma queda do banco. Mutacoes continuam exigindo
// o banco de volta. Sem brecha: so estes e-mails fixos da equipe entram pelo
// fallback, e so quando o findUnique lanca (banco inacessivel). A sessao em si
// (auth) e JWT, entao nao depende do banco.
const FALLBACK_ALLOWLIST: Record<string, "admin" | "editor"> = {
  "hzfarah.wisehub@gmail.com": "admin",
  "adm.wisehub@gmail.com": "admin",
  "adm@wisehubnow.com": "admin",
  "friday@wisehubnow.online": "admin",
  "lucasbin181@gmail.com": "editor",
  "marcelanogueiracidadania@gmail.com": "editor",
  "diver.wisehub@gmail.com": "editor",
};

/**
 * Garante sessao autenticada + verifica allowlist. Retorna NextResponse
 * 401 quando nao autenticado, 403 quando fora da allowlist, 503 quando o banco
 * esta fora e o e-mail nao esta na allowlist de reserva.
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
  const email = session.user.email;
  try {
    const allowed = await prisma.allowedEmail.findUnique({ where: { email } });
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
        email,
        role: (allowed.role as "admin" | "editor") ?? "editor",
      },
    };
  } catch {
    // Banco inacessivel (ex.: Neon cota esgotada). Fallback: libera a equipe
    // conhecida pra leitura; nega o resto com 503 (nao da pra verificar).
    const fbRole = FALLBACK_ALLOWLIST[email.toLowerCase()];
    if (fbRole) {
      return { ok: true, session: { userId: session.user.id, email, role: fbRole } };
    }
    return {
      ok: false,
      response: NextResponse.json({ error: "db_unavailable" }, { status: 503 }),
    };
  }
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

/**
 * Marcador no início do corpo de uma Suggestion que a transforma num PEDIDO
 * DE EXECUÇÃO pra Friday (botão "⚡ Friday" dos lembretes + motor das Atividades
 * Programadas). A ronda da Friday (box=friday) lista exatamente estes.
 */
export const FRIDAY_MARKER = "⚡ EXECUTAR";

export function badRequest(message: string, details?: unknown): NextResponse {
  return NextResponse.json({ error: "bad_request", message, details }, { status: 400 });
}

export function notFound(): NextResponse {
  return NextResponse.json({ error: "not_found" }, { status: 404 });
}
