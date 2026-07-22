"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { COUNTRIES } from "@/lib/data";

const MapZone = dynamic(() => import("./MapZone"), { ssr: false });

const OWNER_EMAIL = "hzfarah.wisehub@gmail.com";
const PARTNER_ACCESS_ENABLED = process.env.NEXT_PUBLIC_WT_BRAIN_PARTNERS === "1";
// Dois apps, dois perfis (regra do Hammis, 2026-07-20): a FRIDAY é dele e o WISE é
// dos sócios. Ele entra SEMPRE como Friday; o botão WISE existe pra ele entrar na
// PELE DO SÓCIO e testar a usabilidade que eles têm (qual tela veem, que problema
// sentem). O DUAL foi removido: não fazia nada e ele não quer botão morto.
const BRAIN_ACCESS_URL = "/api/brain/access";
const BRAIN_CONNECTIONS_KEY = "wt-brain-connections-v1";
const BRAIN_MESSAGE_ORIGIN = "https://wise.wisehubnow.online";
type BrainMode = "FRIDAY" | "WISE";
type BrainView = "clean" | "sentient" | "classic";
type BrainConnections = Record<BrainMode, boolean>;

const sharedViews: ReadonlyArray<{ id: BrainView; label: string; detail: string }> = [
  { id: "clean", label: "Olho azul", detail: "núcleo limpo" },
  { id: "sentient", label: "Olho sentiente", detail: "presença completa" },
];
const fridayViews: ReadonlyArray<{ id: BrainView; label: string; detail: string }> = [
  ...sharedViews,
  { id: "classic", label: "Painel Friday", detail: "exclusivo" },
];

