"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { useSettings } from "./SettingsProvider";
import { playChime } from "@/lib/chime";

type Suggestion = {
  id: string;
  body: string;
  status: "open" | "applied" | "rejected";
  response: string | null;
  createdAt: string;
  author: string;
  mine: boolean;
};

const MASTER_EMAIL = "hzfarah.wisehub@gmail.com";

const STATUS_META: Record<Suggestion["status"], { label: string; color: string; bg: string }> = {
  open: { label: "Aberta", color: "var(--color-status-warning)", bg: "rgba(255,138,31,.12)" },
  applied: { label: "✓ Feito", color: "var(--color-status-stable)", bg: "rgba(16,224,160,.12)" },
  rejected: { label: "Rejeitada", color: "var(--color-status-critical)", bg: "rgba(255,59,92,.12)" },
};

export function SuggestionBox() {
  const { data: session } = useSession();
  const isMaster = (session?.user?.email ?? "").toLowerCase() === MASTER_EMAIL;
  const isLoggedIn = !!session?.user?.email;
  const { alarmVolume } = useSettings();

  const [items, setItems] = useState<Suggestion[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const seenRef = useRef<Set<string>>(new Set());
  const firstRef = useRef(true);

  const reload = useCallback(async () => {
    try {
      const r = await fetch("/api/suggestions", { cache: "no-store" });
      if (r.ok) {
        const d = await r.json();
        const list: Suggestion[] = d.suggestions ?? [];
        // Toca o alarme leve quando chega uma solicitação nova de outra pessoa.
        if (!firstRef.current && alarmVolume > 0) {
          const hasNew = list.some((s) => !seenRef.current.has(s.id) && !s.mine);
          if (hasNew) playChime(alarmVolume);
        }
        seenRef.current = new Set(list.map((s) => s.id));
        firstRef.current = false;
        setItems(list);
      }
    } catch {}
    setLoaded(true);
  }, [alarmVolume]);

  useEffect(() => {
    if (!isLoggedIn) {
      setLoaded(true);
      return;
    }
    reload();
    const id = setInterval(reload, 30000); // poll leve a cada 30s
    return () => clearInterval(id);
  }, [isLoggedIn, reload]);

  const send = async () => {
    const body = draft.trim();
    if (!body || sending) return;
    setSending(true);
    try {
      const r = await fetch("/api/suggestions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body }),
      });
      if (r.ok) {
        setDraft("");
        await reload();
      }
    } catch {}
    setSending(false);
  };

  const setStatus = async (id: string, status: Suggestion["status"]) => {
    let response: string | null = null;
    if (status === "rejected") {
      response = window.prompt("Motivo (vai aparecer pra todos):") ?? null;
      if (response === null) return; // cancelou
    } else if (status === "applied") {
      response = window.prompt("Observação (opcional):") || null;
    }
    try {
      const r = await fetch(`/api/suggestions/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status, response }),
      });
      if (r.ok) await reload();
    } catch {}
  };

  const deleteItem = async (id: string) => {
    try {
      const r = await fetch(`/api/suggestions/${id}`, { method: "DELETE" });
      if (r.ok) await reload();
    } catch {}
  };

  const remove = async (id: string) => {
    if (!window.confirm("Deseja eliminar este item?")) return;
    await deleteItem(id);
  };

  // Esconde do mural as mensagens "⚡ EXECUTAR" (pedidos pra Friday via lembrete),
  // que não são feedback da equipe — vão pelo /api/friday-requests.
  const visible = items.filter((s) => !s.body.startsWith("⚡ EXECUTAR"));
  const openCount = visible.filter((s) => s.status === "open").length;

  return (
    <div className="wt-card flex flex-col h-full" style={{ position: "relative" }}>
      <div className="pl-5 pr-[66px] py-3.5" style={{ borderBottom: "1px solid var(--border)" }}>
        <h2 className="text-[11px] tracking-[2.5px] uppercase font-bold flex items-center gap-2" style={{ color: "var(--color-wh-blue-light)" }}>
          💬 Caixa de Solicitações
          {openCount > 0 && (
            <span className="px-1.5 py-0.5 rounded-full text-[9px] font-extrabold" style={{ background: "var(--color-status-warning)", color: "#fff" }}>
              {openCount}
            </span>
          )}
        </h2>
      </div>

      <div className="flex-1 overflow-auto pl-3 pr-4 py-2" style={{ minHeight: 120, scrollbarGutter: "stable" }}>
        {!isLoggedIn ? (
          <p className="text-[11px] px-2 py-3" style={{ color: "var(--text-3)" }}>
            Entre na sua conta pra ver e mandar solicitações pra equipe.
          </p>
        ) : !loaded ? (
          <p className="text-[11px] px-2 py-3" style={{ color: "var(--text-3)" }}>Carregando…</p>
        ) : visible.length === 0 ? (
          <p className="text-[11px] px-2 py-3 leading-relaxed" style={{ color: "var(--text-3)" }}>
            Nenhuma solicitação ainda. Mande a primeira abaixo — ideias de melhoria, falhas que notou, sugestões. A Friday avisa o Hammis e decidimos juntos.
          </p>
        ) : (
          visible.map((s) => {
            const sm = STATUS_META[s.status] ?? STATUS_META.open; // default seguro p/ status fora do mapa (ex.: "closed")
            return (
              <div
                key={s.id}
                className="rounded-lg my-1.5 px-3 py-2.5 group"
                style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderLeft: `3px solid ${sm.color}` }}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[9px] uppercase tracking-wide font-extrabold" style={{ color: "var(--color-wh-blue-light)" }}>
                    {s.author}
                  </span>
                  <span className="px-1.5 py-0.5 rounded-full text-[8.5px] font-extrabold uppercase tracking-wide flex-shrink-0" style={{ color: sm.color, background: sm.bg }}>
                    {sm.label}
                  </span>
                </div>
                <div className="text-[11.5px] leading-snug" style={{ color: "var(--text)", overflowWrap: "anywhere" }}>
                  {s.body}
                </div>
                {s.response && (
                  <div className="text-[10.5px] leading-snug mt-1.5 pl-2" style={{ color: "var(--text-2)", borderLeft: "2px solid var(--border-hi)" }}>
                    <b style={{ color: "var(--color-wh-blue-light)" }}>Resposta:</b> {s.response}
                  </div>
                )}
                <div className="flex items-center gap-1.5 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  {isMaster && s.status === "open" && (
                    <>
                      <button type="button" onClick={() => setStatus(s.id, "applied")} className="text-[9px] font-bold uppercase px-2 py-0.5 rounded cursor-pointer" style={{ color: "var(--color-status-stable)", background: "rgba(16,224,160,.12)" }}>
                        ✓ Aplicar
                      </button>
                      <button type="button" onClick={() => setStatus(s.id, "rejected")} className="text-[9px] font-bold uppercase px-2 py-0.5 rounded cursor-pointer" style={{ color: "var(--color-status-critical)", background: "rgba(255,59,92,.12)" }}>
                        ✕ Rejeitar
                      </button>
                    </>
                  )}
                  {isMaster && s.status !== "open" && (
                    <button type="button" onClick={() => setStatus(s.id, "open")} className="text-[9px] font-bold uppercase px-2 py-0.5 rounded cursor-pointer" style={{ color: "var(--text-3)", background: "rgba(146,139,183,.12)" }}>
                      ↺ Reabrir
                    </button>
                  )}
                  {(s.mine || isMaster) && s.status === "open" && (
                    <button type="button" onClick={() => remove(s.id)} className="text-[9px] font-bold uppercase px-2 py-0.5 rounded cursor-pointer ml-auto" style={{ color: "var(--text-3)" }}>
                      🗑
                    </button>
                  )}
                </div>
                {(s.mine || isMaster) && s.status !== "open" && (
                  <label
                    className="flex items-center gap-1.5 mt-2 w-fit text-[9.5px] font-bold uppercase tracking-wide cursor-pointer select-none"
                    style={{ color: "var(--text-3)" }}
                    title="Ticar para eliminar esta solicitação da caixa"
                  >
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        if (!e.target.checked) return;
                        if (window.confirm("Deseja eliminar este item?")) deleteItem(s.id);
                        else e.target.checked = false;
                      }}
                      className="cursor-pointer"
                      style={{ accentColor: "var(--color-status-critical)", width: 13, height: 13 }}
                    />
                    Eliminar da caixa
                  </label>
                )}
              </div>
            );
          })
        )}
      </div>

      {isLoggedIn && (
        <div className="px-3 py-2.5 flex items-end gap-2" style={{ borderTop: "1px solid var(--border)", background: "rgba(15,12,30,.3)" }}>
          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) send(); }}
            placeholder="Sua ideia ou feedback… (Ctrl+Enter envia)"
            rows={2}
            className="flex-1 px-3 py-2 rounded-lg text-[11.5px] outline-none resize-none"
            style={{ background: "var(--bg2)", border: "1px solid var(--border)", color: "var(--text)" }}
          />
          <button
            type="button"
            onClick={send}
            disabled={sending || !draft.trim()}
            className="px-3 py-2 rounded-lg text-[10.5px] font-extrabold uppercase tracking-wide cursor-pointer transition-all hover:-translate-y-px disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
            style={{ background: "linear-gradient(135deg, var(--color-wh-blue), var(--color-wh-blue-dark))", color: "#fff", border: "1px solid rgba(74,122,255,.5)" }}
          >
            {sending ? "…" : "Enviar"}
          </button>
        </div>
      )}
    </div>
  );
}
