/**
 * Agenda de contatos do usuário logado (Onda 3 do e-mail).
 *  - GET    → lista os SEUS contatos. `?q=` filtra por nome/e-mail (autocomplete).
 *  - POST   → cria/atualiza um contato OU um lote (auto-save ao enviar e-mail).
 *  - DELETE → remove um contato (por id ou por e-mail).
 * Tudo escopado ao userId da sessão — ninguém enxerga nem mexe na agenda alheia.
 */
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireSession, badRequest } from "@/lib/api-helpers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Quantos sugerir no autocomplete (?q=). Sem q, devolve a agenda inteira (teto alto).
const SUGGEST_LIMIT = 8;
const LIST_LIMIT = 500;

export async function GET(req: NextRequest) {
  const gate = await requireSession();
  if (!gate.ok) return gate.response;

  const q = (new URL(req.url).searchParams.get("q") ?? "").trim();
  const where = q
    ? {
        userId: gate.session.userId,
        OR: [
          { name: { contains: q, mode: "insensitive" as const } },
          { email: { contains: q, mode: "insensitive" as const } },
        ],
      }
    : { userId: gate.session.userId };

  try {
    const contacts = await prisma.contact.findMany({
      where,
      orderBy: [{ name: "asc" }, { email: "asc" }],
      take: q ? SUGGEST_LIMIT : LIST_LIMIT,
      select: { id: true, name: true, email: true },
    });
    return NextResponse.json({ contacts });
  } catch {
    return NextResponse.json({ error: "db_unavailable" }, { status: 503 });
  }
}

const ContactInput = z.object({
  email: z.string().trim().toLowerCase().email().max(200),
  name: z.string().trim().max(200).nullish(),
});
// Aceita um contato solto OU um lote { contacts: [...] } (auto-save de vários
// destinatários numa tacada só).
const PostBody = z.union([
  ContactInput,
  z.object({ contacts: z.array(ContactInput).min(1).max(100) }),
]);

export async function POST(req: NextRequest) {
  const gate = await requireSession();
  if (!gate.ok) return gate.response;

  const parsed = PostBody.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return badRequest("invalid_body", parsed.error.format());

  const list = "contacts" in parsed.data ? parsed.data.contacts : [parsed.data];
  const userId = gate.session.userId;

  try {
    let saved = 0;
    for (const c of list) {
      const name = c.name && c.name.trim() ? c.name.trim() : null;
      await prisma.contact.upsert({
        where: { userId_email: { userId, email: c.email } },
        create: { userId, email: c.email, name },
        // Não apaga um nome já salvo quando o auto-save só traz o e-mail.
        update: name ? { name } : {},
      });
      saved++;
    }
    return NextResponse.json({ ok: true, saved });
  } catch {
    return NextResponse.json({ error: "db_unavailable" }, { status: 503 });
  }
}

const DeleteBody = z
  .object({
    id: z.string().min(1).max(100).optional(),
    email: z.string().trim().toLowerCase().email().optional(),
  })
  .refine((b) => !!b.id || !!b.email, { message: "id_or_email_required" });

export async function DELETE(req: NextRequest) {
  const gate = await requireSession();
  if (!gate.ok) return gate.response;

  const parsed = DeleteBody.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return badRequest("invalid_body", parsed.error.format());

  // userId sempre na cláusula → impossível apagar contato de outra pessoa.
  const where = parsed.data.id
    ? { id: parsed.data.id, userId: gate.session.userId }
    : { email: parsed.data.email!, userId: gate.session.userId };

  try {
    const res = await prisma.contact.deleteMany({ where });
    return NextResponse.json({ ok: true, deleted: res.count });
  } catch {
    return NextResponse.json({ error: "db_unavailable" }, { status: 503 });
  }
}
