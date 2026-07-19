"use client";
// Olho + controles de voz do Wise/Friday Brain. UNIVERSAL: vale pra TODOS os
// olhos (só o VISUAL muda por eyeStyle). Reage ao som que a Friday FALA
// (speechSynthesis, com troca de voz + pausar/retomar) e ao que ela OUVE
// (microfone via Web Audio). A energia (0..1) só dá VIDA ao olho atual
// (brilho/escala/glow/velocidade), sem redesenhar imagem nem efeitos.
import { useEffect, useRef, useState } from "react";

// Olhos que são VÍDEO (o resto usa a imagem/CSS pintada pela classe do root).
const VIDEO_EYES: Record<string, string> = {
  "friday-flux": "/wise-brain/friday-eye-reactive-v1.mp4",
};

export function FridayEyeReactive({ eyeStyle, text }: { eyeStyle: string; text: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [micOn, setMicOn] = useState(false);
  const [speakState, setSpeakState] = useState<"idle" | "speaking" | "paused">("idle");
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voiceURI, setVoiceURI] = useState<string>("");
  const micEnergy = useRef(0);
  const speakEnergy = useRef(0);
  const videoSrc = VIDEO_EYES[eyeStyle];

  // Vozes disponíveis (chegam async; prefere pt-BR).
  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    const load = () => {
      const vs = window.speechSynthesis.getVoices();
      if (vs.length) setVoices(vs);
      setVoiceURI((cur) => cur || vs.find((v) => /pt.?BR/i.test(v.lang))?.voiceURI || vs.find((v) => /^pt/i.test(v.lang))?.voiceURI || vs[0]?.voiceURI || "");
    };
    load();
    window.speechSynthesis.onvoiceschanged = load;
    return () => { if (window.speechSynthesis) window.speechSynthesis.onvoiceschanged = null; };
  }, []);

  // Loop mestre: energia = max(fala, mic) → variável CSS + velocidade do vídeo.
  useEffect(() => {
    let raf = 0;
    const loop = () => {
      speakEnergy.current *= 0.9;
      const e = Math.max(micEnergy.current, speakEnergy.current);
      rootRef.current?.style.setProperty("--wb-eye-energy", e.toFixed(3));
      const v = videoRef.current;
      if (v) v.playbackRate = 0.85 + e * 0.7;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  // OUVE: microfone → amplitude RMS. Conserto: RESUME do AudioContext (o navegador
  // cria suspenso quando o create acontece depois do gesto por causa do getUserMedia).
  useEffect(() => {
    if (!micOn) { micEnergy.current = 0; return; }
    let ctx: AudioContext | null = null;
    let stream: MediaStream | null = null;
    let raf = 0;
    let cancelled = false;
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    navigator.mediaDevices?.getUserMedia({ audio: true }).then(async (s) => {
      if (cancelled) { s.getTracks().forEach((t) => t.stop()); return; }
      stream = s;
      ctx = new AC();
      try { await ctx.resume(); } catch { /* ignora */ }
      const src = ctx.createMediaStreamSource(s);
      const an = ctx.createAnalyser();
      an.fftSize = 256;
      src.connect(an);
      const data = new Uint8Array(an.frequencyBinCount);
      const read = () => {
        an.getByteTimeDomainData(data);
        let sum = 0;
        for (let i = 0; i < data.length; i++) { const x = (data[i] - 128) / 128; sum += x * x; }
        micEnergy.current = Math.min(1, Math.sqrt(sum / data.length) * 5.5);
        raf = requestAnimationFrame(read);
      };
      read();
    }).catch(() => setMicOn(false));
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      stream?.getTracks().forEach((t) => t.stop());
      ctx?.close().catch(() => {});
      micEnergy.current = 0;
    };
  }, [micOn]);

  const startSpeak = () => {
    const ss = window.speechSynthesis;
    if (!ss) return;
    ss.cancel();
    const u = new SpeechSynthesisUtterance(text);
    const v = voices.find((x) => x.voiceURI === voiceURI);
    if (v) u.voice = v;
    u.lang = v?.lang || "pt-BR";
    u.rate = 1;
    u.pitch = 1.02;
    u.onstart = () => setSpeakState("speaking");
    u.onend = () => { setSpeakState("idle"); speakEnergy.current = 0; };
    u.onerror = () => { setSpeakState("idle"); speakEnergy.current = 0; };
    u.onboundary = () => { speakEnergy.current = 0.55 + Math.random() * 0.4; };
    ss.speak(u);
  };
  // FALA: um botão só — Falar → Pausar → Retomar (retoma de onde parou).
  const onSpeakBtn = () => {
    const ss = window.speechSynthesis;
    if (!ss) return;
    if (speakState === "idle") startSpeak();
    else if (speakState === "speaking") { ss.pause(); setSpeakState("paused"); }
    else { ss.resume(); setSpeakState("speaking"); }
  };
  const stopSpeak = () => { window.speechSynthesis?.cancel(); setSpeakState("idle"); speakEnergy.current = 0; };

  useEffect(() => () => { if (typeof window !== "undefined") window.speechSynthesis?.cancel(); }, []);

  const speakLabel = speakState === "idle" ? "🔊 Falar" : speakState === "speaking" ? "⏸ Pausar" : "▶ Retomar";

  return (
    <>
      <div ref={rootRef} className={`wb-eye wb-eye-reactive ${videoSrc ? "wb-eye-flux" : ""} ${speakState !== "idle" ? "speaking" : ""} ${micOn ? "listening" : ""}`}>
        {videoSrc ? (
          <video ref={videoRef} className="wb-eye-video" src={videoSrc} autoPlay loop muted playsInline aria-hidden />
        ) : (
          <>
            <i />
            <span className="wb-eye-scan" />
          </>
        )}
        <span className="wb-eye-ring" aria-hidden />
      </div>
      <div className="wb-wave wb-wave-reactive" aria-hidden>{Array.from({ length: 23 }).map((_, i) => <i key={i} />)}</div>
      <div className="wb-eye-controls">
        {voices.length > 0 && (
          <select className="wb-voice-select" value={voiceURI} onChange={(e) => setVoiceURI(e.target.value)} aria-label="Voz">
            {voices.map((v) => <option key={v.voiceURI} value={v.voiceURI}>{v.name} · {v.lang}</option>)}
          </select>
        )}
        <div className="wb-eye-audio">
          <button type="button" className={speakState !== "idle" ? "on" : ""} onClick={onSpeakBtn} title="Falar o briefing · pausar · retomar de onde parou">{speakLabel}</button>
          {speakState !== "idle" && <button type="button" className="wb-audio-stop" onClick={stopSpeak} title="Parar">◼</button>}
          <button type="button" className={micOn ? "on" : ""} onClick={() => setMicOn((v) => !v)} title="Ouvir o microfone (o olho reage à sua voz)">{micOn ? "● Ouvindo" : "🎙 Ouvir"}</button>
        </div>
      </div>
    </>
  );
}
