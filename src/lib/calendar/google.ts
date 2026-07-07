// Importação Google Calendar → Watch Tower (leitura). OAuth 2.0 (Authorization
// Code), tudo no servidor. Guarda só o refresh token (criptografado, reusa o
// MAIL_CRED_KEY). Escopo SÓ-LEITURA (calendar.readonly): a gente exibe os
// eventos, nunca escreve. O sentido inverso (WT → Google) é o feed .ics
// (calendar-feed.ts) e não precisa de OAuth.
import crypto from "node:crypto";

const AUTH_ENDPOINT = "https://accounts.google.com/o/oauth2/v2/auth";
const TOKEN_ENDPOINT = "https://oauth2.googleapis.com/token";
const CALENDAR_LIST_ENDPOINT =
  "https://www.googleapis.com/calendar/v3/users/me/calendarList";
function eventsEndpointFor(calendarId: string): string {
  return `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events`;
}
export const GOOGLE_SCOPE = "https://www.googleapis.com/auth/calendar.readonly";
// openid+email: pra capturar QUAL conta Google foi conectada (id_token traz o
// e-mail), e assim mostrar na tela e evitar conectar a conta errada sem perceber.
const GOOGLE_SCOPES_FULL = `openid email ${GOOGLE_SCOPE}`;

export function clientId(): string {
  return process.env.GOOGLE_CLIENT_ID || "";
}
function clientSecret(): string {
  return process.env.GOOGLE_CLIENT_SECRET || "";
}
export function redirectUri(): string {
  return (
    process.env.GOOGLE_REDIRECT_URI ||
    "https://watchtower.wisehubnow.online/api/calendar/google/callback"
  );
}
export function googleConfigured(): boolean {
  return !!clientId() && !!clientSecret();
}

// --- state assinado (anti-CSRF no callback) -------------------------------
function stateSecret(): string {
  return process.env.CALENDAR_FEED_SECRET || process.env.CRON_SECRET || "wt-oauth-state";
}
// A identidade assinada no state é a MESMA chave que guarda o token (o e-mail
// da sessão), pra o anti-CSRF proteger exatamente o que é gravado. O e-mail é
// base64url no payload pra não colidir com o separador ".".
export function signState(identityEmail: string): string {
  const id = Buffer.from(identityEmail).toString("base64url");
  const nonce = crypto.randomBytes(8).toString("hex");
  const payload = `${id}.${nonce}`;
  const mac = crypto.createHmac("sha256", stateSecret()).update(payload).digest("hex").slice(0, 32);
  return `${payload}.${mac}`;
}
export function verifyState(state: string, expectedEmail: string): boolean {
  const parts = (state || "").split(".");
  if (parts.length !== 3) return false;
  const [id, nonce, mac] = parts;
  let email = "";
  try {
    email = Buffer.from(id, "base64url").toString("utf8");
  } catch {
    return false;
  }
  if (email.toLowerCase() !== expectedEmail.toLowerCase()) return false;
  const expected = crypto
    .createHmac("sha256", stateSecret())
    .update(`${id}.${nonce}`)
    .digest("hex")
    .slice(0, 32);
  try {
    return crypto.timingSafeEqual(Buffer.from(mac), Buffer.from(expected));
  } catch {
    return false;
  }
}

// --- fluxo OAuth ----------------------------------------------------------
export function buildAuthUrl(state: string): string {
  const p = new URLSearchParams({
    client_id: clientId(),
    redirect_uri: redirectUri(),
    response_type: "code",
    scope: GOOGLE_SCOPES_FULL,
    access_type: "offline", // pede refresh token
    prompt: "consent select_account", // re-consentimento + deixa ESCOLHER a conta
    include_granted_scopes: "true",
    state,
  });
  return `${AUTH_ENDPOINT}?${p.toString()}`;
}

export interface TokenResult {
  accessToken: string;
  refreshToken: string | null;
  expiresIn: number;
  email: string | null;
}

async function tokenRequest(body: Record<string, string>): Promise<Record<string, unknown>> {
  const res = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(body).toString(),
    signal: AbortSignal.timeout(15_000),
  });
  const data = (await res.json().catch(() => ({}))) as Record<string, unknown>;
  if (!res.ok) {
    throw new Error(`google_token_${res.status}:${String(data.error ?? "")}`);
  }
  return data;
}

