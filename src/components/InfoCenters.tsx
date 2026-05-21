"use client";
import { INFO_CENTERS, GLOBAL_CRYPTO_SOURCES, categoryMeta, type InfoSourceCategory } from "@/lib/infoCenters";

const CAT_ORDER: InfoSourceCategory[] = ["news", "finance", "crypto", "legal"];

/**
 * InfoCenters — diretório curado de fontes oficiais de notícias, finanças e
 * cripto por país. Cada card é um país com 3 links principais clicáveis
 * (abrem em nova aba). Inclui seção global de cripto/derivativos.
 *
 * Container query: grid de países se reorganiza conforme o tamanho da caixa.
 */
export function InfoCenters() {
  // Conta por categoria (pra header)
  const countByCat: Record<InfoSourceCategory, number> = { news: 0, finance: 0, crypto: 0, legal: 0 };
  INFO_CENTERS.forEach((c) => c.sources.forEach((s) => (countByCat[s.category] += 1)));
  GLOBAL_CRYPTO_SOURCES.forEach((s) => (countByCat[s.category] += 1));
  const totalSources =
    INFO_CENTERS.reduce((sum, c) => sum + c.sources.length, 0) + GLOBAL_CRYPTO_SOURCES.length;

  return (
    <section className="wt-card h-full flex flex-col @container">
      {/* Header */}
      <header
        className="flex items-center justify-between gap-3 px-5 py-3.5 flex-shrink-0"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <h2
          className="text-[12px] tracking-[2.5px] uppercase font-bold flex items-center gap-2"
          style={{ color: "var(--color-wh-blue-light)" }}
        >
          🌐 Centros de Informação
        </h2>
        <span
          className="text-[10px] tracking-wider uppercase font-semibold text-right"
          style={{ color: "var(--text-3)" }}
        >
          {INFO_CENTERS.length} países · {totalSources} fontes curadas
        </span>
      </header>

      {/* Legenda de categorias */}
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
      </div>

      {/* Grid de países */}
      <div className="flex-1 overflow-auto p-5">
        <div className="grid grid-cols-1 @md:grid-cols-2 @2xl:grid-cols-3 @4xl:grid-cols-4 gap-4">
          {INFO_CENTERS.map((center) => (
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

              {/* Lista de fontes */}
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
                            className="text-[11.5px] font-bold leading-tight"
                            style={{
                              color: "var(--text)",
                              overflowWrap: "anywhere",
                              wordBreak: "break-word",
                            }}
                          >
                            {src.name}
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
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}

          {/* Card especial: cripto global */}
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
                <li key={src.url}>
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
                      className="text-[11.5px] font-bold leading-tight flex-1 min-w-0 truncate"
                      style={{ color: "var(--text)" }}
                    >
                      {src.name}
                    </span>
                    <span className="text-[11px] flex-shrink-0 opacity-60" style={{ color: "#E5C156" }}>↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 flex-shrink-0" style={{ borderTop: "1px solid var(--border)" }}>
        <p className="text-[10.5px]" style={{ color: "var(--text-3)" }}>
          Diretório curado · começamos com Reuters · WSJ · Coinglass como sementes,
          ampliando pra cobrir mercado tradicional (Bloomberg/FT/Nikkei/SCMP/AFR) + cripto
          (CoinDesk/The Block/Cointelegraph/Decrypt). Próxima fase: integração de RSS pra
          headlines em tempo real dentro de cada card.
        </p>
      </div>
    </section>
  );
}
