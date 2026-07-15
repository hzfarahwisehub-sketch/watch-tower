"use client";
import { useEffect, useMemo, useState } from "react";
import { ROTEIROS, type Roteiro } from "@/lib/roteiros-data";
import { useLocale } from "./LocaleProvider";

// Aba 🎥 Conteúdo Digital — o lugar onde os fundadores LEEM e COPIAM os roteiros.
//
// Decisão do Hammis (2026-07-14): os roteiros do dia não podem depender do
// REPAVET nem de pedido pra Friday. Eles ficam aqui, inteiros, navegáveis e
// prontos pra copiar, e o que não for usado hoje continua aqui amanhã. O
// REPAVET segue sendo o relatório denso; isto aqui é a bancada de gravação.
//
// Não confundir com a aba 🎬 Conteúdo (ContentRequests), que mostra os PEDIDOS
// ⚡ abertos pela máquina. Lá é a fila de trabalho; aqui é o material pronto.
//
// "Já usei" mora no localStorage (por navegador). Ver o aviso no rodapé: é
// deliberado e provisório, até existir modelo no banco pra marcar em equipe.

const USED_KEY = "wt-roteiros-usados-v1";

type PersonaFilter = "all" | string;
type CanalFilter = "all" | string;

function useUsed() {
  const [used, setUsed] = useState<Set<string>>(new Set());
  useEffect(() => {
    try {
      const raw = localStorage.getItem(USED_KEY);
      if (raw) setUsed(new Set(JSON.parse(raw) as string[]));
    } catch {}
  }, []);
  const toggle = (id: string) => {
    setUsed((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try {
        localStorage.setItem(USED_KEY, JSON.stringify([...next]));
      } catch {}
      return next;
    });
  };
  return { used, toggle };
}

function canalEmoji(canal: string): string {
  if (canal.startsWith("YouTube")) return "▶";
  if (canal.startsWith("Reels")) return "🎞";
  return "📷";
}

function personaColor(p: string): string {
  return p === "Lucas" ? "#4A7AFF" : "#D8AF54";
}

