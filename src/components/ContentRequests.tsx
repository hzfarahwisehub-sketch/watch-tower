"use client";
import { useCallback, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useLocale } from "./LocaleProvider";
import { useVisiblePoll } from "@/lib/useVisiblePoll";

// Painel da aba 🎬 Conteúdo. Mostra os pedidos ⚡ EXECUTAR de conteúdo que a
// Watch Tower abre sozinha (cron diário dos roteiros + gatilho do REPAVET).
//
// Por que este painel existe: a Caixa de solicitações (SuggestionBox) esconde
// de propósito tudo que começa com "⚡ EXECUTAR", porque lá é mural de feedback
// da equipe, não fila de trabalho. O efeito colateral era que os pedidos abertos
// pela máquina não apareciam em lugar nenhum do app, só na /api/friday-requests
// que a Friday lê. Aqui eles ficam visíveis pro Hammis acompanhar.

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
const FRIDAY_MARKER = "⚡ EXECUTAR";

// Tags de conteúdo que este painel adota. Mantenha em sincronia com
// src/lib/content-trigger.ts.
const KINDS = [
  { tag: "GERAR-ROTEIROS", emoji: "🎬", labelPt: "Roteiros", labelEn: "Video scripts" },
  { tag: "GERAR-CONTEUDO", emoji: "📝", labelPt: "Conteúdo", labelEn: "Content" },
] as const;

function kindOf(body: string) {
  return KINDS.find((k) => body.includes(k.tag));
}

/** Tira o prefixo "⚡ EXECUTAR · TAG · " pra sobrar só o texto do pedido. */
function stripPrefix(body: string, tag: string): string {
  const i = body.indexOf(tag);
  if (i < 0) return body;
  return body.slice(i + tag.length).replace(/^\s*·\s*/, "");
}

function ageLabel(iso: string, t: (k: string, v?: Record<string, string | number>) => string): string {
  const mins = Math.max(0, Math.round((Date.now() - new Date(iso).getTime()) / 60000));
  if (mins < 60) return t("content.age.min", { n: mins });
  const hours = Math.round(mins / 60);
  if (hours < 24) return t("content.age.hour", { n: hours });
  return t("content.age.day", { n: Math.round(hours / 24) });
}

