import { AppView } from "@/components/AppView";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export default function Home() {
  return (
    <ErrorBoundary>
      <AppView />
    </ErrorBoundary>
  );
}