/** Troca o code por tokens. O refresh token só vem na 1ª autorização. */
export async function exchangeCode(code: string): Promise<TokenResult> {
  const data = await tokenRequest({
    code,
    client_id: clientId(),
    client_secret: clientSecret(),
    redirect_uri: redirectUri(),
    grant_type: "authorization_code",
  });
  return {
    accessToken: String(data.access_token ?? ""),
    refreshToken: data.refresh_token ? String(data.refresh_token) : null,
    expiresIn: Number(data.expires_in ?? 3600),
    email: extractEmailFromIdToken(data.id_token),
  };
}

/** Renova o access token a partir do refresh token guardado. */
export async function refreshAccessToken(refreshToken: string): Promise<string> {
  const data = await tokenRequest({
    refresh_token: refreshToken,
    client_id: clientId(),
    client_secret: clientSecret(),
    grant_type: "refresh_token",
  });
  return String(data.access_token ?? "");
}

function extractEmailFromIdToken(idToken: unknown): string | null {
  if (typeof idToken !== "string") return null;
  try {
    const payload = idToken.split(".")[1];
    const json = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    return typeof json.email === "string" ? json.email : null;
  } catch {
    return null;
  }
}

// --- eventos --------------------------------------------------------------
export interface GoogleEvent {
  id: string;
  summary: string;
  start: string | null; // ISO
  end: string | null;
  allDay: boolean;
  location: string | null;
  htmlLink: string | null;
  calendar?: string | null; // nome da agenda de origem (quando não é a principal)
  account?: string | null; // conta Google de origem (multi-conta)
}

interface CalendarRef {
  id: string;
  summary: string;
  primary: boolean;
}

/** Extrai o motivo do erro da resposta de erro do Google (ex.: 403:SERVICE_DISABLED,
 *  403:accessNotConfigured, 401:...). Ajuda a diagnosticar sem chutar. */
async function googleErrDetail(res: Response): Promise<string> {
  let reason = "";
  try {
    const j = (await res.json()) as {
      error?: { status?: string; message?: string; errors?: Array<{ reason?: string }> };
    };
    reason =
      j?.error?.status ||
      j?.error?.errors?.[0]?.reason ||
      (j?.error?.message ? j.error.message.slice(0, 80) : "");
  } catch {
    /* corpo não-JSON */
  }
  return `${res.status}${reason ? ":" + reason : ""}`;
}

/** Lista as agendas que o usuário enxerga (a principal + as que ele mantém
 *  visíveis). Precisa disso porque muita gente cria eventos em agendas
 *  separadas, não só na `primary`. */
async function fetchCalendarList(accessToken: string): Promise<CalendarRef[]> {
  const p = new URLSearchParams({ minAccessRole: "reader", maxResults: "250" });
  const res = await fetch(`${CALENDAR_LIST_ENDPOINT}?${p.toString()}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    signal: AbortSignal.timeout(15_000),
  });
  if (res.status === 401) throw new Error("google_unauthorized");
  if (!res.ok) throw new Error(`callist_${await googleErrDetail(res)}`);
  const data = (await res.json()) as { items?: Array<Record<string, unknown>> };
  const items = data.items ?? [];
  return items
    // Lê as agendas com acesso de leitura (não filtra por "marcada"): o evento
    // pode estar numa agenda compartilhada que o dono deixou desmarcada.
    .map((c) => ({
      id: String(c.id ?? ""),
      summary: typeof c.summary === "string" ? c.summary : "",
      primary: c.primary === true,
    }))
    .filter((c) => c.id)
    // Exclui as AGENDAS DE SISTEMA do Google (feriados, aniversários, nº da
    // semana): são só ruído (all-day) e entopem a lista escondendo as reuniões.
    .filter((c) => !isNoiseCalendar(c.id))
    // principal primeiro, pra ela nunca ser cortada pelo cap de agendas.
    .sort((a, b) => (a.primary === b.primary ? 0 : a.primary ? -1 : 1));
}

/** Agendas de sistema do Google que só geram ruído (feriados/aniversários/semana). */
function isNoiseCalendar(id: string): boolean {
  const s = id.toLowerCase();
  return (
    s.includes("#holiday@group.v.calendar.google.com") ||
    s.includes("#contacts@group.v.calendar.google.com") ||
    s.includes("#weeknum@group.v.calendar.google.com") ||
    s.endsWith("#holiday@group.v.calendar.google.com")
  );
}

function mapRawEvent(ev: Record<string, unknown>, calendarName: string | null): GoogleEvent {
  const start = ev.start as { dateTime?: string; date?: string } | undefined;
  const end = ev.end as { dateTime?: string; date?: string } | undefined;
  const allDay = !!start?.date && !start?.dateTime;
  return {
    id: String(ev.id ?? ""),
    summary: typeof ev.summary === "string" ? ev.summary : "(sem título)",
    start: start?.dateTime ?? (start?.date ? `${start.date}T00:00:00` : null),
    end: end?.dateTime ?? (end?.date ? `${end.date}T00:00:00` : null),
    allDay,
    location: typeof ev.location === "string" ? ev.location : null,
    htmlLink: typeof ev.htmlLink === "string" ? ev.htmlLink : null,
    calendar: calendarName,
  };
}

/** Próximos eventos de UMA agenda (só-leitura). Uma agenda que falha não
 *  derruba as outras (retorna vazio). */
async function fetchEventsFromCalendar(
  accessToken: string,
  cal: CalendarRef,
  timeMin: string,
  perCalendar: number,
): Promise<GoogleEvent[]> {
  const p = new URLSearchParams({
    timeMin,
    maxResults: String(Math.min(50, Math.max(1, perCalendar))),
    singleEvents: "true",
    orderBy: "startTime",
  });
  const res = await fetch(`${eventsEndpointFor(cal.id)}?${p.toString()}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    signal: AbortSignal.timeout(15_000),
  });
  if (res.status === 401) throw new Error("google_unauthorized");
  if (res.status === 404) return []; // agenda apagada: ignora, segue nas outras
  if (!res.ok) throw new Error(`events_${await googleErrDetail(res)}`);
  const data = (await res.json()) as { items?: Array<Record<string, unknown>> };
  const label = cal.primary ? null : cal.summary || null;
  return (data.items ?? []).map((ev) => mapRawEvent(ev, label));
}

