// Web Push (PWA) · configuração VAPID + helpers de envio.
// Usado pelas rotas /api/push/* e pelos disparos (bulletin novo, lembrete).
import webpush from "web-push";
import { prisma } from "@/lib/prisma";

let configured = false;
function ensureConfigured(): boolean {
  if (configured) return true;
  const pub = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
  const priv = process.env.VAPID_PRIVATE_KEY;
  if (!pub || !priv) return false;
  webpush.setVapidDetails(
    process.env.VAPID_SUBJECT || "mailto:adm@wisehubnow.com",
    pub,
    priv,
  );
  configured = true;
  return true;
}

export function isPushConfigured(): boolean {
  return !!(process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY && process.env.VAPID_PRIVATE_KEY);
}

export type PushPayload = {
  title: string;
  body?: string;
  url?: string;
  tag?: string;
  icon?: string;
};

type SubRow = { endpoint: string; p256dh: string; auth: string };

async function sendToSubscriptions(subs: SubRow[], payload: PushPayload) {
  if (!ensureConfigured() || subs.length === 0) return { sent: 0, pruned: 0 };
  const data = JSON.stringify(payload);
  const dead: string[] = [];
  let sent = 0;

  await Promise.all(
    subs.map(async (s) => {
      try {
        await webpush.sendNotification(
          { endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } },
          data,
        );
        sent++;
      } catch (err) {
        const code = (err as { statusCode?: number }).statusCode;
        // 404/410 = inscrição morta (device desinstalou / expirou) → remove.
        if (code === 404 || code === 410) dead.push(s.endpoint);
      }
    }),
  );

  if (dead.length > 0) {
    await prisma.pushSubscription.deleteMany({ where: { endpoint: { in: dead } } });
  }
  return { sent, pruned: dead.length };
}

/** Envia push pra todos os devices de UM usuário. */
export async function sendPushToUser(userId: string, payload: PushPayload) {
  const subs = await prisma.pushSubscription.findMany({
    where: { userId },
    select: { endpoint: true, p256dh: true, auth: true },
  });
  return sendToSubscriptions(subs, payload);
}

/** Envia push pra TODOS os inscritos (ex.: novo Visa Bulletin). */
export async function sendPushToAll(payload: PushPayload) {
  const subs = await prisma.pushSubscription.findMany({
    select: { endpoint: true, p256dh: true, auth: true },
  });
  return sendToSubscriptions(subs, payload);
}
