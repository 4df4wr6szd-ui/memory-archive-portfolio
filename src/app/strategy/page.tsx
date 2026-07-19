import { ArchiveWindow } from "@/components/ui/ArchiveWindow";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function StrategyPage() {
  return (
    <main className="foundation-page">
      <SectionTitle title="Strategy" subtitle="Foundation route for the Memory Archive portfolio." />
      <ArchiveWindow title="STRATEGY_ARCHIVE.exe">
        <p>Detailed layout will be implemented in a later phase.</p>
      </ArchiveWindow>
    </main>
  );
}
