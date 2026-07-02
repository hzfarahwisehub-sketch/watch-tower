/**
 * Contas de e-mail PESSOAIS do usuário logado (Inbox Fase 3).
 *  - GET    → lista as próprias (sem nenhum segredo)
 *  - POST   → cadastra: valida com LOGIN IMAP REAL antes de salvar; senha
 *             criptografada (AES-256-GCM) — nunca volta pro client
 *  - DELETE → remove uma conta própria
 * Cada usuário só vê e mexe nas SUAS contas (decisão Hammis 2026-07-01).
 */
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { requireSession, badRequest } from "@/lib/api-helpers";
import { guessImapHost } from "@/lib/mail/config";
import { encryptSecret, mailCryptoReady } from "@/lib/mail/crypto";
import { verifyLogin, bustStatusCache } from "@/lib/mail/imap";
import { assertPublicHost } from "@/lib/mail/net-guard";
import { rateAllow } from "@/lib/mail/ratelimit";
import type { PersonalAccountInfo } from "@/lib/mail/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

const MAX_PERSONAL_ACCOUNTS = 5;

// Anti-SSRF: só hostname público válido; nada de IP literal, localhost ou
// faixas privadas. Porta fixa 993 (IMAP sobre TLS).
const HOST_RE = /^[a-z0-9]([a-z0-9-]{0,62}[a-z0-9])?(\.[a-z0-9]([a-z0-9-]{0,62}[a-z0-9])?)+$/i;
function isForbiddenHost(host: string): boolean {
  const h = host.toLowerCase();
  if (h === "localhost" || h.endsWith(".local") || h.endsWith(".internal")) return true;
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(h)) return true; // IPv4 literal
  if (h.includes(":")) return true; // IPv6 literal
  return false;
}

function toInfo(row: {
  id: string;
  address: string;
  host: string;
  port: number;
  createdAt: Date;
}): PersonalAccountInfo {
  return {
    id: `p_${row.id}`,
    address: row.address,
    host: row.host,
    port: row.port,
    createdAt: row.createdAt.toISOString(),
  };
}

export async function GET() {
  const gate = await requireSession();
  if (!gate.ok) return gate.response;
  try {
    const rows = await prisma.mailAccount.findMany({
      where: { ownerEmail: gate.session.email },
      orderBy: { createdAt: "asc" },
    });
    return NextResponse.json({ accounts: rows.map(toInfo) });
  } catch {
    return NextResponse.json({ error: "db_unavailable" }, { status: 503 });
  }
}

const PostBody = z.object({
  address: z.string().trim().toLowerCase().email().max(200),
  password: z.string().min(1).max(256),
  host: z.string().trim().toLowerCase().max(253).optional(),
});

export async function POST(req: NextRequest) {
  const gate = await requireSession();
  if (!gate.ok) return gate.response;
  const { session } = gate;

  if (!rateAllow(`mail-personal:${session.userId}`, 10, 60_000)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }
  if (!mailCryptoReady()) {
    return NextResponse.json({ error: "crypto_off" }, { status: 503 });
  }

  const parsed = PostBody.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return badRequest("dados inválidos");
  const { address, password } = parsed.data;

  const host = parsed.data.host || guessImapHost(address);
  if (!host) {
    return NextResponse.json({ error: "host_required" }, { status: 400 });
  }
  if (!HOST_RE.test(host) || isForbiddenHost(host)) {
    return NextResponse.json({ error: "host_invalid" }, { status: 400 });
  }
  // Anti-SSRF: recusa host que resolve pra IP privado/loopback/reservado.
  try {
    await assertPublicHost(host);
  } catch {
    return NextResponse.json({ error: "host_invalid" }, { status: 400 });
  }

  // Limite de contas: só barra CADASTRO NOVO. Re-submeter um endereço já
  // cadastrado é rotação de senha (upsert) e deve passar mesmo no teto.
  try {
    const existing = await prisma.mailAccount.findUnique({
      where: { ownerEmail_address: { ownerEmail: session.email, address } },
      select: { id: true },
    });
    if (!existing) {
      const count = await prisma.mailAccount.count({ where: { ownerEmail: session.email } });
      if (count >= MAX_PERSONAL_ACCOUNTS) {
        return NextResponse.json({ error: "limit_reached" }, { status: 400 });
      }
    }
  } catch {
    return NextResponse.json({ error: "db_unavailable" }, { status: 503 });
  }

  // valida com login real ANTES de salvar (nada de credencial morta no banco)
  const check = await verifyLogin({ address, host, port: 993, password, guardHost: true });
  if (!check.ok) {
    return NextResponse.json(
      { error: check.reason === "auth" ? "auth_failed" : "connect_failed" },
      { status: 400 },
    );
  }

  try {
    const row = await prisma.mailAccount.upsert({
      where: { ownerEmail_address: { ownerEmail: session.email, address } },
      create: {
        ownerEmail: session.email,
        address,
        host,
        port: 993,
        encPassword: encryptSecret(password),
      },
      update: { host, port: 993, encPassword: encryptSecret(password) },
    });
    bustStatusCache(address);
    return NextResponse.json({ ok: true, account: toInfo(row) });
  } catch {
    return NextResponse.json({ error: "db_unavailable" }, { status: 503 });
  }
}

const DeleteBody = z.object({ id: z.string().min(3).max(100) });

export async function DELETE(req: NextRequest) {
  const gate = await requireSession();
  if (!gate.ok) return gate.response;
  const { session } = gate;

  const parsed = DeleteBody.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return badRequest("dados inválidos");
  const dbId = parsed.data.id.startsWith("p_") ? parsed.data.id.slice(2) : parsed.data.id;

  try {
    // deleteMany com ownerEmail na cláusula → impossível apagar conta alheia
    const res = await prisma.mailAccount.deleteMany({
      where: { id: dbId, ownerEmail: session.email },
    });
    return NextResponse.json({ ok: true, deleted: res.count });
  } catch {
    return NextResponse.json({ error: "db_unavailable" }, { status: 503 });
  }
}
