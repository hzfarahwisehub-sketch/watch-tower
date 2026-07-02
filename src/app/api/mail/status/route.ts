/**
 * GET /api/mail/status — contadores reais do Inbox (Fase 3).
 * Contas compartilhadas (@wisehubnow.com, senha em env) pra todo usuário
 * logado+allowlist + as contas PESSOAIS do próprio usuário (tabela
 * MailAccount). Cache em memória 5min por conta; ?refresh=1 força (mín 30s).
 */
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireSession } from "@/lib/api-helpers";
import { SHARED_ACCOUNTS, MAIL_HOST, MAIL_PORT, sharedPassword, webmailUrlFor } from "@/lib/mail/config";
import { decryptSecret, mailCryptoReady } from "@/lib/mail/crypto";
import { checkAccountCached, type MailCreds, type RawAccountStatus } from "@/lib/mail/imap";
import { rateAllow } from "@/lib/mail/ratelimit";
import type { MailAccountStatus, MailStatusResponse } from "@/lib/mail/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

const OFF: RawAccountStatus = {
  state: "error",
  total: 0,
  unseen: 0,
  lastSubject: null,
  lastFrom: null,
  lastDate: null,
};

export async function GET(req: NextRequest) {
  const gate = await requireSession();
  if (!gate.ok) return gate.response;
  const { session } = gate;

  if (!rateAllow(`mail-status:${session.userId}`, 30, 60_000)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  const force = new URL(req.url).searchParams.get("refresh") === "1";
  const sharedPw = sharedPassword();

  type Pending = { id: string; address: string; kind: "shared" | "personal"; icon: string; creds: MailCreds | null };
  const pending: Pending[] = SHARED_ACCOUNTS.map((a) => ({
    id: a.id,
    address: a.address,
    kind: "shared" as const,
    icon: a.icon,
    creds: sharedPw
      ? { address: a.address, host: MAIL_HOST, port: MAIL_PORT, password: sharedPw }
      : null,
  }));

  // contas pessoais do usuário (se o banco cair, o resto do painel sobrevive)
  let personalDbDown = false;
  try {
    const rows = await prisma.mailAccount.findMany({
      where: { ownerEmail: session.email },
      orderBy: { createdAt: "asc" },
    });
    for (const row of rows) {
      let creds: MailCreds | null = null;
      if (mailCryptoReady()) {
        try {
          creds = {
            address: row.address,
            host: row.host,
            port: row.port,
            password: decryptSecret(row.encPassword),
            guardHost: true, // host controlado pelo usuário → anti-SSRF no connect
          };
        } catch {
          creds = null;
        }
      }
      pending.push({
        id: `p_${row.id}`,
        address: row.address,
        kind: "personal",
        icon: (row.address[0] || "@").toUpperCase(),
        creds,
      });
    }
  } catch {
    personalDbDown = true;
  }

  const checkedAt = new Date().toISOString();
  const accounts: MailAccountStatus[] = await Promise.all(
    pending.map(async (p): Promise<MailAccountStatus> => {
      const raw: RawAccountStatus = p.creds ? await checkAccountCached(p.creds, force) : OFF;
      return {
        id: p.id,
        address: p.address,
        kind: p.kind,
        icon: p.icon,
        state: p.creds ? raw.state : "off",
        unseen: raw.unseen,
        total: raw.total,
        lastSubject: raw.lastSubject,
        lastFrom: raw.lastFrom,
        lastDate: raw.lastDate,
        webmailUrl: webmailUrlFor(p.address),
        checkedAt,
      };
    }),
  );

  const body: MailStatusResponse = { accounts, checkedAt };
  if (personalDbDown) body.personalDbDown = true;
  return NextResponse.json(body);
}
