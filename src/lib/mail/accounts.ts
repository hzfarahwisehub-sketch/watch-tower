// Resolve um id de conta do Inbox → credenciais + autorização.
// Contas compartilhadas: qualquer usuário logado+allowlist. Contas pessoais
// (id "p_<dbid>"): SÓ o dono — pra qualquer outro usuário respondemos como se
// não existisse (404), sem vazar nem a existência da conta.
import { prisma } from "@/lib/prisma";
import {
  SHARED_ACCOUNTS,
  MAIL_HOST,
  MAIL_PORT,
  sharedPassword,
  webmailUrlFor,
} from "./config";
import { decryptSecret, mailCryptoReady } from "./crypto";
import type { MailCreds } from "./imap";

export interface ResolvedAccount {
  id: string;
  address: string;
  kind: "shared" | "personal";
  /** null = sem senha disponível no servidor (estado "off") */
  creds: MailCreds | null;
  webmailUrl: string | null;
}

export async function resolveAccount(
  id: string,
  sessionEmail: string,
): Promise<ResolvedAccount | null> {
  if (id.startsWith("p_")) {
    const dbId = id.slice(2);
    if (!dbId) return null;
    const row = await prisma.mailAccount.findUnique({ where: { id: dbId } });
    if (!row) return null;
    if (row.ownerEmail.toLowerCase() !== sessionEmail.toLowerCase()) return null;
    let creds: MailCreds | null = null;
    if (mailCryptoReady()) {
      try {
        creds = {
          address: row.address,
          host: row.host,
          port: row.port,
          password: decryptSecret(row.encPassword),
          guardHost: true, // host controlado pelo usuário → anti-SSRF no connect
        };
      } catch {
        creds = null; // blob corrompido/chave trocada → conta aparece "off"
      }
    }
    return {
      id,
      address: row.address,
      kind: "personal",
      creds,
      webmailUrl: webmailUrlFor(row.address),
    };
  }

  const shared = SHARED_ACCOUNTS.find((a) => a.id === id);
  if (!shared) return null;
  const pw = sharedPassword();
  return {
    id,
    address: shared.address,
    kind: "shared",
    creds: pw
      ? { address: shared.address, host: MAIL_HOST, port: MAIL_PORT, password: pw }
      : null,
    webmailUrl: webmailUrlFor(shared.address),
  };
}
