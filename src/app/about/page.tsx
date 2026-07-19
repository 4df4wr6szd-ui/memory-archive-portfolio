import { ArchiveWindow } from "@/components/ui/ArchiveWindow";
import { FloatingTag } from "@/components/ui/FloatingTag";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function AboutPage() {
  return (
    <main className="foundation-page">
      <SectionTitle eyebrow="Who am I" title="About Me" subtitle="Personal introduction, journey, and archive tags." />
      <ArchiveWindow title="ABOUT_ME.exe">
        <div className="foundation-grid">
          <FloatingTag>Creative</FloatingTag>
          <FloatingTag>Strategy</FloatingTag>
          <FloatingTag>Storytelling</FloatingTag>
        </div>
      </ArchiveWindow>
    </main>
  );
}
