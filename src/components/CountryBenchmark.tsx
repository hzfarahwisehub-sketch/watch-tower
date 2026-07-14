"use client";
import { useEffect, useMemo, useState } from "react";
import { COUNTRIES } from "@/lib/data";
import type { Country, Status } from "@/lib/types";
import { CountryLiveActivity } from "./CountryLiveActivity";
import { CountryDetailSections } from "./CountryDetailSections";
import { ImageZoomViewer } from "./ImageZoomViewer";
import { useCountryChanges } from "@/lib/useCountryChanges";
import { useLocale } from "./LocaleProvider";
import { SECTION_FILTERS, availableSections, showSection, type SectionKey } from "@/lib/benchmark-sections";

type TFn = (key: string, params?: Record<string, string | number>) => string;

function fmtAge(days: number | null, t: TFn): string {
  if (days === null) return t("bench.age.none");
  if (days === 0) return t("bench.age.today");
  if (days === 1) return t("bench.age.yesterday");
  if (days < 7) return t("bench.age.days", { n: days });
  if (days < 30) return t("bench.age.weeks", { n: Math.floor(days / 7) });
  if (days < 365) return t("bench.age.months", { n: Math.floor(days / 30) });
  return t("bench.age.year");
}

const STATUS_COLOR: Record<Status, string> = {
  crit: "var(--color-status-critical)",
  warn: "var(--color-status-warning)",
  stable: "var(--color-status-stable)",
};

const STATUS_LABEL_KEY: Record<Status, string> = {
  crit: "bench.status.crit",
  warn: "bench.status.warn",
  stable: "bench.status.stable",
};

/**
 * CountryBenchmark — área de destaque do país selecionado.
 *
 * Layout em container query: estica/encolhe com a caixa.
 *  - Acima de 720px: imagem à esquerda (1/3) + conteúdo à direita (2/3)
 *  - Abaixo: imagem em cima, conteúdo embaixo (responsivo)
 *
 * Padrão: mostra o primeiro país crítico ou o primeiro da lista.
 * Quando outro componente seleciona país (mapa/sidebar/feed), refletimos.
 */
