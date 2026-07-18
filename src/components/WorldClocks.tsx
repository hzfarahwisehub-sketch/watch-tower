"use client";
// Aba "Relógios" — relógios metálicos ao vivo dos 41 países monitorados, na
// ordem canônica do COUNTRIES (América, Europa, Ásia/Oceania). Clicar num
// relógio abre a tela do país (relógio grande + clima ao vivo + cidades).
// Mostrador customizável (Pérola/Ônix/Ouro/Azul). Clima via /api/weather
// (Open-Meteo, falha graciosa). Hora calculada do fuso IANA de cada lugar.
import { useEffect, useMemo, useRef, useState } from "react";
import { COUNTRIES } from "@/lib/data";
import { WORLD_CLOCKS, weatherMeta } from "@/lib/world-clocks";

type ThemeKey = "perola" | "onix" | "ouro" | "azul";
interface Theme {
  label: string;
  tone: "light" | "dark";
  dialBg: string;
  minor: string;
  major: string;
  num: string;
  hand: string;
  sec: string;
  hub: string;
}
const THEMES: Record<ThemeKey, Theme> = {
  perola: { label: "Pérola", tone: "light", minor: "rgba(70,80,102,.5)", major: "url(#wtclk-goldGrad)", num: "#39445c", hand: "gunmetalGrad", sec: "bluedGrad", hub: "hubSteel",
    dialBg: "conic-gradient(from 20deg,rgba(255,182,222,.10),rgba(182,222,255,.10),rgba(200,255,222,.10),rgba(255,242,182,.10),rgba(255,182,222,.10)),radial-gradient(circle at 40% 30%,#ffffff 0%,#f2f4f9 38%,#e2e6ee 68%,#cdd4e0 100%)" },
  onix: { label: "Ônix", tone: "dark", minor: "rgba(190,205,235,.42)", major: "url(#wtclk-goldGrad)", num: "#c6d0e6", hand: "steelGrad", sec: "redGrad", hub: "hubGold",
    dialBg: "radial-gradient(circle at 50% 30%,#26355c 0%,#14203f 40%,#0a1128 70%,#050a17 100%)" },
  ouro: { label: "Ouro", tone: "light", minor: "rgba(120,95,40,.5)", major: "url(#wtclk-goldGrad)", num: "#6b551f", hand: "goldHandGrad", sec: "redGrad", hub: "hubGold",
    dialBg: "radial-gradient(circle at 40% 30%,#fdf7e6 0%,#f1e6c6 42%,#dcc891 74%,#c2a95f 100%)" },
  azul: { label: "Azul", tone: "dark", minor: "rgba(215,228,255,.5)", major: "url(#wtclk-silverGrad)", num: "#dbe6ff", hand: "silverGrad", sec: "redGrad", hub: "hubSteel",
    dialBg: "repeating-conic-gradient(from 0deg,rgba(255,255,255,.045) 0 1.5deg,transparent 1.5deg 3deg),radial-gradient(circle at 45% 33%,#2f62d6 0%,#1741a2 52%,#0b2568 100%)" },
};

const CLOCKS = COUNTRIES.filter((c) => WORLD_CLOCKS[c.code]).map((c) => ({ code: c.code, name: c.name, ...WORLD_CLOCKS[c.code]! }));

