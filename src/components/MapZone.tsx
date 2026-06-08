"use client";
import { useEffect, useRef, useState } from "react";
import maplibregl, {
  type Map as MLMap,
  type Marker,
  type StyleSpecification,
} from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { Country, Status } from "@/lib/types";

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

// ── Estilos do globo ──────────────────────────────────────────────────────
const ESRI = "https://server.arcgisonline.com/ArcGIS/rest/services";
const ATTR = "© Esri · Maxar · Earthstar Geographics";

function esriRaster(path: string, maxzoom = 19): StyleSpecification["sources"][string] {
  return {
    type: "raster",
    tiles: [`${ESRI}/${path}/MapServer/tile/{z}/{y}/{x}`],
    tileSize: 256,
    maxzoom,
    attribution: ATTR,
  };
}

// Estilo escuro (CARTO dark-matter, vetor, free)
const STYLE_DARK = "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";

// Satélite puro (imagem real, máximo detalhamento)
const STYLE_SATELLITE: StyleSpecification = {
  version: 8,
  sources: { imagery: esriRaster("World_Imagery") },
  layers: [
    { id: "bg", type: "background", paint: { "background-color": "#06070f" } },
    { id: "imagery", type: "raster", source: "imagery" },
  ],
};

// "Google Earth": satélite + nomes de lugares + fronteiras + vias por cima
const STYLE_GOOGLE: StyleSpecification = {
  version: 8,
  sources: {
    imagery: esriRaster("World_Imagery"),
    transport: esriRaster("Reference/World_Transportation"),
    places: esriRaster("Reference/World_Boundaries_and_Places"),
  },
  layers: [
    { id: "bg", type: "background", paint: { "background-color": "#06070f" } },
    { id: "imagery", type: "raster", source: "imagery" },
    { id: "transport", type: "raster", source: "transport", paint: { "raster-opacity": 0.9 } },
    { id: "places", type: "raster", source: "places" },
  ],
};

// Relevo / mapa físico topográfico (colorido, com terreno e rótulos)
const STYLE_RELIEF: StyleSpecification = {
  version: 8,
  sources: { topo: esriRaster("World_Topo_Map") },
  layers: [
    { id: "bg", type: "background", paint: { "background-color": "#0a0f1a" } },
    { id: "topo", type: "raster", source: "topo" },
  ],
};

type StyleKey = "google" | "satellite" | "relief" | "dark";

const STYLE_OPTIONS: Array<{ key: StyleKey; label: string; emoji: string; desc: string }> = [
  { key: "google", label: "Google", emoji: "🌍", desc: "Satélite com nomes e fronteiras" },
  { key: "satellite", label: "Satélite HD", emoji: "🛰️", desc: "Imagem real, sem rótulos" },
  { key: "relief", label: "Relevo", emoji: "🏔️", desc: "Mapa físico topográfico" },
  { key: "dark", label: "Escuro", emoji: "🌑", desc: "Globo preto minimalista" },
];

const STYLE_STORAGE_KEY = "wt-map-style";
const VALID_KEYS: StyleKey[] = ["google", "satellite", "relief", "dark"];

function readSavedStyle(): StyleKey {
  try {
    const v = localStorage.getItem(STYLE_STORAGE_KEY) as StyleKey | null;
    if (v && VALID_KEYS.includes(v)) return v;
  } catch {}
  return "dark"; // padrão: o preto que o Hammis curte
}

function resolveStyle(key: StyleKey): string | StyleSpecification {
  switch (key) {
    case "google":
      return STYLE_GOOGLE;
    case "satellite":
      return STYLE_SATELLITE;
    case "relief":
      return STYLE_RELIEF;
    default:
      return STYLE_DARK;
  }
}

/**
 * MapZone 3D — MapLibre GL JS com projeção globe.
 *
 * - Globo real 3D, navegação estilo Google Earth (arrasta + solta = inércia)
 * - Botão de estilo (gradiente + menu): Google · Satélite HD · Relevo · Escuro
 * - Markers por país (cor = status), click seleciona · voo suave ao selecionar
 */
