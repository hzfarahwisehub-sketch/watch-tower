"use client";
import { useState, type ReactNode } from "react";
import type { Country } from "@/lib/types";
import {
  getEditorial,
  DESTINATIONS,
  DIMENSION_FILTERS,
  pieceDimension,
  recencyBucket,
  type DimensionKey,
} from "@/lib/editorial";
import { INFO_CENTERS, type InfoSource } from "@/lib/infoCenters";
import { useLocale } from "./LocaleProvider";
import { CountryLaborMarket } from "./CountryLaborMarket";

type TFn = (key: string, params?: Record<string, string | number>) => string;

const COMM = DESTINATIONS.find((d) => d.key === "community")!.colorHex;
const TAB = DESTINATIONS.find((d) => d.key === "countryTab")!.colorHex;
const BLOG = DESTINATIONS.find((d) => d.key === "blog")!.colorHex;

function paras(text: string): string[] {
  return text.split(/\n{2,}/).map((s) => s.trim()).filter(Boolean);
}

/** Selo de recência: "atual" (verde), "semana passada" (âmbar) e/ou "utilizada"
 *  (grifada). Peça legada sem data não mostra nada. */
function RecencyBadge({ publishedAt, usedAt }: { publishedAt?: string; usedAt?: string }) {
  const bucket = recencyBucket(publishedAt);
  const chips: Array<{ label: string; color: string; bg: string }> = [];
  if (bucket === "atual") chips.push({ label: "atual", color: "#10A570", bg: "rgba(16,165,112,.14)" });
  if (bucket === "semana-passada") chips.push({ label: "semana passada", color: "#E5A100", bg: "rgba(229,193,86,.16)" });
  if (usedAt) chips.push({ label: "utilizada", color: "var(--text-3)", bg: "rgba(255,255,255,.06)" });
  if (chips.length === 0) return null;
  return (
    <span className="inline-flex gap-1.5 flex-shrink-0 items-center">
      {chips.map((c) => (
        <span
          key={c.label}
          className="text-[8.5px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded whitespace-nowrap"
          style={{ color: c.color, background: c.bg }}
        >
          {c.label}
        </span>
      ))}
    </span>
  );
}

function categoryLabel(c: string, t: TFn): string {
  switch (c) {
    case "news": return t("detail.cat.news");
    case "finance": return t("detail.cat.finance");
    case "crypto": return t("detail.cat.crypto");
    case "legal": return t("detail.cat.legal");
    default: return t("detail.cat.official");
  }
}

function Title({ children, color }: { children: ReactNode; color?: string }) {
  return (
    <h4
      className="text-[10.5px] tracking-[2px] uppercase font-bold mb-2 flex items-center gap-2"
      style={{ color: color ?? "var(--color-wh-blue-light)" }}
    >
      {children}
    </h4>
  );
}

/**
 * Seções de detalhe do país (editorial curado + dicas + fontes), exibidas
 * DENTRO do Benchmark. Tem filtro por DIMENSÃO (Tudo · Vistos & Trabalho ·
 * Educação · Saúde · Economia) — a dimensão é detectada pelo emoji do título.
 */
