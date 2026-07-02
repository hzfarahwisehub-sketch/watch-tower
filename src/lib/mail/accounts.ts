// Resolve QUEM vê o quê no Inbox Fase 3 e as credenciais de cada caixa.
//
// Regras (decisão Hammis 2026-07-01):
//  - CORPORATIVAS: só os 4 fundadores (isFounder). Não-fundador não vê nada.
//  - PESSOAL DO FUNDADOR: cada fundador vê SÓ a própria (mapeada pelo login).
//  - SELF-SERVICE (tabela MailAccount): só o dono.
//
// Senhas das @wisehubnow.com vêm por candidatas (Tradeiros*#2026 / Wisehub2026$),
// resolvidas e cacheadas no imap.ts. Gmail usa senha de app (env).
import { prisma } from "@/lib/prisma";
import {
  MAIL_HOST,
  MAIL_PORT,
  GMAIL_HOST,
  CORPORATE_ACCOUNTS,
  founderOf,
  isFounder,
  wisehubPasswordCandidates,
  webmailUrlFor,
} from "./config";
import { decryptSecret, mailCryptoReady } from "./crypto";
import type { MailBase, MailCreds } from "./imap";
import { resolveWorkingPassword } from "./imap";

export type AccountKind = "corporate" | "personal" | "self";

/** Descritor estático (sem tocar o banco nem a rede) de uma caixa visível. */
export interface AccountDescriptor {
  id: string;
  address: string;
  icon: string;
  kind: AccountKind;
  base: MailBase;
  /** senhas a tentar; vazio = sem credencial no servidor (estado "off") */
  candidates: string[];
  webmailUrl: string | null;
}

function wisehubBase(address: string): MailBase {
  return { address, host: MAIL_HOST, port: MAIL_PORT };
}
function gmailBase(address: string): MailBase {
  // guardHost=false: host fixo confiável (imap.gmail.com), não é input de usuário
  return { address, host: GMAIL_HOST, port: MAIL_PORT };
}
function envPw(name?: string): string[] {
  if (!name) return [];
  const v = (process.env[name] ?? "").trim();
  return v ? [v] : [];
}

/**
 * Caixas CORPORATIVAS + PESSOAL do fundador (sem self-service, que vem do banco).
 * Retorna [] pra quem não é fundador — o Inbox fica vazio pra Igor & cia.
 */
export function staticDescriptorsFor(sessionEmail: string): AccountDescriptor[] {
  if (!isFounder(sessionEmail)) return [];
  const founder = founderOf(sessionEmail)!;
  const out: AccountDescriptor[] = [];

  // corporativas (todos os fundadores)
  const wisehubPw = wisehubPasswordCandidates();
  for (const c of CORPORATE_ACCOUNTS) {
    if (c.provider === "wisehub") {
      out.push({
        id: `c_${c.id}`,
        address: c.address,
        icon: c.icon,
        kind: "corporate",
        base: wisehubBase(c.address),
        candidates: wisehubPw,
        webmailUrl: webmailUrlFor(c.address),
      });
    } else {
      out.push({
        id: `c_${c.id}`,
        address: c.address,
        icon: c.icon,
        kind: "corporate",
        base: gmailBase(c.address),
        candidates: envPw(c.appPasswordEnv),
        webmailUrl: webmailUrlFor(c.address),
      });
    }
  }

  // pessoal @wisehubnow.com do fundador (só ele)
  out.push({
    id: "me_wh",
    address: founder.personalWisehub,
    icon: (founder.name[0] || "@").toUpperCase(),
    kind: "personal",
    base: wisehubBase(founder.personalWisehub),
    candidates: wisehubPw,
    webmailUrl: webmailUrlFor(founder.personalWisehub),
  });

  // Gmail pessoal do fundador (hoje só o Hammis) — senha de app
  if (founder.personalGmail) {
    out.push({
      id: "me_gmail",
      address: founder.personalGmail.address,
      icon: "G",
      kind: "personal",
      base: gmailBase(founder.personalGmail.address),
      candidates: envPw(founder.personalGmail.appPasswordEnv),
      webmailUrl: webmailUrlFor(founder.personalGmail.address),
    });
  }

  return out;
}

export interface ResolvedAccount {
  id: string;
  address: string;
  kind: AccountKind;
  /** null = sem senha que funcione (off/pending) */
  creds: MailCreds | null;
  webmailUrl: string | null;
}

/** Descritor de uma conta self-service (do banco) do próprio usuário. */
async function selfDescriptor(
  dbId: string,
  sessionEmail: string,
): Promise<AccountDescriptor | null> {
  const row = await prisma.mailAccount.findUnique({ where: { id: dbId } });
  if (!row) return null;
  if (row.ownerEmail.toLowerCase() !== sessionEmail.toLowerCase()) return null;
  let candidates: string[] = [];
  if (mailCryptoReady()) {
    try {
      candidates = [decryptSecret(row.encPassword)];
    } catch {
      candidates = []; // blob corrompido → "off"
    }
  }
  return {
    id: `p_${row.id}`,
    address: row.address,
    icon: (row.address[0] || "@").toUpperCase(),
    kind: "self",
    base: { address: row.address, host: row.host, port: row.port, guardHost: true },
    candidates,
    webmailUrl: webmailUrlFor(row.address),
  };
}

/** Descritor de UMA conta por id, já com autorização aplicada (ou null=404). */
async function descriptorById(
  id: string,
  sessionEmail: string,
): Promise<AccountDescriptor | null> {
  if (id.startsWith("p_")) {
    const dbId = id.slice(2);
    return dbId ? selfDescriptor(dbId, sessionEmail) : null;
  }
  // corporativas + pessoal do fundador são estáticas e já filtradas por sessão
  const list = staticDescriptorsFor(sessionEmail);
  return list.find((d) => d.id === id) ?? null;
}

/**
 * Resolve id → credenciais utilizáveis, aplicando autorização e descobrindo a
 * senha que funciona (candidatas). Retorna null pra conta inexistente OU de
 * outro dono (indistinguível → 404). creds null = existe mas sem senha válida.
 */
export async function resolveAccount(
  id: string,
  sessionEmail: string,
): Promise<ResolvedAccount | null> {
  const d = await descriptorById(id, sessionEmail);
  if (!d) return null;

  let creds: MailCreds | null = null;
  const pw = await resolveWorkingPassword(d.base, d.candidates);
  if (pw) creds = { ...d.base, password: pw };

  return { id: d.id, address: d.address, kind: d.kind, creds, webmailUrl: d.webmailUrl };
}
