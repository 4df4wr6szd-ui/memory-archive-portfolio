import { notFound } from "next/navigation";
import { ArchiveWindow } from "@/components/ui/ArchiveWindow";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getProjectArchive, projectArchives } from "@/data/projects";
import { getProjectImagePaths } from "@/lib/project-assets";

type ProjectPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projectArchives.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectArchive(params.slug);

  if (!project) {
    notFound();
  }

  const imagePaths = getProjectImagePaths(project.assetDirectory);

  return (
    <main className="foundation-page">
      <SectionTitle title={project.title} subtitle="Reusable project case-study foundation." />
      <ArchiveWindow title="PROJECT_FILE.exe">
        <p>Asset directory: {project.assetDirectory}</p>
        {imagePaths.length > 0 ? (
          <div className="foundation-grid">
            {imagePaths.map((src) => (
              <img key={src} src={src} alt={`${project.title} archive asset`} width="220" />
            ))}
          </div>
        ) : (
          <p>Project images will appear here after assets are uploaded to this directory.</p>
        )}
      </ArchiveWindow>
    </main>
  );
}
