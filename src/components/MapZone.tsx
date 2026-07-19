"use client";
import { useEffect, useRef, useState } from "react";
import maplibregl, {
  type Map as MLMap,
  type Marker,
  type StyleSpecification,
} from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { Country, Status } from "@/lib/types";
import { useCountryChangesMap } from "@/lib/useCountryChanges";
import { useLocale } from "./LocaleProvider";

interface Props {
  countries: Country[];
  selected: string | null;
  onSelect: (code: string) => void;
  immersive?: boolean;
  projection?: "globe" | "mercator";
  stylePreset?: StyleKey;
  hideChrome?: boolean;
  viewport?: { lng: number; lat: number; zoom: number } | null;
  onViewportChange?: (viewport: { lng: number; lat: number; zoom: number }) => void;
  markerVariant?: "default" | "holographic" | "satellite";
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
  projection: { type: "globe" },
  sources: { imagery: esriRaster("World_Imagery") },
  layers: [
    { id: "bg", type: "background", paint: { "background-color": "#06070f" } },
    { id: "imagery", type: "raster", source: "imagery" },
  ],
};

// "Google Earth": satélite + nomes de lugares + fronteiras + vias por cima
const STYLE_GOOGLE: StyleSpecification = {
  version: 8,
  projection: { type: "globe" },
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
  projection: { type: "globe" },
  sources: { topo: esriRaster("World_Topo_Map") },
  layers: [
    { id: "bg", type: "background", paint: { "background-color": "#0a0f1a" } },
    { id: "topo", type: "raster", source: "topo" },
  ],
};

type StyleKey = "google" | "satellite" | "relief" | "dark";