export function ContentStudio() {
  const { t } = useLocale();
  const { used, toggle } = useUsed();

  const [persona, setPersona] = useState<PersonaFilter>("all");
  const [canal, setCanal] = useState<CanalFilter>("all");
  const [date, setDate] = useState<string>("all");
  const [onlyUnused, setOnlyUnused] = useState(false);
  const [openId, setOpenId] = useState<string | null>(ROTEIROS[0]?.id ?? null);
  const [copied, setCopied] = useState<string | null>(null);

  const personas = useMemo(() => [...new Set(ROTEIROS.map((r) => r.persona))], []);
  const canais = useMemo(() => [...new Set(ROTEIROS.map((r) => r.canal))], []);
  const dates = useMemo(() => [...new Set(ROTEIROS.map((r) => r.date))].sort().reverse(), []);

  const list = useMemo(
    () =>
      ROTEIROS.filter(
        (r) =>
          (persona === "all" || r.persona === persona) &&
          (canal === "all" || r.canal === canal) &&
          (date === "all" || r.date === date) &&
          (!onlyUnused || !used.has(r.id)),
      ),
    [persona, canal, date, onlyUnused, used],
  );

  // O filtro pode ter escondido o roteiro aberto: cai no primeiro da lista em
  // vez de deixar o painel da direita mudo.
  const open: Roteiro | null = list.find((r) => r.id === openId) ?? list[0] ?? null;

  const plain = (r: Roteiro) => `${r.titulo}\n\n${r.paras.join("\n\n")}`;

  const copy = async (r: Roteiro) => {
    try {
      await navigator.clipboard.writeText(plain(r));
      setCopied(r.id);
      setTimeout(() => setCopied((c) => (c === r.id ? null : c)), 1800);
    } catch {
      setCopied("erro");
      setTimeout(() => setCopied((c) => (c === "erro" ? null : c)), 1800);
    }
  };

  const Select = ({
    value,
    onChange,
    children,
    label,
  }: {
    value: string;
    onChange: (v: string) => void;
    children: React.ReactNode;
    label: string;
  }) => (
    <select
      aria-label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-2 py-1 rounded-lg text-[10.5px] font-bold cursor-pointer outline-none"
      style={{ background: "var(--bg2)", border: "1px solid var(--border)", color: "var(--text-2)" }}
    >
      {children}
    </select>
  );

  return (
    <div className="wt-card flex flex-col h-full @container" style={{ position: "relative" }}>
      <div className="pl-5 pr-[64px] py-3.5 flex-shrink-0" style={{ borderBottom: "1px solid var(--border)" }}>
        <h2 className="text-[11px] tracking-[2.5px] uppercase font-bold flex items-center gap-2" style={{ color: "var(--color-wh-blue-light)" }}>
          {t("studio.title")}
          <span className="px-1.5 py-0.5 rounded-full text-[9px] font-extrabold" style={{ background: "var(--color-wh-blue)", color: "#fff" }}>
            {list.length}
          </span>
        </h2>
        <p className="text-[9.5px] mt-1 leading-snug" style={{ color: "var(--text-3)" }}>
          {t("studio.subtitle")}
        </p>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap items-center gap-1.5 px-4 py-2 flex-shrink-0" style={{ borderBottom: "1px solid var(--border)" }}>
        <Select label={t("studio.f.persona")} value={persona} onChange={setPersona}>
          <option value="all">{t("studio.f.persona")}: {t("studio.f.all")}</option>
          {personas.map((p) => <option key={p} value={p}>{p}</option>)}
        </Select>
        <Select label={t("studio.f.canal")} value={canal} onChange={setCanal}>
          <option value="all">{t("studio.f.canal")}: {t("studio.f.all")}</option>
          {canais.map((c) => <option key={c} value={c}>{c}</option>)}
        </Select>
        <Select label={t("studio.f.date")} value={date} onChange={setDate}>
          <option value="all">{t("studio.f.date")}: {t("studio.f.all")}</option>
          {dates.map((d) => <option key={d} value={d}>{d}</option>)}
        </Select>
        <label className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide cursor-pointer select-none ml-1" style={{ color: "var(--text-3)" }}>
          <input
            type="checkbox"
            checked={onlyUnused}
            onChange={(e) => setOnlyUnused(e.target.checked)}
            className="cursor-pointer"
            style={{ accentColor: "var(--color-wh-blue)", width: 13, height: 13 }}
          />
          {t("studio.f.onlyUnused")}
        </label>
      </div>

      {/* Corpo: lista (esquerda) + roteiro inteiro (direita). Em caixa estreita
          vira uma coluna só, com a lista em cima. */}
      <div className="flex-1 min-h-0 grid grid-cols-1 @3xl:grid-cols-[minmax(200px,270px)_1fr]">
        {/* Lista */}
        <div
          className="overflow-auto p-2 @3xl:border-r max-h-[220px] @3xl:max-h-none"
          style={{ borderColor: "var(--border)", borderRightWidth: 1, scrollbarGutter: "stable" }}
        >
          {list.length === 0 ? (
            <p className="text-[11px] px-2 py-3" style={{ color: "var(--text-3)" }}>{t("studio.empty")}</p>
          ) : (
            list.map((r) => {
              const active = open?.id === r.id;
              const isUsed = used.has(r.id);
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setOpenId(r.id)}
                  className="w-full text-left rounded-lg px-2.5 py-2 my-1 cursor-pointer transition-colors block"
                  style={{
                    background: active ? "rgba(74,122,255,.14)" : "var(--bg2)",
                    border: `1px solid ${active ? "var(--color-wh-blue)" : "var(--border)"}`,
                    borderLeft: `3px solid ${personaColor(r.persona)}`,
                    opacity: isUsed ? 0.55 : 1,
                  }}
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-[9px] font-extrabold uppercase tracking-wide" style={{ color: personaColor(r.persona) }}>
                      {r.persona}
                    </span>
                    <span className="text-[9px]" style={{ color: "var(--text-3)" }}>
                      {canalEmoji(r.canal)} {r.canal} · {r.palavras}p
                    </span>
                    {isUsed && <span className="text-[8.5px] font-bold uppercase ml-auto" style={{ color: "var(--color-status-stable)" }}>✓</span>}
                  </div>
                  <div className="text-[11.5px] font-bold leading-snug" style={{ color: "var(--text)", overflowWrap: "anywhere" }}>
                    {r.titulo}
                  </div>
                  <div className="text-[9px] mt-0.5" style={{ color: "var(--text-3)" }}>{r.date}</div>
                </button>
              );
            })
          )}
        </div>

        {/* Roteiro completo */}
        <div className="overflow-auto p-5" style={{ scrollbarGutter: "stable" }}>
          {!open ? (
            <p className="text-[11.5px]" style={{ color: "var(--text-3)" }}>{t("studio.empty")}</p>
          ) : (
            <article>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="px-2 py-0.5 rounded-full text-[9.5px] font-extrabold uppercase tracking-wide" style={{ background: `${personaColor(open.persona)}22`, color: personaColor(open.persona), border: `1px solid ${personaColor(open.persona)}66` }}>
                  {open.persona}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: "var(--text-3)" }}>
                  {canalEmoji(open.canal)} {open.canal} · {open.formato} · {open.palavras} {t("studio.words")} · {open.date}
                </span>
                <div className="flex items-center gap-1.5 ml-auto">
                  <button
                    type="button"
                    onClick={() => copy(open)}
                    className="px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wide cursor-pointer transition-all hover:-translate-y-px"
                    style={{ background: "linear-gradient(135deg, var(--color-wh-blue), var(--color-wh-blue-dark))", color: "#fff", border: "1px solid rgba(74,122,255,.5)" }}
                  >
                    {copied === open.id ? t("studio.copied") : copied === "erro" ? t("studio.copyFail") : t("studio.copy")}
                  </button>
                  <button
                    type="button"
                    onClick={() => toggle(open.id)}
                    className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wide cursor-pointer"
                    style={{
                      background: used.has(open.id) ? "rgba(16,224,160,.12)" : "var(--bg2)",
                      color: used.has(open.id) ? "var(--color-status-stable)" : "var(--text-3)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {used.has(open.id) ? t("studio.usedYes") : t("studio.usedNo")}
                  </button>
                </div>
              </div>

              <h3 className="text-[19px] font-extrabold leading-tight mb-3" style={{ color: "var(--text)", overflowWrap: "anywhere" }}>
                {open.titulo}
              </h3>

              {open.paras.map((p, i) => (
                <p key={i} className="text-[13.5px] leading-relaxed mb-3" style={{ color: "var(--text-2)", overflowWrap: "anywhere" }}>
                  {p}
                </p>
              ))}
            </article>
          )}
        </div>
      </div>

      <div className="px-4 py-1.5 flex-shrink-0" style={{ borderTop: "1px solid var(--border)", background: "rgba(15,12,30,.3)" }}>
        <p className="text-[9px]" style={{ color: "var(--text-3)" }}>{t("studio.usedNote")}</p>
      </div>
    </div>
  );
}
