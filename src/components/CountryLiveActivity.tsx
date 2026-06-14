"use client";
import { useEffect, useState } from "react";
import { INFO_CENTERS } from "@/lib/infoCenters";
import { useLocale } from "./LocaleProvider";

type TFn = (key: string, params?: Record<string, string | number>) => string;

type Headline = {
  title: string;
  link: string;
  pubDate?: string;
  source: string;
};

type BulletinEntry = {
  key: string;
  url: string;
  lastChangedAt: string | null;
  lastCheckedAt: string;
  lastStatus: string;
};

type BulletinStatus = {
  lastRun: string;
  bulletins: BulletinEntry[];
};

type ActivityState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "ok"; headlines: Headline[] }
  | { status: "empty" }
  | { status: "error" };

const REFRESH_MS = 10 * 60 * 1000;
const BULLETIN_FRESH_DAYS = 7;

function formatRelative(iso: string | undefined, t: TFn, intl: string): string {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  const delta = Date.now() - date.getTime();
  const h = Math.floor(delta / 3_600_000);
  if (h < 1) return t("live.rel.now");
  if (h < 24) return t("live.rel.hour", { n: h });
  const d = Math.floor(h / 24);
  if (d < 7) return t("live.rel.day", { n: d });
  const w = Math.floor(d / 7);
  if (w < 5) return t("live.rel.week", { n: w });
  return date.toLocaleDateString(intl, { day: "2-digit", month: "2-digit" });
}

async function fetchFeed(rssUrl: string, sourceName: string): Promise<Headline[]> {
  try {
    const res = await fetch(`/api/rss?url=${encodeURIComponent(rssUrl)}`);
    if (!res.ok) return [];
    const data = await res.json();
    if (!Array.isArray(data.items)) return [];
    return data.items.slice(0, 3).map((it: { title: string; link: string; pubDate?: string }) => ({
      title: it.title,
      link: it.link,
      pubDate: it.pubDate,
      source: sourceName,
    }));
  } catch {
    return [];
  }
}

/**
 * Sinaliza atividade ao vivo no card do país:
 *  - Top 3 manchetes RSS dos feeds curados em infoCenters (refresh 10min)
 *  - Selo "Bulletin oficial atualizado" quando bulletins-status.json mostra
 *    lastStatus="changed" nos últimos 7 dias pra aquela jurisdição
 *
 * Custo: $0 (reaproveita /api/rss + cron de bulletins existentes).
 */
export function CountryLiveActivity({ countryCode }: { countryCode: string }) {
  const { t, intl } = useLocale();
  const [state, setState] = useState<ActivityState>({ status: "idle" });
  const [bulletinFresh, setBulletinFresh] = useState<{ at: string; url: string } | null>(null);

  useEffect(() => {
    let cancelled = false;
    setBulletinFresh(null);

    fetch("/bulletins-status.json", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((data: BulletinStatus | null) => {
        if (cancelled || !data) return;
        const entry = data.bulletins.find((b) => b.key === countryCode);
        if (!entry?.lastChangedAt) return;
        const ageDays = (Date.now() - new Date(entry.lastChangedAt).getTime()) / 86_400_000;
        if (ageDays <= BULLETIN_FRESH_DAYS && entry.lastStatus === "changed") {
          setBulletinFresh({ at: entry.lastChangedAt, url: entry.url });
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [countryCode]);

  useEffect(() => {
    const center = INFO_CENTERS.find((ic) => ic.countryCode === countryCode);
    const feeds = (center?.sources ?? [])
      .filter((s) => s.rss && (s.category === "news" || s.category === "legal"))
      .slice(0, 3);

    if (feeds.length === 0) {
      setState({ status: "empty" });
      return;
    }

    let cancelled = false;

    const load = async () => {
      setState((prev) => (prev.status === "ok" ? prev : { status: "loading" }));
      const results = await Promise.all(
        feeds.map((f) => fetchFeed(f.rss!, f.name)),
      );
      if (cancelled) return;
      const merged = results
        .flat()
        .sort((a, b) => {
          const ta = a.pubDate ? new Date(a.pubDate).getTime() : 0;
          const tb = b.pubDate ? new Date(b.pubDate).getTime() : 0;
          return tb - ta;
        })
        .slice(0, 3);
      if (merged.length === 0) {
        setState({ status: "error" });
      } else {
        setState({ status: "ok", headlines: merged });
      }
    };

    load();
    const interval = setInterval(load, REFRESH_MS);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [countryCode]);

  const hasContent =
    bulletinFresh !== null || (state.status === "ok" && state.headlines.length > 0);

  if (!hasContent && state.status !== "loading") return null;

  return (
    <div>
      <h4
        className="text-[10.5px] tracking-[2px] uppercase font-bold mb-2 flex items-center gap-2"
        style={{ color: "#10A570" }}
      >
        📡 {t("live.title")}
        <span
          className="text-[8.5px] tracking-wider font-bold px-1.5 py-0.5 rounded"
          style={{ color: "#10A570", background: "rgba(16,165,112,.12)" }}
        >
          {t("live.badge.auto")}
        </span>
      </h4>

      {bulletinFresh && (
        <a
          href={bulletinFresh.url}
          target="_blank"
          rel="noreferrer"
          className="block mb-2.5 rounded-lg p-2.5 transition-all hover:brightness-110"
          style={{
            background: "rgba(16,165,112,.08)",
            border: "1px solid rgba(16,165,112,.35)",
            borderLeft: "3px solid #10A570",
          }}
        >
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-bold" style={{ color: "#10A570" }}>
              ✦ {t("live.bulletin.fresh")}
            </span>
            <span className="text-[9.5px] uppercase tracking-wider font-bold" style={{ color: "var(--text-3)" }}>
              {formatRelative(bulletinFresh.at, t, intl)}
            </span>
          </div>
          <div className="text-[10.5px] mt-0.5" style={{ color: "var(--text-2)" }}>
            {t("live.bulletin.hint")}
          </div>
        </a>
      )}

      {state.status === "loading" && (
        <div className="text-[11px] py-2" style={{ color: "var(--text-3)" }}>
          {t("live.loading")}
        </div>
      )}

      {state.status === "ok" && (
        <ul className="flex flex-col gap-1.5">
          {state.headlines.map((h, i) => (
            <li key={`${h.link}-${i}`}>
              <a
                href={h.link}
                target="_blank"
                rel="noreferrer"
                className="block rounded-lg p-2.5 transition-all hover:brightness-110"
                style={{
                  background: "var(--bg2)",
                  borderLeft: "3px solid rgba(123,160,255,.5)",
                }}
              >
                <div className="flex items-start justify-between gap-2 mb-0.5">
                  <h5
                    className="text-[12px] font-semibold leading-tight"
                    style={{
                      color: "var(--text)",
                      overflowWrap: "anywhere",
                      wordBreak: "break-word",
                    }}
                  >
                    {h.title}
                  </h5>
                  {h.pubDate && (
                    <span
                      className="text-[9.5px] uppercase tracking-wider font-bold flex-shrink-0 px-1.5 py-0.5 rounded"
                      style={{ color: "var(--text-3)", background: "rgba(255,255,255,.04)" }}
                    >
                      {formatRelative(h.pubDate, t, intl)}
                    </span>
                  )}
                </div>
                <div
                  className="text-[9.5px] tracking-wider uppercase font-bold"
                  style={{ color: "var(--color-wh-blue-light)" }}
                >
                  ↗ {h.source}
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
