"use client";
import { useCallback, useMemo, useState } from "react";
import { ROTEIROS, type Roteiro } from "@/lib/roteiros-data";
import { useLocale } from "./LocaleProvider";
import { useVisiblePoll } from "@/lib/useVisiblePoll";

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
// "Já usei" é fato de EQUIPE, não preferência de navegador: qualquer usuário
// marca e TODOS enxergam, pra dois fundadores não gravarem o mesmo texto.
// Estado no banco (RoteiroUsage) via /api/roteiros/usage.

type PersonaFilter = "all" | string;
type CanalFilter = "all" | string;

type Usage = { roteiroId: string; usedBy: string; usedAt: string };

function useUsed() {
  const [usage, setUsage] = useState<Map<string, Usage>>(new Map());

  const reload = useCallback(async () => {
    try {
      const r = await fetch("/api/roteiros/usage", { cache: "no-store" });
      if (r.ok) {
        const d = await r.json();
        setUsage(new Map((d.usage ?? []).map((u: Usage) => [u.roteiroId, u])));
      }
    } catch {}
  }, []);

  // 5min + pausa com aba oculta (era 30s direto — principal custo Vercel de jul/2026);
  // o clique "já usei" continua instantâneo (update otimista + reload pós-PATCH).
  useVisiblePoll(reload, 300_000);

  const toggle = async (id: string) => {
    const willUse = !usage.has(id);
    // Update otimista: o clique responde na hora; o reload no fim corrige se o
    // servidor discordar (ex.: outro sócio marcou no mesmo segundo).
    setUsage((prev) => {
      const next = new Map(prev);
      if (willUse) next.set(id, { roteiroId: id, usedBy: "…", usedAt: new Date().toISOString() });
      else next.delete(id);
      return next;
    });
    try {
      await fetch("/api/roteiros/usage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ roteiroId: id, used: willUse }),
      });
    } catch {}
    reload();
  };

  return { usage, toggle };
}

function canalEmoji(canal: string): string {
  if (canal.startsWith("YouTube")) return "▶";
  if (canal.startsWith("Reels")) return "🎞";
  return "📷";
}

function personaColor(p: string): string {
  if (p === "Lucas") return "#4A7AFF";
  if (p === "Dupla") return "#10A570"; // casal Lucas+Marcela (verde WiseHub)
  return "#D8AF54"; // Marcela
}

// Urgência: notícia que perde validade (lei/regra mudou, ato oficial, últimas
// 48h, prazo fechando). Pedido do Hammis (2026-07-20): o fundador precisa ver
// na hora QUE corre e POR QUE corre, senão não dá pra priorizar a gravação.
// Marcado à mão no .md do lote ("Urgência: urgente · <motivo>"), ver
// scripts/parse-lotes.py. Vermelho = mesmo --color-status-critical dos alertas.
const URG = "var(--color-status-critical)";
const URG_BG = "rgba(255,59,92,.12)";

// Rótulo amigável da família do conteúdo (o campo `tipo` do dado é técnico).
const TIPO_LABEL: Record<string, string> = {
  roteiro: "Roteiros",
  dupla: "Dupla (casal)",
  custo: "Dicas de custo",
};

