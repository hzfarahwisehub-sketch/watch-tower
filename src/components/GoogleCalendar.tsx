"use client";
// Seção "Google Agenda" dentro do card de Agenda (importação Google → Watch
// Tower, só-leitura, MULTI-CONTA). Mostra os próximos eventos de TODAS as contas
// Google conectadas pelo login, com etiqueta de qual conta, + botão pra adicionar
// mais uma conta. Só aparece se o Google estiver configurado no servidor.
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocale } from "./LocaleProvider";
import { useToast } from "./ToastProvider";

interface GEvent {
  id: string;
  summary: string;
  start: string | null;
  end: string | null;
  allDay: boolean;
  location: string | null;
  htmlLink: string | null;
  calendar?: string | null;
  account?: string | null;
  eventType?: string | null;
  recurringEventId?: string | null;
  contactName?: string | null;
}
interface AccountView {
  email: string;
  ok: boolean;
}
interface EventsResponse {
  connected?: boolean;
  configured?: boolean;
  expired?: boolean;
  events?: GEvent[];
  accounts?: AccountView[];
}

const pad2 = (n: number) => String(n).padStart(2, "0");
/** Chave do dia LOCAL (o all-day vem como "YYYY-MM-DDT00:00:00", sem fuso, e o
 *  Date já o resolve na meia-noite local). */
const dayKeyOf = (d: Date) => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;

