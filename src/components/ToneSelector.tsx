"use client";

import { useTheme } from "./ThemeProvider";
import type { Theme } from "@/lib/types";

const TONES: Array<{ theme: Theme; label: string }> = [
  { theme: "light", label: "Claro" },
  { theme: "wise", label: "Médio" },
  { theme: "dark", label: "Escuro" },
];

export function ToneSelector() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="wt-tone-selector" role="group" aria-label="Tom global da tela">
      <span>Tom</span>
      {TONES.map((tone) => (
        <button key={tone.theme} type="button" aria-pressed={theme === tone.theme} className={theme === tone.theme ? "active" : ""} onClick={() => setTheme(tone.theme)}>
          {tone.label}
        </button>
      ))}
    </div>
  );
}
