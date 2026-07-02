// Helpers das rotas de composição (send/draft). Parsing + validação dos campos
// do formulário, com limites pra caber na resposta serverless e evitar abuso.
import type { OutgoingAttachment } from "./send";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const MAX_RECIPIENTS = 50;
export const MAX_TOTAL_ATTACH = 4 * 1024 * 1024; // 4MB (limite de request serverless)
export const MAX_SUBJECT = 500;
export const MAX_BODY = 200_000; // ~200KB de texto

/** Divide "a@x.com, b@y.com; c@z.com" em lista de e-mails válidos e únicos. */
export function parseRecipients(raw: string | null): string[] {
  if (!raw) return [];
  const parts = raw
    .split(/[,;\n]/)
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
  const out: string[] = [];
  const seen = new Set<string>();
  for (const p of parts) {
    if (EMAIL_RE.test(p) && !seen.has(p)) {
      seen.add(p);
      out.push(p);
    }
  }
  return out;
}

export function isValidRecipientField(raw: string | null): boolean {
  if (!raw || !raw.trim()) return true; // vazio é válido (cc/bcc opcionais)
  const parts = raw.split(/[,;\n]/).map((s) => s.trim()).filter(Boolean);
  return parts.every((p) => EMAIL_RE.test(p.toLowerCase()));
}

export interface ParsedCompose {
  ok: true;
  to: string[];
  cc: string[];
  bcc: string[];
  subject: string;
  text: string;
  inReplyTo?: string;
  references?: string[];
  attachments: OutgoingAttachment[];
}

export interface ParseError {
  ok: false;
  error: string;
}

/** Lê o FormData de send/draft, valida tudo. `requireTo` = false pra rascunho. */
export async function parseComposeForm(
  form: FormData,
  requireTo: boolean,
): Promise<ParsedCompose | ParseError> {
  const toRaw = (form.get("to") as string) ?? "";
  const ccRaw = (form.get("cc") as string) ?? "";
  const bccRaw = (form.get("bcc") as string) ?? "";

  if (![toRaw, ccRaw, bccRaw].every(isValidRecipientField)) {
    return { ok: false, error: "invalid_recipient" };
  }
  const to = parseRecipients(toRaw);
  const cc = parseRecipients(ccRaw);
  const bcc = parseRecipients(bccRaw);

  if (requireTo && to.length === 0) return { ok: false, error: "no_recipient" };
  if (to.length + cc.length + bcc.length > MAX_RECIPIENTS) {
    return { ok: false, error: "too_many_recipients" };
  }

  const subject = ((form.get("subject") as string) ?? "").slice(0, MAX_SUBJECT);
  const text = ((form.get("text") as string) ?? "").slice(0, MAX_BODY);
  const inReplyTo = ((form.get("inReplyTo") as string) ?? "").trim() || undefined;
  const refsRaw = ((form.get("references") as string) ?? "").trim();
  const references = refsRaw ? refsRaw.split(/\s+/).slice(0, 50) : undefined;

  // anexos
  const files = form.getAll("attachments").filter((f): f is File => f instanceof File);
  let total = 0;
  const attachments: OutgoingAttachment[] = [];
  for (const f of files) {
    if (f.size === 0) continue;
    total += f.size;
    if (total > MAX_TOTAL_ATTACH) return { ok: false, error: "attachments_too_large" };
    const buf = Buffer.from(await f.arrayBuffer());
    attachments.push({
      filename: f.name || "anexo",
      content: buf,
      contentType: f.type || "application/octet-stream",
    });
  }

  return { ok: true, to, cc, bcc, subject, text, inReplyTo, references, attachments };
}
