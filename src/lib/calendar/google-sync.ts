// Reconciliação de mão dupla WT↔Google, LIMITADA à agenda dedicada "Watch
// Tower" — agora em TODAS as contas Google conectadas pelo usuário (Onda 4).
//
// Regras (previsíveis, sem perda de dado):
//  - WT manda: todo AgendaItem do usuário (pessoal + equipe) é espelhado como
//    evento na agenda "Watch Tower" do Google (create/update) em CADA conta.
//  - Apagou no WT → apaga o evento correspondente no Google (em cada conta).
//  - Criou direto na agenda "Watch Tower" do Google → vira um AgendaItem pessoal
//    no WT (import), e o evento é marcado (wtId) pra vincular os dois lados.
//  - NUNCA apaga um AgendaItem por causa de sumiço do lado do Google (sem perda).
//  - Eventos RICOS: convidados/Meet/cor/lembrete/fuso vivem nativos no Google e
//    são reconstruídos do sidecar de meta guardado no description (ver ./rich.ts).
//  - RECORRÊNCIA: a RRULE do meta vira `recurrence` no master do Google, e volta
//    pro meta no import.
import { prisma } from "@/lib/prisma";
import { googleConfigured, refreshAccessToken } from "./google";
import { getAccountsWithTokens, setWtCalendarId, cryptoReady, type StoredAccount } from "./google-store";
import {
  ensureWtCalendar,
  listWtEvents,
  insertWtEvent,
  patchWtEvent,
  deleteWtEvent,
  tagWtEvent,
  addMeetToEvent,
  remoteToMeta,
  type WtEventInput,
  type RemoteWtEvent,
} from "./google-write";
import { decodeDescription, encodeDescription, rruleToRepeat, type RichMeta } from "./rich";

export interface SyncResult {
  ok: boolean;
  reason?: string;
  pushed: number; // criados no Google
  patched: number; // atualizados no Google
  deleted: number; // apagados no Google (item sumiu no WT)
  imported: number; // eventos do Google que viraram AgendaItem
  errors: number;
  accounts?: number; // contas efetivamente sincronizadas
}

const EMPTY: SyncResult = { ok: false, pushed: 0, patched: 0, deleted: 0, imported: 0, errors: 0 };

// Janela de sincronização: passado recente + próximos meses. Limita custo e
// evita mexer em histórico antigo.
const PAST_MS = 2 * 24 * 60 * 60 * 1000; // 2 dias atrás
const FUTURE_MS = 180 * 24 * 60 * 60 * 1000; // 180 dias à frente
const MAX_IMPORTS = 50; // teto de importação por rodada (anti-runaway), GLOBAL

const EXPIRED_RE = /invalid_grant|unauthorized|google_token_40[01]/i;

type WtItem = {
  id: string;
  title: string;
  description: string | null;
  scheduledAt: Date;
  durationMin: number;
  location: string | null;
};

function toInput(item: WtItem, tzHint: string | null): WtEventInput {
  return {
    wtId: item.id,
    title: item.title,
    description: item.description,
    location: item.location,
    startISO: item.scheduledAt.toISOString(),
    durationMin: item.durationMin,
    timeZone: tzHint,
  };
}

function sameInstant(a: string | null, b: string | null): boolean {
  if (!a || !b) return false;
  return new Date(a).getTime() === new Date(b).getTime();
}

/** O núcleo do item (título/local/texto/horário/duração) mudou em relação ao evento? */
function coreChanged(item: WtItem, existing: RemoteWtEvent, humanDesc: string): boolean {
  return (
    existing.title !== item.title ||
    (existing.location || "") !== (item.location || "") ||
    (existing.description || "") !== (humanDesc || "") ||
    !sameInstant(existing.startISO, item.scheduledAt.toISOString()) ||
    existing.durationMin !== item.durationMin
  );
}

/** Algum campo rico PRESENTE no desejado difere do existente? (SET, não CLEAR —
 *  campo ausente no desejado nunca dispara patch, pra não entrar em loop). */
