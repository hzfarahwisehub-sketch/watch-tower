import { TabbedDashboard } from "@/components/TabbedDashboard";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export default function Home() {
  return (
    <ErrorBoundary>
      <TabbedDashboard />
    </ErrorBoundary>
  );
}
