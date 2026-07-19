"use client";
// Olho Friday REATIVO — o vídeo (imagem/efeitos originais, sem alterar) reage ao
// som: à voz da Friday quando ela FALA (Web Speech / speechSynthesis) e ao que ela
// OUVE pelo microfone (Web Audio / AnalyserNode). A energia do áudio (0..1) modula
// só o brilho/escala/velocidade do próprio vídeo, sem redesenhar nada.
import { useEffect, useRef, useState } from "react";

export function FridayEyeReactive({ text }: { text: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [micOn, setMicOn] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  // Energia por fonte (0..1); o olho reage ao MAIOR dos dois.
  const micEnergy = useRef(0);
  const speakEnergy = useRef(0);

  // Loop mestre: energia = max(mic, fala) → variável CSS + velocidade do vídeo.
  useEffect(() => {
    let raf = 0;
    const loop = () => {
      speakEnergy.current *= 0.9; // decai o envelope da fala entre as sílabas
      const e = Math.max(micEnergy.current, speakEnergy.current);
      const root = rootRef.current;
      if (root) root.style.setProperty("--wb-eye-energy", e.toFixed(3));
      const v = videoRef.current;
      if (v) v.playbackRate = 0.85 + e * 0.7; // acelera o fogo quando reage
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  // OUVE: microfone → amplitude RMS → micEnergy (só enquanto ligado).
  useEffect(() => {
    if (!micOn) { micEnergy.current = 0; return; }
    let ctx: AudioContext | null = null;
    let stream: MediaStream | null = null;
    let raf = 0;
    let cancelled = false;
    const AC = (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext);
    navigator.mediaDevices?.getUserMedia({ audio: true }).then((s) => {
      if (cancelled) { s.getTracks().forEach((t) => t.stop()); return; }
      stream = s;
      ctx = new AC();
      const src = ctx.createMediaStreamSource(s);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 256;
      src.connect(analyser);
      const data = new Uint8Array(analyser.frequencyBinCount);
      const read = () => {
        analyser.getByteTimeDomainData(data);
        let sum = 0;
        for (let i = 0; i < data.length; i++) { const x = (data[i] - 128) / 128; sum += x * x; }
        micEnergy.current = Math.min(1, Math.sqrt(sum / data.length) * 4.5);
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

  // FALA: speechSynthesis lê o briefing; cada sílaba (boundary) dá um pulso na energia.
  const toggleSpeak = () => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      speakEnergy.current = 0;
      return;
    }
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "pt-BR";
    u.rate = 1;
    u.pitch = 1.02;
    u.onstart = () => setSpeaking(true);
    u.onend = () => { setSpeaking(false); speakEnergy.current = 0; };
    u.onerror = () => { setSpeaking(false); speakEnergy.current = 0; };
    u.onboundary = () => { speakEnergy.current = 0.55 + Math.random() * 0.4; };
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  };

  // Ao desmontar, corta a fala.
  useEffect(() => () => { if (typeof window !== "undefined") window.speechSynthesis?.cancel(); }, []);

  return (
    <>
      <div ref={rootRef} className={`wb-eye wb-eye-flux ${speaking ? "speaking" : ""} ${micOn ? "listening" : ""}`}>
        <video ref={videoRef} className="wb-eye-video" src="/wise-brain/friday-eye-reactive-v1.mp4" autoPlay loop muted playsInline aria-hidden />
        <span className="wb-eye-ring" aria-hidden />
      </div>
      <div className="wb-eye-audio">
        <button type="button" className={speaking ? "on" : ""} onClick={toggleSpeak} title="Friday fala o briefing (o olho reage à voz dela)">
          {speaking ? "◼ Parar" : "🔊 Falar"}
        </button>
        <button type="button" className={micOn ? "on" : ""} onClick={() => setMicOn((v) => !v)} title="Friday ouve o microfone (o olho reage à sua voz)">
          {micOn ? "● Ouvindo" : "🎙 Ouvir"}
        </button>
      </div>
    </>
  );
}
