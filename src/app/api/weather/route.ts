/**
 * GET /api/weather — clima atual dos 41 países monitorados, pra aba Relógios.
 * Uma chamada batch ao Open-Meteo (grátis, sem chave) com as coordenadas do
 * COUNTRIES, cacheada em memória. Falha graciosa: se o Open-Meteo cair, devolve
 * { weather: {} } e a aba mostra os relógios sem o clima.
 */
import { NextResponse } from "next/server";
import { COUNTRIES } from "@/lib/data";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 15;

type Weather = Record<string, { temp: number; code: number }>;
let cache: { weather: Weather } | null = null;
let cachedAt = 0;
const TTL = 15 * 60 * 1000;

export async function GET() {
  if (cache && Date.now() - cachedAt < TTL) {
    return NextResponse.json(cache);
  }
  const lats = COUNTRIES.map((c) => c.coords[0]).join(",");
  const lons = COUNTRIES.map((c) => c.coords[1]).join(",");
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lats}&longitude=${lons}&current=temperature_2m,weather_code&timezone=UTC`;
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) return NextResponse.json({ weather: {} });
    const data = await res.json();
    // Multi-local: o Open-Meteo devolve um ARRAY (um item por coordenada), na
    // mesma ordem enviada. Local único viria como objeto — normaliza pra array.
    const arr = Array.isArray(data) ? data : [data];
    const weather: Weather = {};
    COUNTRIES.forEach((c, i) => {
      const cur = arr[i]?.current;
      if (cur && typeof cur.temperature_2m === "number") {
        weather[c.code] = { temp: Math.round(cur.temperature_2m), code: Number(cur.weather_code ?? 0) };
      }
    });
    cache = { weather };
    cachedAt = Date.now();
    return NextResponse.json(cache);
  } catch {
    return NextResponse.json({ weather: {} });
  }
}
