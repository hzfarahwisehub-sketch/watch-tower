/**
 * GET /api/mail/attachment?account=<id>&uid=<n>&index=<i> — baixa um anexo.
 * Teto de 4MB (limite de resposta serverless); acima disso, 413 e o usuário
 * baixa pelo webmail (link no viewer).
 */
import { NextRequest, NextResponse } from "next/server";
import { requireSession, notFound, badRequest } from "@/lib/api-helpers";
import { resolveAccount } from "@/lib/mail/accounts";
import { fetchAttachment } from "@/lib/mail/imap";
import { rateAllow } from "@/lib/mail/ratelimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

/** Nome seguro pro Content-Disposition (sem quebrar o header). */
function safeFilename(name: string): string {
  return name.replace(/[\r\n"\\;]/g, "_").slice(0, 150) || "anexo";
}

export async function GET(req: NextRequest) {
  const gate = await requireSession();
  if (!gate.ok) return gate.response;
  const { session } = gate;

  if (!rateAllow(`mail-attachment:${session.userId}`, 30, 60_000)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  const url = new URL(req.url);
  const accountId = url.searchParams.get("account") || "";
  const uid = Number(url.searchParams.get("uid"));
  const index = Number(url.searchParams.get("index"));
  if (!Number.isInteger(uid) || uid <= 0) return badRequest("uid inválido");
  if (!Number.isInteger(index) || index < 0 || index > 200) return badRequest("index inválido");

  const account = await resolveAccount(accountId, session.email).catch(() => null);
  if (!account) return notFound();
  if (!account.creds) {
    return NextResponse.json({ error: "account_off" }, { status: 409 });
  }

  try {
    const att = await fetchAttachment(account.creds, uid, index);
    if (!att) return notFound();
    const filename = safeFilename(att.filename);
    return new NextResponse(new Uint8Array(att.content), {
      status: 200,
      headers: {
        "Content-Type": att.contentType,
        "Content-Disposition": `attachment; filename="${filename}"; filename*=UTF-8''${encodeURIComponent(filename)}`,
        "Content-Length": String(att.content.length),
        "Cache-Control": "private, no-store",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (err) {
    const msg = String((err as Error)?.message ?? err);
    if (msg.includes("attachment_too_large")) {
      return NextResponse.json({ error: "attachment_too_large" }, { status: 413 });
    }
    if (/timeout/i.test(msg)) {
      return NextResponse.json({ error: "mailbox_timeout" }, { status: 504 });
    }
    return NextResponse.json({ error: "mailbox_unavailable" }, { status: 502 });
  }
}