export function SpatialCommandCenter() {
  const { data: session } = useSession();
  const isOwner = session?.user?.email?.toLowerCase() === OWNER_EMAIL;
  const connectionStorageKey = `${BRAIN_CONNECTIONS_KEY}:${session?.user?.email?.toLowerCase() ?? "anonymous"}`;
  const [mode, setMode] = useState<BrainMode>(isOwner ? "FRIDAY" : "WISE");
  const [brainViews, setBrainViews] = useState<Record<BrainMode, BrainView>>({
    FRIDAY: "clean",
    WISE: "clean",
  });
  const [brainConnections, setBrainConnections] = useState<BrainConnections>({
    FRIDAY: true,
    WISE: true,
  });
  const [brainSessionReady, setBrainSessionReady] = useState(false);
  const visual = "meridian";
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [countryQuery, setCountryQuery] = useState("");
  const [geoMode, setGeoMode] = useState<"cinematic" | "satellite" | "live" | "atlas">("cinematic");
  // NÃO sincronizar viewport globo→mapa continuamente: o globo gira sozinho e o
  // easeTo re-disparado a cada frame deixava o mapa de baixo em animação eterna,
  // com marcadores defasados "flutuando" fora dos países (bug reportado pelo
  // Hammis). A seleção de país já foca os dois mapas via prop `selected`.
  // ENCAIXE NA TELA (site e app): o CSS usava 100vh-40px, mas o app tem ~200px de
  // cabeçalho ACIMA do painel → estourava a tela 16:9 (globo cortado em cima, mapa
  // vazando embaixo). Aqui medimos a posição REAL do painel e fixamos a altura pra
  // caber exata no viewport, onde quer que ele esteja montado.
  const rootRef = useRef<HTMLElement>(null);
  const ownerModeInitializedRef = useRef(false);
  const connectionInitializedRef = useRef(false);
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const fit = () => {
      const top = el.getBoundingClientRect().top + window.scrollY;
      const h = Math.max(560, window.innerHeight - top - 10);
      el.style.height = `${h}px`;
      el.style.minHeight = "560px";
    };
    fit();
    window.addEventListener("resize", fit);
    // re-mede depois do primeiro paint (fonts/header assentando)
    const t = setTimeout(fit, 350);
    return () => { window.removeEventListener("resize", fit); clearTimeout(t); };
  }, []);

  useEffect(() => {
    if (isOwner && !ownerModeInitializedRef.current) {
      ownerModeInitializedRef.current = true;
      const params = new URLSearchParams(window.location.search);
      const requestedMode = params.get("brain") === "wise" ? "WISE" : "FRIDAY";
      setMode(requestedMode);
      const requestedView = params.get("brainLayout");
      if (requestedView === "clean" || requestedView === "sentient" || (requestedView === "classic" && requestedMode === "FRIDAY")) {
        setBrainViews(current => ({ ...current, [requestedMode]: requestedView }));
      }
    } else if (session?.user?.email && !isOwner) {
      ownerModeInitializedRef.current = true;
      setMode("WISE");
    }
  }, [isOwner, session?.user?.email]);

  useEffect(() => {
    if (!session?.user?.email || connectionInitializedRef.current) return;
    connectionInitializedRef.current = true;
    let next: BrainConnections = { FRIDAY: true, WISE: true };
    try {
      const saved = localStorage.getItem(connectionStorageKey);
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<BrainConnections>;
        next = {
          FRIDAY: parsed.FRIDAY !== false,
          WISE: parsed.WISE !== false,
        };
      }
      const params = new URLSearchParams(window.location.search);
      if (params.get("brainConnected") === "1") {
        const confirmedMode: BrainMode = isOwner && params.get("brain") === "friday" ? "FRIDAY" : "WISE";
        next[confirmedMode] = true;
      }
      localStorage.setItem(connectionStorageKey, JSON.stringify(next));
    } catch {}
    setBrainConnections(next);
    setBrainSessionReady(true);
  }, [connectionStorageKey, isOwner, session?.user?.email]);

  const updateBrainConnection = (targetMode: BrainMode, connected: boolean) => {
    setBrainConnections(current => {
      const next = { ...current, [targetMode]: connected };
      try { localStorage.setItem(connectionStorageKey, JSON.stringify(next)); } catch {}
      return next;
    });
  };

  useEffect(() => {
    const receiveAuthState = (event: MessageEvent) => {
      if (event.origin !== BRAIN_MESSAGE_ORIGIN || event.data?.type !== "wisehub:brain-auth") return;
      const targetMode: BrainMode = event.data.profile === "friday" ? "FRIDAY" : "WISE";
      if (targetMode === "FRIDAY" && !isOwner) return;
      updateBrainConnection(targetMode, event.data.authenticated === true);
    };
    window.addEventListener("message", receiveAuthState);
    return () => window.removeEventListener("message", receiveAuthState);
  }, [connectionStorageKey, isOwner]);
  const availableViews = mode === "FRIDAY" ? fridayViews : sharedViews;
  const activeView = brainViews[mode];
  const activeProfile = mode === "FRIDAY" ? "friday" : "wise";
  const activeAppName = mode === "FRIDAY" ? "Friday" : "Wise";
  const activeConnected = brainConnections[mode];
  const brainIntent = activeConnected ? "connect" : "logout";
  const activeSessionAction = activeConnected
    ? (mode === "FRIDAY" ? "Sair da Friday" : "Sair do Wise")
    : (mode === "FRIDAY" ? "Entrar na Friday" : "Entrar no Wise");
  const summary = useMemo(() => ({
    critical: COUNTRIES.filter(c => c.status === "crit").length,
    warning: COUNTRIES.filter(c => c.status === "warn").length,
    events: COUNTRIES.reduce((n, c) => n + c.events.length, 0),
  }), []);
  const activeCountry = selectedCountry ? COUNTRIES.find(item => item.code === selectedCountry) ?? null : null;
  const activeCoords = activeCountry?.coords ?? [0, 0];
  const focusStyle = { "--focus-x": `${((activeCoords[1] + 180) / 360) * 100}%`, "--focus-y": `${((90 - activeCoords[0]) / 180) * 100}%` } as CSSProperties;
  // Config de cada modo geográfico (não-live). CINEMÁTICO = Terra noturna real +
  // arcos (o showcase que o Hammis quer). ATLAS = Google Earth (satélite + rótulos).
  // SATÉLITE = satélite puro. Um objeto evita ternário-espaguete no JSX.
  const GEO_CFG = {
    cinematic: { globe: "night", map: "night", cls: "wb-atlas", marker: "holographic" },
    satellite: { globe: "satellite", map: "satellite", cls: "wb-satellite", marker: "satellite" },
    atlas: { globe: "google", map: "google", cls: "wb-satellite", marker: "satellite" },
    // Mapa vivo: o preto CARTO que o Hammis curte. Entra na MESMA config dos outros
    // (sem classe de tratamento visual) pra herdar geometria e comportamento iguais.
    live: { globe: "dark", map: "dark", cls: "wb-live", marker: "default" },
  } as const;
  const geo = GEO_CFG[geoMode as keyof typeof GEO_CFG] ?? GEO_CFG.cinematic;
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

  if (!isOwner && !PARTNER_ACCESS_ENABLED) return <section className="wb-locked" aria-label="Wise Brain bloqueado"><div className="wb-locked-seal"><span>⌾</span><i>🔒</i></div><small>WISEHUB · WATCH TOWER</small><h2>Wise Brain</h2><p>Ambiente de inteligência em preparação. O acesso será liberado após validação do proprietário.</p><div><b>ACESSO PROTEGIDO</b><span>Somente Hammis pode alterar esta permissão.</span></div></section>;

  return (
    <section ref={rootRef} className={`wise-brain wb-visual-${visual} wb-unified-brain`} aria-label={mode === "WISE" ? "Wise Brain" : "Friday Brain"}>
      <header className="wise-brain-topbar">
        {/* Nome segue o MODO (não isOwner): no modo WISE mostra "Wise Brain", no
            FRIDAY mostra "Friday Brain" — antes o dono via sempre "Friday Brain"
            mesmo testando como sócio (Hammis, 2026-07-22). */}
        <div className="wb-brand"><b>{mode === "WISE" ? "Wise Brain" : "Friday Brain"}</b><span>WISEHUB · WATCH TOWER</span></div>
        <div className="wb-unified-controls">
          <div className="wb-control-block wb-view-control">
            <span>Visual</span>
            <div className="wb-view-switcher" role="group" aria-label={`Visual do ${mode}`}>
              {availableViews.map(item => (
                <button type="button" key={item.id} className={activeView === item.id ? "active" : ""} title={item.detail} onClick={() => setBrainViews(current => ({ ...current, [mode]: item.id }))}>
                  <i aria-hidden />{item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="wb-session-actions">
          <div className="wb-live"><span /> LEITURAS REAIS · {COUNTRIES.length} PAÍSES</div>
          <button
            type="button"
            className={`wb-app-session ${activeConnected ? "connected" : "disconnected"}`}
            onClick={() => updateBrainConnection(mode, !activeConnected)}
            aria-label={activeSessionAction}
            aria-pressed={activeConnected}
            disabled={!brainSessionReady}
          >
            <svg viewBox="0 0 24 24" aria-hidden><path d="M12 3v9M7.2 6.8a7 7 0 1 0 9.6 0" /></svg>
            <span><small>Sessão {activeAppName}</small>{activeSessionAction}</span>
          </button>
        </div>
      </header>

      <div className="wise-brain-body">
        <nav className="wb-rail" aria-label="Alternar aplicativo">
          {isOwner && (
            <button type="button" className={mode === "FRIDAY" ? "active" : ""} data-connected={brainConnections.FRIDAY} aria-pressed={mode === "FRIDAY"} title="Abrir Friday" onClick={() => setMode("FRIDAY")}>
              <b><img src="/wise-brain/friday-helmet.png" alt="" className="wb-rail-ico" /></b>
              <small>FRIDAY<i aria-label={brainConnections.FRIDAY ? "conectada" : "desconectada"} /></small>
            </button>
          )}
          <button type="button" className={mode === "WISE" ? "active" : ""} data-connected={brainConnections.WISE} aria-pressed={mode === "WISE"} title={isOwner ? "Abrir Wise como sócio" : "Abrir Wise"} onClick={() => setMode("WISE")}>
            <b><img src="/wise-brain/logo-wise-w.png" alt="" className="wb-rail-ico" /></b>
            <small>WISE<i aria-label={brainConnections.WISE ? "conectado" : "desconectado"} /></small>
          </button>
        </nav>

        <aside className="wb-assistant">
          <div className="wb-friday">
            <div className="wb-section-title"><b>{mode === "FRIDAY" ? "Friday Sentient" : "Wise Sentient"}</b><span className={activeConnected ? "connected" : "disconnected"}><i /> {activeConnected ? "conectado" : "desconectado"}</span></div>
            <small>{isOwner && mode === "WISE" ? "VISÃO DO SÓCIO · TESTE DE USABILIDADE" : "CONVERSA AO VIVO · VOZ + IA"}</small>
            {brainSessionReady ? (
              <iframe
                key={`${mode}-${activeView}-${brainIntent}`}
                className="wb-brain-embed"
                src={`${BRAIN_ACCESS_URL}?perfil=${activeProfile}&layout=${activeView}&embed=1&intent=${brainIntent}`}
                title={mode === "WISE" ? `Wise · ${availableViews.find(item => item.id === activeView)?.label}` : `Friday · ${availableViews.find(item => item.id === activeView)?.label}`}
                referrerPolicy="no-referrer"
                allow="microphone; autoplay; clipboard-write; camera"
              />
            ) : <div className="wb-brain-session-loading" role="status">Preparando sessão do {activeAppName}…</div>}
          </div>
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
          {/* UM caminho só pros QUATRO modos. O "Mapa vivo" tinha um ramo separado
              (.wb-live-globe/.wb-live-map) que nem passava hideChrome/fitCountries/
              markerVariant — por isso nascia com controles de zoom, enquadramento e
              tamanho diferentes dos outros. Regra do Hammis (2026-07-20): "o layout
              não muda nada, só o tipo do mapa e o tipo do globo". Agora é isso. */}
          <div className={`wb-cinematic-globe ${geo.cls} ${activeCountry ? "focused" : ""}`} style={focusStyle}><MapZone countries={COUNTRIES} selected={selectedCountry} onSelect={selectCountry} markerVariant={geo.marker} immersive projection="globe" stylePreset={geo.globe} spinPausesOnSelect hideChrome/><span className="wb-holo-scan" aria-hidden/><i/><i/></div>
          <div className={`wb-cinematic-map ${geo.cls} ${activeCountry ? "focused" : ""}`} style={focusStyle}><MapZone countries={COUNTRIES} selected={selectedCountry} onSelect={selectCountry} markerVariant={geo.marker} immersive projection="mercator" stylePreset={geo.map} fitCountries hideChrome/><span className="wb-holo-depth" aria-hidden/><div className="wb-map-legend" aria-label="Legenda dos países"><span className="crit">CRÍTICO</span><span className="warn">ATENÇÃO</span><span className="stable">ESTÁVEL</span></div></div>
          <button className="wb-meridian">{activeCountry?.name ?? "MERIDIAN"}</button>
          <div className="wb-stage-metrics">
            <span><b>{summary.critical}</b> críticos</span><span><b>{summary.warning}</b> atenção</span><span><b>{summary.events}</b> leituras</span>
          </div>
        </main>

        <aside className="wb-insights">
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
