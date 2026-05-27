import Image from "next/image";
import Link from "next/link";

export default function VerifyPage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden"
      style={{ color: "var(--text)" }}
    >
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(16,224,160,.25), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="w-full max-w-[440px] flex flex-col items-center gap-8 relative z-10">
        <div className="flex flex-col items-center gap-3">
          <Image
            src="/brand/wisehub-logo-dark.svg"
            alt="WiseHub"
            width={180}
            height={45}
            priority
            className="h-10 w-auto"
          />
          <div className="flex items-center gap-2.5">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--color-status-stable)", boxShadow: "0 0 8px var(--color-status-stable)" }}
            />
            <h1
              className="text-[15px] font-extrabold tracking-[3px] uppercase"
              style={{ color: "var(--color-wh-blue-light)" }}
            >
              Watch Tower
            </h1>
          </div>
        </div>

        <div
          className="wt-card w-full p-8 flex flex-col items-center gap-5 text-center"
          style={{ borderRadius: 16, boxShadow: "var(--shadow-bar)" }}
        >
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-[32px]"
            style={{
              background: "linear-gradient(135deg, rgba(16,224,160,.2), rgba(16,224,160,.05))",
              border: "1px solid rgba(16,224,160,.4)",
              boxShadow: "0 4px 20px rgba(16,224,160,.2)",
            }}
          >
            ✓
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-[20px] font-extrabold" style={{ color: "var(--text)" }}>
              Confira seu e-mail
            </h2>
            <p className="text-[13.5px] leading-relaxed" style={{ color: "var(--text-2)" }}>
              Mandamos um link mágico de acesso pro seu e-mail.<br />
              Clica nele pra entrar no painel.
            </p>
          </div>

          <div
            className="flex flex-col gap-2.5 w-full mt-2 pt-4 text-[11.5px]"
            style={{ color: "var(--text-3)", borderTop: "1px solid var(--border)" }}
          >
            <div className="flex items-start gap-2">
              <span style={{ color: "var(--color-wh-blue-light)" }}>⏱</span>
              <span>Link válido por 24 horas.</span>
            </div>
            <div className="flex items-start gap-2">
              <span style={{ color: "var(--color-wh-blue-light)" }}>📨</span>
              <span>Não chegou? Veja a caixa de spam. Remetente: <code style={{ background: "var(--bg2)", padding: "1px 6px", borderRadius: 4, fontSize: 11 }}>noreply@wisehubnow.online</code></span>
            </div>
          </div>

          <Link
            href="/auth/signin"
            className="text-[11px] uppercase tracking-[2px] font-bold mt-2 hover:underline transition-all"
            style={{ color: "var(--color-wh-blue-light)" }}
          >
            ← Voltar
          </Link>
        </div>
      </div>
    </main>
  );
}
