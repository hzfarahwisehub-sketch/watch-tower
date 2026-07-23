// Escrita no Google Calendar (mão dupla WT↔Google) — LIMITADA à agenda
// secundária "Watch Tower" que o próprio app cria em cada conta (escopo
// `calendar.app.created`). Nunca toca no calendário pessoal do usuário.
//
// Estratégia de idempotência SEM migração de schema:
//  - Evento nascido no WT: id do Google = base32hex(id do AgendaItem), estável.
//    Assim editar/apagar acha o mesmo evento sem guardar mapeamento.
//  - Todo evento que o app cria carrega extendedProperties.private.wtId = cuid,
//    que é a fonte da verdade do vínculo (o reconcile lê por aí).
//
// Onda 4: eventos RICOS (convidados, Meet, cor, lembrete, fuso por evento) e
// RECORRÊNCIA. Os campos ricos são NATIVOS do Google e vêm do sidecar de meta
// guardado no `description` do AgendaItem (ver ./rich.ts). O `description` que
// vai pro Google leva só o texto humano.
import { WT_CALENDAR_SUMMARY } from "./google";
import { decodeDescription, type RichMeta } from "./rich";

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
 *  senão procura por nome (owner) e, em último caso, cria. Retorna o calendarId.
 *  Ao DESCOBRIR/CRIAR (não no cache), marca a agenda como visível/sobreposta na
 *  conta Google do usuário (best-effort) — Onda 4, item "overlay da satélite". */
export async function ensureWtCalendar(accessToken: string, cachedId?: string): Promise<string> {
  if (cachedId) return cachedId;
  // procura uma agenda própria já chamada "Watch Tower"
  const listed = await gfetchJson(`${CAL_LIST}?minAccessRole=owner&maxResults=250`, accessToken);
  const items = (listed.items as Array<{ id?: string; summary?: string }> | undefined) ?? [];
  const found = items.find(
    (c) => (c.summary || "").trim().toLowerCase() === WT_CALENDAR_SUMMARY.toLowerCase(),
  );
  if (found?.id) {
    await setCalendarVisible(accessToken, found.id).catch(() => {});
    return found.id;
  }
  // cria
  const created = await gfetchJson(CALENDARS, accessToken, {
    method: "POST",
    body: JSON.stringify({ summary: WT_CALENDAR_SUMMARY, timeZone: WT_TZ }),
  });
  const id = created.id;
  if (typeof id !== "string" || !id) throw new Error("wt_calendar_create_failed");
  await setCalendarVisible(accessToken, id).catch(() => {});
  return id;
}

/** Deixa a agenda "Watch Tower" VISÍVEL/sobreposta na agenda principal do Google
 *  do usuário (calendarList.selected = true), pra o que o app faz aparecer junto.
 *  Best-effort: erra em silêncio (a agenda criada pelo app já costuma vir listada,
 *  isto só garante que fique marcada). */
export async function setCalendarVisible(accessToken: string, calId: string): Promise<void> {
  const url = `${CAL_LIST}/${encodeURIComponent(calId)}`;
  await gfetchJson(url, accessToken, {
    method: "PATCH",
    body: JSON.stringify({ selected: true }),
  });
}

// --- eventos ---------------------------------------------------------------
export interface WtEventInput {
  wtId: string;
  title: string;
  /** description CRU do AgendaItem (texto humano + sidecar de meta rica). */
  description?: string | null;
  location?: string | null;
  startISO: string; // instante ISO (scheduledAt do item)
  durationMin: number;
  /** Fuso a usar no start/end quando o meta não trouxer um (preserva o existente
   *  num patch). Default: WT_TZ. */
  timeZone?: string | null;
}

export interface RemoteWtEvent {
  eventId: string;
  wtId: string | null;
  title: string;
  location: string | null;
  /** description humano (sem sidecar — o Google guarda só o texto). */
  description: string | null;
  startISO: string | null;
  durationMin: number;
  // ---- campos ricos nativos (Onda 4) ----
  attendees: string[];
  hangoutLink: string | null;
  colorId: string | null;
  reminders: { method: "popup" | "email"; minutes: number }[] | null;
  /** Primeira linha RRULE do master (ou null). */
  rrule: string | null;
  timeZone: string | null;
}

function eventsUrl(calId: string): string {
  return `${CALENDARS}/${encodeURIComponent(calId)}/events`;
}
function eventUrl(calId: string, eventId: string): string {
  return `${eventsUrl(calId)}/${encodeURIComponent(eventId)}`;
}

