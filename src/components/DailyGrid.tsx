"use client";
import { useEffect, useMemo, useRef, useState, DragEvent } from "react";
import type { Task, AgendaItem, Reminder, ScheduledAction } from "@/lib/types";
import { useDualStorage } from "@/lib/dual-storage";
import {
  tasksConfig,
  agendaConfig,
  remindersConfig,
  scheduledConfig,
} from "@/lib/dual-storage-configs";
import { useToast } from "./ToastProvider";
import { useUndoOptional } from "./UndoProvider";
import { useLocale } from "./LocaleProvider";
import { DailyCard } from "./DailyCard";
import { InboxCard } from "./InboxCard";
import { GoogleCalendar } from "./GoogleCalendar";
import { SafeBoundary } from "./SafeBoundary";

export type DailyBlock = "inbox" | "scheduled" | "agenda" | "tasks" | "reminders";

export type BoardScope = "personal" | "team";

export function DailyGrid({ only }: { only?: DailyBlock } = {}) {
  const { t } = useLocale();
  // Alias estável da função de tradução para usar dentro de iterações onde a
  // variável de item se chama `t` (ex.: tasks.map((t) => ...)), evitando shadowing.
  const t2 = t;
  // Aba Pessoal | Equipe (lembrada por bloco). Default = Equipe, pra mostrar
  // o trabalho compartilhado do time já de cara.
  const scopeKey = `wt-scope-${only ?? "all"}`;
  const [scope, setScope] = useState<BoardScope>("team");
  const [scopeHydrated, setScopeHydrated] = useState(false);
  useEffect(() => {
    try {
      const s = localStorage.getItem(scopeKey);
      if (s === "personal" || s === "team") setScope(s);
    } catch {}
    setScopeHydrated(true);
  }, [scopeKey]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("panel") !== "reminders") return;
    const requestedScope = params.get("scope");
    if (requestedScope === "personal" || requestedScope === "team") {
      setScope(requestedScope);
    }
  }, []);
  useEffect(() => {
    if (scopeHydrated) {
      try { localStorage.setItem(scopeKey, scope); } catch {}
    }
  }, [scope, scopeHydrated, scopeKey]);

  const tCfg = useMemo(() => ({ ...tasksConfig, scope }), [scope]);
  const aCfg = useMemo(() => ({ ...agendaConfig, scope }), [scope]);
  const rCfg = useMemo(() => ({ ...remindersConfig, scope }), [scope]);
  const sCfg = useMemo(() => ({ ...scheduledConfig, scope }), [scope]);

  const tasksHook = useDualStorage(tCfg);
  const agendaHook = useDualStorage(aCfg);
  const remindersHook = useDualStorage(rCfg);
  const scheduledHook = useDualStorage(sCfg);

  const tasks = tasksHook.items;
  const agenda = agendaHook.items;
  const reminders = remindersHook.items;
  const scheduled = scheduledHook.items;
  const hydrated =
    tasksHook.hydrated && agendaHook.hydrated && remindersHook.hydrated && scheduledHook.hydrated;

  const [draggingId, setDraggingId] = useState<number | null>(null);
  const toast = useToast();

  // Undo/redo de "apagar" (só escopo Pessoal — itens de Equipe/Friday ficam de
  // fora, alterá-los passa pelo aviso ao Hammis). Refs garantem o hook atual.
  const undoCtx = useUndoOptional();
  const tasksHookRef = useRef(tasksHook);
  tasksHookRef.current = tasksHook;
  const agendaHookRef = useRef(agendaHook);
  agendaHookRef.current = agendaHook;

  const tasksRemaining = tasks.filter((t) => !t.done).length;

  // ===== task ops =====
  const toggleTask = (id: number) => {
    const t = tasks.find((x) => x.id === id);
    if (t) tasksHook.update(id, { done: !t.done });
  };
  const editTask = (id: number, text: string) => {
    if (!text.trim()) return tasksHook.remove(id);
    tasksHook.update(id, { text: text.trim() });
  };
  const deleteTask = (id: number) => {
    const item = tasks.find((x) => x.id === id);
    if (!window.confirm(`${t("daily.tasks.delete.confirm")}${item ? `\n\n"${item.text}"` : ""}`)) return;
    tasksHook.remove(id);
    if (item && scope === "personal" && undoCtx) {
      let curId = id;
      undoCtx.push({
        label: t("daily.undo.deleteTask"),
        undo: async () => {
          const nid = await tasksHookRef.current.add({ text: item.text, done: item.done });
          if (nid) curId = nid;
        },
        redo: async () => {
          await tasksHookRef.current.remove(curId);
        },
      });
    }
  };
  const addTask = () => {
    const text = window.prompt(t("daily.tasks.add.prompt"))?.trim();
    if (!text) return;
    if (!window.confirm(`${t("daily.tasks.add.confirm")}\n\n"${text}"`)) return;
    tasksHook.add({ text, done: false });
  };

  // ===== agenda ops + drag =====
  const editAgenda = (id: number, field: "title" | "where" | "time", value: string) =>
    agendaHook.update(id, { [field]: value } as Partial<AgendaItem>);
  const addAgenda = () => {
    const title = window.prompt(t("daily.agenda.add.titlePrompt"))?.trim();
    if (!title) return;
    const time = (window.prompt(t("daily.agenda.add.timePrompt"), "00:00") || "00:00").trim();
    if (!window.confirm(`${t("daily.agenda.add.confirm")}\n\n${time} · ${title}`)) return;
    agendaHook.add({ time, title, where: "" });
  };
  const deleteAgenda = (id: number) => {
    const item = agenda.find((a) => a.id === id);
    if (!window.confirm(`${t("daily.agenda.delete.confirm")}${item ? `\n\n${item.time} · ${item.title}` : ""}`)) return;
    agendaHook.remove(id);
    if (item && scope === "personal" && undoCtx) {
      let curId = id;
      undoCtx.push({
        label: t("daily.undo.deleteAgenda"),
        undo: async () => {
          const nid = await agendaHookRef.current.add({ time: item.time, title: item.title, where: item.where });
          if (nid) curId = nid;
        },
        redo: async () => {
          await agendaHookRef.current.remove(curId);
        },
      });
    }
  };
  const reorderAgenda = (sourceId: number, targetId: number) => {
    if (sourceId === targetId) return;
    const src = agenda.findIndex((a) => a.id === sourceId);
    const tgt = agenda.findIndex((a) => a.id === targetId);
    if (src === -1 || tgt === -1) return;
    const next = [...agenda];
    const [moved] = next.splice(src, 1);
    next.splice(tgt, 0, moved);
    agendaHook.setAll(next);
  };
  const onDragStart = (id: number) => (e: DragEvent<HTMLDivElement>) => {
    setDraggingId(id);
    e.dataTransfer.setData("text/plain", String(id));
    e.dataTransfer.effectAllowed = "move";
  };
  const onDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };
  const onDrop = (targetId: number) => (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const sourceId = Number(e.dataTransfer.getData("text/plain"));
    if (!Number.isNaN(sourceId)) reorderAgenda(sourceId, targetId);
    setDraggingId(null);
  };
  const onDragEnd = () => setDraggingId(null);

  // ===== reminder ops =====
  const editReminder = (id: number, text: string) => {
    if (!text.trim()) return remindersHook.remove(id);
    remindersHook.update(id, { text: text.trim() });
  };
  const addReminder = () => {
    const text = window.prompt(t("daily.reminders.add.prompt"))?.trim();
    if (!text) return;
    if (!window.confirm(`${t("daily.reminders.add.confirm")}\n\n"${text}"`)) return;
    remindersHook.add({ text, when: t("daily.when.today"), crit: false });
  };
  // Manda o lembrete como SOLICITAÇÃO pra Friday (reusa o canal de mensagens).
  // Quando a Friday abrir uma sessão, ela pergunta ao Hammis se quer iniciar,
  // explicando o quê foi e quem pediu.
  const sendReminderToFriday = async (r: Reminder) => {
    const authorPart = scope === "team" && r.author ? `, ${t("daily.friday.reminderFrom", { author: r.author })}` : "";
    const msg = `⚡ EXECUTAR · Watch Tower (lembrete): "${r.text}"${authorPart}`;
    try {
      const res = await fetch("/api/suggestions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body: msg }),
      });
      if (res.ok) toast(t("daily.friday.sent"));
      else if (res.status === 401) toast(t("daily.friday.signin"));
      else toast(t("daily.friday.error", { n: res.status }));
    } catch {
      toast(t("daily.friday.fail"));
    }
  };

  // ===== scheduled ops =====
  const editScheduledTitle = (id: number, title: string) => {
    if (!title.trim()) return scheduledHook.remove(id);
    scheduledHook.update(id, { title: title.trim() });
  };
  const toggleScheduled = (id: number) => {
    const s = scheduled.find((x) => x.id === id);
    if (s) scheduledHook.update(id, { status: s.status === "active" ? "paused" : "active" });
  };
  const addScheduled = () => {
    const title = window.prompt(t("daily.scheduled.add.prompt"))?.trim();
    if (!title) return;
    if (!window.confirm(`${t("daily.scheduled.add.confirm")}\n\n"${title}"`)) return;
    scheduledHook.add({
      icon: "⚡",
      title,
      frequency: t("daily.freq.daily"),
      nextRun: t("daily.when.tomorrow"),
      status: "active",
    });
  };

  // Inbox real (Fase 3): contadores IMAP ao vivo + viewer embutido — componente próprio.
  const inboxCard = <InboxCard />;

  const scheduledCard = (
        <DailyCard
          t={t}
          cardKey="scheduled"
          title={t("daily.scheduled.title")}
          total={t("daily.scheduled.total", { n: scheduled.length })}
          action={t("daily.scheduled.action")}
          onAction={addScheduled}
          bodyMaxHeight={300}
          scope={scope}
          onScopeChange={setScope}
        >
          {scheduled.map((sa) => (
            <div
              key={sa.id}
              className="flex items-start gap-3 px-4 py-3 rounded-lg my-1 group"
              style={{
                borderLeft: `3px solid ${sa.status === "active" ? "var(--color-status-stable)" : "var(--text-3)"}`,
                background: sa.status === "active" ? "rgba(16,224,160,.05)" : "rgba(146,139,183,.05)",
                opacity: sa.status === "active" ? 1 : 0.6,
              }}
            >
              <div className="text-[18px] flex-shrink-0 mt-px" aria-hidden>
                {sa.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => editScheduledTitle(sa.id, e.currentTarget.textContent || "")}
                  className="text-[13.5px] font-bold leading-snug outline-none"
                  style={{
                    color: "var(--text)",
                    overflowWrap: "anywhere",
                    wordBreak: "break-word",
                  }}
                >
                  {sa.title}
                </div>
                <div
                  className="flex flex-wrap gap-x-2.5 gap-y-1 mt-2 text-[10.5px] uppercase tracking-wide font-semibold leading-tight"
                  style={{ color: "var(--text-3)" }}
                >
                  <span>🕒 {sa.frequency}</span>
                  <span style={{ color: sa.status === "active" ? "var(--color-status-stable)" : "var(--text-3)" }}>
                    → {sa.nextRun}
                  </span>
                  {scope === "team" && sa.author && (
                    <span style={{ color: "var(--color-wh-blue-light)" }}>· {sa.author}</span>
                  )}
                </div>
              </div>
              <button
                type="button"
                onClick={() => toggleScheduled(sa.id)}
                title={sa.status === "active" ? t("daily.scheduled.pause") : t("daily.scheduled.activate")}
                className="flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity text-[10px] px-1.5 py-0.5 rounded font-bold"
                style={{ background: "rgba(255,255,255,0.06)", color: "var(--text-2)" }}
              >
                {sa.status === "active" ? "⏸" : "▶"}
              </button>
            </div>
          ))}
        </DailyCard>
  );

  const agendaCard = (
      <DailyCard
        t={t}
        cardKey="agenda"
        title={t("daily.agenda.title")}
        total={t("daily.agenda.total", { n: agenda.length })}
        action={t("daily.agenda.action")}
        onAction={addAgenda}
        bodyMaxHeight={560}
        scope={scope}
        onScopeChange={setScope}
      >
        <SafeBoundary>
          <GoogleCalendar />
        </SafeBoundary>
        {agenda.map((a) => (
          <div
            key={a.id}
            draggable
            onDragStart={onDragStart(a.id)}
            onDragOver={onDragOver}
            onDrop={onDrop(a.id)}
            onDragEnd={onDragEnd}
            className="grid grid-cols-[16px_46px_1fr_22px] gap-2.5 px-4 py-3 rounded-lg my-1 items-start transition-opacity group"
            style={{
              borderLeft: "3px solid var(--color-wh-blue)",
              background: "rgba(31,85,255,.05)",
              opacity: draggingId === a.id ? 0.4 : 1,
              cursor: "default",
            }}
          >
            <div
              className="flex flex-col items-center justify-center text-[12px] leading-none select-none cursor-grab active:cursor-grabbing mt-px"
              style={{ color: "var(--text-3)" }}
              title={t("daily.agenda.dragReorder")}
              aria-label={t("daily.agenda.drag")}
            >
              ⋮⋮
            </div>
            <div
              className="text-[11.5px] font-extrabold leading-tight tracking-wide outline-none whitespace-nowrap mt-px"
              style={{ color: "var(--color-wh-blue-light)" }}
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => editAgenda(a.id, "time", e.currentTarget.textContent || "")}
            >
              {a.time}
            </div>
            <div className="min-w-0">
              <div
                className="text-[11.5px] font-semibold leading-snug mb-1 outline-none"
                style={{
                  color: "var(--text)",
                  overflowWrap: "anywhere",
                  wordBreak: "break-word",
                }}
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => editAgenda(a.id, "title", e.currentTarget.textContent || "")}
              >
                {a.title}
              </div>
              <div
                className="text-[9.5px] outline-none leading-tight uppercase tracking-wide font-semibold"
                style={{
                  color: "var(--text-3)",
                  overflowWrap: "anywhere",
                  wordBreak: "break-word",
                }}
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => editAgenda(a.id, "where", e.currentTarget.textContent || "")}
              >
                {a.where || t("daily.common.dash")}
              </div>
              {scope === "team" && a.author && (
                <div className="text-[8.5px] uppercase tracking-wide font-bold mt-1" style={{ color: "var(--color-wh-blue-light)" }}>
                  {t("daily.by", { author: a.author })}
                </div>
              )}
            </div>
            <button
              type="button"
              onClick={() => deleteAgenda(a.id)}
              title={t("daily.agenda.remove")}
              aria-label={t("daily.agenda.removeNamed", { title: a.title })}
              className="w-[22px] h-[22px] flex items-center justify-center rounded-md opacity-0 group-hover:opacity-100 transition-all cursor-pointer text-[12px] font-bold leading-none flex-shrink-0 mt-px hover:scale-110"
              style={{
                color: "var(--color-status-critical)",
                background: "rgba(255,59,92,.08)",
                border: "1px solid rgba(255,59,92,.25)",
              }}
            >
              ✕
            </button>
          </div>
        ))}
      </DailyCard>
  );

  const tasksCard = (
      <DailyCard
        t={t}
        cardKey="tasks"
        title={t("daily.tasks.title")}
        total={t("daily.tasks.total", { n: tasksRemaining, total: tasks.length })}
        action={t("daily.tasks.action")}
        onAction={addTask}
        bodyMaxHeight={560}
        scope={scope}
        onScopeChange={setScope}
      >
        {tasks.map((t) => (
          <div
            key={t.id}
            className="flex items-start gap-3 px-4 py-2.5 rounded-lg my-1 group transition-colors"
            style={{ borderLeft: "3px solid transparent" }}
          >
            <button
              type="button"
              onClick={() => toggleTask(t.id)}
              className="w-[17px] h-[17px] rounded-[5px] flex items-center justify-center cursor-pointer flex-shrink-0 transition-colors text-[10px] font-black mt-0.5"
              style={{
                border: "2px solid var(--color-wh-blue-light)",
                background: t.done ? "var(--color-wh-blue)" : "transparent",
                borderColor: t.done ? "var(--color-wh-blue)" : "var(--color-wh-blue-light)",
                color: "#fff",
              }}
            >
              {t.done ? "✓" : ""}
            </button>
            <div className="flex-1 min-w-0">
              <div
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => editTask(t.id, e.currentTarget.textContent || "")}
                className="text-[11.5px] font-medium outline-none px-1 py-0.5 rounded leading-snug cursor-text"
                style={{
                  color: t.done ? "var(--text-3)" : "var(--text)",
                  textDecoration: t.done ? "line-through" : undefined,
                  overflowWrap: "anywhere",
                  wordBreak: "break-word",
                }}
              >
                {t.text}
              </div>
              {scope === "team" && t.author && (
                <div className="text-[8.5px] uppercase tracking-wide font-bold mt-0.5 px-1" style={{ color: "var(--color-wh-blue-light)" }}>
                  {t2("daily.by", { author: t.author })}
                </div>
              )}
            </div>
            <button
              type="button"
              onClick={() => deleteTask(t.id)}
              title={t2("daily.remove")}
              className="opacity-0 group-hover:opacity-100 cursor-pointer text-[13px] px-1.5 transition-opacity flex-shrink-0"
              style={{ color: "var(--text-3)", background: "none", border: "none" }}
            >
              ✕
            </button>
          </div>
        ))}
      </DailyCard>
  );

  const remindersCard = (
      <DailyCard
        t={t}
        cardKey="reminders"
        title={t("daily.reminders.title")}
        total={t("daily.reminders.total", { n: reminders.length })}
        action={t("daily.reminders.action")}
        onAction={addReminder}
        bodyMaxHeight={300}
        scope={scope}
        onScopeChange={setScope}
      >
        {reminders.map((r) => (
          <div
            key={r.id}
            className="flex items-start gap-3 px-4 py-3 rounded-lg my-1"
            style={{
              borderLeft: `3px solid ${r.crit ? "var(--color-status-critical)" : "var(--color-status-warning)"}`,
              background: r.crit ? "rgba(255,59,92,.06)" : "rgba(255,138,31,.06)",
              opacity: r.fired ? 0.6 : 1,
            }}
          >
            <div
              className="text-[13px] flex-shrink-0 mt-px"
              style={{ color: r.crit ? "var(--color-status-critical)" : "var(--color-status-warning)" }}
            >
              {r.crit ? "⚠" : "🔔"}
            </div>
            <div className="flex-1 min-w-0">
              <div
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => editReminder(r.id, e.currentTarget.textContent || "")}
                className="text-[11.5px] font-medium leading-snug outline-none"
                style={{
                  color: "var(--text)",
                  overflowWrap: "anywhere",
                  wordBreak: "break-word",
                }}
              >
                {r.text}
              </div>
              <div
                className="text-[9.5px] uppercase tracking-wide font-semibold mt-1.5 leading-tight"
                style={{ color: "var(--text-3)" }}
              >
                {r.when}
                {r.fired && (
                  <span
                    className="ml-1.5 px-1.5 py-0.5 rounded text-[8px] font-extrabold tracking-wide"
                    style={{ color: "var(--color-status-stable)", background: "rgba(16,224,160,.14)" }}
                    title="Este lembrete já disparou o aviso/push no horário agendado."
                  >
                    ✓ JÁ DISPAROU
                  </span>
                )}
                {scope === "team" && r.author && (
                  <span style={{ color: "var(--color-wh-blue-light)" }}> {t("daily.byInline", { author: r.author })}</span>
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={() => sendReminderToFriday(r)}
              title={t("daily.friday.btnTitle")}
              aria-label={t("daily.friday.btnAria", { text: r.text })}
              className="flex-shrink-0 self-center inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-bold tracking-wide transition-all hover:-translate-y-px cursor-pointer"
              style={{ background: "rgba(31,85,255,.12)", color: "var(--color-wh-blue-light)", border: "1px solid var(--border-hi)" }}
            >
              ⚡ Friday
            </button>
          </div>
        ))}
      </DailyCard>
  );

  // Quando usado com `only`, retorna apenas aquele card isolado
  // (Dashboard coloca cada um em sua célula independente do grid).
  if (only === "inbox") return inboxCard;
  if (only === "scheduled") return scheduledCard;
  if (only === "agenda") return agendaCard;
  if (only === "tasks") return tasksCard;
  if (only === "reminders") return remindersCard;

  // Modo legado: renderiza todos numa grade interna
  return (
    <section className="grid grid-cols-1 @md:grid-cols-2 @3xl:grid-cols-4 gap-4 items-start">
      <div className="flex flex-col gap-4">
        {inboxCard}
        {scheduledCard}
      </div>
      {agendaCard}
      {tasksCard}
      {remindersCard}
    </section>
  );
}
