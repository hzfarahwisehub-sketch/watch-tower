// Inbox Fase 3 · arquitetura de contas (decisão Hammis 2026-07-01).
//
// TRÊS categorias de caixa:
//  1. CORPORATIVAS (compartilhadas) — visíveis SÓ pros 4 fundadores. Senha no
//     servidor (candidatas em env, aceita mais de uma pra cobrir a transição).
//  2. PESSOAL DO FUNDADOR — cada fundador tem a sua @wisehubnow.com (e o Hammis
//     também um Gmail pessoal), mapeada pelo LOGIN. Só o dono vê a dele.
//  3. SELF-SERVICE — qualquer conta extra que o fundador cadastre à mão
//     (tabela MailAccount, senha criptografada). Só o dono vê. (Ver accounts.ts)
//
// Não-fundadores (Igor, futuros acessos): login NÃO enxerga nada até o Hammis
// autorizar caso a caso. Nenhuma caixa, nenhum clique, nenhuma leitura.

export const MAIL_HOST = process.env.WISEHUB_MAIL_HOST || "mail.wisehubnow.com";
export const MAIL_PORT = 993;
export const GMAIL_HOST = "imap.gmail.com";

// Webmail cPanel (link externo de apoio).
export const WEBMAIL_URL = "https://mail.wisehubnow.com/webmail";

// ---------------------------------------------------------------------------
// Senhas candidatas das caixas @wisehubnow.com (corporativas + pessoais).
// Aceita mais de uma pra cobrir o período em que umas estão com Tradeiros*#2026
// e outras com Wisehub2026$. O motor tenta cada uma e cacheia a que funcionou
// (imap.ts). Se alguma caixa tiver uma 3ª senha, é só somar aqui/no env.
// ---------------------------------------------------------------------------
export function wisehubPasswordCandidates(): string[] {
  const list = [
    process.env.WISEHUB_MAIL_PASSWORD,
    process.env.WISEHUB_MAIL_PASSWORD_ALT,
    ...(process.env.WISEHUB_MAIL_PASSWORDS?.split("\n") ?? []),
  ]
    .map((p) => (p ?? "").trim())
    .filter(Boolean);
  return Array.from(new Set(list));
}

// ---------------------------------------------------------------------------
// Fundadores: login (e-mail da conta Watch Tower) → nome + caixas pessoais.
// Só estes 4 veem as corporativas e a própria pessoal.
// ---------------------------------------------------------------------------
export interface Founder {
  name: string;
  /** caixa pessoal @wisehubnow.com (senha = candidatas wisehub) */
  personalWisehub: string;
  /** Gmail pessoal (opcional) — senha de app vem de env própria */
  personalGmail?: { address: string; appPasswordEnv: string };
}

export const FOUNDERS: Record<string, Founder> = {
  "hzfarah.wisehub@gmail.com": {
    name: "Hammis",
    personalWisehub: "hzfarah@wisehubnow.com",
    personalGmail: { address: "hzfarah.wisehub@gmail.com", appPasswordEnv: "GMAIL_HZFARAH_APP_PASSWORD" },
  },
  "lucasbin181@gmail.com": {
    name: "Lucas",
    personalWisehub: "lucasbin@wisehubnow.com",
  },
  "marcelanogueiracidadania@gmail.com": {
    name: "Marcela",
    personalWisehub: "marcelabin@wisehubnow.com",
  },
  "diver.wisehub@gmail.com": {
    name: "Jessé",
    personalWisehub: "diver@wisehubnow.com",
  },
};

/** Quem enxerga as caixas corporativas (hoje = os 4 fundadores). Extensível
 *  quando o Hammis autorizar alguém específico. */
export function isFounder(email: string | null | undefined): boolean {
  return !!email && email.toLowerCase() in FOUNDERS;
}

export function founderOf(email: string | null | undefined): Founder | null {
  if (!email) return null;
  return FOUNDERS[email.toLowerCase()] ?? null;
}

// ---------------------------------------------------------------------------
// Caixas CORPORATIVAS (compartilhadas entre os fundadores).
// ---------------------------------------------------------------------------
export interface CorporateAccount {
  id: string;
  address: string;
  icon: string;
  provider: "wisehub" | "gmail";
  /** só pro Gmail corporativo: env da senha de app */
  appPasswordEnv?: string;
}

// @wisehubnow.com (senha = candidatas wisehub). team@ e sales@ ainda existem
// durante a transição (team→comunidade, sales→suporte); remover quando o Hammis
// apagar as antigas no cPanel.
export const CORPORATE_ACCOUNTS: CorporateAccount[] = [
  { id: "adm", address: "adm@wisehubnow.com", icon: "A", provider: "wisehub" },
  { id: "comunidade", address: "comunidade@wisehubnow.com", icon: "C", provider: "wisehub" },
  { id: "support", address: "support@wisehubnow.com", icon: "S", provider: "wisehub" },
  { id: "suporte", address: "suporte@wisehubnow.com", icon: "P", provider: "wisehub" },
  { id: "contact", address: "contact@wisehubnow.com", icon: "@", provider: "wisehub" },
  { id: "info", address: "info@wisehubnow.com", icon: "i", provider: "wisehub" },
  { id: "sales", address: "sales@wisehubnow.com", icon: "$", provider: "wisehub" },
  { id: "team", address: "team@wisehubnow.com", icon: "T", provider: "wisehub" },
  // Gmail corporativo (visível a todos os fundadores) — precisa de senha de app.
  { id: "admgmail", address: "adm.wisehub@gmail.com", icon: "G", provider: "gmail", appPasswordEnv: "GMAIL_ADM_APP_PASSWORD" },
];

/** Host IMAP conhecido pelo domínio do endereço (contas self-service). */
export function guessImapHost(address: string): string | null {
  const domain = address.split("@")[1]?.toLowerCase() ?? "";
  if (!domain) return null;
  if (domain === "gmail.com" || domain === "googlemail.com") return GMAIL_HOST;
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