export function CountryBenchmark({ selectedCode }: { selectedCode: string | null }) {
  const { t, locale } = useLocale();
  // Default = primeiro país crítico, ou primeiro da lista
  const defaultCountry: Country =
    COUNTRIES.find((c) => c.status === "crit") ?? COUNTRIES[0]!;

  const country: Country =
    (selectedCode ? COUNTRIES.find((c) => c.code === selectedCode) : null) ?? defaultCountry;

  const [imgFailed, setImgFailed] = useState(false);
  const [zoomOpen, setZoomOpen] = useState(false);
  // Filtro por seção: "all" empilha tudo (comportamento antigo); qualquer outro
  // deixa só o assunto escolhido na tela.
  const [section, setSection] = useState<SectionKey>("all");
  useEffect(() => {
    setImgFailed(false);
    setZoomOpen(false);
  }, [country.code]);

  const available = useMemo(() => availableSections(country, locale), [country, locale]);
  // Trocar de país pode derrubar a seção escolhida (o novo país não tem aquilo).
  // Sem isto, o Benchmark ficaria mudo, com um filtro ativo que não existe mais.
  useEffect(() => {
    setSection((cur) => (available.has(cur) ? cur : "all"));
  }, [available]);

  const chips = SECTION_FILTERS.filter((f) => available.has(f.key));
  const show = (k: Exclude<SectionKey, "all">) => showSection(section, k);

  const accent = STATUS_COLOR[country.status];
  const changes = useCountryChanges(country.code);

  // Selecionar um país (clique no globo/alertas/sidebar/feed) só ATUALIZA o
  // conteúdo do Benchmark — NÃO rola a página até ele (regra do Hammis). Quem
  // quiser ver desce o scroll e acha o país clicado; se o Benchmark estiver
  // numa janela destacada (outra tela), o conteúdo já aparece lá.

  return (
    <section className="wt-card h-full flex flex-col @container">
      {/* Header */}
      <header
        className="flex items-center justify-between gap-x-3 gap-y-0.5 pl-5 pr-[64px] py-3.5 flex-shrink-0 flex-wrap"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <h2
            className="text-[12px] tracking-[2.5px] uppercase font-bold flex items-center gap-2"
            style={{ color: "var(--color-wh-blue-light)" }}
          >
            🎯 {t("bench.title")}
          </h2>
          <span
            className="px-2 py-0.5 rounded-full text-[9.5px] uppercase tracking-wider font-bold flex items-center gap-1.5"
            style={{
              background: `${accent}22`,
              border: `1px solid ${accent}66`,
              color: accent,
            }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: accent, boxShadow: `0 0 6px ${accent}` }}
            />
            {t(STATUS_LABEL_KEY[country.status])}
          </span>
        </div>
        <span className="text-[10px] tracking-wider uppercase font-semibold text-right flex items-center gap-2" style={{ color: "var(--text-3)" }}>
          {changes.errored ? (
            <span style={{ color: "var(--color-status-critical)" }}>● {t("bench.cronError")}</span>
          ) : changes.lastChangedAt ? (
            <>
              <span style={{ color: changes.recentlyChanged ? "#10A570" : "var(--text-3)" }}>
                {changes.recentlyChanged ? "✦ " : ""}{t("bench.lastChange")} {fmtAge(changes.daysSinceChange, t)}
              </span>
            </>
          ) : (
            <span>{t("bench.noBulletin")}</span>
          )}
          <span style={{ opacity: 0.5 }}>·</span>
          <span>{country.authority}</span>
        </span>
      </header>

      {/* Body: grid layout fluido (container query) */}
      {/* items-start + sem h-full: o conteúdo flui do TOPO e a sobra (quando a
          caixa é maior que o conteúdo) fica embaixo — em vez de o grid esticar
          as linhas e abrir um vão entre a linha de stats e o Panorama. */}
      <div className="flex-1 overflow-auto p-5 wt-benchmark-body flex flex-col gap-5">
        {/* Filtro por SEÇÃO — um botão por assunto presente no país, "Todos"
            volta a empilhar tudo. Só aparece quando há assunto pra separar
            (com 1 seção só, botão é enfeite). Envolve com flex-wrap pra
            quebrar em linha na caixa estreita em vez de estourar a largura. */}
        {chips.length > 2 && (
          <div className="flex flex-wrap gap-1.5" role="tablist" aria-label={t("bench.sec.aria")}>
            {chips.map((f) => {
              const active = section === f.key;
              return (
                <button
                  key={f.key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSection(f.key)}
                  className="px-2.5 py-1 rounded-full text-[10.5px] font-bold tracking-wide transition-colors cursor-pointer whitespace-nowrap"
                  style={{
                    background: active ? "var(--color-wh-blue)" : "var(--bg2)",
                    color: active ? "#fff" : "var(--text-3)",
                    border: `1px solid ${active ? "var(--color-wh-blue)" : "var(--border)"}`,
                  }}
                >
                  {f.emoji} {t(f.labelKey)}
                </button>
              );
            })}
          </div>
        )}

        {/* ZONA SUPERIOR: imagem (estica em altura pra acompanhar o conteúdo do
            lado) + STATUS à esquerda · Panorama + Atividade ao vivo à direita.
            A imagem, o status e o Panorama ficam SEMPRE visíveis: são a
            identidade do país, não um dos assuntos filtráveis. */}
        <div className="grid grid-cols-1 @2xl:grid-cols-[minmax(220px,260px)_1fr] gap-5 items-stretch">
          {/* IMAGEM destacada (estica em altura) + stats */}
          <div className="flex flex-col gap-3">
            <div
              className="relative rounded-xl overflow-hidden flex-1 min-h-[200px]"
              style={{
                background: `linear-gradient(135deg, ${accent}22, var(--bg2))`,
                border: `1px solid ${accent}66`,
                boxShadow: `0 8px 32px ${accent}33, inset 0 0 0 1px rgba(255,255,255,.05)`,
              }}
            >
              {!imgFailed && country.imageUrl ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={country.imageUrl}
                    alt={`${country.name}, ${t("bench.img.landmark")}`}
                    className="w-full h-full object-cover cursor-zoom-in transition-transform duration-300 hover:scale-[1.04]"
                    loading="lazy"
                    onError={() => setImgFailed(true)}
                    onClick={() => setZoomOpen(true)}
                    title={t("bench.img.clickToZoom")}
                  />
                  <button
                    type="button"
                    onClick={() => setZoomOpen(true)}
                    title={t("bench.img.zoom")}
                    aria-label={t("bench.img.zoom")}
                    className="absolute top-2 right-2 w-8 h-8 rounded-lg flex items-center justify-center text-[14px] cursor-pointer transition-all hover:scale-110 z-10"
                    style={{ background: "rgba(15,12,30,.7)", border: "1px solid rgba(255,255,255,.2)", backdropFilter: "blur(4px)" }}
                  >
                    🔍
                  </button>
                </>
              ) : (
                <div
                  className="w-full h-full flex flex-col items-center justify-center gap-3"
                  style={{ color: accent }}
                >
                  <span className="text-[72px] leading-none">{flagEmoji(country.code)}</span>
                  <span className="text-[11px] tracking-[2px] uppercase font-bold opacity-70">
                    {country.name}
                  </span>
                </div>
              )}
              {/* Overlay com nome do país (esquina inferior esquerda) */}
              <div
                className="absolute inset-x-0 bottom-0 px-3 py-2 flex items-center gap-2"
                style={{
                  background: "linear-gradient(180deg, transparent, rgba(15,12,30,.85))",
                  backdropFilter: "blur(2px)",
                }}
              >
                <span className="text-[22px]">{flagEmoji(country.code)}</span>
                <h3 className="text-[16px] font-extrabold text-white tracking-wide">
                  {country.name}
                </h3>
              </div>
            </div>

            {zoomOpen && country.imageUrl && (
              <ImageZoomViewer
                src={country.imageUrl}
                alt={`${country.name}, ${country.authority}`}
                onClose={() => setZoomOpen(false)}
              />
            )}

            {/* Stats abaixo da imagem */}
            <div className="grid grid-cols-2 gap-2 text-[10.5px]">
              <div
                className="px-3 py-2 rounded-lg flex flex-col gap-0.5"
                style={{ background: "var(--bg2)", border: "1px solid var(--border)" }}
              >
                <span className="uppercase tracking-wider font-bold" style={{ color: "var(--text-3)" }}>
                  {t("bench.stat.status")}
                </span>
                <span className="font-extrabold text-[14px]" style={{ color: accent }}>
                  {t(STATUS_LABEL_KEY[country.status])}
                </span>
              </div>
              <div
                className="px-3 py-2 rounded-lg flex flex-col gap-0.5"
                style={{ background: "var(--bg2)", border: "1px solid var(--border)" }}
              >
                <span className="uppercase tracking-wider font-bold" style={{ color: "var(--text-3)" }}>
                  {t("bench.stat.lastChange")}
                </span>
                <span
                  className="font-extrabold text-[14px]"
                  style={{
                    color: changes.errored
                      ? "var(--color-status-critical)"
                      : changes.recentlyChanged
                        ? "#10A570"
                        : "var(--text)",
                  }}
                >
                  {changes.errored
                    ? t("bench.cronError")
                    : changes.lastChangedAt
                      ? fmtAge(changes.daysSinceChange, t)
                      : t("bench.age.none")}
                  {changes.recentlyChanged && (
                    <span className="text-[10px] font-semibold ml-1" style={{ color: "#10A570" }}>{t("bench.new")}</span>
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* TEXTO: resumo + lista de eventos */}
          <div className="flex flex-col gap-4 min-w-0">
            {country.summary && (
              <div>
                <h4
                  className="text-[10.5px] tracking-[2px] uppercase font-bold mb-2"
                  style={{ color: "var(--color-wh-blue-light)" }}
                >
                  📋 {t("bench.panorama")}
                </h4>
                <p
                  className="text-[13px] leading-relaxed"
                  style={{ color: "var(--text-2)" }}
                >
                  {country.summary}
                </p>
              </div>
            )}

            {show("live") && <CountryLiveActivity countryCode={country.code} />}
          </div>
        </div>

        {/* ZONA INFERIOR (largura inteira): dicas, editorial e marcos preenchem
            toda a extensão da caixa, abaixo da imagem — sem faixa vazia na esquerda. */}
        <div className="flex flex-col gap-4">
          {/* Editorial curado + dicas + fontes (tudo do local, aqui no benchmark) */}
          <CountryDetailSections country={country} section={section} />

          {show("milestones") && country.events.length > 0 && (
          <div>
            <h4
              className="text-[10.5px] tracking-[2px] uppercase font-bold mb-1 flex items-center gap-2"
                style={{ color: "var(--color-wh-blue-light)" }}
              >
                📜 {t("bench.milestones", { n: country.events.length })}
                <span
                  className="text-[8.5px] tracking-wider font-bold px-1.5 py-0.5 rounded normal-case"
                  style={{ color: "var(--text-3)", background: "rgba(255,255,255,.04)", letterSpacing: "1.5px" }}
                >
                  {t("bench.curated")}
                </span>
              </h4>
              <p className="text-[10.5px] mb-2.5" style={{ color: "var(--text-3)" }}>
                {t("bench.milestones.caption")}
              </p>
              <ul className="flex flex-col gap-2.5">
                {country.events.map((ev, i) => (
                  <li
                    key={`${ev.title}-${i}`}
                    className="rounded-lg p-3"
                    style={{
                      background: "var(--bg2)",
                      borderLeft: `3px solid ${accent}`,
                    }}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h5
                        className="text-[13px] font-bold leading-tight"
                        style={{
                          color: "var(--text)",
                          overflowWrap: "anywhere",
                          wordBreak: "break-word",
                        }}
                      >
                        {ev.title}
                      </h5>
                    </div>
                    <p
                      className="text-[11.5px] leading-relaxed mb-1.5"
                      style={{
                        color: "var(--text-2)",
                        overflowWrap: "anywhere",
                        wordBreak: "break-word",
                      }}
                    >
                      {ev.desc}
                    </p>
                    <div
                      className="text-[9.5px] tracking-wider uppercase font-bold"
                      style={{ color: "var(--color-wh-blue-light)" }}
                    >
                      ↗ {ev.src}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          </div>
        </div>
    </section>
  );
}

function flagEmoji(code: string): string {
  const map: Record<string, string> = {
    us: "🇺🇸", ca: "🇨🇦", uk: "🇬🇧", pt: "🇵🇹", es: "🇪🇸", it: "🇮🇹",
    fr: "🇫🇷", de: "🇩🇪", au: "🇦🇺", ae: "🇦🇪", br: "🇧🇷", sg: "🇸🇬", jp: "🇯🇵",
    cn: "🇨🇳", dk: "🇩🇰", pl: "🇵🇱", ie: "🇮🇪", ch: "🇨🇭", nz: "🇳🇿",
    at: "🇦🇹", be: "🇧🇪", bg: "🇧🇬", cy: "🇨🇾", hr: "🇭🇷", sk: "🇸🇰",
    si: "🇸🇮", ee: "🇪🇪", fi: "🇫🇮", gr: "🇬🇷", nl: "🇳🇱", hu: "🇭🇺",
    lv: "🇱🇻", lt: "🇱🇹", lu: "🇱🇺", mt: "🇲🇹", ro: "🇷🇴", se: "🇸🇪", cz: "🇨🇿",
  };
  return map[code] ?? "🏳";
}
