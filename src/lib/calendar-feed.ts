/**
 * Feed iCalendar (.ics) por usuário — conecta os Lembretes + Agenda do Watch
 * Tower a qualquer app de calendário (Google Agenda, Apple, Outlook).
 *
 * Pedido da sócia Marcela (2026-06-16, caixa de solicitações): "consigo integrar
 * no meu Google Agenda?". Escolha de arquitetura: feed .ics assinável em vez de
 * OAuth Google. Motivos: zero conta externa (Google Cloud/OAuth consent), zero
 * migração de banco (o token é derivado por HMAC, sem campo novo), funciona em
 * qualquer calendário e atualiza sozinho (o cliente re-puxa o feed). One-way
 * (Watch Tower → calendário); dá pra evoluir pra OAuth bidirecional depois.
 *
 * Segurança: a URL carrega ?u=<userId>&t=<HMAC(userId)>. Sem o token correto, 403.
 * Mesmo modelo do "endereço secreto" de calendário do próprio Google.
 */
import crypto from "node:crypto";

function feedSecret(): string {
  return process.env.CALENDAR_FEED_SECRET || process.env.CRON_SECRET || "wt-calendar-fallback-secret";
}

/** Token estável e não-reversível do feed de um usuário. */
export function calendarToken(userId: string): string {
  return crypto.createHmac("sha256", feedSecret()).update(userId).digest("hex").slice(0, 32);
}

/** Confere o token em tempo constante. */
export function verifyCalendarToken(userId: string, token: string): boolean {
  const expected = calendarToken(userId);
  if (!token || token.length !== expected.length) return false;
  try {
    return crypto.timingSafeEqual(Buffer.from(token), Buffer.from(expected));
  } catch {
    return false;
  }
}

export type CalEvent = {
  uid: string;
  start: Date;
  /** Fim do evento; se ausente, usa start + 15min. */
  end?: Date;
  summary: string;
  description?: string;
  location?: string;
  /** Regra de recorrência simples herdada do Reminder. */
  recurring?: "daily" | "weekly" | "monthly" | null;
};

/** Escapa texto pro formato ICS (RFC 5545). */
function esc(s: string): string {
  return (s || "")
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\r?\n/g, "\\n");
}

/** Data no formato ICS UTC: YYYYMMDDTHHMMSSZ. */
function icsDate(d: Date): string {
  return d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

function rrule(rec: CalEvent["recurring"]): string | null {
  if (rec === "daily") return "RRULE:FREQ=DAILY";
  if (rec === "weekly") return "RRULE:FREQ=WEEKLY";
  if (rec === "monthly") return "RRULE:FREQ=MONTHLY";
  return null;
}

/** Monta o documento VCALENDAR completo a partir dos eventos. */
export function buildIcs(calName: string, events: CalEvent[], now: Date): string {
  const lines: string[] = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//WiseHub//Watch Tower//PT",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    `X-WR-CALNAME:${esc(calName)}`,
    "X-WR-TIMEZONE:America/Sao_Paulo",
    "REFRESH-INTERVAL;VALUE=DURATION:PT1H",
    "X-PUBLISHED-TTL:PT1H",
  ];

  const stamp = icsDate(now);
  for (const ev of events) {
    if (Number.isNaN(ev.start.getTime())) continue;
    const end = ev.end && !Number.isNaN(ev.end.getTime()) ? ev.end : new Date(ev.start.getTime() + 15 * 60_000);
    lines.push("BEGIN:VEVENT");
    lines.push(`UID:${ev.uid}`);
    lines.push(`DTSTAMP:${stamp}`);
    lines.push(`DTSTART:${icsDate(ev.start)}`);
    lines.push(`DTEND:${icsDate(end)}`);
    const r = rrule(ev.recurring);
    if (r) lines.push(r);
    lines.push(`SUMMARY:${esc(ev.summary)}`);
    if (ev.location) lines.push(`LOCATION:${esc(ev.location)}`);
    if (ev.description) lines.push(`DESCRIPTION:${esc(ev.description)}`);
    lines.push("END:VEVENT");
  }

  lines.push("END:VCALENDAR");
  // RFC 5545 pede CRLF como separador de linha.
  return lines.join("\r\n") + "\r\n";
}
