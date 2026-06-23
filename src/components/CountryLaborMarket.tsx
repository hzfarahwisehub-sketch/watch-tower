"use client";
import { getLaborMarket } from "@/lib/labor-market";
import { useLocale } from "./LocaleProvider";

// Seção 💼 Mercado de Trabalho no Benchmark do país. Conteúdo curado pela equipe
// de agentes (links oficiais). Rótulos em PT por ora (conteúdo é PT; rótulos EN
// entram junto da curadoria EN). Acento teal pra distinguir de Dicas (ouro) e
// Atividade ao Vivo (verde).
const ACCENT = "#0EA5A5";

function paras(text: string): string[] {
  return text.split(/\n{2,}/).map((s) => s.trim()).filter(Boolean);
}

function Block({ icon, label, children }: { icon: string; label: string; children: React.ReactNode }) {
  return (
    <div className="mt-2.5">
      <div className="text-[10.5px] font-bold mb-1" style={{ color: "var(--text)" }}>{icon} {label}</div>
      {children}
    </div>
  );
}

export function CountryLaborMarket({ countryCode }: { countryCode: string }) {
  const { locale } = useLocale();
  const lm = getLaborMarket(countryCode, locale === "en" ? "en" : "pt");
  if (!lm) return null;

  return (
    <div>
      <h4 className="text-[10.5px] tracking-[2px] uppercase font-bold mb-2 flex items-center gap-2" style={{ color: ACCENT }}>
        💼 Mercado de Trabalho
        <span className="text-[8.5px] tracking-wider font-bold px-1.5 py-0.5 rounded" style={{ color: ACCENT, background: "rgba(14,165,165,.12)" }}>
          curado
        </span>
      </h4>

      <div className="rounded-lg p-3.5" style={{ background: "var(--bg2)", borderLeft: `3px solid ${ACCENT}` }}>
        {paras(lm.overview).map((p, i) => (
          <p key={i} className="text-[12px] leading-relaxed mb-1.5" style={{ color: "var(--text-2)" }}>{p}</p>
        ))}

        {lm.hotSectors.length > 0 && (
          <Block icon="🔼" label="Setores em alta">
            <div className="flex flex-wrap gap-1.5">
              {lm.hotSectors.map((s, i) => (
                <span key={i} className="text-[11px] px-2 py-0.5 rounded-full" style={{ background: "rgba(14,165,165,.12)", color: "var(--text)" }}>{s}</span>
              ))}
            </div>
          </Block>
        )}

        {lm.coolingSectors && lm.coolingSectors.length > 0 && (
          <Block icon="🔻" label="Setores em baixa">
            <div className="flex flex-wrap gap-1.5">
              {lm.coolingSectors.map((s, i) => (
                <span key={i} className="text-[11px] px-2 py-0.5 rounded-full" style={{ background: "var(--bg)", color: "var(--text-3)", border: "1px solid var(--border)" }}>{s}</span>
              ))}
            </div>
          </Block>
        )}

        {lm.inDemandRoles.length > 0 && (
          <Block icon="🧭" label="Profissões em demanda">
            <ul className="flex flex-col gap-1">
              {lm.inDemandRoles.map((r, i) => (
                <li key={i} className="text-[11.5px] leading-relaxed" style={{ color: "var(--text-2)" }}>
                  <b style={{ color: "var(--text)" }}>{r.role}</b>{r.note ? ` — ${r.note}` : ""}
                </li>
              ))}
            </ul>
          </Block>
        )}

        {lm.byQualification && lm.byQualification.length > 0 && (
          <Block icon="🎓" label="Por formação / curso">
            <ul className="flex flex-col gap-1.5">
              {lm.byQualification.map((q, i) => (
                <li key={i} className="text-[11.5px] leading-relaxed" style={{ color: "var(--text-2)" }}>
                  <b style={{ color: "var(--text)" }}>{q.area}:</b> {q.advice}
                </li>
              ))}
            </ul>
          </Block>
        )}

        {lm.salaries && lm.salaries.length > 0 && (
          <Block icon="💵" label="Faixas salariais">
            <ul className="flex flex-col gap-1">
              {lm.salaries.map((s, i) => (
                <li key={i} className="text-[11.5px]" style={{ color: "var(--text-2)" }}>
                  <b style={{ color: "var(--text)" }}>{s.role}:</b> {s.range}
                  {s.source && (
                    <> · <a href={s.source.url} target="_blank" rel="noreferrer" style={{ color: "var(--color-wh-blue-light)" }}>↗ {s.source.label}</a></>
                  )}
                </li>
              ))}
            </ul>
          </Block>
        )}

        {lm.foreignerRules && (
          <Block icon="🛂" label="Regras pra estrangeiro">
            {paras(lm.foreignerRules).map((p, i) => (
              <p key={i} className="text-[11.5px] leading-relaxed mb-1" style={{ color: "var(--text-2)" }}>{p}</p>
            ))}
          </Block>
        )}

        {lm.opportunityWindows && lm.opportunityWindows.length > 0 && (
          <Block icon="🪟" label="Janelas de oportunidade">
            <ul className="flex flex-col gap-1">
              {lm.opportunityWindows.map((w, i) => (
                <li key={i} className="text-[11.5px] flex gap-2" style={{ color: "var(--text-2)" }}><span style={{ color: ACCENT }}>▸</span>{w}</li>
              ))}
            </ul>
          </Block>
        )}

        {lm.jobBoards.length > 0 && (
          <Block icon="➡️" label="Onde se candidatar">
            <div className="flex flex-wrap gap-x-3.5 gap-y-1.5">
              {lm.jobBoards.map((b, i) => (
                <a key={i} href={b.url} target="_blank" rel="noreferrer" className="text-[11.5px] flex items-center gap-1" style={{ color: "var(--color-wh-blue-light)" }}>
                  ↗ {b.label}
                  {b.official && <span className="text-[8px] font-bold px-1 rounded" style={{ color: ACCENT, background: "rgba(14,165,165,.12)" }}>OFICIAL</span>}
                </a>
              ))}
            </div>
          </Block>
        )}

        {lm.sources.length > 0 && (
          <div className="mt-2.5 pt-2 text-[10px] flex flex-wrap gap-x-3 gap-y-1" style={{ borderTop: "1px solid var(--border)" }}>
            {lm.sources.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noreferrer" style={{ color: "var(--text-3)" }}>↗ {s.label}</a>
            ))}
          </div>
        )}

        <div className="text-[9.5px] mt-1.5" style={{ color: "var(--text-3)" }}>Curadoria WiseHub · atualizado em {lm.updatedAt}</div>
      </div>
    </div>
  );
}
