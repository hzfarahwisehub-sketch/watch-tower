// Motor IMAP do Inbox Fase 3 (contas @wisehubnow.com no cPanel + pessoais).
// Tudo roda NO SERVIDOR: credenciais nunca chegam ao client. Conexões são
// curtas (conecta → opera → logout) porque rodamos em serverless. O status
// tem cache em memória (TTL 5min; refresh forçado respeita 30s) pra não
// martelar o cPanel a cada abertura do dashboard.
import { ImapFlow } from "imapflow";
import { simpleParser, type AddressObject } from "mailparser";
import type { MailListItem, MailDetail, MailAttachmentMeta } from "./types";
import { sanitizeEmailHtml } from "./sanitize";
import { assertPublicHost } from "./net-guard";

export interface MailCreds {
  address: string;
  host: string;
  port: number;
  password: string;
  /** true = valida (anti-SSRF) que o host não resolve pra IP privado antes de
   *  conectar. Usado nas contas PESSOAIS (host controlado pelo usuário). */
  guardHost?: boolean;
}

export interface RawAccountStatus {
  state: "live" | "pending" | "error";
  total: number;
  unseen: number;
  lastSubject: string | null;
  lastFrom: string | null;
  lastDate: string | null;
}

const MAX_SOURCE_BYTES = 6 * 1024 * 1024; // corpo bruto máximo por mensagem
const MAX_INLINE_IMG = 300 * 1024; // imagem inline (cid) máxima embutida
const MAX_INLINE_BUDGET = 1_500 * 1024; // total de inline por mensagem
export const MAX_ATTACHMENT_BYTES = 4 * 1024 * 1024; // teto de download (resposta serverless)
// Teto do corpo serializado (html+text+inline) pra não estourar o limite de
// ~4.5MB de resposta das funções serverless do Vercel. Acima disso, marca
// oversized e manda pro webmail em vez de servir corpo parcial.
const MAX_BODY_BYTES = 3 * 1024 * 1024;

function isAuthError(err: unknown): boolean {
  const e = err as { authenticationFailed?: boolean; response?: string; message?: string };
  if (e?.authenticationFailed) return true;
  const txt = `${e?.response ?? ""} ${e?.message ?? ""}`;
  return /authentication|auth failed|login failed|invalid credentials/i.test(txt);
}

function withTimeout<T>(p: Promise<T>, ms: number, label: string): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`timeout ${label} (${ms}ms)`)), ms);
    p.then(
      (v) => {
        clearTimeout(timer);
        resolve(v);
      },
      (e) => {
        clearTimeout(timer);
        reject(e);
      },
    );
  });
}

