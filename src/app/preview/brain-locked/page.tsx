import { notFound } from "next/navigation";
import { SpatialCommandCenter } from "@/components/SpatialCommandCenter";

export const dynamic = "force-dynamic";

export default function LockedBrainPreviewPage() {
  if (process.env.NODE_ENV !== "development" || process.env.WT_UI_PREVIEW !== "1") notFound();
  return <main style={{ minHeight: "100vh", padding: 16, background: "var(--bg)" }}><div style={{ minHeight: 680 }}><SpatialCommandCenter /></div></main>;
}
