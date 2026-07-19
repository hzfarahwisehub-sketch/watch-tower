"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { COUNTRIES } from "@/lib/data";
import { FridayEyeReactive } from "./FridayEyeReactive";

const MapZone = dynamic(() => import("./MapZone"), { ssr: false });

const OWNER_EMAIL = "hzfarah.wisehub@gmail.com";
const PARTNER_ACCESS_ENABLED = process.env.NEXT_PUBLIC_WT_BRAIN_PARTNERS === "1";
const modules = ["Panorama global", "Inteligência", "Riscos", "Operações", "Comunicações", "Ativos", "Arquivos", "Configurações"];
const modes = ["WISE", "FRIDAY", "DUAL"] as const;
const readings = ["PAÍS", "FONTES", "PARECER"] as const;
const visualModes = [
  { id: "meridian", label: "Meridian" },
  { id: "phoenix", label: "Fênix" },
  { id: "orbital", label: "Orbital" },
] as const;
const eyeModes = [
  { id: "eye", label: "Wise Eye", variant: "Metallic Azure", ownerOnly: false },
  { id: "eye-cobalt", label: "Wise Eye", variant: "Cobalt Lens", ownerOnly: false },
  { id: "friday", label: "Friday", variant: "Phoenix", ownerOnly: true },
  { id: "friday-ember", label: "Friday", variant: "Ember Sentinel", ownerOnly: true },
  { id: "friday-sentient", label: "Friday Sentient", variant: "Original", ownerOnly: true },
  { id: "friday-flux", label: "Friday", variant: "Flux · Reativa · Voz", ownerOnly: true },
] as const;

