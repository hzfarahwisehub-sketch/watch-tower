/**
 * POST /api/mail/draft (multipart/form-data) — salva um rascunho na pasta
 * Rascunhos (sem enviar). Mesmos campos do send, mas "to" é opcional.
 */
import { NextRequest, NextResponse } from "next/server";
import { requireSession, notFound } from "@/lib/api-helpers";
import { resolveAccount } from "@/lib/mail/accounts";
import { buildRaw, type OutgoingMessage } from "@/lib/mail/send";
import { appendToFolder } from "@/lib/mail/imap";
import { parseComposeForm } from "@/lib/mail/compose-helpers";
import { rateAllow } from "@/lib/mail/ratelimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function POST(req: NextRequest) {
  const gate = await requireSession();
  if (!gate.ok) return gate.response;
  const { session } = gate;

  if (!rateAllow(`mail-draft:${session.userId}`, 30, 60_000)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "invalid_form" }, { status: 400 });
  }

  const accountId = (form.get("account") as string) ?? "";
  const account = await resolveAccount(accountId, session.email).catch(() => null);
  if (!account) return notFound();
  if (!account.creds) return NextResponse.json({ error: "account_off" }, { status: 409 });

  const parsed = await parseComposeForm(form, false);
  if (!parsed.ok) return NextResponse.json({ error: parsed.error }, { status: 400 });

  const msg: OutgoingMessage = {
    fromAddress: account.address,
    to: parsed.to,
    cc: parsed.cc,
    bcc: parsed.bcc,
    subject: parsed.subject,
    text: parsed.text,
    inReplyTo: parsed.inReplyTo,
    references: parsed.references,
    attachments: parsed.attachments,
  };

  try {
    // keepBcc=true: rascunho preserva o Cco (o usuário ainda vai terminar/enviar)
    const raw = await buildRaw(msg, true);
    const ok = await appendToFolder(account.creds, "drafts", raw, ["\\Draft", "\\Seen"]);
    if (!ok) return NextResponse.json({ error: "draft_failed" }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "draft_failed" }, { status: 502 });
  }
}
