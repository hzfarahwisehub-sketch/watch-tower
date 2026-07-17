"use client";
// Seção "Google Agenda" dentro do card de Agenda (importação Google → Watch
// Tower, só-leitura, MULTI-CONTA). Mostra os próximos eventos de TODAS as contas
// Google conectadas pelo login, com etiqueta de qual conta, + botão pra adicionar
// mais uma conta. Só aparece se o Google estiver configurado no servidor.
//
// Duas visualizações, escolhidas por um botão na própria seção (lembrado por
// usuário no localStorage):
//  - "telas": mês inteiro; clicar num dia com agendamento abre a tela do dia.
//  - "duplo": grade do mês e lista "Programação" lado a lado (a versão anterior).
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
  /** Fim da janela que o servidor realmente buscou (ISO). Além disso a grade não
   *  tem dado, e desenhar mês vazio lá seria afirmar "não tem nada" sem saber. */
  windowEnd?: string;
}

type ViewMode = "telas" | "duplo";

const pad2 = (n: number) => String(n).padStart(2, "0");
/** Chave do dia LOCAL (o all-day vem como "YYYY-MM-DDT00:00:00", sem fuso, e o
 *  Date já o resolve na meia-noite local). */
const dayKeyOf = (d: Date) => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;

/** As células da grade do mês, do domingo que abre a 1ª semana até o sábado que
 *  fecha a última. Só as linhas necessárias (5 ou 6), pra grade não ficar com uma
 *  fileira vazia sobrando. `new Date(y, m, 1 - offset)` com dia <= 0 volta pro mês
 *  anterior sozinho, que é o comportamento que a gente quer aqui. */
function monthCells(cursor: Date): Date[] {
  const y = cursor.getFullYear();
  const m = cursor.getMonth();
  const startOffset = new Date(y, m, 1).getDay(); // 0 = domingo
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const rows = Math.ceil((startOffset + daysInMonth) / 7);
  return Array.from({ length: rows * 7 }, (_, i) => new Date(y, m, 1 - startOffset + i));
}

