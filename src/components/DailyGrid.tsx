"use client";
import { useEffect, useState, DragEvent } from "react";
import type { Task, AgendaItem, Reminder, ScheduledAction } from "@/lib/types";
import { STORAGE, load, save } from "@/lib/storage";
import {
  DEFAULT_TASKS,
  DEFAULT_AGENDA,
  DEFAULT_REMINDERS,
  DEFAULT_SCHEDULED,
  INBOX_ACCOUNTS,
} from "@/lib/data";
import { useToast } from "./ToastProvider";

export function DailyGrid() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [agenda, setAgenda] = useState<AgendaItem[]>([]);
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [scheduled, setScheduled] = useState<ScheduledAction[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [draggingId, setDraggingId] = useState<number | null>(null);
  const toast = useToast();

  useEffect(() => {
    setTasks(load(STORAGE.tasks, DEFAULT_TASKS));
    setAgenda(load(STORAGE.agenda, DEFAULT_AGENDA));
    setReminders(load(STORAGE.reminders, DEFAULT_REMINDERS));
    setScheduled(load(STORAGE.scheduled, DEFAULT_SCHEDULED));
    setHydrated(true);
  }, []);

  useEffect(() => { if (hydrated) save(STORAGE.tasks, tasks); }, [tasks, hydrated]);
  useEffect(() => { if (hydrated) save(STORAGE.agenda, agenda); }, [agenda, hydrated]);
  useEffect(() => { if (hydrated) save(STORAGE.reminders, reminders); }, [reminders, hydrated]);
  useEffect(() => { if (hydrated) save(STORAGE.scheduled, scheduled); }, [scheduled, hydrated]);

  const inboxTotal = INBOX_ACCOUNTS.reduce((s, a) => s + a.unread, 0);
  const tasksRemaining = tasks.filter((t) => !t.done).length;

  // ===== task ops =====
  const toggleTask = (id: number) => setTasks((ts) => ts.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  const editTask = (id: number, text: string) => {
    if (!text.trim()) return setTasks((ts) => ts.filter((t) => t.id !== id));
    setTasks((ts) => ts.map((t) => (t.id === id ? { ...t, text: text.trim() } : t)));
  };
  const deleteTask = (id: number) => setTasks((ts) => ts.filter((t) => t.id !== id));
  const addTask = () => {
    const id = Math.max(0, ...tasks.map((t) => t.id)) + 1;
    setTasks((ts) => [...ts, { id, text: "Nova tarefa", done: false }]);
  };

  // ===== agenda ops + drag =====
  const editAgenda = (id: number, field: "title" | "where" | "time", value: string) =>
    setAgenda((a) => a.map((x) => (x.id === id ? { ...x, [field]: value } : x)));
  const addAgenda = () => {
    const id = Math.max(0, ...agenda.map((a) => a.id)) + 1;
    setAgenda((a) => [...a, { id, time: "HH:MM", title: "Novo evento", where: "" }]);
  };
  const reorderAgenda = (sourceId: number, targetId: number) => {
    if (sourceId === targetId) return;
    setAgenda((prev) => {
      const src = prev.findIndex((a) => a.id === sourceId);
      const tgt = prev.findIndex((a) => a.id === targetId);
      if (src === -1 || tgt === -1) return prev;
      const next = [...prev];
      const [moved] = next.splice(src, 1);
      next.splice(tgt, 0, moved);
      return next;
    });
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
    if (!text.trim()) return setReminders((r) => r.filter((x) => x.id !== id));
    setReminders((r) => r.map((x) => (x.id === id ? { ...x, text: text.trim() } : x)));
  };
  const addReminder = () => {
    const id = Math.max(0, ...reminders.map((r) => r.id)) + 1;
    setReminders((r) => [...r, { id, text: "Novo lembrete", when: "Hoje", crit: false }]);
  };

  // ===== scheduled ops =====
  const editScheduledTitle = (id: number, title: string) => {
    if (!title.trim()) return setScheduled((s) => s.filter((x) => x.id !== id));
    setScheduled((s) => s.map((x) => (x.id === id ? { ...x, title: title.trim() } : x)));
  };
  const toggleScheduled = (id: number) =>
    setScheduled((s) => s.map((x) => (x.id === id ? { ...x, status: x.status === "active" ? "paused" : "active" } : x)));
  const addScheduled = () => {
    const id = Math.max(0, ...scheduled.map((a) => a.id)) + 1;
    setScheduled((s) => [...s, { id, icon: "⚡", title: "Nova ação programada", frequency: "Diário", nextRun: "Amanhã", status: "active" }]);
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6 items-start">
      {/* COLUNA 1: INBOX + AÇÕES PROGRAMADAS empilhadas */}
      <div className="flex flex-col gap-4">
        {/* INBOX */}
        <DailyCard
          title="📧 Inbox"
          subtitle="Mock · integração real na Fase 3"
          total={`${inboxTotal} não lidos`}
          action="↻ Sync"
          onAction={() => toast(`Inbox sincronizado · ${inboxTotal} e-mails em ${INBOX_ACCOUNTS.length} contas`)}
          bodyMaxHeight={300}
        >
          {INBOX_ACCOUNTS.map((a) => (
            <button
              type="button"
              key={a.id}
              onClick={() => toast(`Abrindo ${a.label} · integração Gmail/IMAP virá na Fase 3`)}
              className="w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg my-0.5 transition-colors text-left cursor-pointer hover:bg-[rgba(31,85,255,0.06)]"
              style={{ borderLeft: "3px solid transparent", opacity: a.unread === 0 ? 0.45 : 1 }}
            >
              <div
                className="w-[26px] h-[26px] rounded-[7px] flex items-center justify-center text-[12px] font-bold flex-shrink-0"
                style={{
                  background:
                    a.cls === "gmail"
                      ? "linear-gradient(135deg,#EA4335,#C5221F)"
                      : "linear-gradient(135deg,var(--color-wh-blue),var(--color-wh-blue-dark))",
                  color: "#fff",
                  boxShadow: "0 2px 6px rgba(31,85,255,.3)",
                }}
              >
                {a.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div
                  className="text-[11.5px] font-semibold truncate"
                  style={{ color: "var(--text)" }}
                  title={a.label}
                >
                  {a.label}
                </div>
                <div
                  className="text-[10px] mt-0.5 truncate"
                  style={{ color: "var(--text-3)" }}
                  title={a.last}
                >
                  {a.last}
                </div>
              </div>
              <div
                className="px-2 py-0.5 rounded-[11px] text-[10.5px] font-extrabold flex-shrink-0 min-w-[24px] text-center"
                style={{
                  background: a.unread === 0 ? "transparent" : "var(--color-status-critical)",
                  color: a.unread === 0 ? "var(--text-3)" : "#fff",
                }}
              >
                {a.unread}
              </div>
            </button>
          ))}
        </DailyCard>

        {/* AÇÕES PROGRAMADAS */}
        <DailyCard
          title="⚡ Ações Programadas"
          total={`${scheduled.length} ações`}
          action="+ Ação"
          onAction={addScheduled}
          bodyMaxHeight={260}
        >
          {scheduled.map((sa) => (
            <div
              key={sa.id}
              className="flex items-start gap-2.5 px-3.5 py-2.5 rounded-lg my-0.5 group"
              style={{
                borderLeft: `3px solid ${sa.status === "active" ? "var(--color-status-stable)" : "var(--text-3)"}`,
                background: sa.status === "active" ? "rgba(16,224,160,.05)" : "rgba(146,139,183,.05)",
                opacity: sa.status === "active" ? 1 : 0.6,
              }}
            >
              <div className="text-[15px] flex-shrink-0 mt-0.5" aria-hidden>
                {sa.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => editScheduledTitle(sa.id, e.currentTarget.textContent || "")}
                  className="text-[12px] font-semibold leading-snug outline-none"
                  style={{
                    color: "var(--text)",
                    overflowWrap: "anywhere",
                    wordBreak: "break-word",
                  }}
                >
                  {sa.title}
                </div>
                <div
                  className="flex flex-wrap gap-x-2 gap-y-0.5 mt-1 text-[9.5px] uppercase tracking-wide font-semibold"
                  style={{ color: "var(--text-3)" }}
                >
                  <span>🕒 {sa.frequency}</span>
                  <span style={{ color: sa.status === "active" ? "var(--color-status-stable)" : "var(--text-3)" }}>
                    → {sa.nextRun}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => toggleScheduled(sa.id)}
                title={sa.status === "active" ? "Pausar" : "Ativar"}
                className="flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity text-[11px] px-1.5 py-0.5 rounded font-bold"
                style={{ background: "rgba(255,255,255,0.06)", color: "var(--text-2)" }}
              >
                {sa.status === "active" ? "⏸" : "▶"}
              </button>
            </div>
          ))}
        </DailyCard>
      </div>

      {/* AGENDA com drag-and-drop */}
      <DailyCard
        title="📅 Agenda — Amanhã"
        total={`${agenda.length} compromissos`}
        action="+ Evento"
        onAction={addAgenda}
        bodyMaxHeight={560}
      >
        {agenda.map((a) => (
          <div
            key={a.id}
            draggable
            onDragStart={onDragStart(a.id)}
            onDragOver={onDragOver}
            onDrop={onDrop(a.id)}
            onDragEnd={onDragEnd}
            className="grid grid-cols-[18px_50px_1fr] gap-2 px-3 py-2.5 rounded-lg my-0.5 items-start transition-opacity"
            style={{
              borderLeft: "3px solid var(--color-wh-blue)",
              background: "rgba(31,85,255,.05)",
              opacity: draggingId === a.id ? 0.4 : 1,
              cursor: "default",
            }}
          >
            <div
              className="flex flex-col items-center justify-center text-[14px] leading-none select-none cursor-grab active:cursor-grabbing mt-0.5"
              style={{ color: "var(--text-3)" }}
              title="Arrastar para reordenar"
              aria-label="Arrastar"
            >
              ⋮⋮
            </div>
            <div
              className="text-[12.5px] font-extrabold leading-tight tracking-wide outline-none whitespace-nowrap"
              style={{ color: "var(--color-wh-blue-light)" }}
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => editAgenda(a.id, "time", e.currentTarget.textContent || "")}
            >
              {a.time}
            </div>
            <div className="min-w-0">
              <div
                className="text-[12px] font-semibold leading-snug mb-0.5 outline-none"
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
                className="text-[10px] outline-none"
                style={{
                  color: "var(--text-3)",
                  overflowWrap: "anywhere",
                  wordBreak: "break-word",
                }}
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => editAgenda(a.id, "where", e.currentTarget.textContent || "")}
              >
                {a.where || "—"}
              </div>
            </div>
          </div>
        ))}
      </DailyCard>

      {/* TASKS */}
      <DailyCard
        title="✅ Tarefas do Dia"
        total={`${tasksRemaining} de ${tasks.length} restantes`}
        action="+ Tarefa"
        onAction={addTask}
        bodyMaxHeight={560}
      >
        {tasks.map((t) => (
          <div
            key={t.id}
            className="flex items-start gap-2.5 px-3.5 py-2 rounded-lg my-0.5 group transition-colors"
            style={{ borderLeft: "3px solid transparent" }}
          >
            <button
              type="button"
              onClick={() => toggleTask(t.id)}
              className="w-[18px] h-[18px] rounded-[5px] flex items-center justify-center cursor-pointer flex-shrink-0 transition-colors text-[11px] font-black mt-0.5"
              style={{
                border: "2px solid var(--color-wh-blue-light)",
                background: t.done ? "var(--color-wh-blue)" : "transparent",
                borderColor: t.done ? "var(--color-wh-blue)" : "var(--color-wh-blue-light)",
                color: "#fff",
              }}
            >
              {t.done ? "✓" : ""}
            </button>
            <div
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => editTask(t.id, e.currentTarget.textContent || "")}
              className="flex-1 min-w-0 text-[12px] font-medium outline-none px-1 py-0.5 rounded leading-snug cursor-text"
              style={{
                color: t.done ? "var(--text-3)" : "var(--text)",
                textDecoration: t.done ? "line-through" : undefined,
                overflowWrap: "anywhere",
                wordBreak: "break-word",
              }}
            >
              {t.text}
            </div>
            <button
              type="button"
              onClick={() => deleteTask(t.id)}
              title="Remover"
              className="opacity-0 group-hover:opacity-100 cursor-pointer text-[14px] px-1.5 transition-opacity flex-shrink-0"
              style={{ color: "var(--text-3)", background: "none", border: "none" }}
            >
              ✕
            </button>
          </div>
        ))}
      </DailyCard>

      {/* REMINDERS — max 4 visíveis com scroll */}
      <DailyCard
        title="🔔 Lembretes"
        total={`${reminders.length} ativos`}
        action="+ Lembrete"
        onAction={addReminder}
        bodyMaxHeight={300}
      >
        {reminders.map((r) => (
          <div
            key={r.id}
            className="flex items-start gap-2.5 px-3.5 py-2.5 rounded-lg my-0.5"
            style={{
              borderLeft: `3px solid ${r.crit ? "var(--color-status-critical)" : "var(--color-status-warning)"}`,
              background: r.crit ? "rgba(255,59,92,.06)" : "rgba(255,138,31,.06)",
            }}
          >
            <div
              className="text-[14px] flex-shrink-0 mt-0.5"
              style={{ color: r.crit ? "var(--color-status-critical)" : "var(--color-status-warning)" }}
            >
              {r.crit ? "⚠" : "🔔"}
            </div>
            <div className="flex-1 min-w-0">
              <div
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => editReminder(r.id, e.currentTarget.textContent || "")}
                className="text-[12px] font-medium leading-snug outline-none"
                style={{
                  color: "var(--text)",
                  overflowWrap: "anywhere",
                  wordBreak: "break-word",
                }}
              >
                {r.text}
              </div>
              <div
                className="text-[10px] uppercase tracking-wide font-semibold mt-1"
                style={{ color: "var(--text-3)" }}
              >
                {r.when}
              </div>
            </div>
          </div>
        ))}
      </DailyCard>
    </section>
  );
}

