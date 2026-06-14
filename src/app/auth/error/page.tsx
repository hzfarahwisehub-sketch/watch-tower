"use client";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useLocale } from "@/components/LocaleProvider";

type TFn = (key: string, params?: Record<string, string | number>) => string;

// Mapa de código de erro -> chaves i18n do título/corpo. O texto vive no
// dicionário (namespace authError.*); resolvemos com t dentro do componente.
const ERROR_KEYS: Record<string, { title: string; body: string }> = {
  Configuration: { title: "authError.configuration.title", body: "authError.configuration.body" },
  AccessDenied: { title: "authError.accessDenied.title", body: "authError.accessDenied.body" },
  Verification: { title: "authError.verification.title", body: "authError.verification.body" },
  Default: { title: "authError.default.title", body: "authError.default.body" },
};

function errorMessage(code: string, t: TFn): { title: string; body: string } {
  const keys = ERROR_KEYS[code] ?? ERROR_KEYS.Default;
  return { title: t(keys.title), body: t(keys.body) };
}

function ErrorContent() {
  const { t } = useLocale();
  const params = useSearchParams();
  const code = params.get("error") ?? "Default";
  const message = errorMessage(code, t);

  return (
    <div
      className="wt-card w-full p-8 flex flex-col items-center gap-5 text-center"
      style={{ borderRadius: 16, boxShadow: "var(--shadow-bar)" }}
    >
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center text-[32px]"
        style={{
          background: "linear-gradient(135deg, rgba(255,59,92,.2), rgba(255,59,92,.05))",
          border: "1px solid rgba(255,59,92,.4)",
          boxShadow: "0 4px 20px rgba(255,59,92,.25)",
          color: "var(--color-status-critical)",
        }}
      >
        ⚠
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-[20px] font-extrabold" style={{ color: "var(--text)" }}>
          {message.title}
        </h2>
        <p className="text-[13.5px] leading-relaxed" style={{ color: "var(--text-2)" }}>
          {message.body}
        </p>
      </div>

      <div
        className="text-[10.5px] uppercase tracking-[1.5px] font-bold flex items-center gap-2 pt-4 w-full justify-center"
        style={{ color: "var(--text-3)", borderTop: "1px solid var(--border)" }}
      >
        <span>{t("authError.codeLabel")}</span>
        <code
          style={{
            background: "var(--bg2)",
            border: "1px solid var(--border)",
            padding: "3px 8px",
            borderRadius: 4,
            color: "var(--text-2)",
          }}
        >
          {code}
        </code>
      </div>

      <Link
        href="/auth/signin"
        className="px-5 py-2.5 rounded-lg font-extrabold tracking-[1.5px] uppercase text-[12px] transition-all hover:-translate-y-0.5"
        style={{
          background: "linear-gradient(135deg, var(--color-wh-blue), var(--color-wh-blue-dark))",
          color: "#fff",
          boxShadow: "0 4px 14px rgba(31,85,255,.35)",
          border: "1px solid rgba(74,122,255,.5)",
        }}
      >
        {t("authError.retry")}
      </Link>
    </div>
  );
}

export default function AuthErrorPage() {
  const { t } = useLocale();
  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden"
      style={{ color: "var(--text)" }}
    >
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,59,92,.18), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="w-full max-w-[440px] flex flex-col items-center gap-8 relative z-10">
        <div className="flex flex-col items-center gap-3">
          <Image
            src="/brand/watchtower-icon.png"
            alt="WiseHub Watch Tower"
            width={72}
            height={72}
            priority
            className="h-16 w-16 rounded-2xl"
          />
          <div className="flex items-center gap-2.5">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--color-status-critical)", boxShadow: "0 0 8px var(--color-status-critical)" }}
            />
            <h1
              className="text-[15px] font-extrabold tracking-[3px] uppercase"
              style={{ color: "var(--color-wh-blue-light)" }}
            >
              Watch Tower
            </h1>
          </div>
        </div>

        <Suspense
          fallback={
            <div className="wt-card w-full p-8 text-center" style={{ color: "var(--text-3)" }}>
              {t("authError.loading")}
            </div>
          }
        >
          <ErrorContent />
        </Suspense>
      </div>
    </main>
  );
}