// Apenas key + emoji no nível de módulo. Os rótulos/descrições traduzíveis são
// resolvidos dentro do componente via t("map.style.<key>.label") (helpers de
// módulo nunca chamam useLocale — segue o padrão do KpiRow).
const STYLE_OPTIONS: Array<{ key: StyleKey; emoji: string }> = [
  { key: "google", emoji: "🌍" },
  { key: "satellite", emoji: "🛰️" },
  { key: "relief", emoji: "🏔️" },
  { key: "dark", emoji: "🌑" },
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

// Injeta a projeção globe no style que está CHEGANDO, antes de aplicá-lo. É o
// transformStyle oficial do maplibre e cobre o caso do dark, que é URL externa
// (CARTO) e chega SEM projeção. Sem isso, ao trocar de estilo o mapa cai em
// mercator e o "giro" vira um deslize lateral plano (o "duro" pós-troca).
const keepGlobe = (
  _prev: StyleSpecification | undefined,
  next: StyleSpecification,
): StyleSpecification => ({ ...next, projection: { type: "globe" } });

/**
 * MapZone 3D — MapLibre GL JS com projeção globe.
 *
 * - Globo real 3D, navegação estilo Google Earth (arrasta + solta = inércia)
 * - Botão de estilo (gradiente + menu): Google · Satélite HD · Relevo · Escuro
 * - Markers por país (cor = status), click seleciona · voo suave ao selecionar
 */
export default function MapZone({ countries, selected, onSelect, immersive = false, projection = "globe", stylePreset, hideChrome = false, viewport, onViewportChange, markerVariant = "default" }: Props) {
  const { t } = useLocale();
  const changesMap = useCountryChangesMap();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MLMap | null>(null);
  const markersRef = useRef<Record<string, Marker>>({});
  const firstLoadRef = useRef(true);
  const lastMinDimRef = useRef(0);
  const spinGlobeRef = useRef<(() => void) | null>(null);
  const styleLoadingRef = useRef(false);
  const selectedRef = useRef<string | null>(selected);
  selectedRef.current = selected;
  const projectionRef = useRef<"globe" | "mercator">(projection);
  projectionRef.current = projection;
  const onViewportChangeRef = useRef(onViewportChange);
  onViewportChangeRef.current = onViewportChange;
  const [styleKey, setStyleKey] = useState<StyleKey>(stylePreset ?? "dark");
  const [menuOpen, setMenuOpen] = useState(false);

  // INIT — só uma vez
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;
    const initialKey = stylePreset ?? readSavedStyle();
    setStyleKey(initialKey);
    const map = new maplibregl.Map({
      container: containerRef.current,
      style: resolveStyle(initialKey),
      center: [0, 0],
      zoom: immersive ? 1.35 : 0.6,
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
        map.setProjection({ type: projectionRef.current });
        map.setSky?.({
          "sky-color": "#060B18",
          "sky-horizon-blend": 0.5,
          "horizon-color": "#0A1124",
          "horizon-fog-blend": 0.3,
          "fog-color": "#060B18",
          "fog-ground-blend": 0.1,
        });
        if (firstLoadRef.current) {
          map.jumpTo({ center: [0, 0], zoom: immersive ? 1.35 : 0.6, pitch: 0, bearing: 0 });
          firstLoadRef.current = false;
        }
      } catch {}
      // Style novo assentou: libera o giro (estava pausado durante a troca via
      // styleLoadingRef) e (re)liga o loop. Como a projeção globe entra junto com
      // o style (projection inline + transformStyle), o giro já roda no globo
      // certo, nunca num mapa plano em transição.
      styleLoadingRef.current = false;
      spinGlobeRef.current?.();
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

    // Auto-rotação NATIVA estilo WiseHub: usa map.easeTo em loop (o mesmo padrão
    // do exemplo oficial de globo giratório do maplibre). O easeTo interpola o
    // movimento dentro do próprio engine — liso, sem o stutter do
    // setCenter-quadro-a-quadro. Cada passo gira um tanto em 1s; ao terminar
    // dispara "moveend", que chama de novo = giro contínuo e suave. Pausa
    // enquanto você arrasta/zooma e retoma ao soltar. A inércia do arrasto
    // desliza primeiro (isMoving) e o giro assume na sequência. Não gira com
    // país em foco nem com zoom alto.
    const SECONDS_PER_REVOLUTION = 63; // ~5.7°/s = 0.1 rad/s, igual o WiseHub
    const MAX_SPIN_ZOOM = 4.5;
    const SLOW_SPIN_ZOOM = 3;
    let userInteracting = false;
    let userMovedViewport = false;
    let spinQueued = false;
    const spinGlobe = () => {
      const m = mapRef.current;
      if (!m || projectionRef.current !== "globe" || userInteracting || selectedRef.current || styleLoadingRef.current) return;
      if (m.isMoving()) return; // deixa a inércia / animação atual terminar antes
      const zoom = m.getZoom();
      if (zoom >= MAX_SPIN_ZOOM) return;
      let degPerSec = 360 / SECONDS_PER_REVOLUTION;
      if (zoom > SLOW_SPIN_ZOOM) {
        degPerSec *= (MAX_SPIN_ZOOM - zoom) / (MAX_SPIN_ZOOM - SLOW_SPIN_ZOOM);
      }
      const center = m.getCenter();
      center.lng -= degPerSec; // duração de 1s => degPerSec graus por segundo
      // essential: true força a animação a rodar de verdade mesmo com "reduzir
      // movimento" ligado no SO. Sem isso o easeTo vira instantâneo e dispara
      // moveend de forma síncrona, recursando moveend->spinGlobe->easeTo até
      // estourar a pilha (RangeError: Maximum call stack size exceeded).
      m.easeTo({ center, duration: 1000, easing: (n) => n, essential: true });
    };
    // Agenda o giro pro PRÓXIMO quadro, nunca de forma reentrante. Mesmo que o
    // easeTo dispare moveend na hora, o spinGlobe seguinte só roda no rAF, então
    // a recursão síncrona fica impossível (trava de segurança contra o crash).
    const queueSpin = () => {
      if (spinQueued) return;
      spinQueued = true;
      requestAnimationFrame(() => { spinQueued = false; spinGlobe(); });
    };
    spinGlobeRef.current = queueSpin;
    const startInteract = () => { userInteracting = true; userMovedViewport = true; };
    const endInteract = () => { userInteracting = false; queueSpin(); };
    map.on("mousedown", startInteract);
    map.on("touchstart", startInteract);
    map.on("dragstart", startInteract);
    map.on("zoomstart", startInteract);
    map.on("mouseup", endInteract);
    map.on("touchend", endInteract);
    map.on("dragend", endInteract);
    map.on("zoomend", endInteract);
    map.on("pitchend", endInteract);
    map.on("rotateend", endInteract);
    map.on("moveend", () => {
      if (userMovedViewport) {
        const center = map.getCenter();
        onViewportChangeRef.current?.({ lng: center.lng, lat: center.lat, zoom: map.getZoom() });
        userMovedViewport = false;
      }
      queueSpin();
    });

    return () => {
      resizeObserver.disconnect();
      Object.values(markersRef.current).forEach((m) => m.remove());
      markersRef.current = {};
      map.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // stylePreset é prop CONTROLADA. Os modos geográficos (cinematic/satellite/live)
  // reusam a MESMA instância do MapZone (dois <div> sem key na mesma posição do
  // ternário → o React reconcilia em vez de remontar), então o INIT roda só uma
  // vez. Sem sincronizar, o mapa herdava o estilo do modo anterior — era o bug do
  // "Mapa vivo virou satélite". Ao trocar o preset, refletimos no styleKey. Como
  // depende só de [stylePreset], a escolha manual pelo menu (que muda styleKey, não
  // o preset) continua valendo dentro do modo.
  useEffect(() => {
    if (stylePreset) setStyleKey(stylePreset);
  }, [stylePreset]);

  // TROCA DE ESTILO escolhido no botão. Pausa o giro durante a troca
  // (styleLoadingRef) e injeta globe no style novo (transformStyle keepGlobe),
  // pra a projeção nunca cair em mercator e o giro religar limpo no style.load.
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    styleLoadingRef.current = true;
    map.setStyle(resolveStyle(styleKey), { transformStyle: keepGlobe });
    try {
      if (!stylePreset) localStorage.setItem(STYLE_STORAGE_KEY, styleKey);
    } catch {}
  }, [styleKey, stylePreset]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    try {
      map.setProjection({ type: projection });
      map.resize();
      if (projection === "globe") spinGlobeRef.current?.();
    } catch {}
  }, [projection]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !viewport) return;
    const current = map.getCenter();
    if (Math.abs(current.lng - viewport.lng) < .02 && Math.abs(current.lat - viewport.lat) < .02 && Math.abs(map.getZoom() - viewport.zoom) < .02) return;
    map.easeTo({ center: [viewport.lng, viewport.lat], zoom: viewport.zoom, duration: 650, essential: true });
  }, [viewport]);

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
      const title = t("map.marker.title", { name: c.name, n: changesMap[c.code] ?? 0, authority: c.authority });
      if (existing) {
        existing.setLngLat([lng, lat]);
        const existingElement = existing.getElement();
        existingElement.title = title;
        existingElement.className = `wt-map-marker wt-marker-${markerVariant}${c.code === selected ? " is-selected" : ""}`;
        return;
      }
      const el = document.createElement("button");
      el.type = "button";
      el.className = `wt-map-marker wt-marker-${markerVariant}`;
      el.setAttribute("data-status", c.status);
      el.setAttribute("aria-label", `${c.name} · ${c.status}`);
      el.title = title;
      el.innerHTML = `
        <span class="wt-map-marker-ring"></span>
        <span class="wt-map-dot" style="background:${STATUS_COLOR[c.status]};box-shadow:0 0 12px ${STATUS_COLOR[c.status]}, 0 0 0 2px rgba(0,0,0,.5)"></span>
        <span class="wt-map-pulse" style="background:${STATUS_COLOR[c.status]}"></span>
        <span class="wt-map-marker-code">${c.code.toUpperCase()}</span>
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
  }, [countries, onSelect, t, changesMap, markerVariant]);

  // VOO suave para o país selecionado; ao deselecionar, revive o giro automático
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    Object.entries(markersRef.current).forEach(([code, marker]) => marker.getElement().classList.toggle("is-selected", code === selected));
    if (!selected) {
      // o loop do giro tinha morrido com o país em foco; reativa
      spinGlobeRef.current?.();
      return;
    }
    const c = countries.find((c) => c.code === selected);
    if (!c) return;
    const [lat, lng] = c.coords;
    map.flyTo({ center: [lng, lat], zoom: 3.5, pitch: 45, bearing: 0, speed: 0.9, curve: 1.6, essential: true });
  }, [selected, countries]);

  const current = STYLE_OPTIONS.find((o) => o.key === styleKey) ?? STYLE_OPTIONS[3];
  const currentLabel = t(`map.style.${current.key}.label`);

  return (
    <div className={`wt-card flex flex-col h-full overflow-hidden ${hideChrome ? "wt-map-chromeless" : ""}`} style={{ minHeight: 300 }}>
      {!hideChrome && <div
        className="flex items-center justify-between gap-x-2 gap-y-0.5 pl-4 sm:pl-5 pr-[64px] py-3 flex-wrap"
        style={{ borderBottom: "1px solid var(--border)", position: "relative", zIndex: 20 }}
      >
        <h2
          className="text-[12px] tracking-[2px] uppercase font-bold flex items-center gap-2 shrink-0"
          style={{ color: "var(--color-wh-blue-light)" }}
        >
          🗺 {t("map.title")}
        </h2>

        {/* Botão de estilo (gradiente + menu) */}
        <div className="relative shrink-0">
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            title={t("map.style.button.title")}
            className="inline-flex items-center gap-1.5 px-3 py-[7px] rounded-[16px] text-[11px] font-bold tracking-wide cursor-pointer transition-all hover:-translate-y-px"
            style={{
              color: "#fff",
              background: "linear-gradient(135deg, var(--color-wh-blue), var(--color-wh-blue-dark))",
              border: "1px solid rgba(74,122,255,.5)",
              boxShadow: "0 4px 14px rgba(31,85,255,.35)",
            }}
          >
            <span>{current.emoji}</span>
            <span>{currentLabel}</span>
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
                      <span className="flex-1 truncate">{t(`map.style.${o.key}.label`)}</span>
                      {active && <span style={{ color: "var(--color-wh-blue-light)", fontSize: 12, fontWeight: 700 }}>✓</span>}
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>}
      <div
        ref={containerRef}
        className="flex-1 wt-map-canvas"
        style={{ minHeight: 240, position: "relative", width: "100%" }}
      />
    </div>
  );
}
