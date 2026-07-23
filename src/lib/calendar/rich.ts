// Onda 4 — "eventos ricos" da Agenda SEM migração de schema.
//
// O AgendaItem só guarda title/description/scheduledAt/durationMin/location.
// Os campos ricos (convidados, Meet, cor, lembrete, fuso por evento, recorrência)
// são NATIVOS do Google e vivem na agenda-satélite "Watch Tower" — ela é a fonte.
// Para o WT conseguir editar/reexibir esses campos sem coluna nova, guardamos um
// bloco de METADADOS compacto no FINAL do `description` do AgendaItem (lado WT),
// separado por um marcador. O `description` que vai PRO Google leva só o texto
// humano; os campos ricos são reconstruídos como propriedades nativas do evento.
//
// Módulo isomórfico (sem import de node/prisma): usado no servidor (google-write,
// google-sync) e no cliente (form da Agenda no DailyGrid).

/** Lembrete de evento (equivalente a reminders.overrides do Google). */
export interface RichReminder {
  method: "popup" | "email";
  minutes: number;
}

/** Metadados ricos guardados no sidecar do description e espelhados no Google. */
export interface RichMeta {
  /** Fuso IANA por evento (ex.: "America/New_York"). Vazio = fuso padrão da agenda. */
  tz?: string;
  /** Convidados (e-mails). */
  attendees?: string[];
  /** Pedir um link do Google Meet neste evento. */
  meet?: boolean;
  /** Link do Meet já resolvido (preenchido no import a partir do hangoutLink). */
  hangoutLink?: string;
  /** colorId do Google ("1".."11"). Vazio = cor padrão. */
  colorId?: string;
  /** Lembretes (popup/email X min antes). */
  reminders?: RichReminder[];
  /** Uma linha RRULE completa, ex.: "RRULE:FREQ=WEEKLY". */
  rrule?: string;
}

/** Marcador do sidecar de metadados no fim do description (improvável em texto humano). */
const META_MARKER = "\n\n⟦wt-meta⟧";

/** Cores de evento do Google (colorId → hex/nome), pra montar o seletor de cor. */
export const GOOGLE_EVENT_COLORS: { id: string; hex: string; key: string }[] = [
  { id: "1", hex: "#7986CB", key: "lavender" },
  { id: "2", hex: "#33B679", key: "sage" },
  { id: "3", hex: "#8E24AA", key: "grape" },
  { id: "4", hex: "#E67C73", key: "flamingo" },
  { id: "5", hex: "#F6BF26", key: "banana" },
  { id: "6", hex: "#F4511E", key: "tangerine" },
  { id: "7", hex: "#039BE5", key: "peacock" },
  { id: "8", hex: "#616161", key: "graphite" },
  { id: "9", hex: "#3F51B5", key: "blueberry" },
  { id: "10", hex: "#0B8043", key: "basil" },
  { id: "11", hex: "#D50000", key: "tomato" },
];

/** Fusos oferecidos no seletor "fuso por evento" (curado; o valor é IANA cru). */
export const COMMON_TIMEZONES: string[] = [
  "America/Sao_Paulo",
  "America/New_York",
  "America/Chicago",
  "America/Los_Angeles",
  "America/Toronto",
  "Europe/London",
  "Europe/Lisbon",
  "Europe/Paris",
  "Europe/Berlin",
  "Africa/Johannesburg",
  "Asia/Dubai",
  "Asia/Tokyo",
  "Australia/Sydney",
  "UTC",
];

export type RepeatFreq = "" | "daily" | "weekly" | "monthly";

const REPEAT_TO_RRULE: Record<Exclude<RepeatFreq, "">, string> = {
  daily: "RRULE:FREQ=DAILY",
  weekly: "RRULE:FREQ=WEEKLY",
  monthly: "RRULE:FREQ=MONTHLY",
};

