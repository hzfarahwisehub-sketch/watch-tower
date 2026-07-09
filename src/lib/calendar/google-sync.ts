// Reconciliação de mão dupla WT↔Google, LIMITADA à agenda dedicada "Watch
// Tower" da 1ª conta Google conectada pelo usuário.
//
// Regras (previsíveis, sem perda de dado):
//  - WT manda: todo AgendaItem do usuário (pessoal + equipe) é espelhado como
//    evento na agenda "Watch Tower" do Google (create/update).
//  - Apagou no WT → apaga o evento correspondente no Google.
//  - Criou direto na agenda "Watch Tower" do Google → vira um AgendaItem pessoal
//    no WT (import), e o evento é marcado (wtId) pra vincular os dois lados.
//  - NUNCA apaga um AgendaItem por causa de sumiço do lado do Google (sem perda).
import { prisma } from "@/lib/prisma";
import { googleConfigured, refreshAccessToken } from "./google";
import { getAccountsWithTokens, setWtCalendarId, cryptoReady } from "./google-store";
import {
  ensureWtCalendar,
  listWtEvents,
  insertWtEvent,
  patchWtEvent,
  deleteWtEvent,
  tagWtEvent,
  type WtEventInput,
} from "./google-write";

export interface SyncResult {
  ok: boolean;
  reason?: string;
  pushed: number; // criados no Google
  patched: number; // atualizados no Google
  deleted: number; // apagados no Google (item sumiu no WT)
  imported: number; // eventos do Google que viraram AgendaItem
  errors: number;
}

const EMPTY: SyncResult = { ok: false, pushed: 0, patched: 0, deleted: 0, imported: 0, errors: 0 };

// Janela de sincronização: passado recente + próximos meses. Limita custo e
// evita mexer em histórico antigo.
const PAST_MS = 2 * 24 * 60 * 60 * 1000; // 2 dias atrás
const FUTURE_MS = 180 * 24 * 60 * 60 * 1000; // 180 dias à frente
const MAX_IMPORTS = 50; // teto de importação por rodada (anti-runaway)

const EXPIRED_RE = /invalid_grant|unauthorized|google_token_40[01]/i;

type WtItem = {
  id: string;
  title: string;
  description: string | null;
  scheduledAt: Date;
  durationMin: number;
  location: string | null;
};

function toInput(item: WtItem): WtEventInput {
  return {
    wtId: item.id,
    title: item.title,
    description: item.description,
    location: item.location,
    startISO: item.scheduledAt.toISOString(),
    durationMin: item.durationMin,
  };
}

function sameInstant(a: string | null, b: string | null): boolean {
  if (!a || !b) return false;
  return new Date(a).getTime() === new Date(b).getTime();
}