function richChanged(desired: RichMeta, existing: RichMeta): boolean {
  if (desired.tz && desired.tz !== (existing.tz ?? "")) return true;
  if (desired.attendees && desired.attendees.length) {
    const a = [...desired.attendees].sort().join(",");
    const b = [...(existing.attendees ?? [])].sort().join(",");
    if (a !== b) return true;
  }
  if (desired.colorId && desired.colorId !== (existing.colorId ?? "")) return true;
  if (desired.reminders && desired.reminders.length) {
    const a = desired.reminders.map((r) => `${r.method}:${r.minutes}`).sort().join("|");
    const b = (existing.reminders ?? []).map((r) => `${r.method}:${r.minutes}`).sort().join("|");
    if (a !== b) return true;
  }
  // Compara pela FREQUÊNCIA (diário/semanal/mensal), não pela string crua da
  // RRULE — o Google pode normalizar/reordenar a regra e disparar patch em loop.
  const dRep = rruleToRepeat(desired.rrule);
  if (dRep && dRep !== rruleToRepeat(existing.rrule)) return true;
  return false;
}

/** Quer um Meet e ainda não tem link resolvido no sidecar (evita recriar em cima
 *  de um evento que já veio com Meet do import). */
function wantsFreshMeet(meta: RichMeta): boolean {
  return meta.meet === true && !meta.hangoutLink;
}

class Unauthorized extends Error {}

/** Reconcilia UMA conta. Muta `res`, `items`, `existingIds` e `budget`. Lança
 *  Unauthorized se o token morrer no meio (o chamador pula pra próxima conta). */
async function reconcileAccount(
  access: string,
  calId: string,
  userId: string,
  items: WtItem[],
  existingIds: Set<string>,
  budget: { n: number },
  res: SyncResult,
): Promise<void> {
  const now = Date.now();
  const timeMin = new Date(now - PAST_MS).toISOString();
  const timeMax = new Date(now + FUTURE_MS).toISOString();

  const remote = await listWtEvents(access, calId, timeMin, timeMax);
  const remoteByWtId = new Map<string, RemoteWtEvent>();
  const untagged: RemoteWtEvent[] = [];
  for (const ev of remote) {
    if (ev.wtId) remoteByWtId.set(ev.wtId, ev);
    else untagged.push(ev);
  }

  const isUnauthorized = (e: unknown) => /unauthorized/i.test(String((e as Error)?.message ?? e));

  // ---- WT → Google (push/patch) ----
  // Snapshot dos ids ATUAIS: itens importados nesta rodada entram no fim de
  // `items` e são espelhados nesta mesma conta também.
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const t = item.scheduledAt.getTime();
    const inWindow = t >= now - PAST_MS && t <= now + FUTURE_MS;
    const { text: humanDesc, meta: desired } = decodeDescription(item.description);
    const existing = remoteByWtId.get(item.id);
    const input = toInput(item, existing?.timeZone ?? null);
    try {
      if (existing) {
        const existingMeta = remoteToMeta(existing);
        if (coreChanged(item, existing, humanDesc) || richChanged(desired, existingMeta)) {
          await patchWtEvent(access, calId, existing.eventId, input);
          res.patched++;
        }
        if (wantsFreshMeet(desired) && !existing.hangoutLink) {
          await addMeetToEvent(access, calId, existing.eventId).catch(() => {});
        }
      } else if (inWindow) {
        const eid = await insertWtEvent(access, calId, input);
        res.pushed++;
        if (wantsFreshMeet(desired)) {
          await addMeetToEvent(access, calId, eid).catch(() => {});
        }
      }
    } catch (e) {
      if (isUnauthorized(e)) throw new Unauthorized();
      res.errors++;
    }
  }

  // ---- WT → Google (apagar eventos cujo item sumiu no WT) ----
  for (const [wtId, ev] of remoteByWtId) {
    if (existingIds.has(wtId)) continue; // item ainda existe (mesmo fora da janela)
    try {
      await deleteWtEvent(access, calId, ev.eventId);
      res.deleted++;
    } catch (e) {
      if (isUnauthorized(e)) throw new Unauthorized();
      res.errors++;
    }
  }

  // ---- Google → WT (importar eventos criados direto no Google) ----
  for (const ev of untagged) {
    if (budget.n <= 0) break;
    if (!ev.startISO) continue;
    const start = new Date(ev.startISO);
    if (Number.isNaN(start.getTime())) continue;
    try {
      const meta = remoteToMeta(ev);
      const description = encodeDescription(ev.description, meta);
      const created = await prisma.agendaItem.create({
        data: {
          userId,
          scope: "personal",
          title: ev.title,
          description,
          scheduledAt: start,
          durationMin: ev.durationMin,
          location: ev.location,
        },
        select: { id: true },
      });
      try {
        // Vincula o evento ao item recém-criado. Se falhar, desfaz o item pra
        // não reimportar (e duplicar) na próxima rodada.
        await tagWtEvent(access, calId, ev.eventId, created.id);
      } catch (tagErr) {
        await prisma.agendaItem.delete({ where: { id: created.id } }).catch(() => {});
        throw tagErr;
      }
      res.imported++;
      budget.n--;
      // Propaga na mesma rodada pras contas seguintes (e evita apagar por engano).
      items.push({
        id: created.id,
        title: ev.title,
        description,
        scheduledAt: start,
        durationMin: ev.durationMin,
        location: ev.location,
      });
      existingIds.add(created.id);
    } catch (e) {
      if (isUnauthorized(e)) throw new Unauthorized();
      res.errors++;
    }
  }
}