/** Monta o recurso do evento no Google a partir do input + meta rica decodificada.
 *  Só inclui campos ricos PRESENTES — assim um PATCH parcial nunca apaga o que o
 *  usuário setou direto no Google (SET sim, CLEAR não). */
function buildResource(ev: WtEventInput): Record<string, unknown> {
  const { text, meta } = decodeDescription(ev.description);
  const tz = (meta.tz && meta.tz.trim()) || ev.timeZone || WT_TZ;
  const start = new Date(ev.startISO);
  const end = new Date(start.getTime() + Math.max(1, ev.durationMin || 30) * 60_000);
  const res: Record<string, unknown> = {
    summary: ev.title,
    location: ev.location || undefined,
    description: text || undefined,
    start: { dateTime: start.toISOString(), timeZone: tz },
    end: { dateTime: end.toISOString(), timeZone: tz },
    extendedProperties: { private: { wtId: ev.wtId } },
  };
  if (meta.attendees && meta.attendees.length) {
    res.attendees = meta.attendees.map((email) => ({ email }));
  }
  if (meta.colorId) res.colorId = meta.colorId;
  if (meta.reminders && meta.reminders.length) {
    res.reminders = { useDefault: false, overrides: meta.reminders };
  }
  if (meta.rrule) res.recurrence = [meta.rrule];
  return res;
}

/** Cria o evento na agenda WT com id determinístico. Se já existir (409), faz
 *  patch. Retorna o eventId efetivo. `sendUpdates=none`: nunca dispara e-mail de
 *  convite no espelhamento automático. */
export async function insertWtEvent(accessToken: string, calId: string, ev: WtEventInput): Promise<string> {
  const eventId = deterministicEventId(ev.wtId);
  const body = { id: eventId, ...buildResource(ev) };
  const res = await gfetch(`${eventsUrl(calId)}?sendUpdates=none`, accessToken, {
    method: "POST",
    body: JSON.stringify(body),
  });
  if (res.ok) return eventId;
  if (res.status === 409) {
    // já existe: atualiza no lugar
    await patchWtEvent(accessToken, calId, eventId, ev);
    return eventId;
  }
  if (res.status === 401) throw new Error("google_unauthorized");
  throw new Error(`google_insert_${res.status}`);
}

/** Atualiza um evento existente (por eventId conhecido). PATCH parcial: só mexe
 *  no que o recurso traz; campos ricos ausentes ficam intactos. */
export async function patchWtEvent(
  accessToken: string,
  calId: string,
  eventId: string,
  ev: WtEventInput,
): Promise<void> {
  await gfetchJson(`${eventUrl(calId, eventId)}?sendUpdates=none`, accessToken, {
    method: "PATCH",
    body: JSON.stringify(buildResource(ev)),
  });
}

/** Pede um link do Google Meet no evento (conferenceData). Idempotente pelo
 *  requestId derivado do eventId. Best-effort no chamador: se a conta não puder
 *  criar conferência, o evento continua válido, só sem Meet. */
export async function addMeetToEvent(accessToken: string, calId: string, eventId: string): Promise<void> {
  await gfetchJson(`${eventUrl(calId, eventId)}?conferenceDataVersion=1&sendUpdates=none`, accessToken, {
    method: "PATCH",
    body: JSON.stringify({
      conferenceData: {
        createRequest: {
          requestId: `wt-meet-${eventId}`,
          conferenceSolutionKey: { type: "hangoutsMeet" },
        },
      },
    }),
  });
}

