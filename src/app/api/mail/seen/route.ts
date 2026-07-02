/**
 * POST /api/mail/seen — marca mensagem como lida/não lida.
 * Body: { account, uid, seen }. Mesma autorização das outras rotas de mail.
 */
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { requireSession, notFound } from "@/lib/api-helpers";
import { resolveAccount } from "@/lib/mail/accounts";
import { setSeen, bustStatusCache } from "@/lib/mail/imap";
import { rateAllow } from "@/lib/mail/ratelimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

const Body = z.object({
  account: z.string().min(1).max(100),
  uid: z.number().int().positive(),
  seen: z.boolean(),
});

export async function POST(req: NextRequest) {
  const gate = await requireSession();
  if (!gate.ok) return gate.response;
  const { session } = gate;

  if (!rateAllow(`mail-seen:${session.userId}`, 60, 60_000)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  const parsed = Body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const account = await resolveAccount(parsed.data.account, session.email).catch(() => null);
  if (!account) return notFound();
  if (!account.creds) {
    return NextResponse.json({ error: "account_off" }, { status: 409 });
  }

  try {
    await setSeen(account.creds, parsed.data.uid, parsed.data.seen);
    bustStatusCache(account.address);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "mailbox_unavailable" }, { status: 502 });
  }
}