/** Reconcilia a agenda do WT com a agenda "Watch Tower" do Google em TODAS as
 *  contas conectadas do usuário. */
export async function reconcile(userEmail: string, userId: string): Promise<SyncResult> {
  if (!googleConfigured() || !cryptoReady()) return { ...EMPTY, reason: "not_configured" };

  let accounts: StoredAccount[];
  try {
    accounts = await getAccountsWithTokens(userEmail);
  } catch {
    return { ...EMPTY, reason: "db_unavailable" };
  }
  if (accounts.length === 0) return { ...EMPTY, reason: "no_accounts" };

  // TODOS os itens do usuário (pessoal + equipe), SEM filtro de janela — o
  // conjunto de "ids que existem" precisa ser completo pra nunca apagar no
  // Google um evento cujo item ainda existe fora da janela.
  let items: WtItem[];
  try {
    items = await prisma.agendaItem.findMany({
      where: { OR: [{ userId, scope: "personal" }, { scope: "team" }] },
      select: { id: true, title: true, description: true, scheduledAt: true, durationMin: true, location: true },
    });
  } catch {
    return { ...EMPTY, reason: "db_unavailable" };
  }
  const existingIds = new Set(items.map((i) => i.id));

  const res: SyncResult = { ok: true, pushed: 0, patched: 0, deleted: 0, imported: 0, errors: 0, accounts: 0 };
  const budget = { n: MAX_IMPORTS };
  const reasons: string[] = [];
  let anyOk = false;

  for (const target of accounts) {
    let access: string;
    try {
      access = await refreshAccessToken(target.refreshToken);
    } catch (e) {
      const m = String((e as Error)?.message ?? e);
      reasons.push(EXPIRED_RE.test(m) ? "token_expired" : "refresh_failed");
      continue;
    }

    let calId: string;
    try {
      calId = await ensureWtCalendar(access, target.wtCalendarId);
      if (target.wtCalendarId !== calId) {
        try {
          await setWtCalendarId(userEmail, target.googleEmail, calId);
        } catch {
          /* cache é opcional */
        }
      }
    } catch (e) {
      const m = String((e as Error)?.message ?? e);
      reasons.push(EXPIRED_RE.test(m) ? "token_expired" : "calendar_failed");
      continue;
    }

    try {
      await reconcileAccount(access, calId, userId, items, existingIds, budget, res);
      anyOk = true;
      res.accounts = (res.accounts ?? 0) + 1;
    } catch (e) {
      if (e instanceof Unauthorized) {
        reasons.push("token_expired");
        continue;
      }
      const m = String((e as Error)?.message ?? e);
      reasons.push(EXPIRED_RE.test(m) ? "token_expired" : "list_failed");
      continue;
    }
  }

  if (!anyOk) {
    const reason = reasons.includes("token_expired")
      ? "token_expired"
      : reasons[0] ?? "list_failed";
    return { ...EMPTY, reason };
  }
  return res;
}
