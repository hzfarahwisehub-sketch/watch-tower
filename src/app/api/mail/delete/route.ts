/**
 * POST /api/mail/delete — move uma mensagem da INBOX pra Lixeira (ou apaga de
 * vez se não houver Trash). Body: { account, uid }.
 */
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { requireSession, notFound } from "@/lib/api-helpers";
import { resolveAccount } from "@/lib/mail/accounts";
import { deleteMessage, bustStatusCache } from "@/lib/mail/imap";
import { rateAllow } from "@/lib/mail/ratelimit";
import { MAILBOX_KINDS } from "@/lib/mail/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

const Body = z.object({
  account: z.string().min(1).max(100),
  uid: z.number().int().positive(),
  mailbox: z.enum(MAILBOX_KINDS).optional(),
});

export async function POST(req: NextRequest) {
  const gate = await requireSession();
  if (!gate.ok) return gate.response;
  const { session } = gate;

  if (!rateAllow(`mail-delete:${session.userId}`, 60, 60_000)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid_body" }, { status: 400 });

  const account = await resolveAccount(parsed.data.account, session.email).catch(() => null);
  if (!account) return notFound();
  if (!account.creds) return NextResponse.json({ error: "account_off" }, { status: 409 });

  try {
    await deleteMessage(account.creds, parsed.data.uid, parsed.data.mailbox ?? "inbox");
    bustStatusCache(account.address);
    return NextResponse.json({ ok: true });
  } catch (err) {
    const m = String((err as Error)?.message ?? err);
    if (/timeout/i.test(m)) return NextResponse.json({ error: "mailbox_timeout" }, { status: 504 });
    return NextResponse.json({ error: "mailbox_unavailable" }, { status: 502 });
  }
}
