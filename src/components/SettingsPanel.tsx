"use client";
import { useEffect } from "react";
import { ACCENT_PRESETS, FONT_PRESETS, useSettings } from "./SettingsProvider";
import { useLocale } from "./LocaleProvider";

/**
 * SettingsPanel — overlay modal de configurações.
 * Abre via useSettings().openPanel(), fecha via closePanel(), ESC, ou click no backdrop.
 *
 * Permite ajustar:
 *  - Cor accent (8 presets ou cor custom — sobrescreve --color-wh-blue)
 *  - Família de fonte (7 presets — sobrescreve --font-sans)
 */
export function SettingsPanel() {
  const { panelOpen, closePanel, accent, setAccentByKey, font, setFontByKey, resetAll } = useSettings();
  const { t } = useLocale();

  useEffect(() => {
    if (!panelOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePanel();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [panelOpen, closePanel]);

  if (!panelOpen) return null;

  return (
    <div
      onClick={closePanel}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{
        background: "rgba(15,12,30,.72)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        animation: "wt-fade .15s ease-out",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[540px] rounded-2xl flex flex-col"
        style={{
          background: "var(--surface-hi)",
          border: "1px solid var(--border-hi)",
          boxShadow: "0 24px 80px rgba(0,0,0,.6), 0 0 32px rgba(31,85,255,.22)",
          maxHeight: "90vh",
          overflow: "hidden",
          animation: "wt-slide .2s ease-out",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: "var(--color-wh-blue)", color: "#fff" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </div>
            <div>
              <h2 className="text-[15px] font-extrabold tracking-[2px] uppercase" style={{ color: "var(--text)" }}>
                {t("settings.title")}
              </h2>
              <p className="text-[10.5px] tracking-wider uppercase font-semibold" style={{ color: "var(--text-3)" }}>
                {t("settings.subtitle")}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={closePanel}
            aria-label={t("settings.close")}
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
            style={{
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              color: "var(--text-2)",
              cursor: "pointer",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="overflow-auto px-6 py-5 flex flex-col gap-6">
          {/* ===== COR ACCENT ===== */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[11.5px] tracking-[2px] uppercase font-bold" style={{ color: "var(--color-wh-blue-light)" }}>
                🎨 {t("settings.accent.heading")}
              </h3>
              <span className="text-[10px] tracking-wider uppercase" style={{ color: "var(--text-3)" }}>
                {t("settings.current", { value: accent.label })}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2.5">
              {ACCENT_PRESETS.map((preset) => {
                const isActive = preset.key === accent.key;
                return (
                  <button
                    key={preset.key}
                    type="button"
                    onClick={() => setAccentByKey(preset.key)}
                    className="rounded-lg p-2.5 flex flex-col items-center gap-1.5 transition-all hover:-translate-y-0.5"
                    style={{
                      background: "var(--bg2)",
                      border: isActive ? `2px solid ${preset.value}` : "1px solid var(--border)",
                      cursor: "pointer",
                      boxShadow: isActive ? `0 0 0 3px ${preset.value}33, 0 4px 12px ${preset.value}40` : undefined,
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-md"
                      style={{
                        background: `linear-gradient(135deg, ${preset.lightValue}, ${preset.value} 50%, ${preset.deepValue})`,
                        boxShadow: `0 2px 8px ${preset.value}50`,
                      }}
                    />
                    <span
                      className="text-[9.5px] font-bold tracking-wider uppercase truncate w-full text-center"
                      style={{ color: isActive ? preset.value : "var(--text-2)" }}
                    >
                      {preset.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* ===== FONTE ===== */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[11.5px] tracking-[2px] uppercase font-bold" style={{ color: "var(--color-wh-blue-light)" }}>
                🔤 {t("settings.font.heading")}
              </h3>
              <span className="text-[10px] tracking-wider uppercase" style={{ color: "var(--text-3)" }}>
                {t("settings.current", { value: font.label })}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              {FONT_PRESETS.map((preset) => {
                const isActive = preset.key === font.key;
                return (
                  <button
                    key={preset.key}
                    type="button"
                    onClick={() => setFontByKey(preset.key)}
                    className="flex items-center justify-between rounded-lg px-3.5 py-2.5 transition-all hover:translate-x-0.5"
                    style={{
                      background: isActive ? "rgba(31,85,255,.10)" : "var(--bg2)",
                      border: isActive ? "1px solid var(--color-wh-blue-light)" : "1px solid var(--border)",
                      cursor: "pointer",
                      fontFamily: preset.stack,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="text-[11px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded"
                        style={{
                          background: isActive ? "var(--color-wh-blue)" : "var(--surface)",
                          color: isActive ? "#fff" : "var(--text-3)",
                          fontFamily: "var(--font-sans)",
                        }}
                      >
                        {preset.category}
                      </span>
                      <span className="text-[14px] font-semibold" style={{ color: "var(--text)" }}>
                        {preset.label}
                      </span>
                    </div>
                    <span className="text-[18px] font-bold" style={{ color: isActive ? "var(--color-wh-blue-light)" : "var(--text-3)" }}>
                      Aa
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-between gap-3 px-6 py-4"
          style={{ borderTop: "1px solid var(--border)", background: "var(--surface)" }}
        >
          <button
            type="button"
            onClick={resetAll}
            className="px-3.5 py-2 rounded-lg text-[11px] font-bold tracking-wider uppercase transition-colors"
            style={{
              background: "transparent",
              border: "1px solid var(--border)",
              color: "var(--text-2)",
              cursor: "pointer",
            }}
          >
            ↻ {t("settings.reset")}
          </button>
          <button
            type="button"
            onClick={closePanel}
            className="px-5 py-2 rounded-lg text-[11px] font-bold tracking-wider uppercase transition-all"
            style={{
              background: "var(--color-wh-blue)",
              border: "1px solid var(--color-wh-blue-light)",
              color: "#fff",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(31,85,255,.3)",
            }}
          >
            ✓ {t("settings.apply")}
          </button>
        </div>
      </div>
    </div>
  );
}
