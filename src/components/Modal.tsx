"use client";
import { useEffect, type ReactNode } from "react";
import type { Country } from "@/lib/types";
import { getEditorial, DESTINATIONS } from "@/lib/editorial";
import { INFO_CENTERS, type InfoSource } from "@/lib/infoCenters";
import { CountryLiveActivity } from "./CountryLiveActivity";

const COMM = DESTINATIONS.find((d) => d.key === "community")!.colorHex;
const TAB = DESTINATIONS.find((d) => d.key === "countryTab")!.colorHex;
const BLOG = DESTINATIONS.find((d) => d.key === "blog")!.colorHex;

function paras(text: string): string[] {
  return text.split(/\n{2,}/).map((s) => s.trim()).filter(Boolean);
}

function categoryLabel(c: string): string {
  switch (c) {
    case "news": return "📰 Notícias gerais";
    case "finance": return "💰 Finanças & Mercados";
    case "crypto": return "🪙 Cripto & Derivativos";
    case "legal": return "⚖ Leis & Regulação";
    default: return "📌 Fontes oficiais";
  }
}

function SectionTitle({ children, color }: { children: ReactNode; color?: string }) {
  return (
    <h3
      className="text-[11px] tracking-[2px] uppercase font-extrabold mb-2.5 flex items-center gap-2"
      style={{ color: color ?? "var(--color-wh-blue-light)" }}
    >
      {children}
    </h3>
  );
}