/** Reconcilia a agenda do WT do usuário com a agenda "Watch Tower" do Google. */
export async function reconcile(userEmail: string, userId: string): Promise<SyncResult> {
  if (!googleConfigured() || !cryptoReady()) return { ...EMPTY, reason: "not_configured" };

  let accounts;
  try {
    accounts = await getAccountsWithTokens(userEmail);
  } catch {
    return { ...EMPTY, reason: "db_unavailable" };
  }
  if (accounts.length === 0) return { ...EMPTY, reason: "no_accounts" };

  // Alvo de escrita = a 1ª conta conectada.
  const target = accounts[0];

  let access: string;
  try {
    access = await refreshAccessToken(target.refreshToken);
  } catch (e) {
    const m = String((e as Error)?.message ?? e);
    return { ...EMPTY, reason: EXPIRED_RE.test(m) ? "token_expired" : "refresh_failed" };
  }

  let calId: string;
  try {
    calId = await ensureWtCalendar(access, target.wtCalendarId);
    if (target.wtCalendarId !== calId) {
      // grava o cache (best-effort)
      try {
        await setWtCalendarId(userEmail, target.googleEmail, calId);
      } catch {
        /* cache é opcional */
      }
    }
  } catch (e) {
    const m = String((e as Error)?.message ?? e);
    return { ...EMPTY, reason: EXPIRED_RE.test(m) ? "token_expired" : "calendar_failed" };
  }

  const now = Date.now();
  const timeMin = new Date(now - PAST_MS).toISOString();
  const timeMax = new Date(now + FUTURE_MS).toISOString();

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

  let remote;
  try {
    remote = await listWtEvents(access, calId, timeMin, timeMax);
  } catch (e) {
    const m = String((e as Error)?.message ?? e);
    return { ...EMPTY, reason: EXPIRED_RE.test(m) ? "token_expired" : "list_failed" };
  }
  const remoteByWtId = new Map<string, (typeof remote)[number]>();
  const untagged: typeof remote = [];
  for (const ev of remote) {
    if (ev.wtId) remoteByWtId.set(ev.wtId, ev);
    else untagged.push(ev);
  }

  const res: SyncResult = { ok: true, pushed: 0, patched: 0, deleted: 0, imported: 0, errors: 0 };

  // ---- WT → Google (push) ----
  for (const item of items) {
    const t = item.scheduledAt.getTime();
    const inWindow = t >= now - PAST_MS && t <= now + FUTURE_MS;
    const input = toInput(item);
    const existing = remoteByWtId.get(item.id);
    try {
      if (existing) {
        // Um evento que JÁ existe é sempre reconciliado, mesmo se o item saiu da
        // janela (ex.: reagendado pra +200 dias) — senão o Google ficaria com a
        // data velha travada, sem correção.
        const changed =
          existing.title !== item.title ||
          (existing.location || "") !== (item.location || "") ||
          (existing.description || "") !== (item.description || "") ||
          !sameInstant(existing.startISO, item.scheduledAt.toISOString()) ||
          existing.durationMin !== item.durationMin;
        if (changed) {
          await patchWtEvent(access, calId, existing.eventId, input);
          res.patched++;
        }
      } else if (inWindow) {
        // Item novo dentro da janela: cria. Fora da janela: não empurra (evita
        // espelhar histórico distante).
        await insertWtEvent(access, calId, input);
        res.pushed++;
      }
    } catch (e) {
      const m = String((e as Error)?.message ?? e);
      if (/unauthorized/i.test(m)) return { ...res, ok: false, reason: "token_expired" };
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
      const m = String((e as Error)?.message ?? e);
      if (/unauthorized/i.test(m)) return { ...res, ok: false, reason: "token_expired" };
      res.errors++;
    }
  }

  // ---- Google → WT (importar eventos criados direto no Google) ----
  let imports = 0;
  for (const ev of untagged) {
    if (imports >= MAX_IMPORTS) break;
    if (!ev.startISO) continue;
    const start = new Date(ev.startISO);
    if (Number.isNaN(start.getTime())) continue;
    try {
      const created = await prisma.agendaItem.create({
        data: {
          userId,
          scope: "personal",
          title: ev.title,
          description: ev.description,
          scheduledAt: start,
          durationMin: ev.durationMin,
          location: ev.location,
        },
        select: { id: true },
      });
      try {
        // Vincula o evento ao item recém-criado. Se falhar, desfaz o item pra
        // não reimportar (e duplicar) na próxima rodada — o evento fica no
        // Google sem tag e será tentado de novo depois.
        await tagWtEvent(access, calId, ev.eventId, created.id);
      } catch (tagErr) {
        await prisma.agendaItem.delete({ where: { id: created.id } }).catch(() => {});
        throw tagErr;
      }
      res.imported++;
      imports++;
    } catch (e) {
      const m = String((e as Error)?.message ?? e);
      if (/unauthorized/i.test(m)) return { ...res, ok: false, reason: "token_expired" };
      res.errors++;
    }
  }

  return res;
}
