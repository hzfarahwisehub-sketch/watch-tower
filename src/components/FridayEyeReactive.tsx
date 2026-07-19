"use client";
// Olho + controles de voz do Wise/Friday Brain. UNIVERSAL: vale pra TODOS os olhos
// (só o VISUAL muda por eyeStyle). A FALA usa as vozes nomeadas da Friday via
// /api/tts (edge-tts grátis: Antônio/Francisca/Thalita) e o olho reage à AMPLITUDE
// REAL da voz; se o TTS cair, cai pra voz genérica do navegador. OUVE = microfone.
// A energia (0..1) só dá VIDA ao olho atual (brilho/escala/glow/velocidade), sem
// redesenhar imagem nem efeitos.
import { useEffect, useRef, useState } from "react";

// Olhos que são VÍDEO (o resto usa a imagem/CSS pintada pela classe do root).
const VIDEO_EYES: Record<string, string> = {
  "friday-flux": "/wise-brain/friday-eye-reactive-v1.mp4",
};

// Espelha EDGE_VOICES de src/lib/edge-tts.ts (fonte de verdade no servidor).
const VOICES = [
  { id: "pt-BR-FranciscaNeural", label: "Francisca", tag: "Friday" },
  { id: "pt-BR-ThalitaMultilingualNeural", label: "Thalita", tag: "Multilíngue" },
  { id: "pt-BR-AntonioNeural", label: "Antônio", tag: "Wise" },
];

type SpeakState = "idle" | "loading" | "speaking" | "paused";

