"use client";
import { useEffect, useState } from "react";

import { BULLETINS } from "@/lib/bulletins";
import type { FreqColor, Bulletin, BulletinStatus, StatusFile } from "@/lib/bulletins";
import { useLocale } from "./LocaleProvider";

// Re-export pra manter compat com importadores client já existentes.
export { BULLETINS };
export type { FreqColor, Bulletin, BulletinStatus, StatusFile };

type TFn = (key: string, params?: Record<string, string | number>) => string;


const FREQ_STYLES: Record<FreqColor, { color: string; icon: string }> = {
  live:      { color: "#5DD580", icon: "●" },
  monthly:   { color: "#7BA0FF", icon: "◐" },
  quarterly: { color: "#E5C156", icon: "◇" },
  ondemand:  { color: "#A8A8B8", icon: "→" },
};

const CHANGED_WINDOW_DAYS = 7;

function fmtRelative(iso: string | null, t: TFn): string {
  if (!iso) return t("bulletins.rel.dash");
  const then = new Date(iso).getTime();
  const now = Date.now();
  const diff = Math.max(0, now - then);
  const hours = Math.floor(diff / 3_600_000);
  if (hours < 1) return t("bulletins.rel.justNow");
  if (hours < 24) return t("bulletins.rel.hours", { n: hours });
  const days = Math.floor(hours / 24);
  if (days === 1) return t("bulletins.rel.yesterday");
  if (days < 7) return t("bulletins.rel.days", { n: days });
  const weeks = Math.floor(days / 7);
  if (weeks < 5) return t("bulletins.rel.weeks", { n: weeks });
  const months = Math.floor(days / 30);
  return t("bulletins.rel.months", { n: months });
}

function fmtCheckedAt(iso: string | null, t: TFn): string {
  if (!iso) return t("bulletins.card.notChecked");
  return t("bulletins.card.checkedAt", { value: fmtRelative(iso, t) });
}

function isRecentlyChanged(b: BulletinStatus | undefined): boolean {
  if (!b?.lastChangedAt || b.lastStatus !== "changed") return false;
  const diff = Date.now() - new Date(b.lastChangedAt).getTime();
  return diff < CHANGED_WINDOW_DAYS * 24 * 3_600_000;
}

