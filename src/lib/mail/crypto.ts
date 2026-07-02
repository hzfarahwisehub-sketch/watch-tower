// Criptografia das senhas de contas pessoais (Inbox Fase 3).
// AES-256-GCM com chave de 32 bytes em MAIL_CRED_KEY (64 chars hex, só no
// servidor). Formato do blob: iv:tag:cipher (cada parte em base64).
import crypto from "crypto";

function key(): Buffer {
  const hex = process.env.MAIL_CRED_KEY || "";
  if (!/^[0-9a-fA-F]{64}$/.test(hex)) {
    throw new Error("MAIL_CRED_KEY ausente ou inválida (precisa de 64 chars hex)");
  }
  return Buffer.from(hex, "hex");
}

export function mailCryptoReady(): boolean {
  return /^[0-9a-fA-F]{64}$/.test(process.env.MAIL_CRED_KEY || "");
}

export function encryptSecret(plain: string): string {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", key(), iv);
  const enc = Buffer.concat([cipher.update(plain, "utf8"), cipher.final()]);
  const tag = cipher.getAuthTag();
  return [iv.toString("base64"), tag.toString("base64"), enc.toString("base64")].join(":");
}

export function decryptSecret(blob: string): string {
  const [ivB, tagB, dataB] = blob.split(":");
  if (!ivB || !tagB || !dataB) throw new Error("blob de segredo malformado");
  const decipher = crypto.createDecipheriv("aes-256-gcm", key(), Buffer.from(ivB, "base64"));
  decipher.setAuthTag(Buffer.from(tagB, "base64"));
  return Buffer.concat([
    decipher.update(Buffer.from(dataB, "base64")),
    decipher.final(),
  ]).toString("utf8");
}
