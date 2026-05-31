"use client";
import { useEffect, useRef, useState } from "react";
import maplibregl, {
  type Map as MLMap,
  type Marker,
  type StyleSpecification,
} from "maplibre-gl";
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

// Basemaps CARTO (vetor, free, sem chave)
const STYLE_DARK = "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";
const STYLE_LIGHT = "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";
const STYLE_COLOR = "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json";

// Satélite (raster Esri World Imagery, máximo detalhamento, free com atribuição)
const STYLE_SATELLITE: StyleSpecification = {
  version: 8,
  sources: {
    "esri-imagery": {
      type: "raster",
      tiles: [
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      ],
      tileSize: 256,
      maxzoom: 19,
      attribution: "Imagery © Esri, Maxar, Earthstar Geographics, GIS Community",
    },
  },
  layers: [
    { id: "bg", type: "background", paint: { "background-color": "#06070f" } },
    { id: "esri-imagery", type: "raster", source: "esri-imagery" },
  ],
};

type StyleKey = "auto" | "dark" | "light" | "color" | "satellite";

const STYLE_OPTIONS: Array<{ key: StyleKey; label: string }> = [
  { key: "auto", label: "Automático (tema)" },
  { key: "dark", label: "🌑 Escuro" },
  { key: "light", label: "☀️ Claro" },
  { key: "color", label: "🎨 Colorido" },
  { key: "satellite", label: "🛰️ Satélite (HD)" },
];

const STYLE_STORAGE_KEY = "wt-map-style";

function readSavedStyle(): StyleKey {
  try {
    const v = localStorage.getItem(STYLE_STORAGE_KEY) as StyleKey | null;
    if (v && ["auto", "dark", "light", "color", "satellite"].includes(v)) return v;
  } catch {}
  return "auto";
}

function resolveStyle(key: StyleKey, theme: string): string | StyleSpecification {
  switch (key) {
    case "dark":
      return STYLE_DARK;
    case "light":
      return STYLE_LIGHT;
    case "color":
      return STYLE_COLOR;
    case "satellite":
      return STYLE_SATELLITE;
    default:
      return theme === "dark" ? STYLE_DARK : STYLE_LIGHT;
  }
}

/**
 * MapZone 3D — MapLibre GL JS com projeção globe.
 *
 * - Globo real 3D, navegação estilo Google Earth (arrasta + solta = inércia)
 * - Seletor de estilo: Escuro · Claro · Colorido · Satélite (alta resolução)
 * - Markers customizados por país (cor = status), click seleciona
 * - Voo suave ao país selecionado
 */
export default function MapZone({ countries, selected, onSelect }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MLMap | null>(null);
  const markersRef = useRef<Record<string, Marker>>({});
  const firstLoadRef = useRef(true);
  const { theme } = useTheme();
  const [styleKey, setStyleKey] = useState<StyleKey>("auto");

  // INIT — só uma vez
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;
    const initialKey = readSavedStyle();
    setStyleKey(initialKey);
    const map = new maplibregl.Map({
      container: containerRef.current,
      style: resolveStyle(initialKey, theme),
      center: [0, 20],
      zoom: 0.6,
      minZoom: 0.4,
      maxZoom: 8,
      pitch: 0,
      bearing: 0,
      attributionControl: { compact: true },
    });
    mapRef.current = map;

    // Inércia estilo Google Earth: ao soltar o arrasto, o globo segue girando e
    // perde força aos poucos. deceleration baixo = desliza mais; maxSpeed alto =
    // permite "arremessos" mais rápidos.
    map.dragPan.enable({ linearity: 0.3, maxSpeed: 3000, deceleration: 900 });

    map.addControl(new maplibregl.NavigationControl({ visualizePitch: true }), "top-right");
    map.addControl(new maplibregl.FullscreenControl(), "top-right");
    map.addControl(new maplibregl.ScaleControl({ maxWidth: 100, unit: "metric" }), "bottom-left");

    // Atmosfera + projeção globe (re-aplica em toda troca de estilo)
    map.on("style.load", () => {
      try {
        map.setProjection({ type: "globe" });
        map.setSky?.({
          "sky-color": "#15132A",
          "sky-horizon-blend": 0.5,
          "horizon-color": "#1F1D31",
          "horizon-fog-blend": 0.3,
          "fog-color": "#15132A",
          "fog-ground-blend": 0.1,
        });
        // Centraliza só na primeira carga (não atrapalha ao trocar de estilo)
        if (firstLoadRef.current) {
          map.jumpTo({ center: [0, 20], zoom: 0.6, pitch: 0, bearing: 0 });
          firstLoadRef.current = false;
        }
      } catch {}
    });

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

  // TROCA DE TEMA — só atualiza o estilo se estiver no modo "Automático"
  useEffect(() => {
    const map = mapRef.current;
    if (!map || styleKey !== "auto") return;
    map.setStyle(resolveStyle("auto", theme));
  }, [theme, styleKey]);

  // TROCA DE ESTILO ESCOLHIDO pelo usuário
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    map.setStyle(resolveStyle(styleKey, theme));
    try {
      localStorage.setItem(STYLE_STORAGE_KEY, styleKey);
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [styleKey]);

  // ATUALIZA MARKERS quando countries muda (persistem entre trocas de estilo)
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    Object.keys(markersRef.current).forEach((code) => {
      if (!countries.find((c) => c.code === code)) {
        markersRef.current[code]?.remove();
        delete markersRef.current[code];
      }
    });
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
    map.flyTo({ center: [lng, lat], zoom: 3.5, pitch: 45, bearing: 0, speed: 0.9, curve: 1.6, essential: true });
  }, [selected, countries]);

  return (
    <div className="wt-card flex flex-col h-full overflow-hidden" style={{ minHeight: 300 }}>
      <div
        className="flex items-center justify-between gap-2 px-4 sm:px-5 py-3"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <h2
          className="text-[12px] tracking-[2px] uppercase font-bold flex items-center gap-2 shrink-0"
          style={{ color: "var(--color-wh-blue-light)" }}
        >
          🗺 Mapa Global 3D
        </h2>
        <div className="flex items-center gap-2 min-w-0">
          <span
            className="hidden lg:block text-[10px] tracking-wider uppercase font-semibold truncate"
            style={{ color: "var(--text-3)" }}
          >
            {countries.length} países · arrasta e solta pra girar
          </span>
          <select
            value={styleKey}
            onChange={(e) => setStyleKey(e.target.value as StyleKey)}
            title="Estilo do mapa"
            aria-label="Estilo do mapa"
            className="text-[11px] font-semibold rounded-lg px-2 py-1.5 cursor-pointer shrink-0"
            style={{ background: "var(--bg2)", border: "1px solid var(--border)", color: "var(--text-2)" }}
          >
            {STYLE_OPTIONS.map((o) => (
              <option key={o.key} value={o.key}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div
        ref={containerRef}
        className="flex-1 wt-map-canvas"
        style={{ minHeight: 240, position: "relative", width: "100%" }}
      />
    </div>
  );
}