export function ContentStudio() {
  const { t } = useLocale();
  const { usage, toggle } = useUsed();
  const used = usage;

  const [tipo, setTipo] = useState<string>("all");
  const [persona, setPersona] = useState<PersonaFilter>("all");
  const [canal, setCanal] = useState<CanalFilter>("all");
  const [date, setDate] = useState<string>("all");
  const [onlyUnused, setOnlyUnused] = useState(false);
  const [onlyUrgent, setOnlyUrgent] = useState(false);
  // null = "o primeiro da lista", que já respeita o urgente-no-topo abaixo.
  const [openId, setOpenId] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  // Ordem fixa pros tipos (Roteiros, Dupla, Dicas de custo), não a de aparição.
  const tipos = useMemo(
    () => ["roteiro", "dupla", "custo"].filter((tp) => ROTEIROS.some((r) => r.tipo === tp)),
    [],
  );
  const personas = useMemo(() => [...new Set(ROTEIROS.map((r) => r.persona))], []);
  const canais = useMemo(() => [...new Set(ROTEIROS.map((r) => r.canal))], []);
  const dates = useMemo(() => [...new Set(ROTEIROS.map((r) => r.date))].sort().reverse(), []);

  const temUrgente = useMemo(() => ROTEIROS.some((r) => r.urgencia === "urgente"), []);

  const list = useMemo(
    () =>
      ROTEIROS.filter(
        (r) =>
          (tipo === "all" || r.tipo === tipo) &&
          (persona === "all" || r.persona === persona) &&
          (canal === "all" || r.canal === canal) &&
          (date === "all" || r.date === date) &&
          (!onlyUnused || !used.has(r.id)) &&
          (!onlyUrgent || r.urgencia === "urgente"),
      )
        // Urgente sobe pro topo INDEPENDENTE da data: um roteiro de ontem sobre
        // uma regra que muda amanhã vale mais que o lote de hoje. Sort estável,
        // então dentro de cada grupo a ordem original (mais novo primeiro) fica.
        .sort((a, b) => (a.urgencia === "urgente" ? 0 : 1) - (b.urgencia === "urgente" ? 0 : 1)),
    [tipo, persona, canal, date, onlyUnused, onlyUrgent, used],
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
        <Select label={t("studio.f.tipo")} value={tipo} onChange={setTipo}>
          <option value="all">{t("studio.f.tipo")}: {t("studio.f.all")}</option>
          {tipos.map((tp) => <option key={tp} value={tp}>{TIPO_LABEL[tp] ?? tp}</option>)}
        </Select>
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
        {/* Só aparece quando existe urgente no acervo: filtro que nunca acha
            nada é ruído na barra. */}
        {temUrgente && (
          <label className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide cursor-pointer select-none" style={{ color: onlyUrgent ? URG : "var(--text-3)" }}>
            <input
              type="checkbox"
              checked={onlyUrgent}
              onChange={(e) => setOnlyUrgent(e.target.checked)}
              className="cursor-pointer"
              style={{ accentColor: URG, width: 13, height: 13 }}
            />
            {t("studio.f.onlyUrgent")}
          </label>
        )}
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
              const isUrg = r.urgencia === "urgente";
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setOpenId(r.id)}
                  className="w-full text-left rounded-lg px-2.5 py-2 my-1 cursor-pointer transition-colors block"
                  style={{
                    background: active ? "rgba(74,122,255,.14)" : isUrg ? URG_BG : "var(--bg2)",
                    border: `1px solid ${active ? "var(--color-wh-blue)" : isUrg ? URG : "var(--border)"}`,
                    borderLeft: `3px solid ${personaColor(r.persona)}`,
                    opacity: isUsed ? 0.55 : 1,
                  }}
                >
                  {isUrg && (
                    <div className="flex items-center gap-1 mb-1 flex-wrap" data-urgent="1">
                      <span className="px-1.5 py-0.5 rounded-full text-[8.5px] font-extrabold uppercase tracking-wide" style={{ background: URG_BG, color: URG, border: `1px solid ${URG}66` }}>
                        {t("studio.urgent")}
                      </span>
                      {r.urgenciaMotivo && (
                        <span className="text-[9px] font-bold leading-tight" style={{ color: URG, overflowWrap: "anywhere" }}>
                          {r.urgenciaMotivo}
                        </span>
                      )}
                    </div>
                  )}
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
              {/* Faixa de urgência: o fundador tem que ler O QUE corre antes do
                  título, senão o selo vira enfeite. */}
              {open.urgencia === "urgente" && (
                <div
                  className="flex items-center gap-2 flex-wrap rounded-lg px-3 py-2 mb-3"
                  data-urgent-panel="1"
                  style={{ background: URG_BG, border: `1px solid ${URG}66`, borderLeft: `4px solid ${URG}` }}
                >
                  <span className="text-[10px] font-extrabold uppercase tracking-wide" style={{ color: URG }}>
                    {t("studio.urgent")}
                  </span>
                  {open.urgenciaMotivo && (
                    <span className="text-[11px] font-bold leading-snug" style={{ color: "var(--text)", overflowWrap: "anywhere" }}>
                      {open.urgenciaMotivo}
                    </span>
                  )}
                  <span className="text-[9.5px] font-bold uppercase tracking-wide ml-auto" style={{ color: URG }}>
                    {t("studio.urgentHint")}
                  </span>
                </div>
              )}
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

              {/* Atribuição: quem do time já gravou este. Some quando desmarcado. */}
              {usage.get(open.id) && (
                <p className="text-[10px] font-bold uppercase tracking-wide mb-2" style={{ color: "var(--color-status-stable)" }}>
                  {t("studio.usedBy", { name: usage.get(open.id)!.usedBy })}
                </p>
              )}

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