export function OfficialBulletins() {
  const { t } = useLocale();
  const [statusByKey, setStatusByKey] = useState<Record<string, BulletinStatus>>({});
  const [lastRun, setLastRun] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/bulletins-status.json", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((data: StatusFile | null) => {
        if (!data) return;
        const map: Record<string, BulletinStatus> = {};
        for (const b of data.bulletins) map[b.key] = b;
        setStatusByKey(map);
        setLastRun(data.lastRun);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const recentChanges = BULLETINS.filter((b) => isRecentlyChanged(statusByKey[b.key])).length;

  return (
    <section className="wt-card flex flex-col h-full">
      <div
        className="flex items-center justify-between gap-x-3 gap-y-0.5 pl-7 pr-[64px] py-5 flex-wrap"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <h2
          className="text-[12px] tracking-[2.5px] uppercase font-bold flex items-center gap-2"
          style={{ color: "var(--color-wh-blue-light)" }}
        >
          {t("bulletins.title")}
          {recentChanges > 0 && (
            <span
              className="px-2 py-0.5 rounded-full text-[10px] tracking-wider"
              style={{
                background: "rgba(45,142,74,.18)",
                border: "1px solid rgba(45,142,74,.4)",
                color: "#5DD580",
              }}
            >
              {recentChanges > 1
                ? t("bulletins.badge.changed.many", { n: recentChanges })
                : t("bulletins.badge.changed.one", { n: recentChanges })}
            </span>
          )}
        </h2>
        <span
          className="text-[10.5px] font-semibold tracking-wider uppercase text-right"
          style={{ color: "var(--text-3)" }}
        >
          {t("bulletins.meta.jurisdictions", { n: BULLETINS.length })}
          <br />
          <span style={{ color: "var(--text-2)" }}>
            {t("bulletins.meta.lastScan", {
              value: loading ? t("bulletins.meta.loading") : fmtRelative(lastRun, t),
            })}
          </span>
        </span>
      </div>

      <div className="px-7 py-4" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="flex flex-wrap items-center gap-3 text-[10.5px]" style={{ color: "var(--text-3)" }}>
          <span className="flex items-center gap-1.5">
            <span style={{ color: FREQ_STYLES.live.color }}>●</span> {t("bulletins.legend.biweekly")}
          </span>
          <span className="flex items-center gap-1.5">
            <span style={{ color: FREQ_STYLES.monthly.color }}>◐</span> {t("bulletins.legend.monthly")}
          </span>
          <span className="flex items-center gap-1.5">
            <span style={{ color: FREQ_STYLES.quarterly.color }}>◇</span> {t("bulletins.legend.quarterly")}
          </span>
          <span className="flex items-center gap-1.5">
            <span style={{ color: FREQ_STYLES.ondemand.color }}>→</span> {t("bulletins.legend.ondemand")}
          </span>
          <span className="flex items-center gap-1.5 ml-auto">
            <span style={{ color: "#5DD580" }}>✦</span> {t("bulletins.legend.changed", { n: CHANGED_WINDOW_DAYS })}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 @sm:grid-cols-2 @lg:grid-cols-3 @2xl:grid-cols-4 gap-4 p-6">
        {BULLETINS.map((b) => {
          const fs = FREQ_STYLES[b.freqColor];
          const status = statusByKey[b.key];
          const changed = isRecentlyChanged(status);
          return (
            <a
              key={b.country}
              href={b.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 rounded-lg transition-all hover:scale-[1.02] relative"
              style={{
                background: "var(--bg2)",
                border: changed ? "1px solid rgba(45,142,74,.5)" : "1px solid var(--border)",
                boxShadow: changed ? "0 0 0 2px rgba(45,142,74,.12)" : undefined,
                textDecoration: "none",
                paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 24,
                paddingRight: 24,
              }}
            >
              {changed && (
                <span
                  className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider"
                  style={{
                    background: "#2D8E4A",
                    color: "#fff",
                    boxShadow: "0 2px 6px rgba(0,0,0,.3)",
                  }}
                >
                  {t("bulletins.card.new")}
                </span>
              )}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="text-[26px] leading-none">{b.flag}</span>
                  <div className="flex flex-col">
                    <span
                      className="text-[13px] font-bold leading-tight"
                      style={{ color: "var(--text)" }}
                    >
                      {b.country}
                    </span>
                    <span
                      className="text-[9.5px] tracking-wider uppercase font-semibold mt-0.5"
                      style={{ color: fs.color }}
                    >
                      <span className="mr-1">{fs.icon}</span>
                      {b.frequency}
                    </span>
                  </div>
                </div>
                <span
                  className="text-[14px] opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: "var(--color-wh-blue-light)" }}
                >
                  ↗
                </span>
              </div>

              <p
                className="text-[11px] leading-snug mt-1 flex-1"
                style={{ color: "var(--text-2)" }}
              >
                {b.source}
              </p>

              <div
                className="flex items-center justify-between mt-1 pt-2"
                style={{ borderTop: "1px dashed var(--border)" }}
              >
                <span
                  className="text-[9.5px] tracking-wider uppercase"
                  style={{ color: changed ? "#5DD580" : "var(--text-3)" }}
                >
                  {changed
                    ? t("bulletins.card.changedAt", {
                        value: fmtRelative(status?.lastChangedAt ?? null, t),
                      })
                    : fmtCheckedAt(status?.lastCheckedAt ?? null, t)}
                </span>
                <span
                  className="text-[10.5px] font-bold transition-colors"
                  style={{ color: "var(--color-wh-blue-light)" }}
                >
                  →
                </span>
              </div>
            </a>
          );
        })}
      </div>

      <div className="px-7 py-4" style={{ borderTop: "1px solid var(--border)" }}>
        <p className="text-[10.5px]" style={{ color: "var(--text-3)" }}>
          {(() => {
            const [before, after] = t("bulletins.footer", {
              n: BULLETINS.length,
              days: CHANGED_WINDOW_DAYS,
            }).split("{badge}");
            return (
              <>
                {before}
                <span style={{ color: "#5DD580" }}>{t("bulletins.card.new")}</span>
                {after}
              </>
            );
          })()}
        </p>
      </div>
    </section>
  );
}