function DailyCard({
  title,
  subtitle,
  total,
  action,
  onAction,
  children,
  bodyMaxHeight = 280,
}: {
  title: string;
  subtitle?: string;
  total: string;
  action: string;
  onAction: () => void;
  children: React.ReactNode;
  bodyMaxHeight?: number;
}) {
  return (
    <div className="wt-card flex flex-col">
      <div className="px-4 py-3" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="flex items-center justify-between gap-2">
          <h2
            className="text-[11px] tracking-[2.5px] uppercase font-bold flex items-center gap-2 min-w-0 truncate"
            style={{ color: "var(--color-wh-blue-light)" }}
            title={title}
          >
            {title}
          </h2>
          {subtitle && (
            <span
              className="text-[8.5px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wide flex-shrink-0"
              style={{
                color: "var(--color-status-warning)",
                background: "rgba(255,138,31,.12)",
                border: "1px solid rgba(255,138,31,.3)",
              }}
              title="Mock — integração real virá na próxima fase"
            >
              Pendente
            </span>
          )}
        </div>
      </div>
      <div
        className="flex-1 px-1.5 py-1.5 pb-2 overflow-y-auto"
        style={{ maxHeight: bodyMaxHeight, minHeight: 120 }}
      >
        {children}
      </div>
      <div
        className="px-3 py-2 flex justify-between items-center gap-2"
        style={{ borderTop: "1px solid var(--border)", background: "rgba(15,12,30,.3)" }}
      >
        <span
          className="text-[10px] uppercase tracking-wider font-bold truncate min-w-0"
          style={{ color: "var(--text-3)" }}
          title={total}
        >
          {total}
        </span>
        <button
          type="button"
          onClick={onAction}
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[14px] cursor-pointer text-[10px] font-bold tracking-wide uppercase transition-all hover:-translate-y-px flex-shrink-0 whitespace-nowrap"
          style={{
            background: "rgba(31,85,255,.15)",
            color: "var(--color-wh-blue-light)",
            border: "1px solid var(--border-hi)",
          }}
        >
          {action}
        </button>
      </div>
    </div>
  );
}