export function FridayEyeReactive({ eyeStyle, text }: { eyeStyle: string; text: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [micOn, setMicOn] = useState(false);
  const [speakState, setSpeakState] = useState<SpeakState>("idle");
  const [voiceId, setVoiceId] = useState(VOICES[0].id);
  const micEnergy = useRef(0);
  const speakEnergy = useRef(0);
  const speakStateRef = useRef<SpeakState>("idle");
  speakStateRef.current = speakState;
  const audioCtxRef = useRef<AudioContext | null>(null);
  const speechAnalyserRef = useRef<AnalyserNode | null>(null);
  const speechDataRef = useRef<Uint8Array<ArrayBuffer> | null>(null);
  const blobUrlRef = useRef<string | null>(null);
  const usingBrowserVoiceRef = useRef(false);
  const videoSrc = VIDEO_EYES[eyeStyle];

  // Loop mestre: energia = max(mic, fala). A fala vem da amplitude REAL do áudio TTS.
  useEffect(() => {
    let raf = 0;
    const loop = () => {
      const an = speechAnalyserRef.current;
      const d = speechDataRef.current;
      if (speakStateRef.current === "speaking" && an && d && !usingBrowserVoiceRef.current) {
        an.getByteTimeDomainData(d);
        let sum = 0;
        for (let i = 0; i < d.length; i++) { const x = (d[i] - 128) / 128; sum += x * x; }
        speakEnergy.current = Math.min(1, Math.sqrt(sum / d.length) * 3.4);
      } else {
        speakEnergy.current *= 0.9;
      }
      const e = Math.max(micEnergy.current, speakEnergy.current);
      rootRef.current?.style.setProperty("--wb-eye-energy", e.toFixed(3));
      const v = videoRef.current;
      if (v) v.playbackRate = 0.85 + e * 0.7;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  // OUVE: microfone → amplitude RMS. resume() do AudioContext (nasce suspenso pós-getUserMedia).
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

  // Grafo de áudio do <audio> (ctx + analyser), criado 1x após o gesto do clique.
  const ensureAudioGraph = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audioCtxRef.current) {
      const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AC();
      const src = ctx.createMediaElementSource(audio);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 256;
      src.connect(analyser);
      analyser.connect(ctx.destination);
      audioCtxRef.current = ctx;
      speechAnalyserRef.current = analyser;
      speechDataRef.current = new Uint8Array(analyser.frequencyBinCount);
    }
    if (audioCtxRef.current.state === "suspended") { try { await audioCtxRef.current.resume(); } catch { /* ignora */ } }
  };

  const revokeBlob = () => {
    if (blobUrlRef.current) { URL.revokeObjectURL(blobUrlRef.current); blobUrlRef.current = null; }
  };

  // Fallback: se o /api/tts falhar (ex.: edge-tts bloqueado), voz genérica do navegador.
  const speakViaBrowser = () => {
    const ss = window.speechSynthesis;
    if (!ss) { setSpeakState("idle"); return; }
    usingBrowserVoiceRef.current = true;
    ss.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "pt-BR"; u.rate = 1; u.pitch = 1.02;
    u.onstart = () => setSpeakState("speaking");
    u.onboundary = () => { speakEnergy.current = 0.55 + Math.random() * 0.4; };
    u.onend = () => { setSpeakState("idle"); speakEnergy.current = 0; };
    u.onerror = () => { setSpeakState("idle"); speakEnergy.current = 0; };
    ss.speak(u);
  };

  const startSpeak = async () => {
    usingBrowserVoiceRef.current = false;
    setSpeakState("loading");
    try {
      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ text, voice: voiceId }),
      });
      if (!res.ok) throw new Error(`tts ${res.status}`);
      const blob = await res.blob();
      const audio = audioRef.current;
      if (!audio) throw new Error("sem <audio>");
      await ensureAudioGraph();
      revokeBlob();
      const url = URL.createObjectURL(blob);
      blobUrlRef.current = url;
      audio.src = url;
      await audio.play();
      setSpeakState("speaking");
    } catch {
      speakViaBrowser();
    }
  };

  // FALA: Falar → Pausar → Retomar (retoma de onde parou).
  const onSpeakBtn = () => {
    if (speakState === "loading") return;
    if (speakState === "idle") { startSpeak(); return; }
    const audio = audioRef.current;
    if (speakState === "speaking") {
      if (usingBrowserVoiceRef.current) window.speechSynthesis?.pause();
      else audio?.pause();
      setSpeakState("paused");
    } else {
      if (usingBrowserVoiceRef.current) window.speechSynthesis?.resume();
      else audio?.play().catch(() => {});
      setSpeakState("speaking");
    }
  };

  const stopSpeak = () => {
    const audio = audioRef.current;
    if (audio) { audio.pause(); try { audio.currentTime = 0; } catch { /* noop */ } }
    window.speechSynthesis?.cancel();
    usingBrowserVoiceRef.current = false;
    setSpeakState("idle");
    speakEnergy.current = 0;
  };

  // Fim do áudio TTS.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onEnd = () => { setSpeakState("idle"); speakEnergy.current = 0; revokeBlob(); };
    audio.addEventListener("ended", onEnd);
    return () => audio.removeEventListener("ended", onEnd);
  }, []);

  useEffect(() => () => {
    if (typeof window !== "undefined") window.speechSynthesis?.cancel();
    revokeBlob();
    audioCtxRef.current?.close().catch(() => {});
  }, []);

  const speakLabel =
    speakState === "loading" ? "⏳ …" : speakState === "idle" ? "🔊 Falar" : speakState === "speaking" ? "⏸ Pausar" : "▶ Retomar";

  return (
    <>
      <div ref={rootRef} className={`wb-eye wb-eye-reactive ${videoSrc ? "wb-eye-flux" : ""} ${speakState === "speaking" || speakState === "paused" ? "speaking" : ""} ${micOn ? "listening" : ""}`}>
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
        <select className="wb-voice-select" value={voiceId} onChange={(e) => { setVoiceId(e.target.value); stopSpeak(); }} aria-label="Voz">
          {VOICES.map((v) => <option key={v.id} value={v.id}>{v.label} · {v.tag}</option>)}
        </select>
        <div className="wb-eye-audio">
          <button type="button" className={speakState === "speaking" || speakState === "paused" ? "on" : ""} onClick={onSpeakBtn} disabled={speakState === "loading"} title="Falar o briefing · pausar · retomar de onde parou">{speakLabel}</button>
          {(speakState === "speaking" || speakState === "paused") && <button type="button" className="wb-audio-stop" onClick={stopSpeak} title="Parar">◼</button>}
          <button type="button" className={micOn ? "on" : ""} onClick={() => setMicOn((v) => !v)} title="Ouvir o microfone (o olho reage à sua voz)">{micOn ? "● Ouvindo" : "🎙 Ouvir"}</button>
        </div>
      </div>
      <audio ref={audioRef} hidden preload="none" />
    </>
  );
}
