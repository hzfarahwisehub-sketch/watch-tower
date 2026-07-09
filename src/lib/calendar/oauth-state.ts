// Leitura verificada do `state` do OAuth do Google Calendar — ISOLADA de propósito
// (arquivo próprio) pra não colidir com edições concorrentes em google.ts.
//
// O `state` é assinado no /api/calendar/google/auth (quando a sessão e o
// isFounder já foram checados) e carrega o e-mail do usuário. Verificando a
// assinatura aqui, o /callback descobre QUEM é sem depender do cookie de sessão
// sobreviver à volta do Google (SameSite / contexto de PWA / expiração de 24h dos
// não-admin). O formato TEM que casar com signState() em google.ts:
//   state = `${base64url(email)}.${nonce}.${hmac}`
//   hmac  = HMAC_SHA256(secret, `${id}.${nonce}`).hex.slice(0,32)
import crypto from "node:crypto";

function stateSecret(): string {
  return process.env.CALENDAR_FEED_SECRET || process.env.CRON_SECRET || "wt-oauth-state";
}

/** Verifica a assinatura do state e devolve o e-mail que ele carrega, ou null se
 *  inválido/adulterado. Não toca em sessão nem em banco. */
export function readVerifiedState(state: string): string | null {
  const parts = (state || "").split(".");
  if (parts.length !== 3) return null;
  const [id, nonce, mac] = parts;
  if (!id || !nonce || !mac) return null;
  const expected = crypto
    .createHmac("sha256", stateSecret())
    .update(`${id}.${nonce}`)
    .digest("hex")
    .slice(0, 32);
  try {
    if (!crypto.timingSafeEqual(Buffer.from(mac), Buffer.from(expected))) return null;
  } catch {
    return null;
  }
  try {
    const email = Buffer.from(id, "base64url").toString("utf8").trim();
    return email || null;
  } catch {
    return null;
  }
}
