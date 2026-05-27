"use client";
import { useEffect, useState } from "react";
import { COUNTRIES } from "@/lib/data";
import type { Country, Status } from "@/lib/types";
import { CountryLiveActivity } from "./CountryLiveActivity";

const STATUS_COLOR: Record<Status, string> = {
  crit: "var(--color-status-critical)",
  warn: "var(--color-status-warning)",
  stable: "var(--color-status-stable)",
};

const STATUS_LABEL: Record<Status, string> = {
  crit: "Crítico",
  warn: "Atenção",
  stable: "Estável",
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
  // Default = primeiro país crítico, ou primeiro da lista
  const defaultCountry: Country =
    COUNTRIES.find((c) => c.status === "crit") ?? COUNTRIES[0]!;

  const country: Country =
    (selectedCode ? COUNTRIES.find((c) => c.code === selectedCode) : null) ?? defaultCountry;

  const [imgFailed, setImgFailed] = useState(false);
  useEffect(() => {
    setImgFailed(false);
  }, [country.code]);

  const accent = STATUS_COLOR[country.status];

  return (
    <section className="wt-card h-full flex flex-col @container">
      {/* Header */}
      <header
        className="flex items-center justify-between gap-3 px-5 py-3.5 flex-shrink-0"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <h2
            className="text-[12px] tracking-[2.5px] uppercase font-bold flex items-center gap-2"
            style={{ color: "var(--color-wh-blue-light)" }}
          >
            🎯 Benchmark do País
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
            {STATUS_LABEL[country.status]}
          </span>
        </div>
        <span className="text-[10px] tracking-wider uppercase font-semibold text-right" style={{ color: "var(--text-3)" }}>
          {country.changes} mudança{country.changes > 1 ? "s" : ""} · {country.authority}
        </span>
      </header>

      {/* Body: grid layout fluido (container query) */}
      <div className="flex-1 overflow-auto p-5 wt-benchmark-body">
        <div className="grid grid-cols-1 @2xl:grid-cols-[minmax(240px,1fr)_2fr] gap-5 h-full">
          {/* IMAGEM destacada (quadrada, com glow) */}
          <div className="flex flex-col gap-3">
            <div
              className="relative rounded-xl overflow-hidden flex-shrink-0"
              style={{
                aspectRatio: "1 / 1",
                background: `linear-gradient(135deg, ${accent}22, var(--bg2))`,
                border: `1px solid ${accent}66`,
                boxShadow: `0 8px 32px ${accent}33, inset 0 0 0 1px rgba(255,255,255,.05)`,
              }}
            >
              {!imgFailed && country.imageUrl ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={country.imageUrl}
                  alt={`${country.name} — imagem de destaque`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={() => setImgFailed(true)}
                />
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

            {/* Stats abaixo da imagem */}
            <div className="grid grid-cols-2 gap-2 text-[10.5px]">
              <div
                className="px-3 py-2 rounded-lg flex flex-col gap-0.5"
                style={{ background: "var(--bg2)", border: "1px solid var(--border)" }}
              >
                <span className="uppercase tracking-wider font-bold" style={{ color: "var(--text-3)" }}>
                  Status
                </span>
                <span className="font-extrabold text-[14px]" style={{ color: accent }}>
                  {STATUS_LABEL[country.status]}
                </span>
              </div>
              <div
                className="px-3 py-2 rounded-lg flex flex-col gap-0.5"
                style={{ background: "var(--bg2)", border: "1px solid var(--border)" }}
              >
                <span className="uppercase tracking-wider font-bold" style={{ color: "var(--text-3)" }}>
                  Mudanças
                </span>
                <span className="font-extrabold text-[14px]" style={{ color: "var(--text)" }}>
                  {country.changes} <span className="text-[10px] font-semibold" style={{ color: "var(--text-3)" }}>período</span>
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
                  📋 Panorama
                </h4>
                <p
                  className="text-[13px] leading-relaxed"
                  style={{ color: "var(--text-2)" }}
                >
                  {country.summary}
                </p>
              </div>
            )}

            <CountryLiveActivity countryCode={country.code} />

            <div>
              <h4
                className="text-[10.5px] tracking-[2px] uppercase font-bold mb-2 flex items-center gap-2"
                style={{ color: "var(--color-wh-blue-light)" }}
              >
                📰 Histórico curado ({country.events.length})
              </h4>
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
                      <span
                        className="text-[9.5px] uppercase tracking-wider font-bold flex-shrink-0 px-1.5 py-0.5 rounded"
                        style={{
                          color: "var(--text-3)",
                          background: "rgba(255,255,255,.04)",
                        }}
                      >
                        {ev.time}
                      </span>
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
          </div>
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
