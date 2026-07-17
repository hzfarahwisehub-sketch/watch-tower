"use client";
import { useEffect, useState } from "react";
import type { StatusFile } from "@/lib/bulletins";

/**
 * useCountryChanges — sumario do bulletin oficial do pais via /bulletins-status.json.
 * Retorna lastChangedAt + errored + daysSinceChange. Quando o pais nao tem
 * bulletin mapeado, retorna { changes: null }.
 *
 * Compartilha cache estatico do bulletins-status.json entre instancias
 * do hook (evita N fetches simultaneos quando varios cards leem o mesmo
 * arquivo).
 */

const CACHE_TTL_MS = 5 * 60 * 1000;
const DEFAULT_WINDOW_DAYS = 7;
let cache: { fetchedAt: number; data: StatusFile } | null = null;
let inflight: Promise<StatusFile | null> | null = null;

async function loadStatus(): Promise<StatusFile | null> {
  if (cache && Date.now() - cache.fetchedAt < CACHE_TTL_MS) {
    return cache.data;
  }
  if (inflight) return inflight;
  inflight = fetch("/bulletins-status.json", { cache: "no-store" })
    .then((r) => (r.ok ? r.json() : null))
    .then((data: StatusFile | null) => {
      if (data) cache = { fetchedAt: Date.now(), data };
      return data;
    })
    .catch(() => null)
    .finally(() => {
      inflight = null;
    });
  return inflight;
}

export type CountryChangesResult = {
  /** lastChangedAt do bulletin oficial. Null se o pais nao tem bulletin */
  lastChangedAt: string | null;
  /** dias inteiros desde lastChangedAt */
  daysSinceChange: number | null;
  /** se o bulletin desse pais esta em estado de erro */
  errored: boolean;
  /** mudou nos ultimos 7 dias */
  recentlyChanged: boolean;
};

const EMPTY: CountryChangesResult = {
  lastChangedAt: null,
  daysSinceChange: null,
  errored: false,
  recentlyChanged: false,
};

export function useCountryChanges(countryCode: string): CountryChangesResult {
  const [result, setResult] = useState<CountryChangesResult>(EMPTY);

  useEffect(() => {
    let cancelled = false;
    const tick = async () => {
      const data = await loadStatus();
      if (cancelled || !data) return;
      const entry = data.bulletins.find((b) => b.key === countryCode);
      if (!entry) {
        setResult(EMPTY);
        return;
      }
      const lastChangedAt = entry.lastChangedAt ?? null;
      const daysSinceChange = lastChangedAt
        ? Math.floor((Date.now() - new Date(lastChangedAt).getTime()) / 86_400_000)
        : null;
      const errored = !!(entry.lastStatus && entry.lastStatus.startsWith("error"));
      const recentlyChanged = daysSinceChange !== null && daysSinceChange <= DEFAULT_WINDOW_DAYS && entry.lastStatus === "changed";
      setResult({ lastChangedAt, daysSinceChange, errored, recentlyChanged });
    };

    tick();
    const interval = setInterval(tick, CACHE_TTL_MS);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [countryCode]);

  return result;
}

/**
 * computeChangesMap — pura, sem estado. Pra cada bulletin do StatusFile,
 * retorna 1 se mudou (lastStatus "changed") dentro da janela (default 7 dias),
 * senao 0. Chave = country code (bulletin.key already casa com Country.code
 * pra quase todos os paises — ver src/lib/bulletins.ts).
 */
export function computeChangesMap(data: StatusFile, windowDays: number = DEFAULT_WINDOW_DAYS): Record<string, number> {
  const map: Record<string, number> = {};
  const now = Date.now();
  for (const b of data.bulletins) {
    const changed =
      !!b.lastChangedAt &&
      b.lastStatus === "changed" &&
      now - new Date(b.lastChangedAt).getTime() <= windowDays * 86_400_000;
    map[b.key] = changed ? 1 : 0;
  }
  return map;
}

/**
 * useCountryChangesMap — versao "todos os paises de uma vez" do
 * useCountryChanges, pra listas/mapas que precisam ordenar ou rotular N
 * paises sem abrir N fetches (usa o mesmo cache/inflight compartilhado
 * acima). Paises sem bulletin mapeado simplesmente nao aparecem no objeto —
 * consumidores devem ler com fallback `?? 0`.
 */
export function useCountryChangesMap(windowDays: number = DEFAULT_WINDOW_DAYS): Record<string, number> {
  const [map, setMap] = useState<Record<string, number>>({});

  useEffect(() => {
    let cancelled = false;
    const tick = async () => {
      const data = await loadStatus();
      if (cancelled || !data) return;
      setMap(computeChangesMap(data, windowDays));
    };

    tick();
    const interval = setInterval(tick, CACHE_TTL_MS);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [windowDays]);

  return map;
}