/** Apaga um evento. 404/410 (já sumiu) é sucesso silencioso. */
export async function deleteWtEvent(accessToken: string, calId: string, eventId: string): Promise<void> {
  const res = await gfetch(`${eventUrl(calId, eventId)}?sendUpdates=none`, accessToken, { method: "DELETE" });
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

/** Normaliza um evento cru do Google (agenda WT) pro RemoteWtEvent. */
function mapRemote(ev: Record<string, unknown>): RemoteWtEvent | null {
  const id = typeof ev.id === "string" ? ev.id : "";
  if (!id) return null;
  const start = ev.start as { dateTime?: string; date?: string; timeZone?: string } | undefined;
  const end = ev.end as { dateTime?: string; date?: string } | undefined;
  const startISO = start?.dateTime ?? (start?.date ? allDayToISO(start.date) : null);
  const endISO = end?.dateTime ?? (end?.date ? allDayToISO(end.date) : null);
  let durationMin = 30;
  if (startISO && endISO) {
    const diff = (new Date(endISO).getTime() - new Date(startISO).getTime()) / 60_000;
    if (Number.isFinite(diff) && diff > 0) durationMin = Math.round(diff);
  }
  const ext = ev.extendedProperties as { private?: { wtId?: string } } | undefined;
  const attList = (ev.attendees as Array<{ email?: string; resource?: boolean }> | undefined) ?? [];
  const attendees = attList
    .map((a) => (typeof a.email === "string" ? a.email.toLowerCase() : ""))
    .filter(Boolean);
  const conf = ev.conferenceData as { entryPoints?: Array<{ entryPointType?: string; uri?: string }> } | undefined;
  const meetEntry = conf?.entryPoints?.find((e) => e.entryPointType === "video");
  const hangoutLink =
    (typeof ev.hangoutLink === "string" ? ev.hangoutLink : null) ||
    (typeof meetEntry?.uri === "string" ? meetEntry.uri : null);
  const remObj = ev.reminders as
    | { useDefault?: boolean; overrides?: Array<{ method?: string; minutes?: number }> }
    | undefined;
  const overrides = (remObj?.overrides ?? [])
    .map((o) => ({
      method: o.method === "email" ? ("email" as const) : ("popup" as const),
      minutes: Number(o.minutes ?? 0),
    }))
    .filter((o) => Number.isFinite(o.minutes));
  const recArr = (ev.recurrence as string[] | undefined) ?? [];
  const rrule = recArr.find((r) => r.startsWith("RRULE:")) ?? null;
  return {
    eventId: id,
    wtId: typeof ext?.private?.wtId === "string" ? ext.private.wtId : null,
    title: typeof ev.summary === "string" ? ev.summary : "(sem título)",
    location: typeof ev.location === "string" ? ev.location : null,
    description: typeof ev.description === "string" ? ev.description : null,
    startISO,
    durationMin,
    attendees,
    hangoutLink,
    colorId: typeof ev.colorId === "string" ? ev.colorId : null,
    reminders: overrides.length ? overrides : null,
    rrule,
    timeZone: typeof start?.timeZone === "string" ? start.timeZone : null,
  };
}

/** Lê UM evento da agenda WT (pra editor de detalhes ricos). null se sumiu. */
export async function getWtEvent(
  accessToken: string,
  calId: string,
  eventId: string,
): Promise<RemoteWtEvent | null> {
  const res = await gfetch(eventUrl(calId, eventId), accessToken);
  if (res.status === 404 || res.status === 410) return null;
  if (res.status === 401) throw new Error("google_unauthorized");
  if (!res.ok) throw new Error(`google_get_${res.status}`);
  const ev = (await res.json().catch(() => ({}))) as Record<string, unknown>;
  if (ev.status === "cancelled") return null;
  return mapRemote(ev);
}

/** Lê os eventos da agenda WT numa janela de tempo, já normalizados. Pagina o
 *  resultado (nextPageToken) pra não perder eventos além dos 250 da 1ª página.
 *
 *  singleEvents=FALSE (Onda 4): traz o MASTER da recorrência (com a RRULE e um
 *  único eventId estável), não N instâncias com o mesmo wtId. Instâncias-exceção
 *  (recurringEventId setado) são ignoradas — o WT trabalha na série, não na
 *  ocorrência solta. */
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
      singleEvents: "false",
      maxResults: "250",
    });
    if (pageToken) p.set("pageToken", pageToken);
    const data = await gfetchJson(`${eventsUrl(calId)}?${p.toString()}`, accessToken);
    const items = (data.items as Array<Record<string, unknown>> | undefined) ?? [];
    for (const ev of items) {
      if (ev.status === "cancelled") continue;
      if (typeof ev.recurringEventId === "string" && ev.recurringEventId) continue; // exceção de série
      const mapped = mapRemote(ev);
      if (mapped) out.push(mapped);
    }
    pageToken = typeof data.nextPageToken === "string" ? data.nextPageToken : undefined;
  } while (pageToken && ++guard < 20);
  return out;
}

/** Constrói o RichMeta "existente" a partir de um RemoteWtEvent (pra comparar com
 *  o desejado do lado WT e decidir se precisa reconciliar). */
export function remoteToMeta(r: RemoteWtEvent): RichMeta {
  const meta: RichMeta = {};
  if (r.timeZone) meta.tz = r.timeZone;
  if (r.attendees.length) meta.attendees = r.attendees;
  if (r.hangoutLink) {
    meta.meet = true;
    meta.hangoutLink = r.hangoutLink;
  }
  if (r.colorId) meta.colorId = r.colorId;
  if (r.reminders && r.reminders.length) meta.reminders = r.reminders;
  if (r.rrule) meta.rrule = r.rrule;
  return meta;
}
