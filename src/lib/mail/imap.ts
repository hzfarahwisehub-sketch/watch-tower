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
// Resolução de senha por CANDIDATAS (caixas @wisehubnow.com podem ter
// Tradeiros*#2026 ou Wisehub2026$ durante a transição). Testa cada candidata
// com um login real e cacheia a que funcionou por endereço, pra não repetir o
// teste toda vez (e não martelar o cPanel com logins falhos → risco cPHulk).
// ---------------------------------------------------------------------------
export interface MailBase {
  address: string;
  host: string;
  port: number;
  guardHost?: boolean;
}

const pwCache = new Map<string, string>(); // key → senha que funcionou
const pwFail = new Map<string, number>(); // key → timestamp do último "todas falharam"
const PW_FAIL_TTL = 10 * 60 * 1000; // não re-tenta todas as candidatas por 10min

function baseKey(base: MailBase): string {
  return `${base.host}:${base.port}:${base.address.toLowerCase()}`;
}

/**
 * Retorna a senha que autentica nesta caixa (dentre as candidatas), ou null se
 * nenhuma funciona / não há candidata. Cacheia o acerto e o "todas falharam".
 */
export async function resolveWorkingPassword(
  base: MailBase,
  candidates: string[],
  force = false,
): Promise<string | null> {
  const key = baseKey(base);
  const cached = pwCache.get(key);
  if (cached && candidates.includes(cached)) return cached;
  if (candidates.length === 0) return null;

  // force (Sync manual) ignora o "todas falharam" pra re-tentar na hora — é o
  // caso de quem acabou de criar/ajustar a caixa no cPanel e quer ver ligar já.
  if (force) {
    pwFail.delete(key);
  } else {
    const failedAt = pwFail.get(key);
    if (failedAt && Date.now() - failedAt < PW_FAIL_TTL) return null;
  }

  for (const pw of candidates) {
    const res = await verifyLogin({ ...base, password: pw });
    if (res.ok) {
      pwCache.set(key, pw);
      pwFail.delete(key);
      return pw;
    }
    // erro de conexão (não-auth) → aborta o loop, é falha temporária de rede,
    // não adianta testar outras senhas nem marcar "todas falharam".
    if (!res.ok && res.reason === "connect") return null;
  }
  pwFail.set(key, Date.now());
  return null;
}

/** Esquece a senha cacheada de um endereço (ex.: op deu auth-fail → mudou). */
export function bustPasswordCache(address: string): void {
  const suffix = `:${address.toLowerCase()}`;
  for (const key of pwCache.keys()) if (key.endsWith(suffix)) pwCache.delete(key);
  for (const key of pwFail.keys()) if (key.endsWith(suffix)) pwFail.delete(key);
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

/** Normaliza o campo References do mailparser (string | string[]) em array. */
function refsOf(refs: string | string[] | undefined): string[] {
  if (!refs) return [];
  return (Array.isArray(refs) ? refs : refs.split(/\s+/)).filter(Boolean);
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
            messageId: parsed.messageId || null,
            references: refsOf(parsed.references),
            cc: toAddressList(parsed.cc),
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
            messageId: parsed.messageId || null,
            references: refsOf(parsed.references),
            cc: toAddressList(parsed.cc),
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
          messageId: parsed.messageId || null,
          references: refsOf(parsed.references),
          cc: toAddressList(parsed.cc),
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

// ---------------------------------------------------------------------------
// Operações de pasta (mini-cliente): mover pra Lixeira, guardar em Enviados /
// Rascunhos. As pastas especiais são achadas pelo flag special-use (\Trash,
// \Sent, \Drafts), com fallback pros nomes cPanel (INBOX.Trash etc.).
// ---------------------------------------------------------------------------

const FALLBACK_FOLDERS: Record<"trash" | "sent" | "drafts", string[]> = {
  trash: ["INBOX.Trash", "Trash", "INBOX.Deleted", "Deleted Items"],
  sent: ["INBOX.Sent", "Sent", "Sent Items", "INBOX.Sent Items"],
  drafts: ["INBOX.Drafts", "Drafts", "INBOX.Draft"],
};

/**
 * Acha a pasta especial que REALMENTE existe. Se o list() funcionar, só devolve
 * nome que esteja na lista (nunca um "INBOX.Trash" fantasma). Se o list() falhar
 * e `blindFallback`, tenta o 1º nome conhecido (melhor esforço).
 */
async function findSpecialFolder(
  client: ImapFlow,
  use: "trash" | "sent" | "drafts",
  blindFallback = true,
): Promise<string | null> {
  const flag = use === "trash" ? "\\Trash" : use === "sent" ? "\\Sent" : "\\Drafts";
  try {
    const list = await client.list();
    const byFlag = list.find((m) => m.specialUse === flag);
    if (byFlag) return byFlag.path;
    const paths = new Set(list.map((m) => m.path));
    for (const name of FALLBACK_FOLDERS[use]) if (paths.has(name)) return name;
    return null; // list ok mas a pasta não existe → não inventa
  } catch {
    return blindFallback ? (FALLBACK_FOLDERS[use][0] ?? null) : null;
  }
}

/** Move uma mensagem da INBOX pra Lixeira (ou apaga de vez se não houver Trash). */
export async function deleteMessage(creds: MailCreds, uid: number): Promise<void> {
  await withTimeout(
    withImap(creds, async (client) => {
      const trash = await findSpecialFolder(client, "trash");
      const lock = await client.getMailboxLock("INBOX");
      try {
        if (trash && trash !== "INBOX") {
          try {
            // messageMove NÃO lança em falha comum (pasta inexistente/permissão):
            // retorna false. Só damos por movido se o retorno for verdadeiro.
            const moved = await client.messageMove(String(uid), trash, { uid: true });
            if (moved) return;
          } catch {
            /* cai pro delete definitivo abaixo */
          }
        }
        // sem Trash (ou move falhou): marca \Deleted e expunge (remoção definitiva)
        await client.messageFlagsAdd(String(uid), ["\\Deleted"], { uid: true });
        await client.messageDelete(String(uid), { uid: true });
      } finally {
        lock.release();
      }
    }),
    25_000,
    `delete ${creds.address}#${uid}`,
  );
}

/** Guarda uma cópia (buffer MIME) numa pasta especial. Cria a pasta se faltar.
 *  Retorna false se não conseguir guardar. */
export async function appendToFolder(
  creds: MailCreds,
  use: "sent" | "drafts",
  raw: Buffer,
  flags: string[],
): Promise<boolean> {
  return withTimeout(
    withImap(creds, async (client) => {
      let folder = await findSpecialFolder(client, use, false);
      if (!folder) {
        // pasta não existe → tenta criar a convencional (INBOX.Sent/INBOX.Drafts)
        const want = FALLBACK_FOLDERS[use][0];
        try {
          await client.mailboxCreate(want);
          folder = want;
        } catch {
          return false;
        }
      }
      try {
        const res = await client.append(folder, raw, flags, new Date());
        return res !== false;
      } catch {
        return false;
      }
    }),
    25_000,
    `append ${use} ${creds.address}`,
  );
}
