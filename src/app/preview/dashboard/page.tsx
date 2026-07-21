import { notFound } from "next/navigation";
import { TabbedDashboard } from "@/components/TabbedDashboard";

export const dynamic = "force-dynamic";

export default function DashboardPreviewPage() {
  if (process.env.NODE_ENV !== "development" || process.env.WT_UI_PREVIEW !== "1") notFound();
  return <TabbedDashboard />;
}