async function withImap<T>(creds: MailCreds, fn: (client: ImapFlow) => Promise<T>): Promise<T> {
  if (creds.guardHost) await assertPublicHost(creds.host);
  const client = new ImapFlow({
    host: creds.host,
    port: creds.port,
    secure: true,
    auth: { user: creds.address, pass: creds.password },
    logger: false,
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 30_000,
  });
  try {
    await client.connect();
    return await fn(client);
  } finally {
    try {
      await client.logout();
    } catch {
      try {
        client.close();
      } catch {
        /* já fechada */
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Status (contadores + última mensagem) com cache
// ---------------------------------------------------------------------------

async function checkAccountLive(creds: MailCreds): Promise<RawAccountStatus> {
  try {
    return await withTimeout(
      withImap(creds, async (client) => {
        const st = await client.status("INBOX", { messages: true, unseen: true });
        const total = st.messages ?? 0;
        const unseen = st.unseen ?? 0;
        let lastSubject: string | null = null;
        let lastFrom: string | null = null;
        let lastDate: string | null = null;
        if (total > 0) {
          const lock = await client.getMailboxLock("INBOX", { readOnly: true });
          try {
            const msg = await client.fetchOne("*", { envelope: true });
            if (msg && msg.envelope) {
              lastSubject = msg.envelope.subject || null;
              const from = msg.envelope.from?.[0];
              lastFrom = from?.name || from?.address || null;
              lastDate = msg.envelope.date ? new Date(msg.envelope.date).toISOString() : null;
            }
          } finally {
            lock.release();
          }
        }
        return { state: "live" as const, total, unseen, lastSubject, lastFrom, lastDate };
      }),
      20_000,
      `status ${creds.address}`,
    );
  } catch (err) {
    const empty = { total: 0, unseen: 0, lastSubject: null, lastFrom: null, lastDate: null };
    if (isAuthError(err)) return { state: "pending", ...empty };
    return { state: "error", ...empty };
  }
}

interface CacheEntry {
  at: number;
  data: RawAccountStatus;
}
const statusCache = new Map<string, CacheEntry>();
const statusInflight = new Map<string, Promise<RawAccountStatus>>();
const STATUS_TTL = 5 * 60 * 1000;
const STATUS_FORCE_MIN = 30 * 1000;

function cacheKey(creds: MailCreds): string {
  return `${creds.host}:${creds.port}:${creds.address.toLowerCase()}`;
}

export async function checkAccountCached(
  creds: MailCreds,
  force = false,
): Promise<RawAccountStatus> {
  const key = cacheKey(creds);
  const hit = statusCache.get(key);
  const maxAge = force ? STATUS_FORCE_MIN : STATUS_TTL;
  if (hit && Date.now() - hit.at < maxAge) return hit.data;
  const running = statusInflight.get(key);
  if (running) return running;
  const p: Promise<RawAccountStatus> = checkAccountLive(creds)
    .then((data) => {
      // Só grava no cache se ESTA promise ainda for a corrente. Um bust (que
      // apaga a entrada do inflight) faz o resultado em voo ser devolvido ao
      // chamador mas descartado do cache, evitando regravar contador obsoleto
      // depois de uma leitura marcar mensagem como lida.
      if (statusInflight.get(key) === p) statusCache.set(key, { at: Date.now(), data });
      return data;
    })
    .finally(() => {
      if (statusInflight.get(key) === p) statusInflight.delete(key);
    });
  statusInflight.set(key, p);
  return p;
}

/** Invalida o status em cache de um endereço (após ler/marcar mensagem). */
export function bustStatusCache(address: string): void {
  const suffix = `:${address.toLowerCase()}`;
  for (const key of statusCache.keys()) {
    if (key.endsWith(suffix)) statusCache.delete(key);
  }
  // também descarta checks em voo: o .then vê que não é mais o corrente e não
  // regrava o cache com o valor pré-leitura.
  for (const key of statusInflight.keys()) {
    if (key.endsWith(suffix)) statusInflight.delete(key);
  }
}

/** Valida credenciais com um login real (cadastro de conta pessoal). */
export async function verifyLogin(
  creds: MailCreds,
): Promise<{ ok: true } | { ok: false; reason: "auth" | "connect" }> {
  try {
    await withTimeout(
      withImap(creds, async () => undefined),
      15_000,
      `verify ${creds.address}`,
    );
    return { ok: true };
  } catch (err) {
    return { ok: false, reason: isAuthError(err) ? "auth" : "connect" };
  }
}

// ---------------------------------------------------------------------------
// Lista de mensagens (envelopes, mais recentes primeiro)
// ---------------------------------------------------------------------------

export async function listMessages(
  creds: MailCreds,
  offset = 0,
  limit = 25,
): Promise<{ total: number; unseen: number; items: MailListItem[] }> {
  return withTimeout(
    withImap(creds, async (client) => {
      const lock = await client.getMailboxLock("INBOX", { readOnly: true });
      try {
        const box = client.mailbox;
        const total = typeof box === "object" && box ? box.exists : 0;
        const unseenSeqs = await client.search({ seen: false });
        const unseen = Array.isArray(unseenSeqs) ? unseenSeqs.length : 0;
        const items: MailListItem[] = [];
        if (total > 0 && offset < total) {
          const hi = total - offset;
          const lo = Math.max(1, hi - limit + 1);
          for await (const msg of client.fetch(`${lo}:${hi}`, {
            envelope: true,
            flags: true,
            uid: true,
          })) {
            const env = msg.envelope;
            const from = env?.from?.[0];
            items.push({
              uid: msg.uid,
              subject: env?.subject || "",
              fromName: from?.name || "",
              fromAddress: from?.address || "",
              date: env?.date ? new Date(env.date).toISOString() : null,
              seen: msg.flags?.has("\\Seen") ?? false,
            });
          }
          items.reverse();
        }
        return { total, unseen, items };
      } finally {
        lock.release();
      }
    }),
    25_000,
    `list ${creds.address}`,
  );
}

// ---------------------------------------------------------------------------
// Mensagem completa (parse + sanitização) e flags
// ---------------------------------------------------------------------------

function toAddressList(value: AddressObject | AddressObject[] | undefined): string[] {
  const arr = Array.isArray(value) ? value : value ? [value] : [];
  return arr
    .flatMap((a) => a.value.map((v) => v.address || ""))
    .filter(Boolean);
}

export async function fetchMessage(
  creds: MailCreds,
  uid: number,
  opts: { markSeen?: boolean; allowRemoteImages?: boolean } = {},
): Promise<MailDetail | null> {
  return withTimeout(
    withImap(creds, async (client) => {
      const lock = await client.getMailboxLock("INBOX", { readOnly: !opts.markSeen });
      try {
        const msg = await client.fetchOne(
          String(uid),
          { source: { maxLength: MAX_SOURCE_BYTES }, size: true },
          { uid: true },
        );
        if (!msg || !msg.source) return null;

        // Fonte truncada? O imapflow faz BODY.PEEK[]<0.N> e o servidor corta o
        // MIME sem erro; o simpleParser não reclama e devolveria anexos/HTML
        // parciais (corrompidos). Detecta comparando RFC822.SIZE (ou o tamanho
        // do buffer batendo no teto) e devolve um detalhe "oversized" — o
        // viewer manda pro webmail em vez de exibir dado incompleto.
        const truncated =
          (typeof msg.size === "number" && msg.size > MAX_SOURCE_BYTES) ||
          msg.source.length >= MAX_SOURCE_BYTES;

        const parsed = await simpleParser(msg.source);

        const from = parsed.from?.value?.[0];
        if (truncated) {
          if (opts.markSeen) {
            try {
              await client.messageFlagsAdd(String(uid), ["\\Seen"], { uid: true });
            } catch {
              /* não bloqueia */
            }
          }
          return {
            uid,
            subject: parsed.subject || "",
            fromName: from?.name || "",
            fromAddress: from?.address || "",
            to: toAddressList(parsed.to),
            date: parsed.date ? parsed.date.toISOString() : null,
            html: null,
            text: null,
            attachments: [],
            remoteImagesBlocked: false,
            oversized: true,
          };
        }

        // imagens inline (cid:) viram data URIs pequenos, pro HTML renderizar
        let html: string | null = typeof parsed.html === "string" ? parsed.html : null;
        const attachments = parsed.attachments ?? [];
        if (html) {
          let budget = MAX_INLINE_BUDGET;
          for (const att of attachments) {
            if (!att.contentId || !att.content) continue;
            const cid = att.contentId.replace(/[<>]/g, "");
            if (!cid || att.size > MAX_INLINE_IMG || att.size > budget) continue;
            const marker = `cid:${cid}`;
            if (!html.includes(marker)) continue;
            const dataUri = `data:${att.contentType};base64,${att.content.toString("base64")}`;
            html = html.split(marker).join(dataUri);
            budget -= att.size;
          }
        }

        let safeHtml: string | null = null;
        let remoteBlocked = false;
        if (html) {
          const r = sanitizeEmailHtml(html, opts.allowRemoteImages ?? false);
          safeHtml = r.html;
          remoteBlocked = r.remoteBlocked;
        }

        const text = parsed.text || null;
        // Teto de corpo serializado: mesmo com a fonte < 6MB, o HTML (com
        // imagens inline embutidas) + texto podem passar do limite de resposta
        // serverless. Nesse caso, oversized → viewer manda pro webmail.
        const bodyBytes =
          (safeHtml ? Buffer.byteLength(safeHtml) : 0) + (text ? Buffer.byteLength(text) : 0);
        const bodyOversized = bodyBytes > MAX_BODY_BYTES;

        if (opts.markSeen) {
          try {
            await client.messageFlagsAdd(String(uid), ["\\Seen"], { uid: true });
          } catch {
            /* não bloqueia a leitura */
          }
        }

        if (bodyOversized) {
          return {
            uid,
            subject: parsed.subject || "",
            fromName: from?.name || "",
            fromAddress: from?.address || "",
            to: toAddressList(parsed.to),
            date: parsed.date ? parsed.date.toISOString() : null,
            html: null,
            text: null,
            attachments: [],
            remoteImagesBlocked: false,
            oversized: true,
          };
        }

        const meta: MailAttachmentMeta[] = attachments
          .map((a, index) => ({ a, index }))
          .filter(({ a }) => !(a.related && a.contentId))
          .map(({ a, index }) => ({
            index,
            filename: a.filename || `anexo-${index + 1}`,
            contentType: a.contentType || "application/octet-stream",
            size: a.size,
          }));

        return {
          uid,
          subject: parsed.subject || "",
          fromName: from?.name || "",
          fromAddress: from?.address || "",
          to: toAddressList(parsed.to),
          date: parsed.date ? parsed.date.toISOString() : null,
          html: safeHtml,
          text,
          attachments: meta,
          remoteImagesBlocked: remoteBlocked,
          oversized: false,
        };
      } finally {
        lock.release();
      }
    }),
    35_000,
    `message ${creds.address}#${uid}`,
  );
}

export async function setSeen(creds: MailCreds, uid: number, seen: boolean): Promise<void> {
  await withTimeout(
    withImap(creds, async (client) => {
      const lock = await client.getMailboxLock("INBOX");
      try {
        if (seen) await client.messageFlagsAdd(String(uid), ["\\Seen"], { uid: true });
        else await client.messageFlagsRemove(String(uid), ["\\Seen"], { uid: true });
      } finally {
        lock.release();
      }
    }),
    20_000,
    `seen ${creds.address}#${uid}`,
  );
}

export async function fetchAttachment(
  creds: MailCreds,
  uid: number,
  index: number,
): Promise<{ filename: string; contentType: string; content: Buffer } | null> {
  return withTimeout(
    withImap(creds, async (client) => {
      const lock = await client.getMailboxLock("INBOX", { readOnly: true });
      try {
        const msg = await client.fetchOne(
          String(uid),
          { source: { maxLength: MAX_SOURCE_BYTES }, size: true },
          { uid: true },
        );
        if (!msg || !msg.source) return null;
        // Fonte truncada = anexo potencialmente corrompido (o att.size viria do
        // base64 já cortado e passaria no teto). Recusa em vez de servir lixo:
        // a rota mapeia pra 413 e o viewer oferece baixar pelo webmail.
        if (
          (typeof msg.size === "number" && msg.size > MAX_SOURCE_BYTES) ||
          msg.source.length >= MAX_SOURCE_BYTES
        ) {
          throw new Error("attachment_too_large");
        }
        const parsed = await simpleParser(msg.source);
        const att = (parsed.attachments ?? [])[index];
        if (!att || !att.content) return null;
        if (att.size > MAX_ATTACHMENT_BYTES) {
          throw new Error("attachment_too_large");
        }
        return {
          filename: att.filename || `anexo-${index + 1}`,
          contentType: att.contentType || "application/octet-stream",
          content: att.content,
        };
      } finally {
        lock.release();
      }
    }),
    35_000,
    `attachment ${creds.address}#${uid}/${index}`,
  );
}
