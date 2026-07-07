"use client";
// Seção "Google Agenda" dentro do card de Agenda (importação Google → Watch
// Tower, só-leitura). Mostra os próximos eventos do Google do usuário, ou um
// botão pra conectar. Só aparece se o Google estiver configurado no servidor.
import { useCallback, useEffect, useRef, useState } from "react";
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
}
interface EventsResponse {
  connected?: boolean;
  configured?: boolean;
  expired?: boolean;
  googleEmail?: string | null;
  events?: GEvent[];
}

export function GoogleCalendar() {
  const { t, intl } = useLocale();
  const toast = useToast();
  const [state, setState] = useState<"loading" | "hidden" | "disconnected" | "connected">("loading");
  const [events, setEvents] = useState<GEvent[]>([]);
  const [gmail, setGmail] = useState<string | null>(null);
  const toastedRef = useRef(false);

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
      if (data.expired && !toastedRef.current) {
        toastedRef.current = true;
        toast(t("daily.gcal.expired"));
      }
      if (data.connected) {
        setEvents(data.events ?? []);
        setGmail(data.googleEmail ?? null);
        setState("connected");
      } else {
        setState("disconnected");
      }
    } catch {
      setState("hidden");
    }
  }, [t, toast]);

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
    if (g === "connected") load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const disconnect = useCallback(async () => {
    try {
      const res = await fetch("/api/calendar/google/disconnect", { method: "POST" });
      if (res.ok) {
        toast(t("daily.gcal.disconnected"));
        setEvents([]);
        setState("disconnected");
      }
    } catch {
      /* silencioso */
    }
  }, [t, toast]);

  if (state === "loading" || state === "hidden") return null;

  const fmtWhen = (ev: GEvent) => {
    if (!ev.start) return "";
    const d = new Date(ev.start);
    if (ev.allDay) {
      return `${d.toLocaleDateString(intl, { day: "2-digit", month: "2-digit" })} · ${t("daily.gcal.allday")}`;
    }
    return d.toLocaleString(intl, { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="mb-2" style={{ borderBottom: "1px solid var(--border)", paddingBottom: 6 }}>
      <div className="flex items-center justify-between px-1 py-1">
        <span className="text-[10px] uppercase tracking-[1.5px] font-extrabold" style={{ color: "var(--text-3)" }}>
          {t("daily.gcal.title")}
          <span className="ml-1.5 normal-case tracking-normal font-semibold" style={{ color: "var(--text-3)", opacity: 0.7 }}>
            · {t("daily.gcal.readonly")}
          </span>
          {state === "connected" && gmail && (
            <span className="ml-1.5 normal-case tracking-normal font-semibold" style={{ color: "#4285F4" }}>
              · {gmail}
            </span>
          )}
        </span>
        {state === "connected" && (
          <button
            type="button"
            onClick={disconnect}
            className="text-[9px] font-bold uppercase tracking-wide cursor-pointer"
            style={{ color: "var(--text-3)" }}
            title={gmail || undefined}
          >
            {t("daily.gcal.disconnect")}
          </button>
        )}
      </div>

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
        events.map((ev) => (
          <a
            key={ev.id}
            href={ev.htmlLink || undefined}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 px-2 py-1.5 rounded-md my-0.5 transition-colors hover:bg-[rgba(66,133,244,0.08)]"
            style={{ borderLeft: "3px solid #4285F4", cursor: ev.htmlLink ? "pointer" : "default" }}
          >
            <span className="text-[10px] font-extrabold whitespace-nowrap mt-px" style={{ color: "#4285F4" }}>
              {fmtWhen(ev)}
            </span>
            <span className="flex-1 min-w-0">
              <span className="block text-[11px] font-semibold truncate" style={{ color: "var(--text)" }}>
                {ev.summary}
              </span>
              {ev.calendar && (
                <span className="block text-[9px] truncate" style={{ color: "#4285F4", opacity: 0.85 }}>
                  🗂 {ev.calendar}
                </span>
              )}
              {ev.location && (
                <span className="block text-[9px] truncate" style={{ color: "var(--text-3)" }}>
                  📍 {ev.location}
                </span>
              )}
            </span>
          </a>
        ))}
    </div>
  );
}