/** "weekly" → "RRULE:FREQ=WEEKLY". "" → undefined. */
export function repeatToRrule(freq: RepeatFreq): string | undefined {
  return freq ? REPEAT_TO_RRULE[freq] : undefined;
}

/** "RRULE:FREQ=WEEKLY;..." → "weekly". Qualquer coisa fora dos 3 casos → "". */
export function rruleToRepeat(rrule: string | null | undefined): RepeatFreq {
  if (!rrule) return "";
  const m = /FREQ=([A-Z]+)/.exec(rrule);
  const f = m?.[1];
  if (f === "DAILY") return "daily";
  if (f === "WEEKLY") return "weekly";
  if (f === "MONTHLY") return "monthly";
  return "";
}

/** Remove chaves vazias/irrelevantes pra o sidecar ficar mínimo (e a comparação estável). */
function pruneMeta(meta: RichMeta): RichMeta {
  const out: RichMeta = {};
  if (meta.tz && meta.tz.trim()) out.tz = meta.tz.trim();
  const at = (meta.attendees ?? []).map((e) => e.trim().toLowerCase()).filter(Boolean);
  if (at.length) out.attendees = Array.from(new Set(at)).sort();
  if (meta.meet) out.meet = true;
  if (meta.hangoutLink && meta.hangoutLink.trim()) out.hangoutLink = meta.hangoutLink.trim();
  if (meta.colorId && meta.colorId.trim()) out.colorId = meta.colorId.trim();
  const rem = (meta.reminders ?? []).filter(
    (r) => (r.method === "popup" || r.method === "email") && Number.isFinite(r.minutes) && r.minutes >= 0,
  );
  if (rem.length) out.reminders = rem.map((r) => ({ method: r.method, minutes: Math.round(r.minutes) }));
  if (meta.rrule && meta.rrule.trim()) out.rrule = meta.rrule.trim();
  return out;
}

/** true quando não há nenhum campo rico pra guardar. */
export function isEmptyMeta(meta: RichMeta): boolean {
  return Object.keys(pruneMeta(meta)).length === 0;
}

/**
 * Combina o texto humano + os metadados ricos num único `description` do WT.
 * Retorna null quando não há texto nem metadados (pra gravar description = null).
 */
export function encodeDescription(text: string | null | undefined, meta: RichMeta): string | null {
  const body = (text ?? "").replace(/\s+$/, "");
  const pruned = pruneMeta(meta);
  const hasMeta = Object.keys(pruned).length > 0;
  if (!hasMeta) return body || null;
  return `${body}${META_MARKER}${JSON.stringify(pruned)}`;
}

/** Separa o `description` do WT em { text humano, meta rica }. Robusto a lixo. */
export function decodeDescription(raw: string | null | undefined): { text: string; meta: RichMeta } {
  const s = raw ?? "";
  const idx = s.lastIndexOf(META_MARKER);
  if (idx === -1) return { text: s, meta: {} };
  const text = s.slice(0, idx);
  const jsonPart = s.slice(idx + META_MARKER.length).trim();
  try {
    const parsed = JSON.parse(jsonPart) as RichMeta;
    return { text, meta: pruneMeta(parsed) };
  } catch {
    // Marcador presente mas JSON corrompido: devolve o texto inteiro, sem meta.
    return { text: s, meta: {} };
  }
}

/** Só o texto humano do description (pro feed .ics e pra exibição). */
export function humanDescription(raw: string | null | undefined): string {
  return decodeDescription(raw).text;
}

/** Assinatura canônica dos campos SET-áveis, pra comparar desejado × existente
 *  sem falso-positivo (ordem de convidados, etc). Não inclui hangoutLink/meet. */
export function metaSignature(meta: RichMeta): string {
  const p = pruneMeta(meta);
  return JSON.stringify({
    tz: p.tz ?? "",
    attendees: p.attendees ?? [],
    colorId: p.colorId ?? "",
    reminders: (p.reminders ?? []).map((r) => `${r.method}:${r.minutes}`),
    rrule: p.rrule ?? "",
  });
}
