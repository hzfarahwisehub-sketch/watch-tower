// Alarme leve "plin plin" — sintetizado via Web Audio API (sem arquivo).
// Duas notas curtas de sino (sine) com envelope suave. Volume 0-100 (0 = mudo).

let ctx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  try {
    const Ctor =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return null;
    if (!ctx) ctx = new Ctor();
    if (ctx.state === "suspended") void ctx.resume();
    return ctx;
  } catch {
    return null;
  }
}

/** Toca o "plin plin" leve. volume 0-100 (0 = mudo). */
export function playChime(volume: number): void {
  if (!volume || volume <= 0) return;
  const audio = getCtx();
  if (!audio) return;

  // Teto suave: mesmo no 100 fica delicado (0.22 de ganho).
  const peak = Math.min(1, Math.max(0, volume / 100)) * 0.22;
  const now = audio.currentTime;

  // pli (E6) → plin (A6)
  const notes = [
    { freq: 1318.5, at: 0 },
    { freq: 1760.0, at: 0.16 },
  ];

  for (const n of notes) {
    const osc = audio.createOscillator();
    const gain = audio.createGain();
    osc.type = "sine";
    osc.frequency.value = n.freq;
    const start = now + n.at;
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(peak, start + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.34);
    osc.connect(gain).connect(audio.destination);
    osc.start(start);
    osc.stop(start + 0.36);
  }
}
