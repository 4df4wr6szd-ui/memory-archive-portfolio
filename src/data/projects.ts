export type ProjectArchive = {
  slug: string;
  title: string;
  assetDirectory: string;
};

export const projectArchives: ProjectArchive[] = [
  {
    slug: "project-01",
    title: "Project 01",
    assetDirectory: "/assets/projects/project01"
  },
  {
    slug: "project-02",
    title: "Project 02",
    assetDirectory: "/assets/projects/project02"
  },
  {
    slug: "project-03",
    title: "Project 03",
    assetDirectory: "/assets/projects/project03"
  },
  {
    slug: "project-04",
    title: "Project 04",
    assetDirectory: "/assets/projects/project04"
  }
];

export function getProjectArchive(slug: string) {
  return projectArchives.find((project) => project.slug === slug);
}
