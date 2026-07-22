// Helpers das rotas de composição (send/draft). Parsing + validação dos campos
// do formulário, com limites pra caber na resposta serverless e evitar abuso.
import type { OutgoingAttachment } from "./send";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const MAX_RECIPIENTS = 50;
export const MAX_TOTAL_ATTACH = 4 * 1024 * 1024; // 4MB (limite de request serverless)
export const MAX_SUBJECT = 500;
export const MAX_BODY = 200_000; // ~200KB de texto
export const MAX_HTML = 1_000_000; // ~1MB de HTML (imagens viram cid, não incham o HTML)
export const MAX_INLINE_IMAGES = 20;
// cid seguro pra referenciar no HTML e no header Content-ID (sem injeção de MIME).
const CID_RE = /^[A-Za-z0-9._@+-]{1,120}$/;

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
  /** Corpo em HTML (editor rico). undefined quando o corpo é só texto puro. */
  html?: string;
  inReplyTo?: string;
  references?: string[];
  /** Anexos comuns + imagens inline (estas com cid + contentDisposition inline). */
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
  const htmlRaw = ((form.get("html") as string) ?? "").slice(0, MAX_HTML);
  const html = htmlRaw.trim() ? htmlRaw : undefined;
  const inReplyTo = ((form.get("inReplyTo") as string) ?? "").trim() || undefined;
  const refsRaw = ((form.get("references") as string) ?? "").trim();
  const references = refsRaw ? refsRaw.split(/\s+/).slice(0, 50) : undefined;

  // Teto de 4MB compartilhado entre anexos comuns E imagens inline (ambos
  // viajam como partes MIME no mesmo request serverless).
  let total = 0;
  const attachments: OutgoingAttachment[] = [];

  // anexos comuns
  const files = form.getAll("attachments").filter((f): f is File => f instanceof File);
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

  // imagens inline: cada File em "inlineImages" casa por ordem com um cid em
  // "inlineCids"; entram como anexo inline (cid + contentDisposition inline)
  // referenciado no HTML por <img src="cid:…">.
  const inlineFiles = form.getAll("inlineImages").filter((f): f is File => f instanceof File);
  if (inlineFiles.length) {
    let inlineCids: string[] = [];
    try {
      const parsed = JSON.parse(((form.get("inlineCids") as string) ?? "[]"));
      if (Array.isArray(parsed)) inlineCids = parsed.map((c) => String(c));
    } catch {
      inlineCids = [];
    }
    if (inlineFiles.length > MAX_INLINE_IMAGES) return { ok: false, error: "attachments_too_large" };
    for (let i = 0; i < inlineFiles.length; i++) {
      const f = inlineFiles[i];
      if (f.size === 0) continue;
      const cid = inlineCids[i];
      // sem cid válido ou não é imagem → ignora (não vira anexo fantasma)
      if (!cid || !CID_RE.test(cid)) continue;
      if (!/^image\//i.test(f.type || "")) continue;
      total += f.size;
      if (total > MAX_TOTAL_ATTACH) return { ok: false, error: "attachments_too_large" };
      const buf = Buffer.from(await f.arrayBuffer());
      attachments.push({
        filename: f.name || "imagem",
        content: buf,
        contentType: f.type || "application/octet-stream",
        cid,
        contentDisposition: "inline",
      });
    }
  }

  return { ok: true, to, cc, bcc, subject, text, html, inReplyTo, references, attachments };
}
