"use client";
import { useEffect, useState } from "react";
import type { Task, AgendaItem, Reminder } from "@/lib/types";
import { STORAGE, load, save } from "@/lib/storage";
import { DEFAULT_TASKS, DEFAULT_AGENDA, DEFAULT_REMINDERS, INBOX_ACCOUNTS } from "@/lib/data";
import { useToast } from "./ToastProvider";

export function DailyGrid() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [agenda, setAgenda] = useState<AgendaItem[]>([]);
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const toast = useToast();

  useEffect(() => {
    setTasks(load(STORAGE.tasks, DEFAULT_TASKS));
    setAgenda(load(STORAGE.agenda, DEFAULT_AGENDA));
    setReminders(load(STORAGE.reminders, DEFAULT_REMINDERS));
    setHydrated(true);
  }, []);

  useEffect(() => { if (hydrated) save(STORAGE.tasks, tasks); }, [tasks, hydrated]);
  useEffect(() => { if (hydrated) save(STORAGE.agenda, agenda); }, [agenda, hydrated]);
  useEffect(() => { if (hydrated) save(STORAGE.reminders, reminders); }, [reminders, hydrated]);

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

  // ===== agenda ops =====
  const editAgenda = (id: number, field: "title" | "where" | "time", value: string) =>
    setAgenda((a) => a.map((x) => (x.id === id ? { ...x, [field]: value } : x)));
  const addAgenda = () => {
    const id = Math.max(0, ...agenda.map((a) => a.id)) + 1;
    setAgenda((a) => [...a, { id, time: "HH:MM", title: "Novo evento", where: "" }]);
  };

  // ===== reminder ops =====
  const editReminder = (id: number, text: string) => {
    if (!text.trim()) return setReminders((r) => r.filter((x) => x.id !== id));
    setReminders((r) => r.map((x) => (x.id === id ? { ...x, text: text.trim() } : x)));
  };
  const addReminder = () => {
    const id = Math.max(0, ...reminders.map((r) => r.id)) + 1;
    setReminders((r) => [...r, { id, text: "Novo lembrete", when: "Hoje", crit: false }]);
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
      {/* INBOX */}
      <DailyCard title="📧 Inbox" total={`${inboxTotal} não lidos`} action="↻ Sync" onAction={() => toast(`Inbox sincronizado · ${inboxTotal} e-mails em ${INBOX_ACCOUNTS.length} contas`)}>
        {INBOX_ACCOUNTS.map((a) => (
          <button
            type="button"
            key={a.id}
            onClick={() => toast(`Abrindo ${a.label} · integração Gmail ativa na próxima fase`)}
            className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg my-0.5 transition-colors text-left cursor-pointer"
            style={{
              borderLeft: "3px solid transparent",
              opacity: a.unread === 0 ? 0.45 : 1,
            }}
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
              <div className="text-[12px] font-semibold truncate" style={{ color: "var(--text)" }}>
                {a.label}
              </div>
              <div className="text-[10px] mt-0.5 truncate" style={{ color: "var(--text-3)" }}>
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

      {/* AGENDA */}
      <DailyCard title="📅 Agenda — Amanhã" total={`${agenda.length} compromissos`} action="+ Evento" onAction={addAgenda}>
        {agenda.map((a) => (
          <div
            key={a.id}
            className="grid grid-cols-[54px_1fr] gap-2.5 px-3 py-2.5 rounded-lg my-0.5"
            style={{
              borderLeft: "3px solid var(--color-wh-blue)",
              background: "rgba(31,85,255,.05)",
            }}
          >
            <div
              className="text-[13px] font-extrabold leading-tight tracking-wide outline-none"
              style={{ color: "var(--color-wh-blue-light)" }}
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => editAgenda(a.id, "time", e.currentTarget.textContent || "")}
            >
              {a.time}
            </div>
            <div>
              <div
                className="text-[12.5px] font-semibold leading-snug mb-0.5 outline-none"
                style={{ color: "var(--text)" }}
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => editAgenda(a.id, "title", e.currentTarget.textContent || "")}
              >
                {a.title}
              </div>
              <div
                className="text-[10px] outline-none"
                style={{ color: "var(--text-3)" }}
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => editAgenda(a.id, "where", e.currentTarget.textContent || "")}
              >
                {a.where}
              </div>
            </div>
          </div>
        ))}
      </DailyCard>

      {/* TASKS */}
      <DailyCard title="✅ Tarefas do Dia" total={`${tasksRemaining} de ${tasks.length} restantes`} action="+ Tarefa" onAction={addTask}>
        {tasks.map((t) => (
          <div
            key={t.id}
            className="flex items-center gap-2.5 px-3 py-2 rounded-lg my-0.5 group transition-colors"
            style={{ borderLeft: "3px solid transparent" }}
          >
            <button
              type="button"
              onClick={() => toggleTask(t.id)}
              className="w-[18px] h-[18px] rounded-[5px] flex items-center justify-center cursor-pointer flex-shrink-0 transition-colors text-[11px] font-black"
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
              className="flex-1 text-[12.5px] font-medium outline-none px-1 py-0.5 rounded leading-snug cursor-text"
              style={{
                color: t.done ? "var(--text-3)" : "var(--text)",
                textDecoration: t.done ? "line-through" : undefined,
              }}
            >
              {t.text}
            </div>
            <button
              type="button"
              onClick={() => deleteTask(t.id)}
              title="Remover"
              className="opacity-0 group-hover:opacity-100 cursor-pointer text-[14px] px-1.5 transition-opacity"
              style={{ color: "var(--text-3)", background: "none", border: "none" }}
            >
              ✕
            </button>
          </div>
        ))}
      </DailyCard>

      {/* REMINDERS */}
      <DailyCard title="🔔 Lembretes" total={`${reminders.length} ativos`} action="+ Lembrete" onAction={addReminder}>
        {reminders.map((r) => (
          <div
            key={r.id}
            className="flex items-start gap-2.5 px-3 py-2.5 rounded-lg my-0.5"
            style={{
              borderLeft: `3px solid ${r.crit ? "var(--color-status-critical)" : "var(--color-status-warning)"}`,
              background: r.crit ? "rgba(255,59,92,.06)" : "rgba(255,138,31,.06)",
            }}
          >
            <div className="text-[14px] flex-shrink-0 mt-0.5" style={{ color: r.crit ? "var(--color-status-critical)" : "var(--color-status-warning)" }}>
              {r.crit ? "⚠" : "🔔"}
            </div>
            <div className="flex-1">
              <div
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => editReminder(r.id, e.currentTarget.textContent || "")}
                className="text-[12px] font-medium leading-snug outline-none"
                style={{ color: "var(--text)" }}
              >
                {r.text}
              </div>
              <div className="text-[10px] uppercase tracking-wide font-semibold mt-1" style={{ color: "var(--text-3)" }}>
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
  total,
  action,
  onAction,
  children,
}: {
  title: string;
  total: string;
  action: string;
  onAction: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="wt-card flex flex-col min-h-[260px]">
      <div className="px-4 py-3.5" style={{ borderBottom: "1px solid var(--border)" }}>
        <h2 className="text-[11.5px] tracking-[2.5px] uppercase font-bold flex items-center gap-2" style={{ color: "var(--color-wh-blue-light)" }}>
          {title}
        </h2>
      </div>
      <div className="flex-1 px-1.5 py-1.5 pb-2.5 overflow-y-auto max-h-[280px]">{children}</div>
      <div className="px-4 py-2.5 flex justify-between items-center" style={{ borderTop: "1px solid var(--border)", background: "rgba(15,12,30,.3)" }}>
        <span className="text-[10.5px] uppercase tracking-wider font-bold" style={{ color: "var(--text-3)" }}>
          {total}
        </span>
        <button
          type="button"
          onClick={onAction}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[14px] cursor-pointer text-[10.5px] font-bold tracking-wide uppercase transition-all hover:-translate-y-px"
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
