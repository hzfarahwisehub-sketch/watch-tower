"use client";
import { forwardRef, useEffect, useMemo, useRef, useState, DragEvent } from "react";
// @ts-expect-error - react-resizable v3 não envia types
import { Resizable } from "react-resizable";
import "react-resizable/css/styles.css";
import { useSettings } from "./SettingsProvider";

type ResizeData = {
  node: HTMLElement;
  size: { width: number; height: number };
  handle: "s" | "w" | "e" | "n" | "sw" | "nw" | "se" | "ne";
};
import type { Task, AgendaItem, Reminder, ScheduledAction } from "@/lib/types";
import { INBOX_ACCOUNTS } from "@/lib/data";
import { useDualStorage } from "@/lib/dual-storage";
import {
  tasksConfig,
  agendaConfig,
  remindersConfig,
  scheduledConfig,
} from "@/lib/dual-storage-configs";
import { useToast } from "./ToastProvider";
import { useUndoOptional } from "./UndoProvider";

export type DailyBlock = "inbox" | "scheduled" | "agenda" | "tasks" | "reminders";

export type BoardScope = "personal" | "team";

export function DailyGrid({ only }: { only?: DailyBlock } = {}) {
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

  const inboxTotal = INBOX_ACCOUNTS.reduce((s, a) => s + a.unread, 0);
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
    tasksHook.remove(id);
    if (item && scope === "personal" && undoCtx) {
      let curId = id;
      undoCtx.push({
        label: "apagar tarefa",
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
  const addTask = () => tasksHook.add({ text: "Nova tarefa", done: false });

  // ===== agenda ops + drag =====
  const editAgenda = (id: number, field: "title" | "where" | "time", value: string) =>
    agendaHook.update(id, { [field]: value } as Partial<AgendaItem>);
  const addAgenda = () => agendaHook.add({ time: "00:00", title: "Novo evento", where: "" });
  const deleteAgenda = (id: number) => {
    const item = agenda.find((a) => a.id === id);
    agendaHook.remove(id);
    if (item && scope === "personal" && undoCtx) {
      let curId = id;
      undoCtx.push({
        label: "apagar compromisso",
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
  const addReminder = () =>
    remindersHook.add({ text: "Novo lembrete", when: "Hoje", crit: false });
  // Manda o lembrete como SOLICITAÇÃO pra Friday (reusa o canal de mensagens).
  // Quando a Friday abrir uma sessão, ela pergunta ao Hammis se quer iniciar,
  // explicando o quê foi e quem pediu.
  const sendReminderToFriday = async (r: Reminder) => {
    const authorPart = scope === "team" && r.author ? ` — lembrete de ${r.author}` : "";
    const msg = `⚡ EXECUTAR · Watch Tower (lembrete): "${r.text}"${authorPart}`;
    try {
      const res = await fetch("/api/suggestions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body: msg }),
      });
      if (res.ok) toast("Enviado pra Friday · ela te pergunta na próxima vez que você abrir");
      else if (res.status === 401) toast("Faça login pra enviar pra Friday");
      else toast(`Erro ${res.status} ao enviar pra Friday`);
    } catch {
      toast("Falha ao enviar pra Friday");
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
  const addScheduled = () =>
    scheduledHook.add({
      icon: "⚡",
      title: "Nova ação programada",
      frequency: "Diário",
      nextRun: "Amanhã",
      status: "active",
    });

  const inboxCard = (
        <DailyCard
          cardKey="inbox"
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
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg my-1 transition-colors text-left cursor-pointer hover:bg-[rgba(31,85,255,0.06)]"
              style={{ borderLeft: "3px solid transparent", opacity: a.unread === 0 ? 0.45 : 1 }}
            >
              <div
                className="w-[24px] h-[24px] rounded-[6px] flex items-center justify-center text-[11px] font-bold flex-shrink-0"
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
                  className="text-[11px] font-semibold truncate leading-tight"
                  style={{ color: "var(--text)" }}
                  title={a.label}
                >
                  {a.label}
                </div>
                <div
                  className="text-[9.5px] mt-1 truncate leading-tight"
                  style={{ color: "var(--text-3)" }}
                  title={a.last}
                >
                  {a.last}
                </div>
              </div>
              <div
                className="px-2 py-0.5 rounded-[11px] text-[10px] font-extrabold flex-shrink-0 min-w-[22px] text-center leading-tight"
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
  );

  const scheduledCard = (
        <DailyCard
          cardKey="scheduled"
          title="⚡ Ações Programadas"
          total={`${scheduled.length} ações`}
          action="+ Ação"
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
                title={sa.status === "active" ? "Pausar" : "Ativar"}
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
        cardKey="agenda"
        title="📅 Agenda — Amanhã"
        total={`${agenda.length} compromissos`}
        action="+ Evento"
        onAction={addAgenda}
        bodyMaxHeight={560}
        scope={scope}
        onScopeChange={setScope}
      >
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
              title="Arrastar para reordenar"
              aria-label="Arrastar"
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
                {a.where || "—"}
              </div>
              {scope === "team" && a.author && (
                <div className="text-[8.5px] uppercase tracking-wide font-bold mt-1" style={{ color: "var(--color-wh-blue-light)" }}>
                  por {a.author}
                </div>
              )}
            </div>
            <button
              type="button"
              onClick={() => deleteAgenda(a.id)}
              title="Remover compromisso"
              aria-label={`Remover ${a.title}`}
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
        cardKey="tasks"
        title="✅ Tarefas do Dia"
        total={`${tasksRemaining} de ${tasks.length} restantes`}
        action="+ Tarefa"
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
                  por {t.author}
                </div>
              )}
            </div>
            <button
              type="button"
              onClick={() => deleteTask(t.id)}
              title="Remover"
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
        cardKey="reminders"
        title="🔔 Lembretes"
        total={`${reminders.length} ativos`}
        action="+ Lembrete"
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
                {scope === "team" && r.author && (
                  <span style={{ color: "var(--color-wh-blue-light)" }}> · por {r.author}</span>
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={() => sendReminderToFriday(r)}
              title="Enviar pra Friday executar — ela te pergunta na próxima vez que você abrir"
              aria-label={`Enviar lembrete "${r.text}" pra Friday`}
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

// Custom handle pra ficar visualmente igual ao do grid principal (chevron L azul WiseHub)
const CardResizeHandle = forwardRef<HTMLSpanElement, { handleAxis?: string }>(
  function CardResizeHandle({ handleAxis, ...rest }, ref) {
    return (
      <span
        ref={ref}
        className={`wt-daily-resize-handle wt-daily-resize-handle-${handleAxis ?? "se"}`}
        {...rest}
      />
    );
  }
);

function DailyCard({
  cardKey,
  title,
  subtitle,
  total,
  action,
  onAction,
  children,
  bodyMaxHeight = 280,
  scope,
  onScopeChange,
}: {
  cardKey: string;
  title: string;
  subtitle?: string;
  total: string;
  action: string;
  onAction: () => void;
  children: React.ReactNode;
  bodyMaxHeight?: number;
  scope?: BoardScope;
  onScopeChange?: (s: BoardScope) => void;
}) {
  const { locked } = useSettings();
  const storageKey = `wt-daily-card-h-${cardKey}`;
  const [height, setHeight] = useState<number>(bodyMaxHeight);
  const [hydrated, setHydrated] = useState(false);

  // Carrega altura salva
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      const n = saved ? parseInt(saved, 10) : NaN;
      if (isFinite(n) && n >= 120) setHeight(n);
    } catch {}
    setHydrated(true);
  }, [storageKey]);

  // Persiste mudanças
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(storageKey, String(Math.round(height)));
    } catch {}
  }, [height, storageKey, hydrated]);

  const onResize = (_e: unknown, data: ResizeData) => {
    setHeight(data.size.height);
  };

  const body = (
    <div
      className="wt-daily-body px-2 py-2 pb-2.5"
      style={{
        height,
        minHeight: 120,
        maxHeight: 1200,
        overflow: "auto",
        position: "relative",
      }}
      data-card-key={cardKey}
    >
      {children}
    </div>
  );

  return (
    <div className="wt-card flex flex-col" style={{ position: "relative" }}>
      <div className="px-5 py-3.5" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="flex items-center justify-between gap-2">
          <h2
            className="text-[11px] tracking-[2.5px] uppercase font-bold flex items-center gap-2 min-w-0 truncate"
            style={{ color: "var(--color-wh-blue-light)" }}
            title={title}
          >
            {title}
          </h2>
          {onScopeChange && (
            <div
              className="flex items-center gap-0.5 p-0.5 rounded-full flex-shrink-0"
              style={{ background: "var(--bg2)", border: "1px solid var(--border)" }}
              title="Alternar entre o quadro do time e o seu pessoal"
            >
              {(["team", "personal"] as const).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => onScopeChange(s)}
                  className="px-2 py-0.5 rounded-full text-[8.5px] font-extrabold uppercase tracking-wide transition-all cursor-pointer"
                  style={{
                    background: scope === s ? "var(--color-wh-blue)" : "transparent",
                    color: scope === s ? "#fff" : "var(--text-3)",
                  }}
                >
                  {s === "team" ? "Equipe" : "Pessoal"}
                </button>
              ))}
            </div>
          )}
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

      {locked ? (
        body
      ) : (
        <Resizable
          width={Infinity}
          height={height}
          axis="y"
          resizeHandles={["se"]}
          minConstraints={[Infinity, 120]}
          maxConstraints={[Infinity, 1200]}
          onResize={onResize}
          handle={<CardResizeHandle />}
        >
          {body}
        </Resizable>
      )}

      <div
        className="px-4 py-2.5 flex justify-between items-center gap-2"
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
          className="inline-flex items-center gap-1 px-3 py-1 rounded-[14px] cursor-pointer text-[10px] font-bold tracking-wide uppercase transition-all hover:-translate-y-px flex-shrink-0 whitespace-nowrap"
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
