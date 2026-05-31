"use client";

/**
 * Rede de segurança de nível raiz: se algo quebrar no layout/providers (fora do
 * ErrorBoundary do Dashboard), mostra o erro em vez de tela branca.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const stack = (error.stack || "").split("\n").slice(0, 8).join("\n");
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, background: "#0F0C1E", color: "#E6E3F5", fontFamily: "system-ui, sans-serif" }}>
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <div style={{ maxWidth: 660, width: "100%", background: "rgba(38,35,63,.6)", border: "1px solid #2c2950", borderRadius: 16, padding: 24 }}>
            <h1 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8, color: "#FF6B8A" }}>Algo quebrou no app</h1>
            <p style={{ fontSize: 13, opacity: 0.85, marginBottom: 12 }}>Manda este texto pra Friday:</p>
            <pre style={{ fontSize: 11, whiteSpace: "pre-wrap", wordBreak: "break-word", background: "#06070f", border: "1px solid #2c2950", borderRadius: 8, padding: 12, maxHeight: 260, overflow: "auto", color: "#c9c4e6", margin: 0 }}>
{error.name}: {error.message}
{error.digest ? `digest: ${error.digest}\n` : ""}{stack}
            </pre>
            <div style={{ display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
              <button type="button" onClick={() => reset()} style={{ padding: "8px 14px", borderRadius: 10, border: "1px solid rgba(74,122,255,.5)", background: "linear-gradient(135deg,#1F55FF,#1640cc)", color: "#fff", fontWeight: 700, cursor: "pointer" }}>
                ↻ Tentar de novo
              </button>
              <button type="button" onClick={() => window.location.reload()} style={{ padding: "8px 14px", borderRadius: 10, border: "1px solid #2c2950", background: "transparent", color: "#c9c4e6", fontWeight: 700, cursor: "pointer" }}>
                Recarregar
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