export function CountryDetailSections({ country }: { country: Country }) {
  const { t, locale } = useLocale();
  const ed = getEditorial(country.code, locale);
  const [dim, setDim] = useState<DimensionKey>("all");

  const center = INFO_CENTERS.find((ic) => ic.countryCode === country.code);
  const sources = center?.sources ?? [];

  const matchDim = (d: Exclude<DimensionKey, "all">) => dim === "all" || dim === d;
  // Fora do filtro de dimensão, também some quem já foi pro arquivo (> semana
  // passada). Peça legada sem publishedAt fica (bucket null != "arquivo").
  const live = (publishedAt?: string) => recencyBucket(publishedAt) !== "arquivo";
  const community = ed ? ed.community.filter((p) => matchDim(pieceDimension(p.title)) && live(p.publishedAt)) : [];
  const countryTab = ed ? ed.countryTab.filter((a) => matchDim(pieceDimension(a.headline)) && live(a.publishedAt)) : [];
  const blog = ed ? ed.blog.filter((p) => matchDim(pieceDimension(p.headline)) && live(p.publishedAt)) : [];
  const tips = community.map((p) => p.cta).filter(Boolean) as string[];

  // dimensões realmente presentes (pros chips de filtro)
  const present = new Set<Exclude<DimensionKey, "all">>();
  if (ed) {
    ed.community.forEach((p) => present.add(pieceDimension(p.title)));
    ed.countryTab.forEach((a) => present.add(pieceDimension(a.headline)));
    ed.blog.forEach((p) => present.add(pieceDimension(p.headline)));
  }
  const chips = DIMENSION_FILTERS.filter((f) => f.key === "all" || present.has(f.key));

  const byCategory = new Map<string, InfoSource[]>();
  for (const s of sources) {
    const arr = byCategory.get(s.category) ?? [];
    arr.push(s);
    byCategory.set(s.category, arr);
  }

  const nothingInDim = ed && dim !== "all" && community.length === 0 && countryTab.length === 0 && blog.length === 0;

  return (
    <>
      {/* Filtro por dimensão (só aparece quando há mais de uma) */}
      {ed && present.size > 1 && (
        <div className="flex flex-wrap gap-1.5">
          {chips.map((f) => {
            const active = dim === f.key;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setDim(f.key)}
                className="px-2.5 py-1 rounded-full text-[10.5px] font-bold tracking-wide transition-colors cursor-pointer"
                style={{
                  background: active ? "var(--color-wh-blue)" : "var(--bg2)",
                  color: active ? "#fff" : "var(--text-3)",
                  border: "1px solid var(--border)",
                }}
              >
                {f.emoji} {f.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Mercado de Trabalho (curado pela equipe, links oficiais). É dimensão
          "core" (Vistos & Trabalho), então respeita o filtro de abas: aparece
          em "Tudo" e "Vistos & Trabalho", some nas outras. Antes era renderizado
          fixo aqui e ficava "travado" independente da aba clicada. */}
      {(dim === "all" || dim === "core") && <CountryLaborMarket countryCode={country.code} />}

      {/* Dicas práticas */}
      {tips.length > 0 && (
        <div>
          <Title color="#D8AF54">{t("detail.tips.title")}</Title>
          <ul className="flex flex-col gap-2">
            {tips.map((t, i) => (
              <li
                key={i}
                className="rounded-lg p-2.5 text-[12px] leading-relaxed"
                style={{ background: "rgba(216,175,84,.08)", border: "1px solid rgba(216,175,84,.3)", borderLeft: "3px solid #D8AF54", color: "var(--text)" }}
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Notícia completa (editorial · aba do país) */}
      {countryTab.length > 0 && (
        <div>
          <Title color={`#${TAB}`}>{t("detail.fullStory.title")}</Title>
          <div className="flex flex-col gap-3">
            {countryTab.map((a, i) => (
              <article key={i} className="rounded-lg p-3.5" style={{ background: "var(--bg2)", borderLeft: `3px solid #${TAB}` }}>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h5 className="text-[14px] font-extrabold leading-snug" style={{ color: "var(--text)" }}>{a.headline}</h5>
                  <RecencyBadge publishedAt={a.publishedAt} usedAt={a.usedAt} />
                </div>
                <p className="text-[11.5px] italic mb-2" style={{ color: "var(--text-3)" }}>{a.standfirst}</p>
                {paras(a.body).map((p, j) => (
                  <p key={j} className="text-[12px] leading-relaxed mb-1.5" style={{ color: "var(--text-2)" }}>{p}</p>
                ))}
                {a.keyFacts && a.keyFacts.length > 0 && (
                  <ul className="mt-1.5 mb-1 flex flex-col gap-1">
                    {a.keyFacts.map((f, k) => (
                      <li key={k} className="text-[11.5px] flex gap-2" style={{ color: "var(--text-2)" }}>
                        <span style={{ color: `#${TAB}` }}>▸</span>{f}
                      </li>
                    ))}
                  </ul>
                )}
                {a.sources && a.sources.length > 0 && (
                  <div className="mt-1.5 text-[10px] flex flex-wrap gap-x-3 gap-y-1">
                    {a.sources.map((s, k) => (
                      <a key={k} href={s.url} target="_blank" rel="noreferrer" style={{ color: "var(--color-wh-blue-light)" }}>↗ {s.label}</a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      )}

      {/* Posts da comunidade */}
      {community.length > 0 && (
        <div>
          <Title color={`#${COMM}`}>{t("detail.community.title")}</Title>
          <div className="flex flex-col gap-2.5">
            {community.map((p, i) => (
              <div key={i} className="rounded-lg p-3" style={{ background: "var(--bg2)", borderLeft: `3px solid #${COMM}` }}>
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h5 className="text-[13px] font-bold" style={{ color: "var(--text)" }}>{p.title}</h5>
                  <RecencyBadge publishedAt={p.publishedAt} usedAt={p.usedAt} />
                </div>
                {paras(p.body).map((para, j) => (
                  <p key={j} className="text-[11.5px] leading-relaxed mb-1" style={{ color: "var(--text-2)" }}>{para}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Matéria do Blog */}
      {blog.length > 0 && (
        <div>
          <Title color={`#${BLOG}`}>{t("detail.blog.title")}</Title>
          <div className="flex flex-col gap-3">
            {blog.map((p, i) => (
              <article key={i} className="rounded-lg p-3.5" style={{ background: "var(--bg2)", borderLeft: `3px solid #${BLOG}` }}>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h5 className="text-[14px] font-extrabold leading-snug" style={{ color: "var(--text)" }}>{p.headline}</h5>
                  <RecencyBadge publishedAt={p.publishedAt} usedAt={p.usedAt} />
                </div>
                <p className="text-[11.5px] italic mb-2" style={{ color: "var(--text-3)" }}>{p.standfirst}</p>
                {paras(p.body).map((para, j) => (
                  <p key={j} className="text-[12px] leading-relaxed mb-1.5" style={{ color: "var(--text-2)" }}>{para}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      )}

      {nothingInDim && (
        <p className="text-[11.5px] italic" style={{ color: "var(--text-3)" }}>
          {t("detail.empty.dimension", { country: country.name })}
        </p>
      )}

      {/* Centros de Informação (fontes) */}
      {sources.length > 0 && (
        <div>
          <Title>{t("detail.infoCenters.title", { n: sources.length })}</Title>
          <div className="flex flex-col gap-2.5">
            {[...byCategory.entries()].map(([cat, srcs]) => (
              <div key={cat}>
                <h5 className="text-[10.5px] font-bold mb-1" style={{ color: "var(--text-2)" }}>{categoryLabel(cat, t)} ({srcs.length})</h5>
                <div className="flex flex-wrap gap-x-3.5 gap-y-1.5">
                  {srcs.map((s, i) => (
                    <a key={i} href={s.url} target="_blank" rel="noreferrer" className="text-[11.5px] flex items-center gap-1" style={{ color: "var(--color-wh-blue-light)" }}>
                      ↗ {s.name}
                      {s.rss && <span className="text-[8px] font-bold px-1 rounded" style={{ color: "#10A570", background: "rgba(16,165,112,.12)" }}>RSS</span>}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!ed && (
        <p className="text-[11.5px] italic" style={{ color: "var(--text-3)" }}>
          {t("detail.empty.noEditorial")}
        </p>
      )}
    </>
  );
}
