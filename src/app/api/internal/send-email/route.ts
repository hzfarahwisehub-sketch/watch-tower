// Disparo genérico de e-mail pela Friday (via Resend), protegido por CRON_SECRET.
// A Friday chama com o Bearer secret pra mandar convites/avisos sem depender de
// sessão de navegador nem do Gmail. Sai de friday@wisehubnow.online por padrão.
//   POST /api/internal/send-email
//   Authorization: Bearer <CRON_SECRET>
//   { "to": "...", "subject": "...", "text": "...", "html?": "...",
//     "cc?": [...], "bcc?": [...], "from?": "...", "replyTo?": "..." }
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { requireCronSecret } from "@/lib/api-helpers";
import { sendEmail } from "@/lib/mailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const emailList = z.union([z.string().email(), z.array(z.string().email()).min(1)]);

const Body = z
  .object({
    to: emailList,
    subject: z.string().min(1).max(998),
    text: z.string().max(100_000).optional(),
    html: z.string().max(200_000).optional(),
    cc: emailList.optional(),
    bcc: emailList.optional(),
    from: z.string().min(3).max(320).optional(),
    replyTo: emailList.optional(),
  })
  .refine((b) => !!b.text || !!b.html, { message: "text_or_html_required" });

export async function POST(req: NextRequest) {
  const gate = requireCronSecret(req);
  if (!gate.ok) return gate.response;

  const body = await req.json().catch(() => null);
  const parsed = Body.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_body", details: parsed.error.format() }, { status: 400 });
  }

  try {
    const { id } = await sendEmail(parsed.data);
    return NextResponse.json({ ok: true, id }, { status: 201 });
  } catch (e) {
    return NextResponse.json(
      { error: "send_failed", message: e instanceof Error ? e.message : String(e) },
      { status: 502 },
    );
  }
}
