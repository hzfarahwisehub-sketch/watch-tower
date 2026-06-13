"use client";
import { useEffect, useState } from "react";
import { INFO_CENTERS, GLOBAL_CRYPTO_SOURCES, categoryMeta, type InfoSource, type InfoSourceCategory } from "@/lib/infoCenters";

const CAT_ORDER: InfoSourceCategory[] = ["news", "finance", "crypto", "legal"];

/** Variants do componente — cada um filtra categorias diferentes */
type Variant = "news" | "finance" | "crypto";

const VARIANT_CONFIG: Record<Variant, {
  title: string;
  emoji: string;
  categories: InfoSourceCategory[];
  showGlobalCrypto: boolean;
  accentColor: string;
}> = {
  news: {
    title: "Centros de Informação",
    emoji: "🌐",
    categories: ["news", "legal"],
    showGlobalCrypto: false,
    accentColor: "var(--color-wh-blue-light)",
  },
  finance: {
    title: "Finanças & Mercados",
    emoji: "💰",
    categories: ["finance"],
    showGlobalCrypto: false,
    accentColor: "#10A570",
  },
  crypto: {
    title: "Cripto & Derivativos",
    emoji: "🪙",
    categories: ["crypto"],
    showGlobalCrypto: true,
    accentColor: "#E5C156",
  },
};

type Headline = { title: string; link: string; pubDate?: string };
type FeedState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "ok"; items: Headline[]; cached: boolean }
  | { status: "error"; error: string };

/**
 * Hook: busca headlines de um feed RSS via /api/rss (server-side cache 15min).
 * Faz 1 fetch on-mount + refresh a cada 10min.
 */
