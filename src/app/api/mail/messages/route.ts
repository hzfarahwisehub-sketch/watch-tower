/**
 * GET /api/mail/messages?account=<id>&offset=0&limit=25 — lista de envelopes
 * da caixa (mais recentes primeiro). Compartilhada: qualquer logado+allowlist;
 * pessoal: só o dono (senão 404, sem vazar existência).
 */
import { NextRequest, NextResponse } from "next/server";
import { requireSession, notFound } from "@/lib/api-helpers";
import { resolveAccount } from "@/lib/mail/accounts";
import { listMessages } from "@/lib/mail/imap";
import { rateAllow } from "@/lib/mail/ratelimit";
import { asMailboxKind, type MailListResponse } from "@/lib/mail/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function GET(req: NextRequest) {
  const gate = await requireSession();
  if (!gate.ok) return gate.response;
  const { session } = gate;

  if (!rateAllow(`mail-messages:${session.userId}`, 60, 60_000)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  const url = new URL(req.url);
  const accountId = url.searchParams.get("account") || "";
  const offset = Math.max(0, Math.min(10_000, Number(url.searchParams.get("offset")) || 0));
  const limit = Math.max(1, Math.min(50, Number(url.searchParams.get("limit")) || 25));
  const mailbox = asMailboxKind(url.searchParams.get("mailbox"));
  const q = (url.searchParams.get("q") || "").trim().slice(0, 200);

  const account = await resolveAccount(accountId, session.email).catch(() => null);
  if (!account) return notFound();
  if (!account.creds) {
    return NextResponse.json({ error: "account_off" }, { status: 409 });
  }

  try {
    const { total, unseen, items } = await listMessages(
      account.creds,
      mailbox,
      offset,
      limit,
      q || undefined,
    );
    const body: MailListResponse = {
      account: account.id,
      total,
      unseen,
      offset,
      items,
      mailbox,
      search: q.length > 0,
    };
    return NextResponse.json(body);
  } catch (err) {
    const msg = String((err as Error)?.message ?? err);
    if (/timeout/i.test(msg)) {
      return NextResponse.json({ error: "mailbox_timeout" }, { status: 504 });
    }
    return NextResponse.json({ error: "mailbox_unavailable" }, { status: 502 });
  }
}
