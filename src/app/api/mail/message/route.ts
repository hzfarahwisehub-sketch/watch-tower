/**
 * GET /api/mail/message?account=<id>&uid=<n>[&markSeen=1][&images=1]
 * Mensagem completa: MIME parseado no servidor, HTML sanitizado (sem script,
 * links noopener, imagens remotas bloqueadas por padrão — images=1 libera).
 * markSeen=1 marca como lida (vale pra caixa toda, como em qualquer webmail).
 */
import { NextRequest, NextResponse } from "next/server";
import { requireSession, notFound, badRequest } from "@/lib/api-helpers";
import { resolveAccount } from "@/lib/mail/accounts";
import { fetchMessage, bustStatusCache } from "@/lib/mail/imap";
import { rateAllow } from "@/lib/mail/ratelimit";
import { asMailboxKind } from "@/lib/mail/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function GET(req: NextRequest) {
  const gate = await requireSession();
  if (!gate.ok) return gate.response;
  const { session } = gate;

  if (!rateAllow(`mail-message:${session.userId}`, 60, 60_000)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  const url = new URL(req.url);
  const accountId = url.searchParams.get("account") || "";
  const uid = Number(url.searchParams.get("uid"));
  if (!Number.isInteger(uid) || uid <= 0) return badRequest("uid inválido");
  const markSeen = url.searchParams.get("markSeen") === "1";
  const allowRemoteImages = url.searchParams.get("images") === "1";
  const mailbox = asMailboxKind(url.searchParams.get("mailbox"));

  const account = await resolveAccount(accountId, session.email).catch(() => null);
  if (!account) return notFound();
  if (!account.creds) {
    return NextResponse.json({ error: "account_off" }, { status: 409 });
  }

  try {
    const detail = await fetchMessage(account.creds, uid, { markSeen, allowRemoteImages, mailbox });
    if (!detail) return notFound();
    if (markSeen) bustStatusCache(account.address);
    return NextResponse.json(detail);
  } catch (err) {
    const msg = String((err as Error)?.message ?? err);
    if (/timeout/i.test(msg)) {
      return NextResponse.json({ error: "mailbox_timeout" }, { status: 504 });
    }
    return NextResponse.json({ error: "mailbox_unavailable" }, { status: 502 });
  }
}
