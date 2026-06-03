"use client";
import { useEffect, useRef, useState, useCallback, type CSSProperties } from "react";
import { createPortal } from "react-dom";

/**
 * Visualizador de imagem em tela cheia, INDEPENDENTE da caixa que o abriu.
 * Abre num portal no body (acima de qualquer painel), com zoom por scroll ou
 * pelos botões, arrastar pra mover quando ampliado, e ESC ou clique no fundo
 * pra fechar. Pensado pra ampliar a foto do ponto turístico no Benchmark.
 */
export function ImageZoomViewer({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  const [scale, setScale] = useState(1);
  const [off, setOff] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const drag = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);

  useEffect(() => setMounted(true), []);

  const clamp = (s: number) => Math.min(6, Math.max(1, s));
  const reset = useCallback(() => {
    setScale(1);
    setOff({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "+" || e.key === "=") setScale((s) => clamp(s + 0.5));
      else if (e.key === "-") setScale((s) => clamp(s - 0.5));
      else if (e.key === "0") reset();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, reset]);

  const onWheel = (e: React.WheelEvent) => {
    setScale((s) => {
      const ns = clamp(s + (e.deltaY < 0 ? 0.3 : -0.3));
      if (ns === 1) setOff({ x: 0, y: 0 });
      return ns;
    });
  };
  const onDown = (e: React.PointerEvent) => {
    if (scale <= 1) return;
    drag.current = { x: e.clientX, y: e.clientY, ox: off.x, oy: off.y };
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {}
  };
  const onMove = (e: React.PointerEvent) => {
    if (!drag.current) return;
    setOff({
      x: drag.current.ox + (e.clientX - drag.current.x),
      y: drag.current.oy + (e.clientY - drag.current.y),
    });
  };
  const onUp = () => {
    drag.current = null;
  };

  if (!mounted) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(10,8,20,.92)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        animation: "wt-menu-pop .14s ease-out",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        draggable={false}
        onClick={(e) => e.stopPropagation()}
        onWheel={onWheel}
        onDoubleClick={() => (scale > 1 ? reset() : setScale(2.5))}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        style={{
          maxWidth: "92vw",
          maxHeight: "92vh",
          objectFit: "contain",
          transform: `translate(${off.x}px, ${off.y}px) scale(${scale})`,
          transition: drag.current ? "none" : "transform .12s ease-out",
          cursor: scale > 1 ? "grab" : "zoom-in",
          borderRadius: 12,
          boxShadow: "0 20px 80px rgba(0,0,0,.6)",
          userSelect: "none",
          touchAction: "none",
        }}
      />
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "fixed",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: "rgba(20,16,40,.85)",
          border: "1px solid rgba(255,255,255,.12)",
          borderRadius: 999,
          padding: "8px 14px",
          backdropFilter: "blur(8px)",
        }}
      >
        <button onClick={() => setScale((s) => clamp(s - 0.5))} style={btn} aria-label="Diminuir">−</button>
        <span style={{ color: "#cfd2e6", fontSize: 12, fontWeight: 700, minWidth: 44, textAlign: "center" }}>
          {Math.round(scale * 100)}%
        </span>
        <button onClick={() => setScale((s) => clamp(s + 0.5))} style={btn} aria-label="Aumentar">+</button>
        <span style={{ width: 1, height: 18, background: "rgba(255,255,255,.15)" }} />
        <button onClick={reset} style={{ ...btn, width: "auto", padding: "0 10px", fontSize: 11 }}>Resetar</button>
        <button onClick={onClose} style={{ ...btn, width: "auto", padding: "0 10px", fontSize: 11 }}>Fechar ✕</button>
      </div>
    </div>,
    document.body,
  );
}

const btn: CSSProperties = {
  width: 30,
  height: 30,
  borderRadius: 8,
  border: "1px solid rgba(255,255,255,.15)",
  background: "rgba(255,255,255,.06)",
  color: "#fff",
  fontSize: 16,
  fontWeight: 700,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 1,
};
