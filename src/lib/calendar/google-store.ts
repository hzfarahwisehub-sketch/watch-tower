// Persistência das contas de Google Calendar por usuário do Watch Tower.
// MULTI-CONTA: um mesmo login pode conectar várias contas Google (ex.: a
// pessoal + a adm). Guardamos a lista como um JSON CRIPTOGRAFADO no campo
// `encRefresh` (reusa o cofre MAIL_CRED_KEY), então NÃO precisa migração de
// schema — a tabela continua 1 linha por usuário. O access token nunca é
// salvo (derivado em runtime a partir do refresh token).
import { prisma } from "@/lib/prisma";
import { encryptSecret, decryptSecret, mailCryptoReady } from "@/lib/mail/crypto";

export function cryptoReady(): boolean {
  return mailCryptoReady();
}

export interface StoredAccount {
  googleEmail: string; // "" se conta antiga sem e-mail capturado
  refreshToken: string;
  /** id da agenda secundária "Watch Tower" criada nessa conta (cache, sem
   *  migração de schema). Descoberto/gravado no 1º sync. */
  wtCalendarId?: string;
}

type Row = { googleEmail: string | null; encRefresh: string; createdAt: Date };

/** Decodifica a lista de contas guardada. Compat: se o blob antigo for um
 *  refresh token cru (não-JSON), trata como 1 conta só. */
function parseAccounts(row: { googleEmail: string | null; encRefresh: string }): StoredAccount[] {
  let dec: string;
  try {
    dec = decryptSecret(row.encRefresh);
  } catch {
    return []; // chave trocada / blob corrompido
  }
  try {
    const arr = JSON.parse(dec);
    if (Array.isArray(arr)) {
      return arr
        .filter((a) => a && typeof a.refreshToken === "string" && a.refreshToken)
        .map((a) => ({
          googleEmail: typeof a.googleEmail === "string" ? a.googleEmail : "",
          refreshToken: a.refreshToken,
          ...(typeof a.wtCalendarId === "string" && a.wtCalendarId ? { wtCalendarId: a.wtCalendarId } : {}),
        }));
    }
  } catch {
    /* não é JSON → formato antigo (token cru) */
  }
  return [{ googleEmail: row.googleEmail ?? "", refreshToken: dec }];
}

function summaryOf(accounts: StoredAccount[]): string | null {
  const list = accounts.map((a) => a.googleEmail).filter(Boolean);
  return list.length ? list.join(", ") : null;
}

async function loadRow(userEmail: string): Promise<Row | null> {
  return prisma.googleCalendarAccount.findUnique({ where: { userEmail } });
}

/** Lista as contas conectadas (só os e-mails, sem token). */
export async function listAccounts(userEmail: string): Promise<{ googleEmail: string }[]> {
  const row = await loadRow(userEmail);
  if (!row) return [];
  return parseAccounts(row).map((a) => ({ googleEmail: a.googleEmail }));
}

/** Contas conectadas COM o refresh token (pra buscar eventos). */
export async function getAccountsWithTokens(userEmail: string): Promise<StoredAccount[]> {
  const row = await loadRow(userEmail);
  if (!row) return [];
  return parseAccounts(row);
}

/** Adiciona/atualiza uma conta Google. Faz upsert por googleEmail (reconectar
 *  a mesma conta troca o token, não duplica). */
export async function saveAccount(
  userEmail: string,
  googleEmail: string | null,
  refreshToken: string,
): Promise<void> {
  const row = await loadRow(userEmail);
  const current = row ? parseAccounts(row) : [];
  const gid = (googleEmail ?? "").toLowerCase();
  // Preserva o id da agenda "Watch Tower" já descoberta pra essa conta, pra
  // reconectar (troca de token) não perder o cache e recriar agenda duplicada.
  const prevSame = current.find((a) =>
    gid ? a.googleEmail.toLowerCase() === gid : a.googleEmail === "",
  );
  // remove a mesma conta (por e-mail) se já existir; se o e-mail vier vazio,
  // substitui qualquer conta-sem-email pra não acumular "desconhecidas".
  const kept = current.filter((a) =>
    gid ? a.googleEmail.toLowerCase() !== gid : a.googleEmail !== "",
  );
  kept.push({
    googleEmail: googleEmail ?? "",
    refreshToken,
    ...(prevSame?.wtCalendarId ? { wtCalendarId: prevSame.wtCalendarId } : {}),
  });
  const enc = encryptSecret(JSON.stringify(kept));
  await prisma.googleCalendarAccount.upsert({
    where: { userEmail },
    create: { userEmail, googleEmail: summaryOf(kept), encRefresh: enc },
    update: { encRefresh: enc, googleEmail: summaryOf(kept) },
  });
}

/** Remove UMA conta (por e-mail). Se sobrar zero, apaga a linha. */
export async function removeAccount(userEmail: string, googleEmail: string): Promise<void> {
  const row = await loadRow(userEmail);
  if (!row) return;
  const gid = googleEmail.toLowerCase();
  const kept = parseAccounts(row).filter((a) => a.googleEmail.toLowerCase() !== gid);
  if (kept.length === 0) {
    await prisma.googleCalendarAccount.deleteMany({ where: { userEmail } });
    return;
  }
  const enc = encryptSecret(JSON.stringify(kept));
  await prisma.googleCalendarAccount.update({
    where: { userEmail },
    data: { encRefresh: enc, googleEmail: summaryOf(kept) },
  });
}

/** Remove TODAS as contas do usuário. */
export async function removeAllAccounts(userEmail: string): Promise<void> {
  await prisma.googleCalendarAccount.deleteMany({ where: { userEmail } });
}

/** Grava o id da agenda "Watch Tower" descoberta/criada pra uma conta (cache). */
export async function setWtCalendarId(
  userEmail: string,
  googleEmail: string,
  calId: string,
): Promise<void> {
  const row = await loadRow(userEmail);
  if (!row) return;
  const accounts = parseAccounts(row);
  const gid = (googleEmail || "").toLowerCase();
  let changed = false;
  const next = accounts.map((a) => {
    const same = gid ? a.googleEmail.toLowerCase() === gid : a.googleEmail === "";
    if (same && a.wtCalendarId !== calId) {
      changed = true;
      return { ...a, wtCalendarId: calId };
    }
    return a;
  });
  if (!changed) return;
  const enc = encryptSecret(JSON.stringify(next));
  await prisma.googleCalendarAccount.update({
    where: { userEmail },
    data: { encRefresh: enc, googleEmail: summaryOf(next) },
  });
}
