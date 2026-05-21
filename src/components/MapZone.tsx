"use client";
import { useEffect, useRef } from "react";
import maplibregl, { type Map as MLMap, type Marker } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { Country, Status } from "@/lib/types";
import { useTheme } from "./ThemeProvider";

interface Props {
  countries: Country[];
  selected: string | null;
  onSelect: (code: string) => void;
}

const STATUS_COLOR: Record<Status, string> = {
  crit: "#FF3B5C",
  warn: "#FF8A1F",
  stable: "#10E0A0",
};

// MapLibre demo tiles globe-friendly (CARTO basemap CDN — free, sem chave)
const STYLE_DARK =
  "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";
const STYLE_LIGHT =
  "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";

/**
 * MapZone 3D — substituto do Leaflet por MapLibre GL JS.
 *
 * - Projeção globe (3D real, navegação fluida estilo Google Earth)
 * - Tilt/pitch via clique-direito + arrasto · zoom suave
 * - Markers customizados por país (cor = status)
 * - Click no marker = seleciona país (callback onSelect)
 * - Re-centraliza/zoom suave quando selected muda
 */
export default function MapZone({ countries, selected, onSelect }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MLMap | null>(null);
  const markersRef = useRef<Record<string, Marker>>({});
  const { theme } = useTheme();

  // INIT — só uma vez
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;
    const style = theme === "dark" ? STYLE_DARK : STYLE_LIGHT;
    const map = new maplibregl.Map({
      container: containerRef.current,
      style,
      // Estado inicial: globo INTEIRO centralizado (zoom min, sem tilt/bearing)
      center: [0, 20],
      zoom: 0.6,
      minZoom: 0.4,
      maxZoom: 8,
      pitch: 0,
      bearing: 0,
      attributionControl: { compact: true },
    });
    mapRef.current = map;

    // Navegação suave (touch + mouse)
    map.addControl(new maplibregl.NavigationControl({ visualizePitch: true }), "top-right");
    // Botão fullscreen
    map.addControl(new maplibregl.FullscreenControl(), "top-right");
    // Scale bar
    map.addControl(new maplibregl.ScaleControl({ maxWidth: 100, unit: "metric" }), "bottom-left");

    // Atmosfera (efeito visual do globo) + re-centra ao carregar estilo
    map.on("style.load", () => {
      try {
        map.setProjection({ type: "globe" });
        // Ajusta cor da atmosfera/sky pra dark
        map.setSky?.({
          "sky-color": "#15132A",
          "sky-horizon-blend": 0.5,
          "horizon-color": "#1F1D31",
          "horizon-fog-blend": 0.3,
          "fog-color": "#15132A",
          "fog-ground-blend": 0.1,
        });
        // Garante centralização inicial mesmo após swap de style
        map.jumpTo({ center: [0, 20], zoom: 0.6, pitch: 0, bearing: 0 });
      } catch {}
    });

    // ResizeObserver: quando o container muda de tamanho (user redimensiona
    // a caixa do grid), o map precisa redimensionar pra preencher e
    // re-centralizar o globo. Sem isso, o globo fica colado em uma quina.
    const resizeObserver = new ResizeObserver(() => {
      if (!mapRef.current) return;
      try {
        mapRef.current.resize();
      } catch {}
    });
    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
      Object.values(markersRef.current).forEach((m) => m.remove());
      markersRef.current = {};
      map.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // TROCA DE TEMA — atualiza estilo
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    const style = theme === "dark" ? STYLE_DARK : STYLE_LIGHT;
    map.setStyle(style);
  }, [theme]);

  // ATUALIZA MARKERS quando countries muda
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    // Remove markers que sumiram
    Object.keys(markersRef.current).forEach((code) => {
      if (!countries.find((c) => c.code === code)) {
        markersRef.current[code]?.remove();
        delete markersRef.current[code];
      }
    });
    // Adiciona/atualiza
    countries.forEach((c) => {
      const existing = markersRef.current[c.code];
      const [lat, lng] = c.coords;
      if (existing) {
        existing.setLngLat([lng, lat]);
        return;
      }
      const el = document.createElement("button");
      el.type = "button";
      el.className = "wt-map-marker";
      el.setAttribute("data-status", c.status);
      el.setAttribute("aria-label", `${c.name} · ${c.status}`);
      el.title = `${c.name} · ${c.changes} mudança(s) · ${c.authority}`;
      el.innerHTML = `
        <span class="wt-map-dot" style="background:${STATUS_COLOR[c.status]};box-shadow:0 0 12px ${STATUS_COLOR[c.status]}, 0 0 0 2px rgba(0,0,0,.5)"></span>
        <span class="wt-map-pulse" style="background:${STATUS_COLOR[c.status]}"></span>
      `;
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        onSelect(c.code);
      });
      const marker = new maplibregl.Marker({ element: el, anchor: "center" })
        .setLngLat([lng, lat])
        .addTo(map);
      markersRef.current[c.code] = marker;
    });
  }, [countries, onSelect]);

  // VOO suave para o país selecionado
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !selected) return;
    const c = countries.find((c) => c.code === selected);
    if (!c) return;
    const [lat, lng] = c.coords;
    map.flyTo({
      center: [lng, lat],
      zoom: 3.5,
      pitch: 45,
      bearing: 0,
      speed: 0.9,
      curve: 1.6,
      essential: true,
    });
  }, [selected, countries]);

  return (
    <div className="wt-card flex flex-col h-full overflow-hidden" style={{ minHeight: 300 }}>
      <div
        className="flex items-center justify-between px-5 py-3.5"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <h2
          className="text-[12px] tracking-[2.5px] uppercase font-bold flex items-center gap-2"
          style={{ color: "var(--color-wh-blue-light)" }}
        >
          🗺 Mapa Global 3D
        </h2>
        <span
          className="text-[10px] tracking-wider uppercase font-semibold"
          style={{ color: "var(--text-3)" }}
        >
          {countries.length} países · click pra detalhes · arrasta + scroll pra navegar
        </span>
      </div>
      <div
        ref={containerRef}
        className="flex-1 wt-map-canvas"
        style={{ minHeight: 240, position: "relative", width: "100%" }}
      />
    </div>
  );
}
