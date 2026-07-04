// Persistência do refresh token do Google Calendar por usuário (criptografado,
// reusa o cofre MAIL_CRED_KEY). O access token nunca é salvo (derivado em runtime).
import { prisma } from "@/lib/prisma";
import { encryptSecret, decryptSecret, mailCryptoReady } from "@/lib/mail/crypto";

export function cryptoReady(): boolean {
  return mailCryptoReady();
}

export async function saveRefreshToken(
  userEmail: string,
  refreshToken: string,
  googleEmail: string | null,
): Promise<void> {
  const enc = encryptSecret(refreshToken);
  await prisma.googleCalendarAccount.upsert({
    where: { userEmail },
    create: { userEmail, googleEmail, encRefresh: enc },
    update: { encRefresh: enc, ...(googleEmail ? { googleEmail } : {}) },
  });
}

export async function getRefreshToken(userEmail: string): Promise<string | null> {
  const row = await prisma.googleCalendarAccount.findUnique({ where: { userEmail } });
  if (!row) return null;
  try {
    return decryptSecret(row.encRefresh);
  } catch {
    return null; // chave trocada/blob corrompido
  }
}

export async function getConnection(
  userEmail: string,
): Promise<{ googleEmail: string | null; createdAt: string } | null> {
  const row = await prisma.googleCalendarAccount.findUnique({ where: { userEmail } });
  if (!row) return null;
  return { googleEmail: row.googleEmail, createdAt: row.createdAt.toISOString() };
}

export async function deleteConnection(userEmail: string): Promise<void> {
  await prisma.googleCalendarAccount.deleteMany({ where: { userEmail } });
}