export function SpatialCommandCenter({ previewOwner = false }: { previewOwner?: boolean }) {
  const { data: session } = useSession();
  const isOwner = session?.user?.email?.toLowerCase() === OWNER_EMAIL || previewOwner;
  const [mode, setMode] = useState<(typeof modes)[number]>(isOwner ? "DUAL" : "WISE");
  const [reading, setReading] = useState<(typeof readings)[number]>("PARECER");
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [briefing, setBriefing] = useState(false);
  const [visual, setVisual] = useState<(typeof visualModes)[number]["id"]>("meridian");
  const [eyeStyle, setEyeStyle] = useState<(typeof eyeModes)[number]["id"]>("eye");
  const [eyeShelfOpen, setEyeShelfOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [countryQuery, setCountryQuery] = useState("");
  const [geoMode, setGeoMode] = useState<"cinematic" | "satellite" | "live" | "atlas">("cinematic");
  const [sharedViewport, setSharedViewport] = useState<{ lng: number; lat: number; zoom: number } | null>(null);
  const availableEyes = eyeModes.filter(item => isOwner || !item.ownerOnly);
  const currentEye = availableEyes.find(item => item.id === eyeStyle) ?? availableEyes[0];
  const summary = useMemo(() => ({
    critical: COUNTRIES.filter(c => c.status === "crit").length,
    warning: COUNTRIES.filter(c => c.status === "warn").length,
    events: COUNTRIES.reduce((n, c) => n + c.events.length, 0),
  }), []);
  const activeCountry = selectedCountry ? COUNTRIES.find(item => item.code === selectedCountry) ?? null : null;
  const responseText = activeCountry
    ? `Analisando ${activeCountry.name}. ${activeCountry.summary ?? `${activeCountry.events.length} registros disponíveis.`}`
    : "Bom dia, Hammis. Selecione ou solicite um país para abrir o panorama geográfico e o benchmark correspondente.";
  const activeCoords = activeCountry?.coords ?? [0, 0];
  const focusStyle = { "--focus-x": `${((activeCoords[1] + 180) / 360) * 100}%`, "--focus-y": `${((90 - activeCoords[0]) / 180) * 100}%` } as CSSProperties;
  const countryMatches = countryQuery.trim().length > 1 ? COUNTRIES.filter(item => item.name.toLocaleLowerCase("pt-BR").includes(countryQuery.toLocaleLowerCase("pt-BR"))).slice(0, 6) : [];
  const selectCountry = (code: string) => {
    setSelectedCountry(code);
    setCountryQuery(COUNTRIES.find(item => item.code === code)?.name ?? code);
  };

  useEffect(() => {
    const receiveCountryCommand = (event: Event) => {
      const detail = (event as CustomEvent<{ code?: string; name?: string }>).detail;
      const target = COUNTRIES.find(item => item.code === detail?.code?.toLowerCase()) ?? COUNTRIES.find(item => item.name.toLocaleLowerCase("pt-BR") === detail?.name?.toLocaleLowerCase("pt-BR"));
      if (target) { setSelectedCountry(target.code); setCountryQuery(target.name); }
    };
    window.addEventListener("wt:brain-country", receiveCountryCommand);
    return () => window.removeEventListener("wt:brain-country", receiveCountryCommand);
  }, []);

  useEffect(() => { if (isOwner) setEyeStyle("friday-sentient"); }, [isOwner]);

  if (!isOwner && !PARTNER_ACCESS_ENABLED) return <section className="wb-locked" aria-label="Wise Brain bloqueado"><div className="wb-locked-seal"><span>⌾</span><i>🔒</i></div><small>WISEHUB · WATCH TOWER</small><h2>Wise Brain</h2><p>Ambiente de inteligência em preparação. O acesso será liberado após validação do proprietário.</p><div><b>ACESSO PROTEGIDO</b><span>Somente Hammis pode alterar esta permissão.</span></div></section>;

  return (
    <section className={`wise-brain wb-visual-${visual} wb-eye-${eyeStyle} ${drawerOpen ? "drawer-open" : "drawer-closed"}`} aria-label={isOwner ? "Friday Brain" : "Wise Brain"}>
      <header className="wise-brain-topbar">
        <div className="wb-brand"><b>{isOwner ? "Friday Brain" : "Wise Brain"}</b><span>WISEHUB · WATCH TOWER</span></div>
        <div className="wb-studio"><small>Studio de presença 🔒</small><b>Somente Hammis</b></div>
        <div className="wb-modes" role="group" aria-label="Presença">
          {modes.map(item => <button key={item} disabled={!isOwner && item !== "WISE"} className={mode === item ? "active" : ""} onClick={() => setMode(item)}>{item}</button>)}
        </div>
        <div className="wb-live"><span /> LEITURAS REAIS · {COUNTRIES.length} PAÍSES</div>
        {isOwner && <div className="wb-visual-picker" role="group" aria-label="Alternativas visuais">{visualModes.map(item => <button key={item.id} className={visual === item.id ? "active" : ""} onClick={() => setVisual(item.id)}>{item.label}</button>)}</div>}
      </header>

      <div className="wise-brain-body">
        <nav className="wb-rail" aria-label="Wise Brain">
          <button className={mode === "DUAL" ? "active" : ""} onClick={() => isOwner && setMode("DUAL")}><b className="wb-rail-dual"><span className="wb-rail-w">W</span><img src="/wise-brain/friday-helmet.png" alt="" className="wb-rail-ico mini" /></b><small>DUAL</small></button>
          <button className={mode === "WISE" ? "active" : ""} onClick={() => setMode("WISE")}><b className="wb-rail-w">W</b><small>WISE</small></button>
          {isOwner && <button className={mode === "FRIDAY" ? "active" : ""} onClick={() => setMode("FRIDAY")}><b><img src="/wise-brain/friday-helmet.png" alt="" className="wb-rail-ico" /></b><small>FRIDAY</small></button>}
          <button className="wb-collapse" onClick={() => setDrawerOpen(v => !v)} aria-label={drawerOpen ? "Recolher painel" : "Abrir painel"}>{drawerOpen ? "‹" : "›"}</button>
        </nav>

        <aside className="wb-assistant">
          <div className="wb-friday">
            <div className="wb-section-title"><b>{currentEye.label}</b><span>● online</span></div>
            <small>BRIEFING DE VOZ · AGORA</small>
            <div className="wb-eye-library">
              <button type="button" className="wb-eye-library-trigger" onClick={() => setEyeShelfOpen(value => !value)} aria-expanded={eyeShelfOpen} aria-controls="wb-eye-shelf"><span className={`wb-eye-thumb wb-thumb-${eyeStyle}`} /><span><b>{currentEye.label}</b><small>{currentEye.variant}</small></span><em>{eyeShelfOpen ? "‹" : "›"}</em></button>
              <div id="wb-eye-shelf" className={`wb-eye-shelf ${eyeShelfOpen ? "open" : ""}`} aria-label="Biblioteca de olhos">
                <div className="wb-eye-shelf-head"><span>Biblioteca de olhos</span><small>{availableEyes.length} opções</small></div>
                <div className="wb-eye-options">
                  {availableEyes.map(item => <button type="button" key={item.id} className={eyeStyle === item.id ? "active" : ""} onClick={() => { setEyeStyle(item.id); setEyeShelfOpen(false); }}><span className={`wb-eye-thumb wb-thumb-${item.id}`} /><span><b>{item.label}</b><small>{item.variant}</small></span><em>›</em></button>)}
                </div>
              </div>
            </div>
            <FridayEyeReactive eyeStyle={eyeStyle} text={responseText} />
          </div>
          <div className="wb-modules">
            <h3>WISE</h3><small>MÓDULOS OPERACIONAIS</small>
            {modules.map((item,i)=><button key={item}><span>{["◎","▣","△","⚙","▤","▱","□","⚙"][i]}</span><b>{item}</b><em>›</em></button>)}
          </div>
          <div className="wb-response-box"><div><span className="wb-response-live"/><b>{currentEye.label} · resposta</b><button className="wb-briefing" onClick={() => setBriefing(v => !v)}>{briefing ? "Pausar" : "Ouvir"}</button></div><p>{responseText}</p></div>
          {isOwner && <div className="wb-lock">🔒 Personalização visível apenas para o proprietário.</div>}
        </aside>

        <main className="wb-stage">
          <div className="wb-photo" aria-label="Globo e mapa mundial imersivos" />
          <div className="wb-ambient-particles" aria-hidden>{Array.from({length:14}).map((_,i)=><b key={i}/>)}</div>
          <div className="wb-country-command">
            <label htmlFor="wb-country-search">Foco geográfico</label>
            <div><input id="wb-country-search" value={countryQuery} onChange={event => setCountryQuery(event.target.value)} placeholder="Digite Alemanha, Estados Unidos..."/><button type="button" onClick={() => { setSelectedCountry(null); setCountryQuery(""); }}>Giro livre</button></div>
            {countryMatches.length > 0 && countryQuery !== activeCountry?.name && <div className="wb-country-results">{countryMatches.map(item => <button type="button" key={item.code} onClick={() => { setSelectedCountry(item.code); setCountryQuery(item.name); }}><span>{item.code.toUpperCase()}</span>{item.name}<em>›</em></button>)}</div>}
          </div>
          <div className="wb-geo-mode" role="group" aria-label="Visualização geográfica"><button className={geoMode === "cinematic" ? "active" : ""} onClick={() => setGeoMode("cinematic")}>Cinemático</button><button className={geoMode === "satellite" ? "active" : ""} onClick={() => setGeoMode("satellite")}>Satélite</button><button className={geoMode === "live" ? "active" : ""} onClick={() => setGeoMode("live")}>Mapa vivo</button><button className={geoMode === "atlas" ? "active" : ""} onClick={() => setGeoMode("atlas")}>Atlas</button></div>
          {geoMode !== "live" ? <>
            <div className={`wb-cinematic-globe ${geoMode === "cinematic" ? "wb-holographic" : geoMode === "atlas" ? "wb-atlas" : "wb-satellite"} ${activeCountry ? "focused" : ""}`} style={focusStyle}><MapZone countries={COUNTRIES} selected={selectedCountry} onSelect={selectCountry} onViewportChange={setSharedViewport} markerVariant={geoMode === "satellite" ? "satellite" : "holographic"} immersive projection="globe" stylePreset={geoMode === "atlas" ? "night" : "satellite"} showArcs={geoMode === "atlas"} hideChrome/><span className="wb-holo-scan" aria-hidden/><span className="wb-globe telemetry" aria-hidden><b>ORBITAL</b><small>LIVE · 3D</small></span><i/><i/></div>
            <div className={`wb-cinematic-map ${geoMode === "cinematic" ? "wb-holographic" : geoMode === "atlas" ? "wb-atlas" : "wb-satellite"} ${activeCountry ? "focused" : ""}`} style={focusStyle}><MapZone countries={COUNTRIES} selected={selectedCountry} onSelect={selectCountry} viewport={sharedViewport} markerVariant={geoMode === "satellite" ? "satellite" : "holographic"} immersive projection="mercator" stylePreset={geoMode === "atlas" ? "night" : geoMode === "cinematic" ? "satellite" : "google"} showArcs={geoMode === "atlas"} hideChrome/><div className="wb-cine-links" aria-hidden>{Array.from({length:7}).map((_,i)=><i key={i}/>)}</div><span className="wb-holo-depth" aria-hidden/><div className="wb-map-legend" aria-label="Legenda dos países"><span className="crit">CRÍTICO</span><span className="warn">ATENÇÃO</span><span className="stable">ESTÁVEL</span></div></div>
          </> : <>
            <div className="wb-live-globe"><MapZone countries={COUNTRIES} selected={selectedCountry} onSelect={selectCountry} immersive projection="globe" stylePreset="dark" /></div>
            <div className="wb-live-map"><MapZone countries={COUNTRIES} selected={selectedCountry} onSelect={selectCountry} immersive projection="mercator" stylePreset="dark" /></div>
          </>}
          <button className="wb-meridian">{activeCountry?.name ?? "MERIDIAN"}</button>
          <div className="wb-stage-metrics">
            <span><b>{summary.critical}</b> críticos</span><span><b>{summary.warning}</b> atenção</span><span><b>{summary.events}</b> leituras</span>
          </div>
        </main>

        <aside className="wb-insights">
          <div className="wb-phoenix-panel" aria-label="Olho Friday Fênix"><div className="wb-phoenix-eye"/><span>FRIDAY SENTINEL</span><small>VIGILÂNCIA SISTÊMICA ATIVA</small></div>
          <div className="wb-reading-wheel">
            {readings.map(item => <button key={item} className={reading === item ? "active" : ""} onClick={() => setReading(item)}><span>{item === "PAÍS" ? "◎" : item === "FONTES" ? "◉" : "▤"}</span>{item}</button>)}
          </div>
          <article className="wb-verdict">
            <h3>{reading}</h3><small>{reading === "PARECER" ? "Síntese e recomendação" : "Leitura conectada"}</small>
            <h4>SITUAÇÃO</h4><p>{summary.warning + summary.critical} países exigem atenção na base atual do Watch Tower.</p>
            <h4>ANÁLISE</h4><p>Os indicadores refletem exclusivamente os registros carregados no sistema; nenhuma leitura simulada foi adicionada.</p>
            <h4>RECOMENDAÇÃO</h4><p>Abra o país ou a fonte correspondente antes de registrar uma decisão operacional.</p>
            <button>VER DETALHES COMPLETOS ›</button>
          </article>
          <article className="wb-brain-benchmark">
            {activeCountry ? <>
              <div className="wb-benchmark-image" style={activeCountry.imageUrl ? { backgroundImage: `linear-gradient(0deg,rgba(2,8,14,.92),transparent 60%),url(${activeCountry.imageUrl})` } : undefined}><span>{activeCountry.code.toUpperCase()}</span><b>{activeCountry.name}</b></div>
              <div className="wb-benchmark-copy"><small>BENCHMARK ATIVO</small><p>{activeCountry.summary ?? `${activeCountry.events.length} registros disponíveis no Watch Tower.`}</p><dl><dt>Autoridade</dt><dd>{activeCountry.authority}</dd><dt>Eventos</dt><dd>{activeCountry.events.length}</dd></dl></div>
            </> : <div className="wb-benchmark-empty"><span>◎</span><b>Benchmark geográfico</b><p>Selecione ou solicite um país para abrir sua imagem, panorama e fontes.</p></div>}
          </article>
        </aside>
      </div>

      <footer className="wb-timeline"><b>LINHA DO TEMPO<small>ATIVIDADES GLOBAIS</small></b>{[
        ["09:15","Conselho de Segurança da ONU"],["09:28","Mercados globais"],["09:31","Alerta de risco"],["09:37","Atualização de fonte"],["09:40","Decisão registrada"]
      ].map(([time,label],i)=><div key={time}><i className={`c${i}`} /><strong>{time}</strong><span>{label}</span></div>)}</footer>
    </section>
  );
}