export function GoogleCalendar() {
  const { t, intl } = useLocale();
  const toast = useToast();
  const [state, setState] = useState<"loading" | "hidden" | "disconnected" | "connected">("loading");
  const [events, setEvents] = useState<GEvent[]>([]);
  const [accounts, setAccounts] = useState<AccountView[]>([]);

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/calendar/google/events");
      if (res.status === 401 || res.status === 403) {
        setState("hidden");
        return;
      }
      const data = (await res.json().catch(() => ({}))) as EventsResponse;
      if (!data.configured) {
        setState("hidden"); // Google não configurado no servidor → não mostra nada
        return;
      }
      if (data.connected) {
        setEvents(data.events ?? []);
        setAccounts(data.accounts ?? []);
        setState("connected");
      } else {
        setAccounts([]);
        setEvents([]);
        setState("disconnected");
      }
    } catch {
      setState("hidden");
    }
  }, []);

  // Carrega uma vez no mount (via ref, pra o efeito NÃO depender da identidade
  // de `load` — evita qualquer risco de re-execução em cadeia).
  const loadRef = useRef(load);
  loadRef.current = load;
  useEffect(() => {
    loadRef.current();
  }, []);

  // feedback do callback (?gcal=...) uma vez
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const g = params.get("gcal");
    if (!g) return;
    const map: Record<string, string> = {
      connected: t("daily.gcal.connected"),
      cancelled: t("daily.gcal.cancelled"),
      bad_state: t("daily.gcal.error"),
      exchange_failed: t("daily.gcal.error"),
      no_refresh: t("daily.gcal.error"),
      error: t("daily.gcal.error"),
    };
    if (map[g]) toast(map[g]);
    // limpa o parâmetro da URL
    params.delete("gcal");
    const qs = params.toString();
    window.history.replaceState({}, "", window.location.pathname + (qs ? `?${qs}` : ""));
    if (g === "connected") loadRef.current();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const removeAccount = useCallback(
    async (email: string) => {
      try {
        const res = await fetch("/api/calendar/google/disconnect", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
        if (res.ok) {
          toast(t("daily.gcal.disconnected"));
          loadRef.current();
        }
      } catch {
        /* silencioso */
      }
    },
    [t, toast],
  );

  // Agrupa por DIA local, no formato da vista "Programação" do Google: a data
  // numa coluna à esquerda, os eventos daquele dia à direita. A lista corrida de
  // antes repetia a data em toda linha e, como só mostrava dia/mês, as
  // ocorrências de anos diferentes da MESMA recorrência ficavam idênticas.
  const groups = useMemo(() => {
    const m = new Map<string, { date: Date; items: GEvent[] }>();
    for (const ev of events) {
      if (!ev.start) continue;
      const d = new Date(ev.start);
      if (Number.isNaN(d.getTime())) continue;
      const k = dayKeyOf(d);
      const g = m.get(k);
      if (g) g.items.push(ev);
      else m.set(k, { date: d, items: [ev] });
    }
    return [...m.entries()]
      .sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0))
      .map(([key, v]) => ({ key, ...v }));
  }, [events]);

  if (state === "loading" || state === "hidden") return null;

  const shortAccount = (email?: string | null) => (email ? email.split("@")[0] : "");
  const isBirthday = (ev: GEvent) => ev.eventType === "birthday";
  // O nome que o Google Agenda MOSTRA. Em aniversário vindo dos Contatos o
  // `summary` da API é o genérico "Happy birthday!" e o nome de verdade vem no
  // gadget; quando não vem, o `summary` já é o título que está lá no Google.
  const titleOf = (ev: GEvent) => ev.contactName || ev.summary;
  const fmtTime = (ev: GEvent) =>
    ev.allDay || !ev.start
      ? t("daily.gcal.allday")
      : new Date(ev.start).toLocaleTimeString(intl, { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="mb-2" style={{ borderBottom: "1px solid var(--border)", paddingBottom: 6 }}>
      <div className="flex items-center justify-between px-1 py-1">
        <span className="text-[10px] uppercase tracking-[1.5px] font-extrabold" style={{ color: "var(--text-3)" }}>
          {t("daily.gcal.title")}
          <span className="ml-1.5 normal-case tracking-normal font-semibold" style={{ color: "var(--text-3)", opacity: 0.7 }}>
            · {t("daily.gcal.readonly")}
          </span>
        </span>
        {/* Adicionar conta: sempre disponível (conecta a 1ª ou mais uma) */}
        <a
          href="/api/calendar/google/auth"
          className="text-[9px] font-bold uppercase tracking-wide cursor-pointer"
          style={{ color: "var(--color-wh-blue-light)" }}
          title="Conectar outra conta Google"
        >
          + conta
        </a>
      </div>

      {/* Chips das contas conectadas (cada uma com × pra remover) */}
      {state === "connected" && accounts.length > 0 && (
        <div className="flex flex-wrap gap-1 px-1 pb-1">
          {accounts.map((a) => {
            const label = a.email || "(conta Google)";
            return (
            <span
              key={a.email || "__empty__"}
              className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9.5px] font-semibold"
              style={{
                background: a.ok ? "rgba(66,133,244,0.10)" : "rgba(255,138,31,.10)",
                color: a.ok ? "#4285F4" : "var(--color-status-warning)",
                border: `1px solid ${a.ok ? "rgba(66,133,244,0.25)" : "rgba(255,138,31,.3)"}`,
              }}
              title={a.ok ? label : `${label} · expirou, reconecte em "+ conta"`}
            >
              📆 {label}
              {!a.ok && " · expirou"}
              <button
                type="button"
                onClick={() => removeAccount(a.email)}
                className="cursor-pointer font-bold leading-none"
                style={{ color: "inherit", opacity: 0.7 }}
                title={t("daily.gcal.disconnect")}
                aria-label={`${t("daily.gcal.disconnect")} ${a.email}`}
              >
                ✕
              </button>
            </span>
            );
          })}
        </div>
      )}

      {state === "disconnected" && (
        <a
          href="/api/calendar/google/auth"
          className="block mx-1 my-1 text-center py-1.5 rounded-md text-[11px] font-bold cursor-pointer"
          style={{ background: "rgba(31,85,255,.12)", color: "var(--color-wh-blue-light)", border: "1px solid var(--border-hi)" }}
        >
          {t("daily.gcal.connect")}
        </a>
      )}

      {state === "connected" && events.length === 0 && (
        <div className="px-2 py-1.5 text-[10.5px]" style={{ color: "var(--text-3)" }}>
          {t("daily.gcal.empty")}
        </div>
      )}

      {state === "connected" &&
        groups.map((g) => {
          const today = dayKeyOf(new Date()) === g.key;
          const otherYear = g.date.getFullYear() !== new Date().getFullYear();
          return (
            <div key={g.key} className="grid grid-cols-[38px_1fr] gap-2 px-1 py-1.5" style={{ borderTop: "1px solid var(--border)" }}>
              {/* Coluna da data (dia da semana · número · mês), igual ao Google */}
              <div className="text-center pt-0.5">
                <div className="text-[8.5px] uppercase tracking-wide font-bold leading-none" style={{ color: "var(--text-3)" }}>
                  {g.date.toLocaleDateString(intl, { weekday: "short" }).replace(".", "")}
                </div>
                <div
                  className="text-[15px] font-extrabold leading-none mx-auto mt-1 flex items-center justify-center"
                  style={{
                    color: today ? "#fff" : "var(--text)",
                    background: today ? "var(--color-wh-blue)" : "transparent",
                    borderRadius: "50%",
                    width: 24,
                    height: 24,
                  }}
                >
                  {g.date.getDate()}
                </div>
                {/* O ano só aparece quando NÃO é o ano corrente: é o que impedia
                    de ver que "14/08" de 2027 não era o mesmo "14/08" de 2026. */}
                <div className="text-[8px] uppercase font-bold leading-none mt-1" style={{ color: "var(--text-3)" }}>
                  {g.date.toLocaleDateString(intl, { month: "short" }).replace(".", "")}
                  {otherYear && ` ${g.date.getFullYear()}`}
                </div>
              </div>

              {/* Eventos do dia */}
              <div className="min-w-0">
                {g.items.map((ev) => (
                  <a
                    key={`${ev.account ?? ""}|${ev.id}|${ev.start ?? ""}`}
                    href={ev.htmlLink || undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-1.5 px-1.5 py-1 rounded-md my-0.5 transition-colors hover:bg-[rgba(66,133,244,0.10)]"
                    style={{ cursor: ev.htmlLink ? "pointer" : "default" }}
                  >
                    {isBirthday(ev) ? (
                      <span className="text-[9px] leading-[14px] flex-shrink-0" aria-hidden>
                        🎂
                      </span>
                    ) : (
                      <span
                        className="flex-shrink-0 mt-[4.5px]"
                        style={{ width: 7, height: 7, borderRadius: "50%", background: "#4285F4" }}
                        aria-hidden
                      />
                    )}
                    <span
                      className="text-[9.5px] font-bold whitespace-nowrap flex-shrink-0 mt-px"
                      style={{ color: "var(--text-3)" }}
                    >
                      {fmtTime(ev)}
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block text-[11px] font-semibold truncate" style={{ color: "var(--text)" }}>
                        {titleOf(ev)}
                      </span>
                      <span className="flex flex-wrap gap-x-2 text-[9px]" style={{ color: "#4285F4", opacity: 0.85 }}>
                        {ev.account && accounts.length > 1 && <span className="truncate">📆 {shortAccount(ev.account)}</span>}
                        {ev.calendar && <span className="truncate">🗂 {ev.calendar}</span>}
                        {ev.location && (
                          <span className="truncate" style={{ color: "var(--text-3)" }}>
                            📍 {ev.location}
                          </span>
                        )}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
}