function useFeed(rssUrl: string | undefined): FeedState {
  const [state, setState] = useState<FeedState>({ status: "idle" });

  useEffect(() => {
    if (!rssUrl) return;
    let cancelled = false;
    const load = async () => {
      setState({ status: "loading" });
      try {
        const res = await fetch(`/api/rss?url=${encodeURIComponent(rssUrl)}`);
        const data = await res.json();
        if (cancelled) return;
        if (!res.ok || data.error) {
          setState({ status: "error", error: data.error ?? `HTTP ${res.status}` });
          return;
        }
        setState({ status: "ok", items: data.items ?? [], cached: !!data.cached });
      } catch (err) {
        if (cancelled) return;
        setState({ status: "error", error: String(err) });
      }
    };
    load();
    const interval = setInterval(load, 10 * 60 * 1000); // 10min
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [rssUrl]);

  return state;
}

function fmtTimeAgo(iso?: string): string {
  if (!iso) return "";
  const date = new Date(iso);
  if (isNaN(date.getTime())) return "";
  const diff = Date.now() - date.getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return "agora";
  if (m < 60) return `${m}min`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h`;
  const d = Math.floor(h / 24);
  if (d < 30) return `${d}d`;
  const mo = Math.floor(d / 30);
  return `${mo}mês`;
}

/** Bloco de headlines RSS pra um InfoSource (renderiza nada se sem rss) */
function SourceHeadlines({ source }: { source: InfoSource }) {
  const feed = useFeed(source.rss);
  if (!source.rss) return null;

  if (feed.status === "loading" || feed.status === "idle") {
    return (
      <div className="pl-7 pr-2 pb-1.5 text-[9.5px]" style={{ color: "var(--text-3)" }}>
        <span className="opacity-60">carregando manchetes…</span>
      </div>
    );
  }
  if (feed.status === "error") {
    return (
      <div className="pl-7 pr-2 pb-1.5 text-[9.5px]" style={{ color: "var(--color-status-warning)" }}>
        <span className="opacity-70">⚠ feed indisponível ({feed.error.slice(0, 40)})</span>
      </div>
    );
  }
  const items = feed.items.slice(0, 3);
  if (items.length === 0) return null;

  return (
    <ul className="pl-7 pr-2 pb-2 flex flex-col gap-1">
      {items.map((h, i) => (
        <li key={`${h.link}-${i}`}>
          <a
            href={h.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-[10.5px] leading-snug hover:underline"
            style={{ color: "var(--text-2)" }}
            title={h.title}
          >
            <span className="opacity-80">›</span>{" "}
            <span style={{ overflowWrap: "anywhere" }}>{h.title}</span>
            {h.pubDate && (
              <span className="ml-1.5 text-[9px] uppercase tracking-wider font-semibold" style={{ color: "var(--text-3)" }}>
                {fmtTimeAgo(h.pubDate)}
              </span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function InfoCenters({ variant = "news" }: { variant?: Variant } = {}) {
  const cfg = VARIANT_CONFIG[variant];

  // Filtra países que têm pelo menos 1 fonte da categoria do variant
  const filteredCenters = INFO_CENTERS
    .map((c) => ({
      ...c,
      sources: c.sources.filter((s) => cfg.categories.includes(s.category)),
    }))
    .filter((c) => c.sources.length > 0);

  // Conta por categoria filtrada (pra header)
  const countByCat: Record<InfoSourceCategory, number> = { news: 0, finance: 0, crypto: 0, legal: 0 };
  filteredCenters.forEach((c) => c.sources.forEach((s) => (countByCat[s.category] += 1)));
  if (cfg.showGlobalCrypto) {
    GLOBAL_CRYPTO_SOURCES.forEach((s) => (countByCat[s.category] += 1));
  }

  const totalSources =
    filteredCenters.reduce((sum, c) => sum + c.sources.length, 0) +
    (cfg.showGlobalCrypto ? GLOBAL_CRYPTO_SOURCES.length : 0);
  const totalWithRss =
    filteredCenters.reduce((sum, c) => sum + c.sources.filter((s) => s.rss).length, 0) +
    (cfg.showGlobalCrypto ? GLOBAL_CRYPTO_SOURCES.filter((s) => s.rss).length : 0);

  return (
    <section className="wt-card h-full flex flex-col @container">
      {/* Header */}
      <header
        className="flex items-center justify-between gap-x-3 gap-y-0.5 pl-5 pr-[64px] py-3.5 flex-shrink-0 flex-wrap"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <h2
          className="text-[12px] tracking-[2.5px] uppercase font-bold flex items-center gap-2"
          style={{ color: cfg.accentColor }}
        >
          {cfg.emoji} {cfg.title}
        </h2>
        <span
          className="text-[10px] tracking-wider uppercase font-semibold text-right"
          style={{ color: "var(--text-3)" }}
        >
          {filteredCenters.length} países · {totalSources} fontes · {totalWithRss} com headlines ao vivo
        </span>
      </header>

      {/* Legenda */}
      <div className="px-5 py-3 flex flex-wrap items-center gap-3 text-[10.5px]" style={{ borderBottom: "1px solid var(--border)", color: "var(--text-3)" }}>
        {CAT_ORDER.filter((c) => countByCat[c] > 0).map((c) => {
          const m = categoryMeta(c);
          return (
            <span key={c} className="flex items-center gap-1.5">
              <span style={{ color: m.color }}>{m.icon}</span>
              <span className="uppercase tracking-wider font-semibold">{m.label}</span>
              <span className="opacity-60">({countByCat[c]})</span>
            </span>
          );
        })}
        <span className="ml-auto flex items-center gap-1.5">
          <span style={{ color: "var(--color-status-stable)" }}>●</span>
          <span className="uppercase tracking-wider font-semibold">RSS ao vivo · refresh 10min</span>
        </span>
      </div>

      {/* Grid de países */}
      <div className="flex-1 overflow-auto p-5">
        <div className="grid grid-cols-1 @md:grid-cols-2 @2xl:grid-cols-3 @4xl:grid-cols-4 gap-4">
          {filteredCenters.map((center) => (
            <article
              key={center.countryCode}
              className="rounded-xl flex flex-col"
              style={{
                background: "var(--bg2)",
                border: "1px solid var(--border)",
                padding: 14,
              }}
            >
              {/* Header do card */}
              <div className="flex items-center gap-2.5 pb-2.5 mb-2.5" style={{ borderBottom: "1px dashed var(--border)" }}>
                <span className="text-[24px] leading-none flex-shrink-0">{center.flag}</span>
                <h3
                  className="text-[12px] font-extrabold uppercase tracking-wider min-w-0 truncate"
                  style={{ color: "var(--text)" }}
                >
                  {center.countryName}
                </h3>
                <span
                  className="ml-auto text-[9.5px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded flex-shrink-0"
                  style={{ background: "rgba(31,85,255,.10)", color: "var(--color-wh-blue-light)" }}
                >
                  {center.sources.length} fontes
                </span>
              </div>

              {/* Lista de fontes + headlines */}
              <ul className="flex flex-col gap-1.5">
                {center.sources.map((src) => {
                  const m = categoryMeta(src.category);
                  return (
                    <li key={src.url}>
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={src.note ? `${src.name} · ${src.note}` : src.name}
                        className="flex items-start gap-2 rounded-lg px-2.5 py-2 transition-all hover:translate-x-0.5"
                        style={{
                          background: "rgba(255,255,255,.02)",
                          border: `1px solid transparent`,
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.background = `${m.color}15`;
                          (e.currentTarget as HTMLAnchorElement).style.borderColor = `${m.color}50`;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,.02)";
                          (e.currentTarget as HTMLAnchorElement).style.borderColor = "transparent";
                        }}
                      >
                        <span
                          className="text-[14px] flex-shrink-0 mt-px"
                          style={{ color: m.color }}
                          aria-hidden
                        >
                          {m.icon}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div
                            className="text-[11.5px] font-bold leading-tight flex items-center gap-1.5"
                            style={{
                              color: "var(--text)",
                              overflowWrap: "anywhere",
                              wordBreak: "break-word",
                            }}
                          >
                            {src.name}
                            {src.rss && (
                              <span
                                className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ background: "var(--color-status-stable)", boxShadow: "0 0 4px var(--color-status-stable)" }}
                                title="RSS ao vivo · headlines abaixo"
                              />
                            )}
                          </div>
                          <div
                            className="text-[9px] mt-0.5 uppercase tracking-wider font-semibold flex items-center gap-1.5"
                            style={{ color: m.color }}
                          >
                            {m.label} · <span style={{ opacity: 0.7 }}>{src.language.toUpperCase()}</span>
                          </div>
                        </div>
                        <span
                          className="text-[11px] flex-shrink-0 mt-px opacity-50"
                          style={{ color: "var(--color-wh-blue-light)" }}
                        >
                          ↗
                        </span>
                      </a>
                      <SourceHeadlines source={src} />
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}

          {/* Card especial: cripto global (só no variant finance) */}
          {cfg.showGlobalCrypto && (
          <article
            className="rounded-xl flex flex-col @md:col-span-2 @2xl:col-span-3 @4xl:col-span-4"
            style={{
              background: "linear-gradient(135deg, rgba(229,193,86,.08), rgba(229,193,86,.02))",
              border: "1px solid rgba(229,193,86,.35)",
              padding: 14,
            }}
          >
            <div className="flex items-center gap-2.5 pb-2.5 mb-2.5" style={{ borderBottom: "1px dashed rgba(229,193,86,.35)" }}>
              <span className="text-[24px] leading-none flex-shrink-0">🪙</span>
              <h3
                className="text-[12px] font-extrabold uppercase tracking-wider"
                style={{ color: "#E5C156" }}
              >
                Cripto global · derivativos & on-chain
              </h3>
              <span
                className="ml-auto text-[9.5px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded flex-shrink-0"
                style={{ background: "rgba(229,193,86,.15)", color: "#E5C156" }}
              >
                {GLOBAL_CRYPTO_SOURCES.length} fontes
              </span>
            </div>
            <ul className="grid grid-cols-1 @md:grid-cols-2 @2xl:grid-cols-3 @4xl:grid-cols-5 gap-2">
              {GLOBAL_CRYPTO_SOURCES.map((src) => (
                <li key={src.url} className="flex flex-col">
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={src.note ? `${src.name} · ${src.note}` : src.name}
                    className="flex items-center gap-2 rounded-lg px-2.5 py-2 transition-all hover:translate-x-0.5"
                    style={{
                      background: "rgba(229,193,86,.05)",
                      border: "1px solid rgba(229,193,86,.2)",
                      textDecoration: "none",
                    }}
                  >
                    <span className="text-[16px] flex-shrink-0" style={{ color: "#E5C156" }} aria-hidden>🪙</span>
                    <span
                      className="text-[11.5px] font-bold leading-tight flex-1 min-w-0 truncate flex items-center gap-1.5"
                      style={{ color: "var(--text)" }}
                    >
                      {src.name}
                      {src.rss && (
                        <span
                          className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: "var(--color-status-stable)", boxShadow: "0 0 4px var(--color-status-stable)" }}
                          title="RSS ao vivo"
                        />
                      )}
                    </span>
                    <span className="text-[11px] flex-shrink-0 opacity-60" style={{ color: "#E5C156" }}>↗</span>
                  </a>
                  <SourceHeadlines source={src} />
                </li>
              ))}
            </ul>
          </article>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 flex-shrink-0" style={{ borderTop: "1px solid var(--border)" }}>
        <p className="text-[10.5px]" style={{ color: "var(--text-3)" }}>
          Fontes com bolinha verde ● têm <strong>RSS ao vivo</strong> (manchetes atualizadas a cada
          10min via /api/rss · cache 15min). Reuters/WSJ/Bloomberg/FT/Coinglass não publicam feed
          público estável — ficam apenas como link clicável. {totalWithRss} de {totalSources} fontes
          com RSS conectado.
        </p>
      </div>
    </section>
  );
}

/** Wrapper de conveniência pra variant "finance" */
export function FinanceCenters() {
  return <InfoCenters variant="finance" />;
}

/** Wrapper de conveniência pra variant "crypto" */
export function CryptoCenters() {
  return <InfoCenters variant="crypto" />;
}