export function GoogleCalendar() {
  const { t, intl } = useLocale();
  const toast = useToast();
  const [state, setState] = useState<"loading" | "hidden" | "disconnected" | "connected">("loading");
  const [events, setEvents] = useState<GEvent[]>([]);
  const [accounts, setAccounts] = useState<AccountView[]>([]);
  // Mês que a grade está mostrando (dia 1 às 00:00 local) e o dia clicado nela.
  const [cursor, setCursor] = useState(() => {
    const n = new Date();
    return new Date(n.getFullYear(), n.getMonth(), 1);
  });
  const [selected, setSelected] = useState<string | null>(null);
  const [windowEnd, setWindowEnd] = useState<Date | null>(null);
  // Visualização escolhida (lembrada no localStorage) e, no modo "telas", qual
  // dia está aberto (null = mostrando o mês inteiro).
  const [view, setView] = useState<ViewMode>("telas");
  const [dayOpen, setDayOpen] = useState<string | null>(null);
  // Um nó por grupo de dia, pra clicar na grade rolar até o dia na lista.
  const groupNodes = useRef(new Map<string, HTMLDivElement | null>());

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
        const we = data.windowEnd ? new Date(data.windowEnd) : null;
        setWindowEnd(we && !Number.isNaN(we.getTime()) ? we : null);
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

  // Preferência de visualização (uma vez, no cliente).
  useEffect(() => {
    try {
      const v = localStorage.getItem("wt-gcal-view");
      if (v === "telas" || v === "duplo") setView(v);
    } catch {}
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

  const changeView = useCallback((v: ViewMode) => {
    setView(v);
    if (v === "duplo") setDayOpen(null); // a lista "duplo" não tem tela de dia
    try {
      localStorage.setItem("wt-gcal-view", v);
    } catch {}
  }, []);

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

  // Dias que têm evento: a bolinha embaixo do número na grade.
  const daysWithEvents = useMemo(() => new Set(groups.map((g) => g.key)), [groups]);
  // Eventos por dia (pros mini-chips da grade cheia) e a lista ordenada de dias
  // com evento (pras setas ‹ › da tela do dia pularem de um pro outro).
  const eventsByDay = useMemo(() => new Map(groups.map((g) => [g.key, g.items] as const)), [groups]);
  const eventDayKeys = useMemo(() => groups.map((g) => g.key), [groups]);
  const cells = useMemo(() => monthCells(cursor), [cursor]);
  // 1º/01/2023 caiu num DOMINGO: serve de âncora pra tirar os rótulos da semana
  // do próprio locale, em vez de cravar "d s t q q s s" em português aqui dentro.
  const weekdayLabels = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) =>
        new Date(2023, 0, 1 + i).toLocaleDateString(intl, { weekday: "narrow" }),
      ),
    [intl],
  );

  // Clicar no dia rola a lista até ele. `block:"nearest"` mexe só no container
  // que rola de verdade — sem isso ele arrasta a página inteira junto.
  const pickDay = useCallback((key: string) => {
    setSelected(key);
    groupNodes.current.get(key)?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, []);

  // Limites da navegação: a busca vai de AGORA até windowEnd, então mês passado
  // nunca terá dado e mês depois da janela também não. Deixar ‹ › passarem disso
  // desenharia um mês vazio, que é a grade AFIRMANDO "não tem nada" num mês que
  // ela nunca perguntou ao Google.
  const monthStart = (d: Date) => new Date(d.getFullYear(), d.getMonth(), 1);
  const minMonth = monthStart(new Date());
  const maxMonth = windowEnd ? monthStart(windowEnd) : minMonth;
  const canPrev = cursor > minMonth;
  const canNext = cursor < maxMonth;

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

  // Linha de evento GRANDE, pra tela do dia (visualização "telas").
  const rowLg = (ev: GEvent) => {
    const bd = isBirthday(ev);
    return (
      <a
        key={`${ev.account ?? ""}|${ev.id}|${ev.start ?? ""}`}
        href={ev.htmlLink || undefined}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start gap-3 px-3 py-2.5 rounded-lg my-1 transition-transform hover:translate-x-0.5"
        style={{
          background: bd ? "rgba(212,175,55,.06)" : "rgba(66,133,244,.06)",
          border: "1px solid var(--border)",
          borderLeft: `3px solid ${bd ? "#D4AF37" : "#4285F4"}`,
          cursor: ev.htmlLink ? "pointer" : "default",
        }}
      >
        <span
          className="font-extrabold whitespace-nowrap flex-shrink-0 text-[13px] mt-px"
          style={{ color: bd ? "#D4AF37" : "var(--color-wh-blue-light)" }}
        >
          {bd ? "🎂" : fmtTime(ev)}
        </span>
        <span className="flex-1 min-w-0">
          <span className="block text-[13px] font-semibold leading-snug" style={{ color: "var(--text)" }}>
            {titleOf(ev)}
          </span>
          <span className="flex flex-wrap gap-x-3 gap-y-0.5 text-[10px] mt-1" style={{ color: "var(--text-3)" }}>
            {ev.account && accounts.length > 1 && <span className="truncate">📆 {shortAccount(ev.account)}</span>}
            {ev.calendar && <span className="truncate">🗂 {ev.calendar}</span>}
            {ev.location && <span className="truncate">📍 {ev.location}</span>}
          </span>
        </span>
      </a>
    );
  };

  return (
    <div className="mb-2" style={{ borderBottom: "1px solid var(--border)", paddingBottom: 6 }}>
      <div className="flex items-center justify-between gap-2 px-1 py-1 flex-wrap">
        <span className="text-[10px] uppercase tracking-[1.5px] font-extrabold" style={{ color: "var(--text-3)" }}>
          {t("daily.gcal.title")}
          <span className="ml-1.5 normal-case tracking-normal font-semibold" style={{ color: "var(--text-3)", opacity: 0.7 }}>
            · {t("daily.gcal.readonly")}
          </span>
        </span>
        <div className="flex items-center gap-2">
          {/* Botão de alternar visualização (só quando há o que mostrar) */}
          {state === "connected" && events.length > 0 && (
            <div className="inline-flex rounded-md overflow-hidden" style={{ border: "1px solid var(--border-hi)" }}>
              {(
                [
                  ["telas", t("daily.gcal.viewScreens"), t("daily.gcal.viewScreensHint")],
                  ["duplo", t("daily.gcal.viewSplit"), t("daily.gcal.viewSplitHint")],
                ] as const
              ).map(([v, label, hint]) => {
                const on = view === v;
                return (
                  <button
                    key={v}
                    type="button"
                    onClick={() => changeView(v)}
                    title={hint}
                    aria-pressed={on}
                    className="text-[9px] font-bold uppercase tracking-wide px-2 py-1 cursor-pointer transition-colors"
                    style={{ background: on ? "var(--color-wh-blue)" : "transparent", color: on ? "#fff" : "var(--text-3)" }}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          )}
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

      {/* ===== Visualização "duplo": grade do mês + Programação lado a lado =====
          Lado a lado quando cabe, e a lista desce sozinha embaixo da grade quando
          a caixa aperta (flex-wrap, sem media query — a caixa é redimensionável,
          então quem manda é a largura dela). */}
      {state === "connected" && events.length > 0 && view === "duplo" && (
      <div className="flex flex-wrap gap-3 px-1">
      {/* "0 1 190px" e não "0 0 …": com shrink 0 o painel nunca cedia e vazava do
          corpo do card (que rola), botando barra horizontal e espremendo a lista
          quando a caixa era arrastada pra menos de ~204px. */}
      <div style={{ flex: "0 1 190px", minWidth: 0 }}>
        <div className="flex items-center gap-1.5 mb-1">
          {/* first-letter, não `capitalize`: o locale devolve "julho de 2026" e o
              capitalize do Tailwind subia TODA palavra ("Julho De 2026"). */}
          <span className="text-[11px] font-bold first-letter:uppercase" style={{ color: "var(--text)" }}>
            {cursor.toLocaleDateString(intl, { month: "long", year: "numeric" })}
          </span>
          <span className="ml-auto flex gap-1">
            <button
              type="button"
              disabled={!canPrev}
              onClick={() => setCursor((c) => new Date(c.getFullYear(), c.getMonth() - 1, 1))}
              aria-label={t("daily.gcal.prevMonth")}
              title={canPrev ? t("daily.gcal.prevMonth") : t("daily.gcal.outOfWindow")}
              className="text-[11px] font-bold leading-none px-1 rounded"
              style={{ color: "var(--text-3)", opacity: canPrev ? 1 : 0.25, cursor: canPrev ? "pointer" : "default" }}
            >
              ‹
            </button>
            <button
              type="button"
              disabled={!canNext}
              onClick={() => setCursor((c) => new Date(c.getFullYear(), c.getMonth() + 1, 1))}
              aria-label={t("daily.gcal.nextMonth")}
              title={canNext ? t("daily.gcal.nextMonth") : t("daily.gcal.outOfWindow")}
              className="text-[11px] font-bold leading-none px-1 rounded"
              style={{ color: "var(--text-3)", opacity: canNext ? 1 : 0.25, cursor: canNext ? "pointer" : "default" }}
            >
              ›
            </button>
          </span>
        </div>
        <div className="grid grid-cols-7 gap-px">
          {weekdayLabels.map((w, i) => (
            <div key={i} className="text-[8px] text-center font-bold uppercase" style={{ color: "var(--text-3)", opacity: 0.7 }}>
              {w}
            </div>
          ))}
          {cells.map((d) => {
            const k = dayKeyOf(d);
            const inMonth = d.getMonth() === cursor.getMonth();
            const isToday = k === dayKeyOf(new Date());
            const has = daysWithEvents.has(k);
            return (
              <button
                key={k}
                type="button"
                disabled={!has}
                onClick={() => pickDay(k)}
                title={has ? t("daily.gcal.goToDay") : undefined}
                className="text-center py-px rounded"
                style={{ cursor: has ? "pointer" : "default", background: selected === k ? "rgba(66,133,244,.14)" : "transparent" }}
              >
                <span
                  className="text-[9.5px] font-bold inline-flex items-center justify-center"
                  style={{
                    // min(): o círculo acompanha a célula quando a caixa aperta,
                    // senão 16px fixos colidiam com célula de ~12px.
                    width: "min(16px, 100%)",
                    height: 16,
                    borderRadius: "50%",
                    color: isToday ? "#fff" : inMonth ? "var(--text-2)" : "var(--text-3)",
                    // Só apaga dia de outro mês que esteja VAZIO. Apagar um que tem
                    // evento deixava a célula clicável a 1,6:1 de contraste.
                    opacity: inMonth || has || isToday ? 1 : 0.4,
                    background: isToday ? "var(--color-wh-blue)" : "transparent",
                  }}
                >
                  {d.getDate()}
                </span>
                <span
                  className="block mx-auto"
                  style={{
                    width: 3,
                    height: 3,
                    borderRadius: "50%",
                    background: has ? "#4285F4" : "transparent",
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ flex: "1 1 220px", minWidth: 0 }}>
        {groups.map((g) => {
          const today = dayKeyOf(new Date()) === g.key;
          const otherYear = g.date.getFullYear() !== new Date().getFullYear();
          return (
            <div
              key={g.key}
              ref={(n) => { groupNodes.current.set(g.key, n); }}
              className="grid grid-cols-[38px_1fr] gap-2 px-1 py-1.5"
              style={{
                borderTop: "1px solid var(--border)",
                background: selected === g.key ? "rgba(66,133,244,.07)" : "transparent",
                borderRadius: selected === g.key ? 6 : 0,
              }}
            >
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
      </div>
      )}

      {/* ===== Visualização "telas": mês inteiro ===== */}
      {state === "connected" && events.length > 0 && view === "telas" && dayOpen === null && (
        <div className="px-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[15px] font-extrabold first-letter:uppercase" style={{ color: "var(--text)" }}>
              {cursor.toLocaleDateString(intl, { month: "long", year: "numeric" })}
            </span>
            <div className="ml-auto flex items-center gap-1.5">
              <button
                type="button"
                disabled={!canPrev}
                onClick={() => setCursor((c) => new Date(c.getFullYear(), c.getMonth() - 1, 1))}
                aria-label={t("daily.gcal.prevMonth")}
                title={canPrev ? t("daily.gcal.prevMonth") : t("daily.gcal.outOfWindow")}
                className="w-7 h-7 rounded-lg text-[15px] font-bold flex items-center justify-center transition-colors"
                style={{ border: "1px solid var(--border-hi)", color: "var(--text-2)", opacity: canPrev ? 1 : 0.3, cursor: canPrev ? "pointer" : "default", background: "transparent" }}
              >
                ‹
              </button>
              <button
                type="button"
                disabled={!canNext}
                onClick={() => setCursor((c) => new Date(c.getFullYear(), c.getMonth() + 1, 1))}
                aria-label={t("daily.gcal.nextMonth")}
                title={canNext ? t("daily.gcal.nextMonth") : t("daily.gcal.outOfWindow")}
                className="w-7 h-7 rounded-lg text-[15px] font-bold flex items-center justify-center transition-colors"
                style={{ border: "1px solid var(--border-hi)", color: "var(--text-2)", opacity: canNext ? 1 : 0.3, cursor: canNext ? "pointer" : "default", background: "transparent" }}
              >
                ›
              </button>
              <button
                type="button"
                onClick={() => setCursor(monthStart(new Date()))}
                title={t("daily.gcal.today")}
                className="px-2.5 h-7 rounded-lg text-[10px] font-bold uppercase tracking-wide"
                style={{ border: "1px solid var(--border-hi)", color: "var(--color-wh-blue-light)", background: "transparent", cursor: "pointer" }}
              >
                {t("daily.gcal.today")}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1">
            {weekdayLabels.map((w, i) => (
              <div key={i} className="text-[9px] text-center font-bold uppercase tracking-wide pb-1" style={{ color: "var(--text-3)", opacity: 0.7 }}>
                {w}
              </div>
            ))}
            {cells.map((d) => {
              const k = dayKeyOf(d);
              const inMonth = d.getMonth() === cursor.getMonth();
              const isToday = k === dayKeyOf(new Date());
              const evs = eventsByDay.get(k) ?? [];
              const has = evs.length > 0;
              return (
                <button
                  key={k}
                  type="button"
                  disabled={!has}
                  onClick={() => setDayOpen(k)}
                  title={has ? t("daily.gcal.goToDay") : undefined}
                  className="rounded-lg p-1 flex flex-col min-w-0 min-h-[62px] transition-colors"
                  style={{
                    border: "1px solid",
                    borderColor: has ? "rgba(74,120,255,.28)" : "var(--border)",
                    background: has ? "rgba(31,85,255,.06)" : "transparent",
                    opacity: inMonth || has || isToday ? 1 : 0.38,
                    cursor: has ? "pointer" : "default",
                  }}
                >
                  <span className="flex items-center justify-between">
                    <span
                      className="text-[11px] font-bold inline-flex items-center justify-center"
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        color: isToday ? "#fff" : inMonth ? "var(--text-2)" : "var(--text-3)",
                        background: isToday ? "var(--color-wh-blue)" : "transparent",
                      }}
                    >
                      {d.getDate()}
                    </span>
                    {has && <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4A78FF" }} />}
                  </span>
                  <span className="mt-1 flex flex-col gap-0.5 min-w-0 text-left">
                    {evs.slice(0, 2).map((ev) => {
                      const bd = isBirthday(ev);
                      return (
                        <span
                          key={`${ev.id}|${ev.start ?? ""}`}
                          className="text-[9px] leading-tight truncate rounded px-1 py-px"
                          style={{
                            background: bd ? "rgba(212,175,55,.14)" : "rgba(66,133,244,.14)",
                            color: bd ? "#C9A227" : "var(--text-2)",
                            borderLeft: `2px solid ${bd ? "#D4AF37" : "#4285F4"}`,
                          }}
                        >
                          {bd ? "🎂 " : null}
                          {!ev.allDay && !bd ? <b style={{ color: "#79A6F5" }}>{fmtTime(ev)} </b> : null}
                          {titleOf(ev)}
                        </span>
                      );
                    })}
                    {evs.length > 2 && (
                      <span className="text-[8.5px] font-bold px-1" style={{ color: "var(--text-3)" }}>
                        +{evs.length - 2}
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="text-center text-[10px] mt-2" style={{ color: "var(--text-3)" }}>
            {t("daily.gcal.tapDayHint")}
          </div>
        </div>
      )}

      {/* ===== Visualização "telas": tela do dia clicado ===== */}
      {state === "connected" && events.length > 0 && view === "telas" && dayOpen !== null && (() => {
        const od = new Date(`${dayOpen}T00:00:00`);
        const items = eventsByDay.get(dayOpen) ?? [];
        const idx = eventDayKeys.indexOf(dayOpen);
        const prevKey = idx > 0 ? eventDayKeys[idx - 1] : null;
        const nextKey = idx >= 0 && idx < eventDayKeys.length - 1 ? eventDayKeys[idx + 1] : null;
        const after = idx >= 0 ? groups.slice(idx + 1) : [];
        return (
          <div className="px-1">
            <div className="flex items-center gap-2 mb-3">
              <button
                type="button"
                onClick={() => setDayOpen(null)}
                className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-lg"
                style={{ border: "1px solid var(--border-hi)", color: "var(--text-2)", background: "transparent", cursor: "pointer" }}
              >
                ‹ {t("daily.gcal.backToMonth")}
              </button>
            </div>

            <div className="flex items-end gap-3 pb-3 mb-2" style={{ borderBottom: "1px solid var(--border)" }}>
              <div className="text-[42px] font-extrabold leading-none" style={{ color: "var(--color-wh-blue-light)" }}>
                {od.getDate()}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[12px] font-bold uppercase tracking-wide first-letter:uppercase" style={{ color: "var(--color-wh-blue-light)" }}>
                  {od.toLocaleDateString(intl, { weekday: "long" })}
                </div>
                <div className="text-[11px] first-letter:uppercase" style={{ color: "var(--text-3)" }}>
                  {od.toLocaleDateString(intl, { month: "long", year: "numeric" })}
                </div>
              </div>
              <div className="flex gap-1.5">
                <button
                  type="button"
                  disabled={!prevKey}
                  onClick={() => prevKey && setDayOpen(prevKey)}
                  aria-label={t("daily.gcal.prevEventDay")}
                  title={t("daily.gcal.prevEventDay")}
                  className="w-7 h-7 rounded-lg text-[15px] font-bold flex items-center justify-center"
                  style={{ border: "1px solid var(--border-hi)", color: "var(--text-2)", opacity: prevKey ? 1 : 0.3, cursor: prevKey ? "pointer" : "default", background: "transparent" }}
                >
                  ‹
                </button>
                <button
                  type="button"
                  disabled={!nextKey}
                  onClick={() => nextKey && setDayOpen(nextKey)}
                  aria-label={t("daily.gcal.nextEventDay")}
                  title={t("daily.gcal.nextEventDay")}
                  className="w-7 h-7 rounded-lg text-[15px] font-bold flex items-center justify-center"
                  style={{ border: "1px solid var(--border-hi)", color: "var(--text-2)", opacity: nextKey ? 1 : 0.3, cursor: nextKey ? "pointer" : "default", background: "transparent" }}
                >
                  ›
                </button>
              </div>
            </div>

            <div className="text-[10px] font-bold uppercase tracking-[1.4px] mb-1 px-1" style={{ color: "var(--text-3)" }}>
              {t("daily.gcal.thisDay")}
            </div>
            {items.length ? (
              items.map(rowLg)
            ) : (
              <div className="px-2 py-1.5 text-[11px]" style={{ color: "var(--text-3)" }}>
                {t("daily.gcal.dayEmpty")}
              </div>
            )}

            {after.length > 0 && (
              <>
                <div className="text-[10px] font-bold uppercase tracking-[1.4px] mt-4 mb-1 px-1" style={{ color: "var(--text-3)" }}>
                  {t("daily.gcal.upNext")}
                </div>
                {after.map((g) => {
                  const otherYear = g.date.getFullYear() !== new Date().getFullYear();
                  return (
                    <div key={g.key} className="mb-1">
                      <button
                        type="button"
                        onClick={() => setDayOpen(g.key)}
                        className="flex items-center gap-2 text-[11px] font-bold my-1 px-1 cursor-pointer capitalize"
                        style={{ color: "var(--text-2)", background: "transparent" }}
                      >
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#4A78FF" }} />
                        {g.date
                          .toLocaleDateString(intl, { weekday: "short", day: "2-digit", month: "short" })
                          .replace(/\./g, "")}
                        {otherYear && ` ${g.date.getFullYear()}`}
                      </button>
                      {g.items.map(rowLg)}
                    </div>
                  );
                })}
              </>
            )}
          </div>
        );
      })()}
    </div>
  );
}
