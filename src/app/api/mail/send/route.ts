/**
 * POST /api/mail/send (multipart/form-data) — envia um e-mail e guarda cópia
 * em Enviados. Campos: account, to, cc, bcc, subject, text, inReplyTo,
 * references, attachments[]. Só fundador (resolveAccount já barra o resto).
 * O remetente é SEMPRE o endereço da conta (sem spoof).
 */
import { NextRequest, NextResponse } from "next/server";
import { requireSession, notFound } from "@/lib/api-helpers";
import { resolveAccount } from "@/lib/mail/accounts";
import { sendViaSmtp, buildRaw, type OutgoingMessage } from "@/lib/mail/send";
import { appendToFolder, bustStatusCache } from "@/lib/mail/imap";
import { parseComposeForm } from "@/lib/mail/compose-helpers";
import { rateAllow } from "@/lib/mail/ratelimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function POST(req: NextRequest) {
  const gate = await requireSession();
  if (!gate.ok) return gate.response;
  const { session } = gate;

  if (!rateAllow(`mail-send:${session.userId}`, 20, 60_000)) {
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

  const parsed = await parseComposeForm(form, true);
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
    await sendViaSmtp(account.creds, msg);
  } catch (err) {
    const m = String((err as Error)?.message ?? err);
    if (/auth|credential|535|534/i.test(m)) {
      return NextResponse.json({ error: "smtp_auth" }, { status: 502 });
    }
    if (/timeout/i.test(m)) return NextResponse.json({ error: "smtp_timeout" }, { status: 504 });
    return NextResponse.json({ error: "smtp_failed" }, { status: 502 });
  }

  // guarda cópia em Enviados (não bloqueia o sucesso do envio se falhar)
  let savedToSent = false;
  try {
    const raw = await buildRaw(msg);
    savedToSent = await appendToFolder(account.creds, "sent", raw, ["\\Seen"]);
  } catch {
    savedToSent = false;
  }
  bustStatusCache(account.address);

  return NextResponse.json({ ok: true, savedToSent });
}
