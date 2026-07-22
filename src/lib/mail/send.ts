// Envio de e-mail (mini-cliente do Inbox Fase 3). SMTP via nodemailer, com as
// mesmas credenciais IMAP resolvidas. Gera o MIME uma vez (MailComposer) pra
// ENVIAR e pra guardar cópia em Enviados. Tudo no servidor.
import nodemailer from "nodemailer";
import MailComposer from "nodemailer/lib/mail-composer";
import type { MailCreds } from "./imap";
import { assertPublicHost } from "./net-guard";

export interface OutgoingAttachment {
  filename: string;
  content: Buffer;
  contentType?: string;
  /** Content-ID pra imagem inline referenciada no HTML por <img src="cid:…">. */
  cid?: string;
  /** "inline" pra imagem embutida no corpo; ausente = anexo comum. */
  contentDisposition?: "inline" | "attachment";
}

export interface OutgoingMessage {
  fromName?: string;
  fromAddress: string; // sempre a própria conta (sem spoof)
  to: string[];
  cc?: string[];
  bcc?: string[];
  subject: string;
  text?: string;
  html?: string;
  inReplyTo?: string;
  references?: string[];
  attachments?: OutgoingAttachment[];
}

/** SMTP host/porta/secure a partir do host IMAP conhecido. */
export function smtpConfigFor(imapHost: string): { host: string; port: number; secure: boolean } {
  const h = imapHost.toLowerCase();
  if (h === "imap.gmail.com") return { host: "smtp.gmail.com", port: 465, secure: true };
  if (h === "outlook.office365.com")
    return { host: "smtp.office365.com", port: 587, secure: false }; // O365 = STARTTLS
  if (h === "imap.mail.yahoo.com") return { host: "smtp.mail.yahoo.com", port: 465, secure: true };
  if (h === "imap.mail.me.com") return { host: "smtp.mail.me.com", port: 587, secure: false };
  // cPanel/wisehubnow e genéricos: mesmo host, 465 SSL (testado)
  return { host: imapHost, port: 465, secure: true };
}

function mailOptions(msg: OutgoingMessage): Record<string, unknown> {
  return {
    from: msg.fromName ? { name: msg.fromName, address: msg.fromAddress } : msg.fromAddress,
    to: msg.to,
    cc: msg.cc?.length ? msg.cc : undefined,
    bcc: msg.bcc?.length ? msg.bcc : undefined,
    subject: msg.subject,
    text: msg.text || undefined,
    html: msg.html || undefined,
    inReplyTo: msg.inReplyTo || undefined,
    references: msg.references?.length ? msg.references.join(" ") : undefined,
    attachments: msg.attachments?.map((a) => ({
      filename: a.filename,
      content: a.content,
      contentType: a.contentType,
      // cid + contentDisposition inline: nodemailer monta multipart/related e o
      // cliente casa a imagem com <img src="cid:…"> no HTML.
      ...(a.cid ? { cid: a.cid } : {}),
      ...(a.contentDisposition ? { contentDisposition: a.contentDisposition } : {}),
    })),
  };
}

function compileRaw(msg: OutgoingMessage): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    new MailComposer(mailOptions(msg)).compile().build((err, message) => {
      if (err) reject(err);
      else resolve(message);
    });
  });
}

/** Injeta o cabeçalho Bcc no MIME já compilado (o MailComposer descarta o Bcc).
 *  Só pra RASCUNHOS — preserva os destinatários Cco que o usuário digitou. */
function injectBcc(raw: Buffer, bcc: string[]): Buffer {
  const clean = bcc.map((a) => a.replace(/[\r\n]/g, "")).filter(Boolean); // anti-injection
  if (!clean.length) return raw;
  const idx = raw.indexOf("\r\n\r\n"); // fim do bloco de cabeçalhos
  if (idx === -1) return raw;
  const inject = Buffer.from(`\r\nBcc: ${clean.join(", ")}`);
  return Buffer.concat([raw.subarray(0, idx), inject, raw.subarray(idx)]);
}

/** Compila o MIME bruto. keepBcc=true preserva o Bcc (pra RASCUNHOS — o usuário
 *  ainda vai terminar de enviar; nos Enviados fica false pra não vazar Cco). */
export async function buildRaw(msg: OutgoingMessage, keepBcc = false): Promise<Buffer> {
  const raw = await compileRaw(msg);
  return keepBcc && msg.bcc?.length ? injectBcc(raw, msg.bcc) : raw;
}

/** Envia via SMTP. Lança em erro de conexão/auth/recusa. */
export async function sendViaSmtp(creds: MailCreds, msg: OutgoingMessage): Promise<void> {
  const cfg = smtpConfigFor(creds.host);
  // Anti-SSRF no caminho de ESCRITA (igual ao IMAP): contas self-service têm
  // host controlado pelo usuário; revalida que não resolve pra IP privado a
  // cada envio (fecha TOCTOU/DNS-rebinding pós-cadastro).
  if (creds.guardHost) await assertPublicHost(cfg.host);
  const transporter = nodemailer.createTransport({
    host: cfg.host,
    port: cfg.port,
    secure: cfg.secure,
    auth: { user: creds.address, pass: creds.password },
    connectionTimeout: 15_000,
    greetingTimeout: 15_000,
    socketTimeout: 30_000,
  });
  try {
    await transporter.sendMail(mailOptions(msg));
  } finally {
    transporter.close();
  }
}
