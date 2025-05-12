import ProjectCard, { type Project } from "../components/ProjectCard";

function Projects() {
  return (
    <div id="projects" className="mb-32">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold">My Projects:</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}

const projects: Project[] = [
  {
    title: "Fakturly",
    image: "/src/assets/fakturly.png",
    description:
      "Digital invoice and payment reminder solution that makes billing management easier. Built with modern tech stack for optimal performance.",
    tech: ["Next.js", "TypeScript", "Node.js", "Tailwind"],
    repoType: "Private Repository",
    demoUrl: "https://fakturly.my.id",
  },
  {
    title: "Nimalis",
    image: "/src/assets/nimalis.png",
    description:
      "A peer-to-peer platform connecting minimalists with those in need, enabling users to share and find free items while promoting sustainable living.",
    tech: ["Next.js", "TypeScript", "Node.js", "Tailwind"],
    repoType: "Private Repository",
    demoUrl: "https://nimalis.com",
  },]

export default Projects;
