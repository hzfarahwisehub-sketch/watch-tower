import { notFound } from "next/navigation";
import { SpatialCommandCenter } from "@/components/SpatialCommandCenter";

export const dynamic = "force-dynamic";

export default function SpatialPreviewPage() {
  if (process.env.NODE_ENV !== "development" || process.env.WT_UI_PREVIEW !== "1") notFound();
  return (
    <main style={{ minHeight: "100vh", padding: 16, background: "var(--bg)" }}>
      <div style={{ height: "min(900px, calc(100vh - 32px))" }}>
        <SpatialCommandCenter previewOwner />
      </div>
    </main>
  );
}
