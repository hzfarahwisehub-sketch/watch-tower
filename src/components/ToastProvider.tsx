"use client";
import { createContext, useCallback, useContext, useRef, useState, ReactNode } from "react";

const Ctx = createContext<(msg: string) => void>(() => {});

export function ToastProvider({ children }: { children: ReactNode }) {
  const [msg, setMsg] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = useCallback((m: string) => {
    setMsg(m);
    setOpen(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(false), 3500);
  }, []);

  return (
    <Ctx.Provider value={show}>
      {children}
      <div
        className="fixed bottom-6 right-6 px-5 py-3.5 rounded-[10px] z-[9998] transition-all duration-300 flex items-center gap-2.5 text-[13px] font-semibold pointer-events-none"
        style={{
          background: "var(--surface-hi)",
          border: "1px solid var(--border-hi)",
          color: "var(--text)",
          boxShadow: "0 12px 40px rgba(0,0,0,.5), 0 0 24px rgba(31,85,255,.3)",
          transform: open ? "translateY(0)" : "translateY(80px)",
          opacity: open ? 1 : 0,
        }}
      >
        <span className="text-[18px]" style={{ color: "var(--color-status-stable)" }}>✓</span>
        <span>{msg}</span>
      </div>
    </Ctx.Provider>
  );
}

export const useToast = () => useContext(Ctx);
