"use client";
import React from "react";

type Props = { children: React.ReactNode };
type State = { error: Error | null };

/**
 * Captura crashes de render (em vez de deixar a tela branca) e mostra o erro
 * pra Friday consertar. Também oferece recarregar e "limpar tudo" (SW + caches).
 */
export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error("[Watch Tower] crash:", error, info?.componentStack);
  }

  private hardReset = async () => {
    try {
      if ("serviceWorker" in navigator) {
        const regs = await navigator.serviceWorker.getRegistrations();
        await Promise.all(regs.map((r) => r.unregister()));
      }
      if ("caches" in window) {
        const keys = await caches.keys();
        await Promise.all(keys.map((k) => caches.delete(k)));
      }
    } catch {}
    window.location.reload();
  };

  render() {
    const e = this.state.error;
    if (!e) return this.props.children;

    const digest = (e as { digest?: string }).digest;
    const stack = (e.stack || "").split("\n").slice(0, 8).join("\n");

    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
          background: "#0F0C1E",
          color: "#E6E3F5",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ maxWidth: 660, width: "100%", background: "rgba(38,35,63,.6)", border: "1px solid #2c2950", borderRadius: 16, padding: 24 }}>
          <h1 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8, color: "#FF6B8A" }}>Ops, algo quebrou na tela</h1>
          <p style={{ fontSize: 13, opacity: 0.85, marginBottom: 12 }}>
            Manda este texto pra Friday que ela conserta exato:
          </p>
          <pre
            style={{
              fontSize: 11,
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              background: "#06070f",
              border: "1px solid #2c2950",
              borderRadius: 8,
              padding: 12,
              maxHeight: 260,
              overflow: "auto",
              color: "#c9c4e6",
              margin: 0,
            }}
          >
{e.name}: {e.message}
{digest ? `digest: ${digest}\n` : ""}{stack}
          </pre>
          <div style={{ display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={() => window.location.reload()}
              style={{ padding: "8px 14px", borderRadius: 10, border: "1px solid rgba(74,122,255,.5)", background: "linear-gradient(135deg,#1F55FF,#1640cc)", color: "#fff", fontWeight: 700, cursor: "pointer" }}
            >
              ↻ Recarregar
            </button>
            <button
              type="button"
              onClick={this.hardReset}
              style={{ padding: "8px 14px", borderRadius: 10, border: "1px solid #2c2950", background: "transparent", color: "#c9c4e6", fontWeight: 700, cursor: "pointer" }}
            >
              Limpar cache e recarregar
            </button>
          </div>
        </div>
      </div>
    );
  }
}
