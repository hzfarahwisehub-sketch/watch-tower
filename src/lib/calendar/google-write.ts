// Escrita no Google Calendar (mão dupla WT↔Google) — LIMITADA à agenda
// secundária "Watch Tower" que o próprio app cria em cada conta (escopo
// `calendar.app.created`). Nunca toca no calendário pessoal do usuário.
//
// Estratégia de idempotência SEM migração de schema:
//  - Evento nascido no WT: id do Google = base32hex(id do AgendaItem), estável.
//    Assim editar/apagar acha o mesmo evento sem guardar mapeamento.
//  - Todo evento que o app cria carrega extendedProperties.private.wtId = cuid,
//    que é a fonte da verdade do vínculo (o reconcile lê por aí).
import { WT_CALENDAR_SUMMARY } from "./google";

const CALENDARS = "https://www.googleapis.com/calendar/v3/calendars";
const CAL_LIST = "https://www.googleapis.com/calendar/v3/users/me/calendarList";
export const WT_TZ = "America/Sao_Paulo";

// --- id determinístico -----------------------------------------------------
const B32HEX = "0123456789abcdefghijklmnopqrstuv";
/** base32hex do texto (só chars 0-9a-v, que é o alfabeto de id de evento do
 *  Google). value nunca passa de ~13 bits acumulados, cabe em 32 bits. */
function base32hex(input: string): string {
  const bytes = Buffer.from(input, "utf8");
  let bits = 0;
  let value = 0;
  let out = "";
  for (const b of bytes) {
    value = (value << 8) | b;
    bits += 8;
    while (bits >= 5) {
      out += B32HEX[(value >>> (bits - 5)) & 31];
      bits -= 5;
    }
  }
  if (bits > 0) out += B32HEX[(value << (5 - bits)) & 31];
  return out;
}
/** id do evento no Google derivado do id do AgendaItem (5–1024 chars, [a-v0-9]). */
export function deterministicEventId(cuid: string): string {
  const enc = base32hex(cuid);
  return enc.length >= 5 ? enc : (enc + "00000").slice(0, 5);
}

// --- fetch helper ----------------------------------------------------------
async function gfetch(url: string, accessToken: string, init?: RequestInit): Promise<Response> {
  return fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
    signal: AbortSignal.timeout(15_000),
  });
}
async function gfetchJson(url: string, accessToken: string, init?: RequestInit): Promise<Record<string, unknown>> {
  const res = await gfetch(url, accessToken, init);
  if (res.status === 401) throw new Error("google_unauthorized");
  if (!res.ok) {
    let detail = "";
    try {
      const j = (await res.json()) as { error?: { message?: string; status?: string } };
      detail = j?.error?.status || j?.error?.message?.slice(0, 80) || "";
    } catch {
      /* corpo não-JSON */
    }
    throw new Error(`google_${res.status}${detail ? ":" + detail : ""}`);
  }
  return (await res.json().catch(() => ({}))) as Record<string, unknown>;
}

// --- agenda dedicada -------------------------------------------------------
/** Garante a agenda "Watch Tower" na conta. Usa o id em cache quando houver;
 *  senão procura por nome (owner) e, em último caso, cria. Retorna o calendarId. */
export async function ensureWtCalendar(accessToken: string, cachedId?: string): Promise<string> {
  if (cachedId) return cachedId;
  // procura uma agenda própria já chamada "Watch Tower"
  const listed = await gfetchJson(`${CAL_LIST}?minAccessRole=owner&maxResults=250`, accessToken);
  const items = (listed.items as Array<{ id?: string; summary?: string }> | undefined) ?? [];
  const found = items.find(
    (c) => (c.summary || "").trim().toLowerCase() === WT_CALENDAR_SUMMARY.toLowerCase(),
  );
  if (found?.id) return found.id;
  // cria
  const created = await gfetchJson(CALENDARS, accessToken, {
    method: "POST",
    body: JSON.stringify({ summary: WT_CALENDAR_SUMMARY, timeZone: WT_TZ }),
  });
  const id = created.id;
  if (typeof id !== "string" || !id) throw new Error("wt_calendar_create_failed");
  return id;
}

// --- eventos ---------------------------------------------------------------
export interface WtEventInput {
  wtId: string;
  title: string;
  description?: string | null;
  location?: string | null;
  startISO: string; // instante ISO (scheduledAt do item)
  durationMin: number;
}

export interface RemoteWtEvent {
  eventId: string;
  wtId: string | null;
  title: string;
  location: string | null;
  description: string | null;
  startISO: string | null;
  durationMin: number;
}

function eventsUrl(calId: string): string {
  return `${CALENDARS}/${encodeURIComponent(calId)}/events`;
}
function eventUrl(calId: string, eventId: string): string {
  return `${eventsUrl(calId)}/${encodeURIComponent(eventId)}`;
}

