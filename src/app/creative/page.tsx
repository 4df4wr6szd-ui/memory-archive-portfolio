import { ArchiveWindow } from "@/components/ui/ArchiveWindow";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function CreativePage() {
  return (
    <main className="foundation-page">
      <SectionTitle title="Creative" subtitle="Foundation route for the Memory Archive portfolio." />
      <ArchiveWindow title="CREATIVE_ARCHIVE.exe">
        <p>Detailed layout will be implemented in a later phase.</p>
      </ArchiveWindow>
    </main>
  );
}
