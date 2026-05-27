export default function VerifyPage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{ background: "var(--bg)", color: "var(--text)" }}
    >
      <div
        className="wt-card w-full max-w-md p-8 flex flex-col gap-4 text-center"
        style={{ borderRadius: 14 }}
      >
        <div className="text-[48px]">📧</div>
        <h1 className="text-[18px] font-extrabold tracking-[2px] uppercase" style={{ color: "var(--color-wh-blue-light)" }}>
          Confira seu e-mail
        </h1>
        <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-2)" }}>
          Mandamos um link mágico de acesso pro seu e-mail.<br />
          Clique nele pra entrar no painel.
        </p>
        <p className="text-[11px]" style={{ color: "var(--text-3)" }}>
          Link válido por 24h · Se não chegar em 5min, verifique a caixa de spam.
        </p>
        <a
          href="/auth/signin"
          className="text-[11.5px] uppercase tracking-wider font-bold mt-3 hover:underline"
          style={{ color: "var(--color-wh-blue-light)" }}
        >
          ← voltar
        </a>
      </div>
    </main>
  );
}
