// Tipos do Inbox Fase 3 compartilhados entre server (rotas /api/mail/*) e
// client (InboxCard/MailViewer). Só dados — nunca credenciais.

/**
 * Estado de uma conta no painel:
 *  - live     → autenticou e trouxe contadores
 *  - pending  → servidor recusou login (senha ainda não aplicada no cPanel)
 *  - off      → sem senha configurada no servidor (env ausente)
 *  - error    → falha temporária de conexão (timeout/rede)
 */
export type MailAccountState = "live" | "pending" | "off" | "error";

/**
 * Pastas navegáveis do Inbox Fase 3. "inbox" é universal ("INBOX"); as demais
 * são resolvidas no servidor pelo flag SPECIAL-USE (\Sent/\Drafts/\Trash) com
 * fallback pros nomes convencionais (INBOX.Sent, [Gmail]/Sent Mail, etc.).
 */
export const MAILBOX_KINDS = ["inbox", "sent", "drafts", "trash"] as const;
export type MailboxKind = (typeof MAILBOX_KINDS)[number];

/** Sanitiza o ?mailbox= da URL/body: valor desconhecido → "inbox". */
export function asMailboxKind(v: string | null | undefined): MailboxKind {
  return v && (MAILBOX_KINDS as readonly string[]).includes(v) ? (v as MailboxKind) : "inbox";
}

export interface MailAccountStatus {
  id: string;
  address: string;
  kind: "shared" | "personal";
  icon: string;
  state: MailAccountState;
  unseen: number;
  total: number;
  lastSubject: string | null;
  lastFrom: string | null;
  lastDate: string | null; // ISO
  webmailUrl: string | null;
  checkedAt: string; // ISO
}

export interface MailStatusResponse {
  accounts: MailAccountStatus[];
  personalDbDown?: boolean;
  checkedAt: string;
}

export interface MailListItem {
  uid: number;
  subject: string;
  fromName: string;
  fromAddress: string;
  date: string | null; // ISO
  seen: boolean;
}

export interface MailListResponse {
  account: string;
  total: number;
  unseen: number;
  offset: number;
  items: MailListItem[];
  /** Pasta que a lista representa (eco do ?mailbox=). */
  mailbox?: MailboxKind;
  /** true quando a lista é resultado de busca (?q=). */
  search?: boolean;
}

export interface MailAttachmentMeta {
  index: number;
  filename: string;
  contentType: string;
  size: number;
}

export interface MailDetail {
  uid: number;
  subject: string;
  fromName: string;
  fromAddress: string;
  to: string[];
  date: string | null;
  html: string | null; // sanitizado no servidor
  text: string | null;
  attachments: MailAttachmentMeta[];
  /** Message-ID do original (pra encadear resposta via In-Reply-To/References) */
  messageId: string | null;
  references: string[];
  /** cc do original (pra "Responder a todos") */
  cc: string[];
  /** true quando havia imagens remotas e elas foram bloqueadas (privacidade) */
  remoteImagesBlocked: boolean;
  /**
   * Mensagem excede o limite que conseguimos carregar/servir com segurança
   * (fonte > MAX_SOURCE_BYTES ou corpo grande demais pra resposta serverless).
   * Quando true, corpo e anexos podem vir incompletos → o viewer manda pro
   * webmail em vez de exibir dado parcial.
   */
  oversized: boolean;
}

export interface PersonalAccountInfo {
  id: string;
  address: string;
  host: string;
  port: number;
  createdAt: string;
}
