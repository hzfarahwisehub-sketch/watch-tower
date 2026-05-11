"use client";
import { useEffect, useRef } from "react";
import type { Country } from "@/lib/types";
import { useTheme } from "./ThemeProvider";

interface Props {
  countries: Country[];
  selected: string | null;
  onSelect: (code: string) => void;
}

export default function MapZone({ countries, selected, onSelect }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<import("leaflet").Map | null>(null);
  const tileRef = useRef<import("leaflet").TileLayer | null>(null);
  const markersRef = useRef<Record<string, import("leaflet").Marker>>({});
  const { theme } = useTheme();

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !containerRef.current || mapRef.current) return;

      const map = L.map(containerRef.current, {
        center: [25, 10],
        zoom: 2,
        minZoom: 2,
        maxZoom: 6,
        zoomControl: true,
        worldCopyJump: true,
        attributionControl: true,
      });
      mapRef.current = map;

      const tileUrl =
        theme === "dark"
          ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";
      tileRef.current = L.tileLayer(tileUrl, {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }).addTo(map);

      countries.forEach((c) => {
        const icon = L.divIcon({
          className: "",
          html: `<div class="country-marker ${c.status}"><div class="dot"></div></div>`,
          iconSize: [18, 18],
          iconAnchor: [9, 9],
        });
        const marker = L.marker(c.coords, { icon }).addTo(map);
        const statusLabel = { crit: "Crítico", warn: "Atenção", stable: "Estável" }[c.status];
        marker.bindPopup(
          `<div class="pop-title"><span class="wt-flag sm ${c.code}" style="display:inline-block;vertical-align:middle"></span> <strong>${c.name}</strong></div><div class="pop-meta">${c.changes} mudança${c.changes > 1 ? "s" : ""} <span class="pop-chip ${c.status}" style="padding:2px 7px;border-radius:9px;font-weight:600;font-size:10px;margin-left:4px">${statusLabel}</span></div>`,
        );
        marker.on("click", () => onSelect(c.code));
        markersRef.current[c.code] = marker;
      });
    })();
    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
      markersRef.current = {};
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Swap tile layer on theme change
  useEffect(() => {
    (async () => {
      const L = (await import("leaflet")).default;
      const map = mapRef.current;
      if (!map) return;
      if (tileRef.current) map.removeLayer(tileRef.current);
      const tileUrl =
        theme === "dark"
          ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";
      tileRef.current = L.tileLayer(tileUrl, {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }).addTo(map);
    })();
  }, [theme]);

  // Fly to selected
  useEffect(() => {
    if (!selected || !mapRef.current) return;
    const c = countries.find((x) => x.code === selected);
    if (!c) return;
    mapRef.current.flyTo(c.coords, 4, { duration: 0.6 });
    markersRef.current[selected]?.openPopup();
  }, [selected, countries]);

  return (
    <div className="wt-card flex flex-col">
      <div className="flex items-center justify-between gap-3 px-5 py-4" style={{ borderBottom: "1px solid var(--border)" }}>
        <h2 className="text-[12px] tracking-[2.5px] uppercase font-bold flex items-center gap-2" style={{ color: "var(--color-wh-blue-light)" }}>
          🗺 Mapa Global
        </h2>
        <div className="flex gap-3 text-[10px] uppercase font-semibold tracking-wider flex-wrap" style={{ color: "var(--text-3)" }}>
          <div className="flex items-center gap-1.5"><span className="wt-status crit" style={{ width: 8, height: 8 }} />Crítico</div>
          <div className="flex items-center gap-1.5"><span className="wt-status warn" style={{ width: 8, height: 8 }} />Atenção</div>
          <div className="flex items-center gap-1.5"><span className="wt-status stable" style={{ width: 8, height: 8 }} />Estável</div>
        </div>
      </div>
      <div ref={containerRef} className="flex-1 min-h-[440px] rounded-b-[14px] overflow-hidden" />
    </div>
  );
}
