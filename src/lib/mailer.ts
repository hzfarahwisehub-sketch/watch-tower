// Envio de e-mails transacionais do Watch Tower (Resend).
// Usado pelo fluxo de reset de senha. Lazy-init: o constructor do Resend
// explode se a key for vazia, então só instancia quando vai mandar.
import { Resend } from "resend";

function getResend(): Resend {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error("RESEND_API_KEY nao configurada");
  }
  return new Resend(key);
}

const FROM = process.env.EMAIL_FROM ?? "Watch Tower <noreply@wisehubnow.online>";

export async function sendPasswordResetEmail(email: string, url: string): Promise<void> {
  const { error } = await getResend().emails.send({
    from: FROM,
    to: email,
    subject: "Watch Tower · Redefinir senha",
    html: resetHtml(url, email),
    text: resetText(url),
  });
  if (error) {
    throw new Error(`Resend falhou: ${JSON.stringify(error)}`);
  }
}

function resetHtml(url: string, email: string): string {
  return `<!DOCTYPE html>
<html><body style="font-family:Inter,sans-serif;background:#0F0C1E;color:#E8E6F4;padding:32px;">
  <div style="max-width:520px;margin:0 auto;background:#1A1730;border:1px solid rgba(123,160,255,.3);border-radius:14px;padding:32px;">
    <h1 style="font-size:22px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:#7BA0FF;margin:0 0 8px">Watch Tower</h1>
    <p style="color:#9F9DBE;font-size:12px;letter-spacing:2px;text-transform:uppercase;margin:0 0 24px">Monitoramento Global de Imigração</p>
    <p style="font-size:15px;line-height:1.6">Recebemos um pedido pra redefinir a senha desta conta. Clique no botão abaixo pra criar uma senha nova.</p>
    <p><a href="${url}" style="display:inline-block;background:linear-gradient(135deg,#1F55FF,#7BA0FF);color:white;padding:14px 28px;border-radius:10px;text-decoration:none;font-weight:700;letter-spacing:1px;text-transform:uppercase;font-size:13px;margin:16px 0">Redefinir senha</a></p>
    <p style="font-size:12px;color:#9F9DBE;margin-top:24px">O link expira em 1 hora. Solicitado por <b>${email}</b>. Se não foi você, ignore este email — sua senha continua a mesma.</p>
  </div>
</body></html>`;
}

function resetText(url: string): string {
  return `Watch Tower — Redefinir senha\n\nAbra o link pra criar uma senha nova: ${url}\n\nO link expira em 1 hora. Se não foi você, ignore.`;
}

/**
 * E-mail de alerta genérico (ex.: alteração no quadro da equipe, nova
 * solicitação na caixa). Não explode se Resend falhar — apenas loga.
 */
export async function sendAlertEmail(to: string | string[], subject: string, message: string): Promise<void> {
  try {
    const { error } = await getResend().emails.send({
      from: FROM,
      to,
      subject: `Watch Tower · ${subject}`,
      html: alertHtml(subject, message),
      text: `Watch Tower — ${subject}\n\n${message}`,
    });
    if (error) console.warn("[mailer] alerta falhou:", JSON.stringify(error));
  } catch (e) {
    console.warn("[mailer] alerta exception:", e);
  }
}

function alertHtml(subject: string, message: string): string {
  return `<!DOCTYPE html>
<html><body style="font-family:Inter,sans-serif;background:#0F0C1E;color:#E8E6F4;padding:32px;">
  <div style="max-width:520px;margin:0 auto;background:#1A1730;border:1px solid rgba(123,160,255,.3);border-radius:14px;padding:32px;">
    <h1 style="font-size:22px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:#7BA0FF;margin:0 0 8px">Watch Tower</h1>
    <p style="color:#9F9DBE;font-size:12px;letter-spacing:2px;text-transform:uppercase;margin:0 0 24px">${subject}</p>
    <p style="font-size:15px;line-height:1.6">${message}</p>
    <p style="font-size:12px;color:#9F9DBE;margin-top:24px">Aviso automático do Watch Tower · WiseHub US LLC</p>
  </div>
</body></html>`;
}

/** Remetente padrão da Friday pra disparos (convites, avisos, mensagens). */
const FRIDAY_FROM = process.env.FRIDAY_EMAIL_FROM ?? "Friday · WiseHub <friday@wisehubnow.online>";

/**
 * Disparo genérico de e-mail via Resend. Usado pelo endpoint interno
 * /api/internal/send-email (a Friday dispara com o CRON_SECRET). Diferente do
 * sendAlertEmail, NÃO prefixa assunto nem força a moldura de "alerta": manda
 * exatamente o que recebe (se vier só texto, embrulha num HTML neutro). Explode
 * no erro — o caller decide o que fazer.
 */
export async function sendEmail(opts: {
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
  cc?: string | string[];
  bcc?: string | string[];
  from?: string;
  replyTo?: string | string[];
}): Promise<{ id: string | null }> {
  const html = opts.html ?? basicHtml(opts.subject, opts.text ?? opts.subject);
  const { data, error } = await getResend().emails.send({
    from: opts.from ?? FRIDAY_FROM,
    to: opts.to,
    cc: opts.cc,
    bcc: opts.bcc,
    replyTo: opts.replyTo,
    subject: opts.subject,
    html,
    text: opts.text,
  });
  if (error) throw new Error(`Resend falhou: ${JSON.stringify(error)}`);
  return { id: data?.id ?? null };
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/** Moldura neutra (sem o rótulo "alerta") pra disparos diretos só com texto. */
function basicHtml(subject: string, message: string): string {
  const body = escapeHtml(message).replace(/\n/g, "<br>");
  return `<!DOCTYPE html>
<html><body style="font-family:Inter,Arial,sans-serif;background:#0F0C1E;color:#E8E6F4;padding:32px;">
  <div style="max-width:560px;margin:0 auto;background:#1A1730;border:1px solid rgba(123,160,255,.3);border-radius:14px;padding:32px;">
    <h1 style="font-size:22px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:#7BA0FF;margin:0 0 8px">WiseHub</h1>
    <p style="color:#9F9DBE;font-size:12px;letter-spacing:2px;text-transform:uppercase;margin:0 0 24px">${escapeHtml(subject)}</p>
    <div style="font-size:15px;line-height:1.7">${body}</div>
    <p style="font-size:12px;color:#9F9DBE;margin-top:28px">Friday · Assistente estratégica do Hammis · WiseHub</p>
  </div>
</body></html>`;
}