export function ContentRequests() {
  const { data: session } = useSession();
  const { t, locale } = useLocale();
  const isMaster = (session?.user?.email ?? "").toLowerCase() === MASTER_EMAIL;
  const isLoggedIn = !!session?.user?.email;

  const [items, setItems] = useState<Suggestion[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [showDone, setShowDone] = useState(false);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const reload = useCallback(async () => {
    try {
      const r = await fetch("/api/suggestions", { cache: "no-store" });
      if (r.ok) {
        const d = await r.json();
        setItems(d.suggestions ?? []);
      }
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoggedIn) setLoaded(true);
  }, [isLoggedIn]);
  // 3min + pausa com aba oculta (era 30s direto — principal custo Vercel de jul/2026)
  useVisiblePoll(reload, 180_000, isLoggedIn);

  const setStatus = async (id: string, status: Suggestion["status"]) => {
    try {
      const r = await fetch(`/api/suggestions/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status, response: null }),
      });
      if (r.ok) await reload();
    } catch {}
  };

  const toggle = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const mine = items.filter((s) => s.body.startsWith(FRIDAY_MARKER) && !!kindOf(s.body));
  const open = mine.filter((s) => s.status === "open");
  const done = mine.filter((s) => s.status !== "open");
  const visible = showDone ? [...open, ...done] : open;

  return (
    <div className="wt-card flex flex-col h-full" style={{ position: "relative" }}>
      <div className="pl-5 pr-[64px] py-3.5" style={{ borderBottom: "1px solid var(--border)" }}>
        <h2 className="text-[11px] tracking-[2.5px] uppercase font-bold flex items-center gap-2" style={{ color: "var(--color-wh-blue-light)" }}>
          {t("content.title")}
          {open.length > 0 && (
            <span className="px-1.5 py-0.5 rounded-full text-[9px] font-extrabold" style={{ background: "var(--color-status-warning)", color: "#fff" }}>
              {open.length}
            </span>
          )}
        </h2>
        <p className="text-[9.5px] mt-1 leading-snug" style={{ color: "var(--text-3)" }}>
          {t("content.subtitle")}
        </p>
      </div>

      <div className="flex-1 overflow-auto pl-3 pr-4 py-2" style={{ minHeight: 120, scrollbarGutter: "stable" }}>
        {!isLoggedIn ? (
          <p className="text-[11px] px-2 py-3" style={{ color: "var(--text-3)" }}>{t("content.empty.loggedOut")}</p>
        ) : !loaded ? (
          <p className="text-[11px] px-2 py-3" style={{ color: "var(--text-3)" }}>{t("content.loading")}</p>
        ) : visible.length === 0 ? (
          <p className="text-[11px] px-2 py-3 leading-relaxed" style={{ color: "var(--text-3)" }}>{t("content.empty.none")}</p>
        ) : (
          visible.map((s) => {
            const kind = kindOf(s.body)!;
            const isOpen = s.status === "open";
            const color = isOpen ? "var(--color-status-warning)" : "var(--color-status-stable)";
            const isExpanded = expanded.has(s.id);
            const text = stripPrefix(s.body, kind.tag);
            return (
              <div
                key={s.id}
                className="rounded-lg my-1.5 px-3 py-2.5 group"
                style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderLeft: `3px solid ${color}`, opacity: isOpen ? 1 : 0.6 }}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[9.5px] uppercase tracking-wide font-extrabold flex items-center gap-1" style={{ color: "var(--color-wh-blue-light)" }}>
                    <span aria-hidden>{kind.emoji}</span>
                    {locale === "en" ? kind.labelEn : kind.labelPt}
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-wide flex-shrink-0" style={{ color: "var(--text-3)" }}>
                    {ageLabel(s.createdAt, t)}
                  </span>
                </div>

                <div
                  className="text-[11.5px] leading-snug cursor-pointer"
                  onClick={() => toggle(s.id)}
                  style={{
                    color: "var(--text)",
                    overflowWrap: "anywhere",
                    display: isExpanded ? "block" : "-webkit-box",
                    WebkitLineClamp: isExpanded ? "unset" : 3,
                    WebkitBoxOrient: "vertical",
                    overflow: isExpanded ? "visible" : "hidden",
                  }}
                  title={isExpanded ? t("content.collapse") : t("content.expand")}
                >
                  {text}
                </div>

                <div className="flex items-center gap-1.5 mt-1.5">
                  <button
                    type="button"
                    onClick={() => toggle(s.id)}
                    className="text-[9px] font-bold uppercase px-2 py-0.5 rounded cursor-pointer"
                    style={{ color: "var(--text-3)" }}
                  >
                    {isExpanded ? t("content.collapse") : t("content.expand")}
                  </button>
                  {isMaster && isOpen && (
                    <button
                      type="button"
                      onClick={() => setStatus(s.id, "applied")}
                      className="text-[9px] font-bold uppercase px-2 py-0.5 rounded cursor-pointer ml-auto"
                      style={{ color: "var(--color-status-stable)", background: "rgba(16,224,160,.12)" }}
                    >
                      {t("content.action.done")}
                    </button>
                  )}
                  {isMaster && !isOpen && (
                    <button
                      type="button"
                      onClick={() => setStatus(s.id, "open")}
                      className="text-[9px] font-bold uppercase px-2 py-0.5 rounded cursor-pointer ml-auto"
                      style={{ color: "var(--text-3)", background: "rgba(146,139,183,.12)" }}
                    >
                      {t("content.action.reopen")}
                    </button>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      {isLoggedIn && done.length > 0 && (
        <div className="px-3 py-2" style={{ borderTop: "1px solid var(--border)", background: "rgba(15,12,30,.3)" }}>
          <label className="flex items-center gap-1.5 w-fit text-[9.5px] font-bold uppercase tracking-wide cursor-pointer select-none" style={{ color: "var(--text-3)" }}>
            <input
              type="checkbox"
              checked={showDone}
              onChange={(e) => setShowDone(e.target.checked)}
              className="cursor-pointer"
              style={{ accentColor: "var(--color-wh-blue)", width: 13, height: 13 }}
            />
            {t("content.showDone", { n: done.length })}
          </label>
        </div>
      )}
    </div>
  );
}