const p2 = (n: number) => (n < 10 ? "0" : "") + n;
function flagCode(cc: string) { return (cc === "uk" ? "gb" : cc).toUpperCase(); }
function offMin(tz: string, d: Date): number {
  const f = new Intl.DateTimeFormat("en-US", { timeZone: tz, hour12: false, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" });
  const p: Record<string, string> = {};
  for (const x of f.formatToParts(d)) p[x.type] = x.value;
  const h = p.hour === "24" ? 0 : +p.hour;
  return Math.round((Date.UTC(+p.year, +p.month - 1, +p.day, h, +p.minute, +p.second) - d.getTime()) / 60000);
}
function offLabel(m: number) { const s = m < 0 ? "-" : "+"; const a = Math.abs(m); return "UTC" + s + Math.floor(a / 60) + (a % 60 ? ":" + p2(a % 60) : ""); }

function marks(big: boolean, th: Theme): string {
  let m = "";
  for (let i = 0; i < 60; i++) {
    const a = (i * 6 * Math.PI) / 180;
    if (i % 5 === 0) {
      const x1 = 50 + 37 * Math.sin(a), y1 = 50 - 37 * Math.cos(a), x2 = 50 + 44 * Math.sin(a), y2 = 50 - 44 * Math.cos(a);
      m += `<line x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}" stroke="${th.major}" stroke-width="2.4" stroke-linecap="round"/>`;
    } else {
      const x3 = 50 + 41.5 * Math.sin(a), y3 = 50 - 41.5 * Math.cos(a), x4 = 50 + 44.5 * Math.sin(a), y4 = 50 - 44.5 * Math.cos(a);
      m += `<line x1="${x3.toFixed(2)}" y1="${y3.toFixed(2)}" x2="${x4.toFixed(2)}" y2="${y4.toFixed(2)}" stroke="${th.minor}" stroke-width="0.7"/>`;
    }
  }
  if (big) for (let h = 1; h <= 12; h++) { const a = (h * 30 * Math.PI) / 180, x = 50 + 29.5 * Math.sin(a), y = 50 - 29.5 * Math.cos(a); m += `<text x="${x.toFixed(2)}" y="${(y + 2.6).toFixed(2)}" text-anchor="middle" font-family="'Chakra Petch',sans-serif" font-weight="600" font-size="6.6" fill="${th.num}">${h}</text>`; }
  return m;
}
function hands(th: Theme): string {
  return `<g class="hh"><polygon points="50,27.5 51.6,33.5 50.95,52.5 49.05,52.5 48.4,33.5" fill="url(#wtclk-${th.hand})" filter="url(#wtclk-handShadow)"/></g>` +
    `<g class="mh"><polygon points="50,17 51.1,26.5 50.6,53.5 49.4,53.5 48.9,26.5" fill="url(#wtclk-${th.hand})" filter="url(#wtclk-handShadow)"/></g>` +
    `<g class="sh"><line x1="50" y1="61" x2="50" y2="14.5" stroke="url(#wtclk-${th.sec})" stroke-width="1.05" stroke-linecap="round" filter="url(#wtclk-handShadow)"/><circle cx="50" cy="61" r="2.3" fill="url(#wtclk-${th.sec})"/></g>` +
    `<circle cx="50" cy="50" r="3.6" fill="url(#wtclk-${th.hub})"/><circle cx="50" cy="50" r="1.5" fill="#0a1022"/><circle cx="48.6" cy="48.6" r="0.7" fill="rgba(255,255,255,.75)"/>`;
}
function Clock({ big, theme }: { big?: boolean; theme: Theme }) {
  return (
    <div className="wt-cl-clk" data-tone={theme.tone}>
      <div className="wt-cl-bezel"><div className="wt-cl-bezel2">
        <div className="wt-cl-dial" style={{ background: theme.dialBg }}>
          <svg className="wt-cl-svg" viewBox="0 0 100 100" dangerouslySetInnerHTML={{ __html: marks(!!big, theme) + hands(theme) }} />
          <div className="wt-cl-glass" />
        </div>
      </div></div>
    </div>
  );
}

const DEFS = `<defs>
<linearGradient id="wtclk-steelGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#565d6b"/><stop offset=".18" stop-color="#ccd3df"/><stop offset=".5" stop-color="#f8fafe"/><stop offset=".82" stop-color="#ccd3df"/><stop offset="1" stop-color="#4c5361"/></linearGradient>
<linearGradient id="wtclk-gunmetalGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#171c27"/><stop offset=".2" stop-color="#39424f"/><stop offset=".5" stop-color="#aab4c4"/><stop offset=".8" stop-color="#39424f"/><stop offset="1" stop-color="#12161f"/></linearGradient>
<linearGradient id="wtclk-goldHandGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#7c5f1a"/><stop offset=".5" stop-color="#f6e6a6"/><stop offset="1" stop-color="#8a6a1a"/></linearGradient>
<linearGradient id="wtclk-silverGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#5b6270"/><stop offset=".5" stop-color="#f0f3f8"/><stop offset="1" stop-color="#565d6b"/></linearGradient>
<linearGradient id="wtclk-redGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff8f81"/><stop offset=".45" stop-color="#f4483a"/><stop offset="1" stop-color="#a81409"/></linearGradient>
<linearGradient id="wtclk-bluedGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6f97ff"/><stop offset=".5" stop-color="#2f5bd6"/><stop offset="1" stop-color="#132f86"/></linearGradient>
<linearGradient id="wtclk-goldGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fbe9a6"/><stop offset=".5" stop-color="#e0b845"/><stop offset="1" stop-color="#9c771c"/></linearGradient>
<radialGradient id="wtclk-hubGold" cx="38%" cy="32%" r="72%"><stop offset="0" stop-color="#fdf1c0"/><stop offset=".5" stop-color="#dcb64a"/><stop offset="1" stop-color="#7f611a"/></radialGradient>
<radialGradient id="wtclk-hubSteel" cx="38%" cy="32%" r="72%"><stop offset="0" stop-color="#f4f7fb"/><stop offset=".5" stop-color="#99a2b1"/><stop offset="1" stop-color="#474e5c"/></radialGradient>
<filter id="wtclk-handShadow" x="-40%" y="-40%" width="180%" height="180%"><feDropShadow dx="0.5" dy="1.5" stdDeviation="0.85" flood-color="#000" flood-opacity="0.5"/></filter>
</defs>`;

const DOW = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
const MON = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

export function WorldClocks() {
  const [theme, setTheme] = useState<ThemeKey>("perola");
  const [open, setOpen] = useState<string | null>(null);
  const [weather, setWeather] = useState<Record<string, { temp: number; code: number }>>({});
  const rootRef = useRef<HTMLDivElement>(null);
  const offCache = useRef(new Map<string, number>());

  useEffect(() => {
    try { const v = localStorage.getItem("wt-clocks-theme"); if (v === "perola" || v === "onix" || v === "ouro" || v === "azul") setTheme(v); } catch {}
  }, []);
  const changeTheme = (k: ThemeKey) => { setTheme(k); try { localStorage.setItem("wt-clocks-theme", k); } catch {} };

  useEffect(() => {
    let alive = true;
    fetch("/api/weather").then((r) => (r.ok ? r.json() : { weather: {} })).then((d) => { if (alive) setWeather(d.weather ?? {}); }).catch(() => {});
    return () => { alive = false; };
  }, []);

  // Loop dos ponteiros: manipula o DOM direto (sem re-render do React), lendo o
  // fuso de cada card em data-tz. Offsets em cache, renovados a cada 60s (DST).
  useEffect(() => {
    const getOff = (tz: string, now: Date) => {
      let o = offCache.current.get(tz);
      if (o === undefined) { o = offMin(tz, now); offCache.current.set(tz, o); }
      return o;
    };
    let raf = 0;
    const frame = () => {
      const root = rootRef.current;
      if (root) {
        const now = new Date();
        root.querySelectorAll<HTMLElement>("[data-tz]").forEach((el) => {
          const tz = el.dataset.tz!;
          const d = new Date(now.getTime() + getOff(tz, now) * 60000);
          const h = d.getUTCHours(), m = d.getUTCMinutes(), s = d.getUTCSeconds(), ms = d.getUTCMilliseconds();
          const hh = el.querySelector(".hh"), mh = el.querySelector(".mh"), sh = el.querySelector(".sh");
          if (hh) hh.setAttribute("transform", `rotate(${(((h % 12) + m / 60) * 30).toFixed(2)} 50 50)`);
          if (mh) mh.setAttribute("transform", `rotate(${((m + s / 60) * 6).toFixed(2)} 50 50)`);
          if (sh) sh.setAttribute("transform", `rotate(${((s + ms / 1000) * 6).toFixed(2)} 50 50)`);
          const dig = el.querySelector(".wt-cl-dig");
          if (dig) dig.textContent = el.dataset.short ? `${p2(h)}:${p2(m)}` : `${p2(h)}:${p2(m)}:${p2(s)}`;
        });
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    const iv = setInterval(() => offCache.current.clear(), 60000);
    return () => { cancelAnimationFrame(raf); clearInterval(iv); };
  }, []);

  const th = THEMES[theme];
  const grouped = useMemo(() => {
    const out: { region: string; items: typeof CLOCKS }[] = [];
    for (const c of CLOCKS) {
      const last = out[out.length - 1];
      if (last && last.region === c.region) last.items.push(c);
      else out.push({ region: c.region, items: [c] });
    }
    return out;
  }, []);

  const openCountry = open ? CLOCKS.find((c) => c.code === open) : null;
  const idx = openCountry ? CLOCKS.findIndex((c) => c.code === open) : -1;

  return (
    <section className="wt-card h-full flex flex-col overflow-hidden">
      <style>{CLOCK_CSS}</style>
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden dangerouslySetInnerHTML={{ __html: DEFS }} />

      <div className="wt-cl-hd">
        <div>
          <h2 className="wt-cl-title">Relógios do Mundo</h2>
          <div className="wt-cl-sub">41 países monitorados · hora local ao vivo</div>
        </div>
        <div className="wt-cl-sel">
          <span className="wt-cl-sellbl">Mostrador</span>
          {(Object.keys(THEMES) as ThemeKey[]).map((k) => (
            <button key={k} type="button" className={`wt-cl-thbtn ${theme === k ? "on" : ""}`} onClick={() => changeTheme(k)}>
              {THEMES[k].label}
            </button>
          ))}
          <span className="wt-cl-live"><span className="wt-cl-p" />AO VIVO</span>
        </div>
      </div>

      <div className="wt-cl-body" ref={rootRef}>
        {!openCountry && grouped.map((g) => (
          <div key={g.region}>
            <div className="wt-cl-reg">{g.region}</div>
            <div className="wt-cl-grid">
              {g.items.map((c) => {
                const w = weather[c.code];
                const wm = w ? weatherMeta(w.code) : null;
                return (
                  <button key={c.code} type="button" className="wt-cl-cardbtn" data-tz={c.tz} onClick={() => setOpen(c.code)}>
                    <span className="wt-cl-code">{flagCode(c.code)}</span>
                    <Clock theme={th} />
                    <div className="wt-cl-nm">{c.name}</div>
                    <div className="wt-cl-dig">--:--:--</div>
                    <div className="wt-cl-meta"><span className="wt-cl-off">{offLabel(offMin(c.tz, new Date()))}</span>{wm && <span className="wt-cl-w">{wm.icon} {w!.temp}°</span>}</div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {openCountry && (() => {
          const c = openCountry;
          const w = weather[c.code];
          const wm = w ? weatherMeta(w.code) : null;
          const od = new Date(new Date().getTime() + offMin(c.tz, new Date()) * 60000);
          const cities = c.cities ?? [{ name: c.capital, tz: c.tz }];
          const prev = idx > 0 ? CLOCKS[idx - 1] : null;
          const next = idx < CLOCKS.length - 1 ? CLOCKS[idx + 1] : null;
          return (
            <div>
              <div className="wt-cl-dtop">
                <button type="button" className="wt-cl-back" onClick={() => setOpen(null)}>‹ voltar aos relógios</button>
                <div className="wt-cl-dnav">
                  <button type="button" className="wt-cl-nb" disabled={!prev} onClick={() => prev && setOpen(prev.code)} aria-label="País anterior">‹</button>
                  <button type="button" className="wt-cl-nb" disabled={!next} onClick={() => next && setOpen(next.code)} aria-label="Próximo país">›</button>
                </div>
              </div>
              <div className="wt-cl-hero">
                <div data-tz={c.tz}><Clock big theme={th} /></div>
                <div className="wt-cl-dinfo">
                  <div className="wt-cl-dcode">{flagCode(c.code)} · {c.region} · {c.tz}</div>
                  <div className="wt-cl-dname">{c.name}</div>
                  <div className="wt-cl-dcap">{c.capital} · capital · {od.getUTCHours() >= 6 && od.getUTCHours() < 19 ? "☀️ dia" : "🌙 noite"}</div>
                  <div className="wt-cl-dbig" data-tz={c.tz}><span className="wt-cl-dig">--:--:--</span></div>
                  <div className="wt-cl-ddate">{DOW[od.getUTCDay()]}, {od.getUTCDate()} de {MON[od.getUTCMonth()]} de {od.getUTCFullYear()}</div>
                  <span className="wt-cl-doff">{offLabel(offMin(c.tz, new Date()))}</span>
                </div>
              </div>

              <div className="wt-cl-wx">
                <div className="wt-cl-wxbig">
                  <span className="wt-cl-ic">{wm ? wm.icon : "•"}</span>
                  <div><div className="wt-cl-tp">{w ? `${w.temp}°C` : "—"}</div><div className="wt-cl-cn">{wm ? wm.label : "clima indisponível"} · ao vivo (Open-Meteo)</div></div>
                </div>
              </div>

              <div className="wt-cl-seclbl">Cidades de {c.name}</div>
              <div className="wt-cl-cities">
                {cities.map((ct, i) => (
                  <div key={i} className="wt-cl-cc" data-tz={ct.tz} data-short="1">
                    <Clock theme={th} />
                    <div className="wt-cl-cnm">{ct.name}</div>
                    <div className="wt-cl-dig wt-cl-cdig">--:--</div>
                  </div>
                ))}
              </div>
              <div className="wt-cl-note">Hora calculada do fuso de cada lugar, ao vivo. Cidades no mesmo fuso mostram a mesma hora. Clima atual via Open-Meteo (atualiza a cada ~15 min).</div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}

const CLOCK_CSS = `
.wt-cl-hd{display:flex;align-items:center;gap:14px;padding:14px 18px;border-bottom:1px solid rgba(120,150,255,.14);flex-wrap:wrap;flex-shrink:0}
.wt-cl-title{font-family:'Chakra Petch','Sora',sans-serif;font-weight:700;font-size:18px;letter-spacing:.5px;margin:0;text-transform:uppercase;background:linear-gradient(180deg,#fff,#c6d3f2 55%,#e9c55c 130%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.wt-cl-sub{font-size:11px;color:#7c8db0;letter-spacing:.4px;margin-top:1px}
.wt-cl-sel{margin-left:auto;display:flex;align-items:center;gap:7px;flex-wrap:wrap}
.wt-cl-sellbl{font-family:'Chakra Petch',sans-serif;font-size:10px;font-weight:700;letter-spacing:1.5px;color:#7c8db0;text-transform:uppercase}
.wt-cl-thbtn{font-family:'Chakra Petch',sans-serif;font-size:10px;font-weight:600;letter-spacing:.5px;padding:5px 10px;border-radius:9px;cursor:pointer;color:#aebcdc;background:linear-gradient(180deg,rgba(30,42,74,.5),rgba(12,18,34,.7));border:1px solid rgba(120,150,255,.2);transition:.15s}
.wt-cl-thbtn:hover{border-color:rgba(120,160,255,.5);color:#fff}
.wt-cl-thbtn.on{color:#0a1020;background:linear-gradient(180deg,#e7ecff,#b9c8ee);border-color:#cdd8f5}
.wt-cl-live{display:inline-flex;align-items:center;gap:7px;font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;letter-spacing:1px;color:#5fe6ff}
.wt-cl-p{width:8px;height:8px;border-radius:50%;background:#5fe6ff;box-shadow:0 0 10px #5fe6ff;animation:wtclpl 1.7s ease-in-out infinite}
@keyframes wtclpl{0%,100%{opacity:1}50%{opacity:.3}}
.wt-cl-body{flex:1;overflow:auto;padding:18px;background:radial-gradient(900px 460px at 12% -12%,#15224a 0%,rgba(8,12,26,0) 55%),linear-gradient(180deg,#0a1020 0%,#060a15 100%)}
.wt-cl-reg{font-family:'Chakra Petch',sans-serif;font-weight:700;font-size:11px;letter-spacing:2.5px;text-transform:uppercase;color:#7c8db0;margin:6px 2px 12px;display:flex;align-items:center;gap:10px}
.wt-cl-reg::after{content:'';flex:1;height:1px;background:linear-gradient(90deg,rgba(120,150,255,.25),transparent)}
.wt-cl-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(168px,1fr));gap:20px;margin-bottom:8px}
.wt-cl-cardbtn{position:relative;border-radius:18px;padding:20px 14px 14px;display:flex;flex-direction:column;align-items:center;cursor:pointer;transition:transform .2s,box-shadow .2s;background:linear-gradient(160deg,rgba(26,37,66,.6),rgba(9,14,28,.78));border:1px solid rgba(120,150,255,.13);box-shadow:inset 0 1px 0 rgba(255,255,255,.05),inset 0 -20px 34px rgba(0,0,0,.4),0 10px 26px -14px rgba(0,0,0,.7);font:inherit;color:inherit;text-align:center}
.wt-cl-cardbtn:hover{transform:translateY(-5px);box-shadow:inset 0 1px 0 rgba(255,255,255,.08),0 24px 46px -16px rgba(0,0,0,.85),0 0 0 1px rgba(120,160,255,.22)}
.wt-cl-code{position:absolute;top:11px;left:12px;font-family:'JetBrains Mono',monospace;font-weight:700;font-size:9px;letter-spacing:1.5px;color:#e9c55c;border:1px solid rgba(233,197,92,.32);border-radius:5px;padding:1px 5px;background:linear-gradient(180deg,rgba(233,197,92,.14),rgba(233,197,92,.04))}
.wt-cl-clk{position:relative;width:118px;height:118px;border-radius:50%}
.wt-cl-hero .wt-cl-clk{width:236px;height:236px}
.wt-cl-cc .wt-cl-clk{width:88px;height:88px}
.wt-cl-bezel{position:absolute;inset:0;border-radius:50%;padding:7.5%;background:radial-gradient(circle at 50% 16%,rgba(255,255,255,.7),rgba(255,255,255,0) 44%),conic-gradient(from 140deg,#f2f5fa,#949cab,#e2e7ef,#767d8c,#eceff5,#8b93a1,#d7dde7,#787f8e,#edf1f7,#9ba3b1,#f2f5fa);box-shadow:0 30px 50px -14px rgba(0,0,0,.9),0 12px 24px -8px rgba(0,0,0,.6),inset 0 3px 4px rgba(255,255,255,.98),inset 0 -9px 16px rgba(0,0,0,.55),inset 0 0 0 1px rgba(255,255,255,.18)}
.wt-cl-bezel2{width:100%;height:100%;border-radius:50%;padding:3.4%;background:conic-gradient(from -40deg,#828a98,#e6eaf0,#767d8c,#c8cfd9,#7f8794,#eef1f6,#767d8c,#b6bdc9,#828a98);box-shadow:inset 0 2px 6px rgba(0,0,0,.72),inset 0 -2px 5px rgba(255,255,255,.55)}
.wt-cl-dial{position:relative;width:100%;height:100%;border-radius:50%;overflow:hidden}
.wt-cl-clk[data-tone=dark] .wt-cl-dial{box-shadow:inset 0 9px 20px rgba(0,0,0,.9),inset 0 -3px 9px rgba(80,110,190,.16)}
.wt-cl-clk[data-tone=light] .wt-cl-dial{box-shadow:inset 0 8px 17px rgba(35,38,58,.26),inset 0 -7px 15px rgba(255,255,255,.7),inset 0 0 0 1px rgba(255,255,255,.35)}
.wt-cl-svg{position:absolute;inset:0;width:100%;height:100%}
.wt-cl-glass{position:absolute;inset:0;border-radius:50%;pointer-events:none}
.wt-cl-clk[data-tone=dark] .wt-cl-glass{background:linear-gradient(120deg,rgba(255,255,255,.28) 0%,rgba(255,255,255,.09) 18%,rgba(255,255,255,0) 40%),radial-gradient(140% 90% at 28% 8%,rgba(255,255,255,.22),transparent 44%)}
.wt-cl-clk[data-tone=light] .wt-cl-glass{background:linear-gradient(122deg,rgba(255,255,255,.55) 0%,rgba(255,255,255,.16) 15%,rgba(255,255,255,0) 33%),radial-gradient(135% 82% at 30% 6%,rgba(255,255,255,.42),transparent 40%);box-shadow:inset 0 2px 3px rgba(255,255,255,.85)}
.wt-cl-nm{font-family:'Chakra Petch',sans-serif;font-weight:600;font-size:13px;text-align:center;line-height:1.12;margin-top:14px;color:#edf2ff;letter-spacing:.3px}
.wt-cl-dig{margin-top:8px;font-family:'JetBrains Mono',monospace;font-weight:700;font-size:15px;letter-spacing:1.5px;color:#8febff;background:linear-gradient(180deg,#0a1426,#050b18);border:1px solid rgba(90,140,220,.3);border-radius:8px;padding:3px 11px;box-shadow:inset 0 1px 3px rgba(0,0,0,.85);text-shadow:0 0 9px rgba(100,225,255,.55)}
.wt-cl-meta{display:flex;align-items:center;gap:9px;margin-top:8px;font-size:10px;color:#7c8db0;font-weight:600}
.wt-cl-off{font-family:'JetBrains Mono',monospace;color:#aebcdc;letter-spacing:.5px}
.wt-cl-w{display:inline-flex;align-items:center;gap:3px}
.wt-cl-dtop{display:flex;align-items:center;gap:12px;margin-bottom:20px}
.wt-cl-back{font-family:'Chakra Petch',sans-serif;font-weight:600;font-size:12px;letter-spacing:.5px;color:#aebcdc;background:linear-gradient(180deg,rgba(30,42,74,.6),rgba(12,18,34,.7));border:1px solid rgba(120,150,255,.22);border-radius:12px;padding:9px 15px;cursor:pointer;transition:.15s}
.wt-cl-back:hover{color:#fff;border-color:rgba(120,160,255,.5)}
.wt-cl-dnav{margin-left:auto;display:flex;gap:9px}
.wt-cl-nb{width:38px;height:38px;border-radius:12px;border:1px solid rgba(120,150,255,.22);background:linear-gradient(180deg,rgba(30,42,74,.6),rgba(12,18,34,.7));color:#aebcdc;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:.15s}
.wt-cl-nb:hover{color:#fff;border-color:#5fe6ff}
.wt-cl-nb:disabled{opacity:.3;cursor:default}
.wt-cl-hero{display:flex;gap:32px;flex-wrap:wrap;align-items:center;border-radius:22px;padding:28px;background:linear-gradient(160deg,rgba(26,38,70,.55),rgba(9,14,28,.78));border:1px solid rgba(120,150,255,.16);box-shadow:inset 0 1px 0 rgba(255,255,255,.06),0 24px 54px -20px rgba(0,0,0,.75)}
.wt-cl-dinfo{flex:1;min-width:230px}
.wt-cl-dcode{font-family:'JetBrains Mono',monospace;font-weight:700;font-size:11px;letter-spacing:2px;color:#e9c55c}
.wt-cl-dname{font-family:'Chakra Petch',sans-serif;font-weight:700;font-size:30px;letter-spacing:.3px;margin:3px 0;line-height:1;text-transform:uppercase;background:linear-gradient(180deg,#fff,#b9c8ee);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.wt-cl-dcap{font-size:13px;color:#aebcdc;margin-bottom:12px}
.wt-cl-dbig .wt-cl-dig{font-size:34px;letter-spacing:2px;color:#cfe9ff;padding:6px 14px;display:inline-block}
.wt-cl-ddate{font-size:13px;color:#aebcdc;margin-top:8px;text-transform:capitalize}
.wt-cl-doff{display:inline-block;margin-top:12px;font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:700;color:#5fe6ff;border:1px solid rgba(95,230,255,.32);border-radius:8px;padding:4px 10px;background:rgba(95,230,255,.06)}
.wt-cl-wx{margin-top:16px}
.wt-cl-wxbig{display:flex;align-items:center;gap:18px;border-radius:16px;padding:16px 20px;background:linear-gradient(160deg,rgba(26,38,70,.5),rgba(9,14,28,.7));border:1px solid rgba(120,150,255,.14)}
.wt-cl-ic{font-size:46px;line-height:1;filter:drop-shadow(0 4px 8px rgba(0,0,0,.4))}
.wt-cl-tp{font-family:'Chakra Petch',sans-serif;font-weight:700;font-size:38px;line-height:1;color:#edf2ff}
.wt-cl-cn{font-size:13px;color:#aebcdc;margin-top:2px}
.wt-cl-seclbl{font-family:'Chakra Petch',sans-serif;font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:2px;color:#7c8db0;margin:24px 2px 14px}
.wt-cl-cities{display:grid;grid-template-columns:repeat(auto-fill,minmax(148px,1fr));gap:18px}
.wt-cl-cc{border-radius:15px;padding:16px 10px 12px;display:flex;flex-direction:column;align-items:center;background:linear-gradient(160deg,rgba(24,36,64,.5),rgba(9,14,28,.72));border:1px solid rgba(120,150,255,.12)}
.wt-cl-cnm{font-family:'Chakra Petch',sans-serif;font-weight:600;font-size:12px;color:#edf2ff;margin-top:12px;text-align:center}
.wt-cl-cdig{font-size:13px;margin-top:6px}
.wt-cl-note{font-size:10.5px;color:#7c8db0;text-align:center;margin-top:16px;line-height:1.5}
`;