/** Diagnóstico da busca (por que veio vazio?). Só-fundadores no endpoint. */
export interface GcalDiag {
  calendarsFound: number;
  scanned: string[];
  errors: string[];
}

/** Próximos eventos de TODAS as agendas visíveis do usuário (só-leitura),
 *  mescladas e ordenadas por horário, + diagnóstico do porquê de vir vazio. */
export async function fetchUpcomingEventsDetailed(
  accessToken: string,
  maxResults = 15,
): Promise<{ events: GoogleEvent[]; diag: GcalDiag }> {
  const diag: GcalDiag = { calendarsFound: 0, scanned: [], errors: [] };
  const timeMin = new Date().toISOString();

  // Descobre as agendas. Se a listagem falhar por qualquer motivo, cai no
  // comportamento antigo (só a principal), pra nunca ficar pior que antes.
  let calendars: CalendarRef[];
  try {
    calendars = await fetchCalendarList(accessToken);
    diag.calendarsFound = calendars.length;
  } catch (e) {
    const m = String((e as Error)?.message ?? e);
    if (/unauthorized/i.test(m)) throw e;
    diag.errors.push(m);
    calendars = [];
  }
  if (calendars.length === 0) {
    calendars = [{ id: "primary", summary: "", primary: true }];
  }

  // Cap de agendas pra não explodir em chamadas; puxa um pouco a mais por
  // agenda porque depois a gente mescla e corta o total.
  const capped = calendars.slice(0, 25);
  diag.scanned = capped.map((c) => (c.primary ? "primary" : c.summary || c.id));
  const perCalendar = Math.min(50, Math.max(5, maxResults));

  const perCalResults = await Promise.all(
    capped.map((cal) =>
      fetchEventsFromCalendar(accessToken, cal, timeMin, perCalendar).catch((e) => {
        // propaga só o 401 (token inválido) — os demais erros por agenda viram vazio
        const m = String((e as Error)?.message ?? e);
        if (/unauthorized/i.test(m)) throw e;
        diag.errors.push(`${cal.primary ? "primary" : cal.summary}: ${m}`);
        return [] as GoogleEvent[];
      }),
    ),
  );

  // Mescla, remove duplicados (evento em agenda compartilhada aparece 2x) e
  // ordena pelo horário de início. Corta no total pedido.
  const seen = new Set<string>();
  const merged = perCalResults
    .flat()
    .filter((ev) => {
      const key = `${ev.id}|${ev.start ?? ""}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => (a.start ?? "").localeCompare(b.start ?? ""));

  return { events: merged.slice(0, maxResults), diag };
}

/** Só os eventos (compat). */
export async function fetchUpcomingEvents(
  accessToken: string,
  maxResults = 15,
): Promise<GoogleEvent[]> {
  return (await fetchUpcomingEventsDetailed(accessToken, maxResults)).events;
}
