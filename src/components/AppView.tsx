"use client";
import { Dashboard } from "./Dashboard";
import { TabbedDashboard } from "./TabbedDashboard";
import { useLayoutMode } from "./LayoutMode";

// Escolhe o layout conforme o modo salvo: "classic" = grade livre original,
// "tabs" = novo layout por abas. O switch fica no header (LayoutModeSwitch).
export function AppView() {
  const { mode } = useLayoutMode();
  return mode === "classic" ? <Dashboard /> : <TabbedDashboard />;
}
