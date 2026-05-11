"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { COUNTRIES } from "@/lib/data";
import { Header } from "./Header";
import { KpiRow } from "./KpiRow";
import { AlertsBanner } from "./AlertsBanner";
import { CountriesSidebar } from "./CountriesSidebar";
import { DailyGrid } from "./DailyGrid";
import { Feed } from "./Feed";
import { Modal } from "./Modal";

const MapZone = dynamic(() => import("./MapZone"), {
  ssr: false,
  loading: () => (
    <div
      className="wt-card flex flex-col"
      style={{ minHeight: 500 }}
    >
      <div className="px-5 py-4" style={{ borderBottom: "1px solid var(--border)" }}>
        <h2 className="text-[12px] tracking-[2.5px] uppercase font-bold" style={{ color: "var(--color-wh-blue-light)" }}>
          🗺 Carregando mapa…
        </h2>
      </div>
      <div className="flex-1 flex items-center justify-center" style={{ color: "var(--text-3)" }}>
        <span className="wt-live-dot" /> &nbsp; conectando ao CartoDB
      </div>
    </div>
  ),
});

export function Dashboard() {
  const [selected, setSelected] = useState<string | null>(null);

  const select = (code: string) => setSelected(code);
  const country = selected ? COUNTRIES.find((c) => c.code === selected) ?? null : null;

  return (
    <div className="max-w-[1600px] mx-auto p-4 sm:p-6 lg:p-7 relative z-10">
      <Header />
      <KpiRow />
      <AlertsBanner onSelect={select} />

      <section className="grid grid-cols-1 lg:grid-cols-[1.7fr_1fr] gap-4.5 mb-6">
        <MapZone countries={COUNTRIES} selected={selected} onSelect={select} />
        <CountriesSidebar countries={COUNTRIES} selected={selected} onSelect={select} />
      </section>

      <DailyGrid />

      <Feed countries={COUNTRIES} onSelect={select} />

      <Modal country={country} onClose={() => setSelected(null)} />
    </div>
  );
}