function toResource(ev: WtEventInput): Record<string, unknown> {
  const start = new Date(ev.startISO);
  const end = new Date(start.getTime() + Math.max(1, ev.durationMin || 30) * 60_000);
  return {
    summary: ev.title,
    location: ev.location || undefined,
    description: ev.description || undefined,
    start: { dateTime: start.toISOString(), timeZone: WT_TZ },
    end: { dateTime: end.toISOString(), timeZone: WT_TZ },
    extendedProperties: { private: { wtId: ev.wtId } },
  };
}

/** Cria o evento na agenda WT com id determinístico. Se já existir (409), faz
 *  patch. Retorna o eventId efetivo. */
export async function insertWtEvent(accessToken: string, calId: string, ev: WtEventInput): Promise<string> {
  const eventId = deterministicEventId(ev.wtId);
  const body = { id: eventId, ...toResource(ev) };
  const res = await gfetch(eventsUrl(calId), accessToken, { method: "POST", body: JSON.stringify(body) });
  if (res.ok) return eventId;
  if (res.status === 409) {
    // já existe: atualiza no lugar
    await patchWtEvent(accessToken, calId, eventId, ev);
    return eventId;
  }
  if (res.status === 401) throw new Error("google_unauthorized");
  throw new Error(`google_insert_${res.status}`);
}

/** Atualiza um evento existente (por eventId conhecido). */
export async function patchWtEvent(
  accessToken: string,
  calId: string,
  eventId: string,
  ev: WtEventInput,
): Promise<void> {
  await gfetchJson(eventUrl(calId, eventId), accessToken, {
    method: "PATCH",
    body: JSON.stringify(toResource(ev)),
  });
}

/** Apaga um evento. 404/410 (já sumiu) é sucesso silencioso. */
export async function deleteWtEvent(accessToken: string, calId: string, eventId: string): Promise<void> {
  const res = await gfetch(eventUrl(calId, eventId), accessToken, { method: "DELETE" });
  if (res.ok || res.status === 404 || res.status === 410) return;
  if (res.status === 401) throw new Error("google_unauthorized");
  throw new Error(`google_delete_${res.status}`);
}

/** Marca um evento (que o usuário criou direto no Google) com o wtId do item
 *  que acabamos de importar, pra vincular os dois lados. */
export async function tagWtEvent(
  accessToken: string,
  calId: string,
  eventId: string,
  wtId: string,
): Promise<void> {
  await gfetchJson(eventUrl(calId, eventId), accessToken, {
    method: "PATCH",
    body: JSON.stringify({ extendedProperties: { private: { wtId } } }),
  });
}

// America/Sao_Paulo é UTC-3 o ano todo (Brasil aboliu horário de verão em 2019).
// Usado pra ancorar eventos de DIA INTEIRO (que vêm só com `date`, sem fuso) no
// fuso da agenda, e não no fuso local do runtime (Vercel roda em UTC).
const WT_TZ_OFFSET = "-03:00";
function allDayToISO(date: string): string {
  return `${date}T00:00:00${WT_TZ_OFFSET}`;
}

/** Lê os eventos da agenda WT numa janela de tempo, já normalizados. Pagina o
 *  resultado (nextPageToken) pra não perder eventos além dos 250 da 1ª página. */
export async function listWtEvents(
  accessToken: string,
  calId: string,
  timeMinISO: string,
  timeMaxISO: string,
): Promise<RemoteWtEvent[]> {
  const out: RemoteWtEvent[] = [];
  let pageToken: string | undefined;
  let guard = 0;
  do {
    const p = new URLSearchParams({
      timeMin: timeMinISO,
      timeMax: timeMaxISO,
      singleEvents: "true",
      orderBy: "startTime",
      maxResults: "250",
    });
    if (pageToken) p.set("pageToken", pageToken);
    const data = await gfetchJson(`${eventsUrl(calId)}?${p.toString()}`, accessToken);
    const items = (data.items as Array<Record<string, unknown>> | undefined) ?? [];
    for (const ev of items) {
      const id = typeof ev.id === "string" ? ev.id : "";
      if (!id) continue;
      if (ev.status === "cancelled") continue;
      const start = ev.start as { dateTime?: string; date?: string } | undefined;
      const end = ev.end as { dateTime?: string; date?: string } | undefined;
      const startISO = start?.dateTime ?? (start?.date ? allDayToISO(start.date) : null);
      const endISO = end?.dateTime ?? (end?.date ? allDayToISO(end.date) : null);
      let durationMin = 30;
      if (startISO && endISO) {
        const diff = (new Date(endISO).getTime() - new Date(startISO).getTime()) / 60_000;
        if (Number.isFinite(diff) && diff > 0) durationMin = Math.round(diff);
      }
      const ext = ev.extendedProperties as { private?: { wtId?: string } } | undefined;
      out.push({
        eventId: id,
        wtId: typeof ext?.private?.wtId === "string" ? ext.private.wtId : null,
        title: typeof ev.summary === "string" ? ev.summary : "(sem título)",
        location: typeof ev.location === "string" ? ev.location : null,
        description: typeof ev.description === "string" ? ev.description : null,
        startISO,
        durationMin,
      });
    }
    pageToken = typeof data.nextPageToken === "string" ? data.nextPageToken : undefined;
  } while (pageToken && ++guard < 20);
  return out;
}
