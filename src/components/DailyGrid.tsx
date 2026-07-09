"use client";
import { useEffect, useMemo, useRef, useState } from "react";
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

  const toast = useToast();

  // ---- Agenda: formulário multi-dia + sync com o Google ----
  const todayStr = () => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  };
  const [agendaFormOpen, setAgendaFormOpen] = useState(false);
  const [agForm, setAgForm] = useState({ date: "", time: "09:00", title: "", where: "" });
  const [syncing, setSyncing] = useState(false);

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

  // ===== agenda ops (multi-dia) + sync Google =====
  // Reconcilia com a agenda "Watch Tower" do Google (best-effort). reloadAfter
  // recarrega a Agenda depois, pra refletir o que foi importado do Google.
  const doGcalSync = async (reloadAfter: boolean) => {
    if (!agendaHook.isLoggedIn) return;
    try {
      const res = await fetch("/api/calendar/google/sync", { method: "POST" });
      if (reloadAfter && res.ok) await agendaHookRef.current.reload();
    } catch {
      /* silencioso: o Google é secundário, a Agenda do WT é a fonte da verdade */
    }
  };

  // Debounce do sync disparado por EDIÇÕES (blur de campo): uma rajada de edições
  // vira uma só passada ~4s após a última, pra não estourar o rate-limit e não
  // roubar a janela do sync importante (do submit/delete).
  const syncTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scheduleSync = () => {
    if (syncTimerRef.current) clearTimeout(syncTimerRef.current);
    syncTimerRef.current = setTimeout(() => {
      syncTimerRef.current = null;
      void doGcalSync(false);
    }, 4000);
  };

  const manualSync = async () => {
    if (syncing) return;
    setSyncing(true);
    try {
      const res = await fetch("/api/calendar/google/sync", { method: "POST" });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; reason?: string };
      if (res.ok && data?.ok) {
        await agendaHookRef.current.reload();
        toast(t("daily.gcal.synced"));
      } else if (data?.reason === "no_accounts") {
        /* sem conta conectada: a seção Google já mostra o "+ conta" */
      } else {
        toast(t("daily.gcal.syncFail"));
      }
    } catch {
      toast(t("daily.gcal.syncFail"));
    } finally {
      setSyncing(false);
    }
  };

  // Sync uma vez ao montar (logado): puxa o que foi criado no Google e empurra
  // o que está no WT.
  const didSyncRef = useRef(false);
  useEffect(() => {
    if (didSyncRef.current) return;
    if (!agendaHook.isLoggedIn || !agendaHook.hydrated) return;
    didSyncRef.current = true;
    doGcalSync(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [agendaHook.isLoggedIn, agendaHook.hydrated]);

  // Ordena por data+hora (cronológico) — substitui o antigo arrastar-p/-reordenar.
  // Comparação direta de strings 'YYYY-MM-DDTHH:MM' (locale-independente, rápida).
  const sortedAgenda = useMemo(() => {
    const key = (a: AgendaItem) => `${a.date || todayStr()}T${a.time || "00:00"}`;
    return [...agenda].sort((a, b) => {
      const ka = key(a);
      const kb = key(b);
      return ka < kb ? -1 : ka > kb ? 1 : 0;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [agenda]);

  const editAgenda = (id: number, field: "title" | "where" | "date" | "time", value: string) => {
    const item = agenda.find((a) => a.id === id);
    if (!item) return;
    // Título não pode ficar vazio (mantém o anterior, igual a tarefas/lembretes).
    if (field === "title" && !value.trim()) return;
    let patch: Partial<AgendaItem>;
    if (field === "date" || field === "time") {
      // manda date + time juntos pra reconstruir o scheduledAt sem perder metade
      const date = field === "date" ? value || todayStr() : item.date || todayStr();
      const time = field === "time" ? value || "00:00" : item.time || "00:00";
      patch = { date, time };
    } else {
      patch = { [field]: value } as Partial<AgendaItem>;
    }
    agendaHook.update(id, patch);
    scheduleSync();
  };

  const submitAgendaForm = async () => {
    const title = agForm.title.trim();
    if (!title) {
      toast(t("daily.agenda.form.needTitle"));
      return;
    }
    await agendaHook.add({
      date: agForm.date || todayStr(),
      time: agForm.time || "09:00",
      title,
      where: agForm.where.trim(),
    });
    setAgForm({ date: "", time: "09:00", title: "", where: "" });
    setAgendaFormOpen(false);
    doGcalSync(true);
  };

  const deleteAgenda = (id: number) => {
    const item = agenda.find((a) => a.id === id);
    if (!window.confirm(`${t("daily.agenda.delete.confirm")}${item ? `\n\n${item.date || ""} ${item.time} · ${item.title}` : ""}`)) return;
    agendaHook.remove(id);
    scheduleSync();
    if (item && scope === "personal" && undoCtx) {
      let curId = id;
      undoCtx.push({
        label: t("daily.undo.deleteAgenda"),
        undo: async () => {
          const nid = await agendaHookRef.current.add({ date: item.date, time: item.time, title: item.title, where: item.where });
          if (nid) curId = nid;
          doGcalSync(false);
        },
        redo: async () => {
          await agendaHookRef.current.remove(curId);
          doGcalSync(false);
        },
      });
    }
  };

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
        onAction={() => setAgendaFormOpen((v) => !v)}
        bodyMaxHeight={560}
        scope={scope}
        onScopeChange={setScope}
      >
        {/* Seção Google Agenda (leitura das outras agendas Google). Protegida
            por SafeBoundary: se falhar, some sozinha e a Agenda segue intacta. */}
        <SafeBoundary>
          <GoogleCalendar />
        </SafeBoundary>

        {/* Sincronizar agora (mão dupla com a agenda "Watch Tower" do Google) */}
        {agendaHook.isLoggedIn && (
          <div className="flex justify-end px-1 mb-1">
            <button
              type="button"
              onClick={manualSync}
              disabled={syncing}
              title={t("daily.gcal.twowayHint")}
              className="text-[9px] font-bold uppercase tracking-wide cursor-pointer disabled:opacity-50"
              style={{ color: "var(--color-wh-blue-light)" }}
            >
              🔄 {syncing ? t("daily.gcal.syncing") : t("daily.gcal.sync")}
            </button>
          </div>
        )}

        {/* Formulário de novo compromisso: data + hora + assunto + local */}
        {agendaFormOpen && (
          <div className="mb-2 p-2.5 rounded-lg" style={{ background: "rgba(31,85,255,.07)", border: "1px solid var(--border-hi)" }}>
            <input
              type="text"
              autoFocus
              placeholder={t("daily.agenda.form.title")}
              value={agForm.title}
              onChange={(e) => setAgForm((f) => ({ ...f, title: e.target.value }))}
              onKeyDown={(e) => { if (e.key === "Enter") submitAgendaForm(); }}
              className="w-full bg-transparent text-[12px] font-semibold outline-none mb-2 px-1.5 py-1 rounded"
              style={{ color: "var(--text)", border: "1px solid var(--border)" }}
            />
            <div className="flex gap-2 mb-2">
              <input
                type="date"
                value={agForm.date || todayStr()}
                onChange={(e) => setAgForm((f) => ({ ...f, date: e.target.value }))}
                className="flex-1 bg-transparent text-[11px] font-bold outline-none px-1.5 py-1 rounded"
                style={{ color: "var(--color-wh-blue-light)", border: "1px solid var(--border)" }}
              />
              <input
                type="time"
                value={agForm.time}
                onChange={(e) => setAgForm((f) => ({ ...f, time: e.target.value }))}
                className="w-[96px] bg-transparent text-[11px] font-bold outline-none px-1.5 py-1 rounded"
                style={{ color: "var(--color-wh-blue-light)", border: "1px solid var(--border)" }}
              />
            </div>
            <input
              type="text"
              placeholder={t("daily.agenda.form.where")}
              value={agForm.where}
              onChange={(e) => setAgForm((f) => ({ ...f, where: e.target.value }))}
              onKeyDown={(e) => { if (e.key === "Enter") submitAgendaForm(); }}
              className="w-full bg-transparent text-[11px] outline-none mb-2 px-1.5 py-1 rounded"
              style={{ color: "var(--text-2)", border: "1px solid var(--border)" }}
            />
            <div className="flex gap-2 justify-end">
              <button
                type="button"
                onClick={() => { setAgendaFormOpen(false); setAgForm({ date: "", time: "09:00", title: "", where: "" }); }}
                className="px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wide cursor-pointer"
                style={{ color: "var(--text-3)", background: "rgba(255,255,255,.05)" }}
              >
                {t("daily.agenda.form.cancel")}
              </button>
              <button
                type="button"
                onClick={submitAgendaForm}
                className="px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wide cursor-pointer"
                style={{ color: "#fff", background: "var(--color-wh-blue)" }}
              >
                {t("daily.agenda.form.save")}
              </button>
            </div>
          </div>
        )}

        {sortedAgenda.map((a) => (
          <div
            key={a.id}
            className="grid grid-cols-[auto_auto_1fr_22px] gap-2 px-3 py-2.5 rounded-lg my-1 items-center group"
            style={{ borderLeft: "3px solid var(--color-wh-blue)", background: "rgba(31,85,255,.05)" }}
          >
            <input
              type="date"
              value={a.date || todayStr()}
              onChange={(e) => editAgenda(a.id, "date", e.target.value)}
              title={t("daily.agenda.form.date")}
              className="bg-transparent text-[10px] font-bold outline-none cursor-pointer w-[112px]"
              style={{ color: "var(--color-wh-blue-light)" }}
            />
            <input
              type="time"
              value={a.time || "00:00"}
              onChange={(e) => editAgenda(a.id, "time", e.target.value)}
              title={t("daily.agenda.form.time")}
              className="bg-transparent text-[11px] font-extrabold outline-none cursor-pointer w-[74px]"
              style={{ color: "var(--color-wh-blue-light)" }}
            />
            <div className="min-w-0">
              <div
                className="text-[11.5px] font-semibold leading-snug outline-none"
                style={{ color: "var(--text)", overflowWrap: "anywhere", wordBreak: "break-word" }}
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => editAgenda(a.id, "title", e.currentTarget.textContent || "")}
              >
                {a.title}
              </div>
              <div
                className="text-[9.5px] outline-none leading-tight uppercase tracking-wide font-semibold"
                style={{ color: "var(--text-3)", overflowWrap: "anywhere", wordBreak: "break-word" }}
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
              className="w-[22px] h-[22px] flex items-center justify-center rounded-md opacity-0 group-hover:opacity-100 transition-all cursor-pointer text-[12px] font-bold leading-none flex-shrink-0 hover:scale-110"
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