export function Modal({ country, onClose }: { country: Country | null; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!country) return null;

  const statusLabel = { crit: "Status Crítico", warn: "Status Atenção", stable: "Status Estável" }[country.status];
  const accent =
    country.status === "crit" ? "var(--color-status-critical)" :
    country.status === "warn" ? "var(--color-status-warning)" :
    "var(--color-status-stable)";

  const ed = getEditorial(country.code);
  const center = INFO_CENTERS.find((ic) => ic.countryCode === country.code);
  const sources = center?.sources ?? [];
  const tips = ed ? ed.community.map((p) => p.cta).filter(Boolean) as string[] : [];

  const byCategory = new Map<string, InfoSource[]>();
  for (const s of sources) {
    const arr = byCategory.get(s.category) ?? [];
    arr.push(s);
    byCategory.set(s.category, arr);
  }

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 backdrop-blur-lg"
      style={{ background: "rgba(10,8,26,.85)", animation: "wt-fade .2s ease-out" }}
    >
      <div
        className="max-w-[920px] w-full rounded-2xl flex flex-col"
        style={{
          maxHeight: "90vh",
          background: "linear-gradient(180deg, var(--surface), var(--surface-hi))",
          border: "1px solid var(--border-hi)",
          boxShadow: "0 24px 80px rgba(0,0,0,.6), 0 0 60px rgba(31,85,255,.3)",
          animation: "wt-slide .3s ease-out",
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-3.5 px-6 py-4 flex-shrink-0" style={{ borderBottom: "1px solid var(--border)" }}>
          <span className={`wt-flag md ${country.code}`} />
          <div className="flex-1 min-w-0">
            <h2 className="text-[19px] font-bold leading-tight" style={{ color: "var(--text)" }}>{country.name}</h2>
            <span className="text-[11px] uppercase tracking-wider font-semibold" style={{ color: "var(--text-3)" }}>
              Autoridade: {country.authority}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="text-[24px] cursor-pointer bg-transparent border-0 p-1 flex-shrink-0"
            style={{ color: "var(--text-3)" }}
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 overflow-y-auto flex flex-col gap-6" style={{ scrollbarWidth: "thin" }}>
          {/* Status */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[14px] text-[11px] font-extrabold tracking-wider uppercase self-start"
            style={{
              background:
                country.status === "crit" ? "rgba(255,59,92,.18)" :
                country.status === "warn" ? "rgba(255,138,31,.18)" :
                "rgba(16,224,160,.18)",
              color: accent,
              border: `1px solid ${
                country.status === "crit" ? "rgba(255,59,92,.4)" :
                country.status === "warn" ? "rgba(255,138,31,.4)" :
                "rgba(16,224,160,.4)"
              }`,
            }}
          >
            <span className={`wt-status ${country.status}`} style={{ width: 8, height: 8 }} />
            {statusLabel} · {country.changes} mudança{country.changes > 1 ? "s" : ""} ativa{country.changes > 1 ? "s" : ""}
          </div>

          {/* Panorama */}
          {country.summary && (
            <section>
              <SectionTitle>📋 Panorama</SectionTitle>
              <p className="text-[13.5px] leading-relaxed" style={{ color: "var(--text-2)" }}>{country.summary}</p>
            </section>
          )}

          {/* Atividade ao vivo (RSS + boletim) */}
          <section>
            <CountryLiveActivity countryCode={country.code} />
          </section>

          {/* Dicas */}
          {tips.length > 0 && (
            <section>
              <SectionTitle color="#D8AF54">💡 Dicas práticas</SectionTitle>
              <ul className="flex flex-col gap-2">
                {tips.map((t, i) => (
                  <li
                    key={i}
                    className="rounded-lg p-3 text-[12.5px] leading-relaxed"
                    style={{ background: "rgba(216,175,84,.08)", border: "1px solid rgba(216,175,84,.3)", borderLeft: "3px solid #D8AF54", color: "var(--text)" }}
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Notícia completa (editorial · aba do país) */}
          {ed && ed.countryTab.length > 0 && (
            <section>
              <SectionTitle color={`#${TAB}`}>📰 Notícia completa</SectionTitle>
              <div className="flex flex-col gap-4">
                {ed.countryTab.map((a, i) => (
                  <article key={i} className="rounded-lg p-4" style={{ background: "var(--bg2)", borderLeft: `3px solid #${TAB}` }}>
                    <h4 className="text-[15px] font-extrabold leading-snug mb-1" style={{ color: "var(--text)" }}>{a.headline}</h4>
                    <p className="text-[12px] italic mb-2.5" style={{ color: "var(--text-3)" }}>{a.standfirst}</p>
                    {paras(a.body).map((p, j) => (
                      <p key={j} className="text-[12.5px] leading-relaxed mb-2" style={{ color: "var(--text-2)" }}>{p}</p>
                    ))}
                    {a.keyFacts && a.keyFacts.length > 0 && (
                      <ul className="mt-2 mb-1 flex flex-col gap-1">
                        {a.keyFacts.map((f, k) => (
                          <li key={k} className="text-[12px] flex gap-2" style={{ color: "var(--text-2)" }}>
                            <span style={{ color: `#${TAB}` }}>▸</span>{f}
                          </li>
                        ))}
                      </ul>
                    )}
                    {a.sources && a.sources.length > 0 && (
                      <div className="mt-2 text-[10.5px] flex flex-wrap gap-x-3 gap-y-1">
                        {a.sources.map((s, k) => (
                          <a key={k} href={s.url} target="_blank" rel="noreferrer" style={{ color: "var(--color-wh-blue-light)" }}>↗ {s.label}</a>
                        ))}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* Posts da comunidade (editorial) */}
          {ed && ed.community.length > 0 && (
            <section>
              <SectionTitle color={`#${COMM}`}>📣 Posts pra comunidade</SectionTitle>
              <div className="flex flex-col gap-3">
                {ed.community.map((p, i) => (
                  <div key={i} className="rounded-lg p-3.5" style={{ background: "var(--bg2)", borderLeft: `3px solid #${COMM}` }}>
                    <h4 className="text-[13.5px] font-bold mb-1.5" style={{ color: "var(--text)" }}>{p.title}</h4>
                    {paras(p.body).map((para, j) => (
                      <p key={j} className="text-[12px] leading-relaxed mb-1.5" style={{ color: "var(--text-2)" }}>{para}</p>
                    ))}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Blog (editorial) */}
          {ed && ed.blog.length > 0 && (
            <section>
              <SectionTitle color={`#${BLOG}`}>📝 Matéria do Blog WiseHub News</SectionTitle>
              <div className="flex flex-col gap-4">
                {ed.blog.map((p, i) => (
                  <article key={i} className="rounded-lg p-4" style={{ background: "var(--bg2)", borderLeft: `3px solid #${BLOG}` }}>
                    <h4 className="text-[15px] font-extrabold leading-snug mb-1" style={{ color: "var(--text)" }}>{p.headline}</h4>
                    <p className="text-[12px] italic mb-2.5" style={{ color: "var(--text-3)" }}>{p.standfirst}</p>
                    {paras(p.body).map((para, j) => (
                      <p key={j} className="text-[12.5px] leading-relaxed mb-2" style={{ color: "var(--text-2)" }}>{para}</p>
                    ))}
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* Marcos editoriais (curados) */}
          {country.events.length > 0 && (
            <section>
              <SectionTitle>📜 Marcos editoriais ({country.events.length})</SectionTitle>
              <div className="flex flex-col gap-3">
                {country.events.map((e, i) => (
                  <div key={i} className="px-4 py-3 rounded-lg" style={{ background: "rgba(15,12,30,.4)", borderLeft: "3px solid var(--color-wh-blue-light)" }}>
                    <h4 className="text-[11px] mb-1 tracking-wider uppercase font-extrabold" style={{ color: "var(--color-wh-blue-light)" }}>{e.time}</h4>
                    <p className="text-[13px] leading-relaxed mb-1" style={{ color: "var(--text)" }}>
                      <strong>{e.title}</strong>
                      <br />
                      {e.desc}
                    </p>
                    <div className="text-[10.5px] uppercase tracking-wide font-semibold" style={{ color: "var(--text-3)" }}>Fonte: {e.src}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Fontes / Centros de Informação */}
          {sources.length > 0 && (
            <section>
              <SectionTitle>🌐 Centros de Informação ({sources.length})</SectionTitle>
              <div className="flex flex-col gap-3">
                {[...byCategory.entries()].map(([cat, srcs]) => (
                  <div key={cat}>
                    <h4 className="text-[11px] font-bold mb-1.5" style={{ color: "var(--text-2)" }}>{categoryLabel(cat)} ({srcs.length})</h4>
                    <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                      {srcs.map((s, i) => (
                        <a key={i} href={s.url} target="_blank" rel="noreferrer" className="text-[12px] flex items-center gap-1" style={{ color: "var(--color-wh-blue-light)" }}>
                          ↗ {s.name}
                          <span className="text-[9px] uppercase" style={{ color: "var(--text-3)" }}>{s.language}</span>
                          {s.rss && <span className="text-[8.5px] font-bold px-1 rounded" style={{ color: "#10A570", background: "rgba(16,165,112,.12)" }}>RSS</span>}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {!ed && (
            <p className="text-[12px] italic" style={{ color: "var(--text-3)" }}>
              Conteúdo editorial deste país em curadoria pela Friday. Por enquanto, veja o panorama, a atividade ao vivo e as fontes acima.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
