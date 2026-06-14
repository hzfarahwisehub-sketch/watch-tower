"use client";
import { useState } from "react";
import { useLocale } from "./LocaleProvider";

/**
 * Campo de senha com olhinho 👁 pra mostrar/ocultar o que está sendo digitado.
 * Usado em TODAS as caixas de senha (login, primeiro acesso, reset).
 */
export function PasswordInput({
  value,
  onChange,
  placeholder = "••••••••",
  autoComplete = "current-password",
  autoFocus = false,
  required = false,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  required?: boolean;
}) {
  const { t } = useLocale();
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <input
        type={show ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        className="w-full px-4 py-3 pr-11 rounded-lg text-[14px] outline-none transition-all"
        style={{ background: "var(--bg2)", border: "1.5px solid var(--border)", color: "var(--text)" }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-wh-blue-light)")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
      />
      <button
        type="button"
        onClick={() => setShow((s) => !s)}
        tabIndex={-1}
        aria-label={show ? t("pwd.hide") : t("pwd.show")}
        title={show ? t("pwd.hide") : t("pwd.show")}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-md cursor-pointer transition-colors hover:bg-white/5"
        style={{ color: show ? "var(--color-wh-blue-light)" : "var(--text-3)" }}
      >
        {show ? (
          // olho aberto (visível)
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        ) : (
          // olho cortado (oculto)
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-6.5 0-10-7-10-7a18.5 18.5 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c6.5 0 10 7 10 7a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
            <line x1="2" y1="2" x2="22" y2="22" />
          </svg>
        )}
      </button>
    </div>
  );
}
