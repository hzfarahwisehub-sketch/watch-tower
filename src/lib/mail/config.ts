// Inbox Fase 3 · contas de e-mail CORPORATIVAS compartilhadas.
// A senha NUNCA fica no repositório: vem da env WISEHUB_MAIL_PASSWORD
// (senha única das caixas @wisehubnow.com no cPanel/HostGator). Contas
// PESSOAIS (Hammis/Lucas/Marcela/Jessé) não entram aqui: cada usuário
// cadastra a sua no próprio login (tabela MailAccount, senha criptografada)
// e só o dono enxerga.

export interface SharedMailAccount {
  id: string;
  address: string;
  icon: string;
}

export const MAIL_HOST = process.env.WISEHUB_MAIL_HOST || "mail.wisehubnow.com";
export const MAIL_PORT = 993;

// Webmail cPanel (HostGator) das caixas do domínio — link externo de apoio.
export const WEBMAIL_URL = "https://mail.wisehubnow.com/webmail";

// hzfarah@wisehubnow.com fica FORA por decisão do Hammis (2026-07-01):
// caixas pessoais são por usuário, não compartilhadas. team@ vira
// comunidade@ no cPanel; quando a renomeação acontecer, team@ deixa de
// autenticar (aparece "aguardando") e comunidade@ liga sozinha — aí
// remover team@ daqui.
export const SHARED_ACCOUNTS: SharedMailAccount[] = [
  { id: "adm", address: "adm@wisehubnow.com", icon: "A" },
  { id: "support", address: "support@wisehubnow.com", icon: "S" },
  { id: "suporte", address: "suporte@wisehubnow.com", icon: "?" },
  { id: "comunidade", address: "comunidade@wisehubnow.com", icon: "C" },
  { id: "team", address: "team@wisehubnow.com", icon: "T" },
  { id: "contact", address: "contact@wisehubnow.com", icon: "@" },
  { id: "info", address: "info@wisehubnow.com", icon: "i" },
];

export function sharedPassword(): string | null {
  return process.env.WISEHUB_MAIL_PASSWORD || null;
}

/** Host IMAP conhecido pelo domínio do endereço (contas pessoais). */
export function guessImapHost(address: string): string | null {
  const domain = address.split("@")[1]?.toLowerCase() ?? "";
  if (!domain) return null;
  if (domain === "gmail.com" || domain === "googlemail.com") return "imap.gmail.com";
  if (["outlook.com", "hotmail.com", "live.com", "msn.com"].includes(domain))
    return "outlook.office365.com";
  if (["yahoo.com", "yahoo.com.br"].includes(domain)) return "imap.mail.yahoo.com";
  if (domain === "icloud.com" || domain === "me.com") return "imap.mail.me.com";
  if (domain === "wisehubnow.com") return MAIL_HOST;
  return null;
}

/** Link de webmail externo pelo domínio (fallback genérico: null). */
export function webmailUrlFor(address: string): string | null {
  const domain = address.split("@")[1]?.toLowerCase() ?? "";
  if (domain === "gmail.com" || domain === "googlemail.com") return "https://mail.google.com";
  if (["outlook.com", "hotmail.com", "live.com", "msn.com"].includes(domain))
    return "https://outlook.live.com";
  if (domain === "wisehubnow.com") return WEBMAIL_URL;
  return null;
}
