import { ArchiveWindow } from "@/components/ui/ArchiveWindow";
import { FolderButton } from "@/components/ui/FolderButton";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { projectArchives } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="foundation-page">
      <SectionTitle title="Projects" subtitle="Archive of selected case studies." />
      <ArchiveWindow title="PROJECTS.exe">
        <div className="foundation-grid">
          {projectArchives.map((project) => (
            <FolderButton key={project.slug} href={`/projects/${project.slug}`} label={project.title} />
          ))}
        </div>
      </ArchiveWindow>
    </main>
  );
}