export default function MapZone({ countries, selected, onSelect }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MLMap | null>(null);
  const markersRef = useRef<Record<string, Marker>>({});
  const firstLoadRef = useRef(true);
  const lastMinDimRef = useRef(0);
  const spinRafRef = useRef<number | null>(null);
  const selectedRef = useRef<string | null>(selected);
  selectedRef.current = selected;
  const [styleKey, setStyleKey] = useState<StyleKey>("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  // INIT — só uma vez
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;
    const initialKey = readSavedStyle();
    setStyleKey(initialKey);
    const map = new maplibregl.Map({
      container: containerRef.current,
      style: resolveStyle(initialKey),
      center: [0, 0],
      zoom: 0.6,
      minZoom: 0.4,
      maxZoom: 8,
      pitch: 0,
      bearing: 0,
      attributionControl: { compact: true },
      // Perf: sem cross-fade de tiles (aparecem direto) + não re-renderiza à toa.
      // Nitidez intacta (não mexe em pixelRatio nem antialias).
      fadeDuration: 0,
      refreshExpiredTiles: false,
    });
    mapRef.current = map;

    // Inércia estilo Google Earth: ao soltar o arrasto, o globo segue girando e
    // perde força aos poucos. deceleration baixo = desliza mais.
    // Inércia mais solta = ao largar o arrasto o globo desliza um pouco e para
    // macio (estilo Google Earth), em vez de travar seco. linearity baixa deixa
    // a desaceleração bem "ease-out"; deceleration baixa estende o deslize.
    map.dragPan.enable({ linearity: 0.1, maxSpeed: 6000, deceleration: 300 });

    map.addControl(new maplibregl.NavigationControl({ visualizePitch: true }), "top-right");
    map.addControl(new maplibregl.FullscreenControl(), "top-right");
    map.addControl(new maplibregl.ScaleControl({ maxWidth: 100, unit: "metric" }), "bottom-left");

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
        if (firstLoadRef.current) {
          map.jumpTo({ center: [0, 0], zoom: 0.6, pitch: 0, bearing: 0 });
          firstLoadRef.current = false;
        }
      } catch {}
    });

    const resizeObserver = new ResizeObserver(() => {
      const m = mapRef.current;
      const el = containerRef.current;
      if (!m || !el) return;
      try {
        m.resize();
        // Globo responsivo + sempre centralizado: ao mudar o tamanho da caixa,
        // ajusta o zoom na proporção da menor dimensão (cada vez que ela dobra,
        // o globo dobra). Preserva o center e a rotação do usuário, então o
        // globo "amplia" ao expandir e "reduz" ao encolher, sem sair do centro.
        const minDim = Math.min(el.clientWidth, el.clientHeight);
        if (minDim > 0) {
          const prev = lastMinDimRef.current;
          const ratio = prev > 0 ? minDim / prev : 0;
          // Só acompanha mudanças graduais (você redimensionando a caixa);
          // ignora saltos grandes da montagem inicial pra o globo não disparar.
          if (ratio > 0.5 && ratio < 2) {
            const z = m.getZoom() + Math.log2(ratio);
            m.setZoom(Math.max(0.4, Math.min(8, z)));
          }
          lastMinDimRef.current = minDim;
        }
      } catch {}
    });
    resizeObserver.observe(containerRef.current);

    // Auto-rotação suave (estilo WiseHub): o globo gira sozinho devagar quando
    // está parado, preso no eixo. Pausa assim que você toca/arrasta/zooma e
    // volta a girar pouco depois que você solta. Como o giro só roda quando o
    // mapa NÃO está em movimento, a inércia do arrasto desliza primeiro e o giro
    // automático assume na sequência, sem corte seco. Não gira com país em foco.
    const SPIN_DEG_PER_SEC = 4;
    const RESUME_MS = 900;
    let lastInteract = 0;
    let lastTs = 0;
    const spinFrame = (ts: number) => {
      spinRafRef.current = requestAnimationFrame(spinFrame);
      const m = mapRef.current;
      if (!m) { lastTs = ts; return; }
      const dt = lastTs ? Math.min(0.05, (ts - lastTs) / 1000) : 0;
      lastTs = ts;
      if (!selectedRef.current && ts - lastInteract > RESUME_MS && !m.isMoving()) {
        const c = m.getCenter();
        m.setCenter([c.lng - SPIN_DEG_PER_SEC * dt, c.lat]);
      }
    };
    const markInteract = () => { lastInteract = performance.now(); };
    map.on("mousedown", markInteract);
    map.on("touchstart", markInteract);
    map.on("wheel", markInteract);
    map.on("dragstart", markInteract);
    map.on("drag", markInteract);
    map.on("zoomstart", markInteract);
    spinRafRef.current = requestAnimationFrame(spinFrame);

    return () => {
      if (spinRafRef.current) cancelAnimationFrame(spinRafRef.current);
      resizeObserver.disconnect();
      Object.values(markersRef.current).forEach((m) => m.remove());
      markersRef.current = {};
      map.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // TROCA DE ESTILO escolhido no botão
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    map.setStyle(resolveStyle(styleKey));
    try {
      localStorage.setItem(STYLE_STORAGE_KEY, styleKey);
    } catch {}
  }, [styleKey]);

  // ATUALIZA MARKERS (persistem entre trocas de estilo)
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

  const current = STYLE_OPTIONS.find((o) => o.key === styleKey) ?? STYLE_OPTIONS[3];

  return (
    <div className="wt-card flex flex-col h-full overflow-hidden" style={{ minHeight: 300 }}>
      <div
        className="flex items-center justify-between gap-2 px-4 sm:px-5 py-3"
        style={{ borderBottom: "1px solid var(--border)", position: "relative", zIndex: 20, paddingRight: 70 }}
      >
        <h2
          className="text-[12px] tracking-[2px] uppercase font-bold flex items-center gap-2 shrink-0"
          style={{ color: "var(--color-wh-blue-light)" }}
        >
          🗺 Mapa Global 3D
        </h2>

        {/* Botão de estilo (gradiente + menu) */}
        <div className="relative shrink-0">
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            title="Trocar o estilo do globo"
            className="inline-flex items-center gap-1.5 px-3 py-[7px] rounded-[16px] text-[11px] font-bold tracking-wide cursor-pointer transition-all hover:-translate-y-px"
            style={{
              color: "#fff",
              background: "linear-gradient(135deg, var(--color-wh-blue), var(--color-wh-blue-dark))",
              border: "1px solid rgba(74,122,255,.5)",
              boxShadow: "0 4px 14px rgba(31,85,255,.35)",
            }}
          >
            <span>{current.emoji}</span>
            <span>{current.label}</span>
            <span style={{ fontSize: 9, opacity: 0.85 }}>▼</span>
          </button>

          {menuOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setMenuOpen(false)} />
              <div
                role="menu"
                className="absolute right-0 top-[40px] z-50 w-[170px] rounded-xl p-1 wt-card"
                style={{
                  border: "1px solid var(--border-hi)",
                  boxShadow: "var(--shadow-bar)",
                  transformOrigin: "top right",
                  animation: "wt-menu-pop .14s ease-out",
                }}
              >
                {STYLE_OPTIONS.map((o) => {
                  const active = o.key === styleKey;
                  return (
                    <button
                      key={o.key}
                      type="button"
                      role="menuitemradio"
                      aria-checked={active}
                      onClick={() => {
                        setStyleKey(o.key);
                        setMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-left text-[12.5px] font-semibold transition-colors hover:bg-white/5"
                      style={active ? { background: "rgba(74,122,255,.14)", color: "var(--text)" } : { color: "var(--text-2)" }}
                    >
                      <span className="text-[15px] leading-none">{o.emoji}</span>
                      <span className="flex-1 truncate">{o.label}</span>
                      {active && <span style={{ color: "var(--color-wh-blue-light)", fontSize: 12, fontWeight: 700 }}>✓</span>}
                    </button>
                  );
                })}
              </div>
            </>
          )}
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
