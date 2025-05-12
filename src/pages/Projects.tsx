import ProjectCard, { type Project } from "../components/ProjectCard";
import fakturly from "../assets/fakturly.png";
import nimalis from "../assets/nimalis.png";

function Projects() {
  return (
    <section id="projects" className="mb-5 overflow-x-hidden">
      <div className="container mx-auto max-w-[95vw] px-[1vw] sm:px-[2vw] md:px-[3vw] mb-12">
        <h2 className="text-2xl md:text-3xl font-bold">My Projects:</h2>
      </div>
      <div className="container mx-auto max-w-[95vw] px-[1vw] sm:px-[2vw] md:px-[3vw] mb-12 ">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

const projects: Project[] = [
  {
    title: "Fakturly",
    image: fakturly,
    description:
      "Digital invoice and payment reminder solution that makes billing management easier. Built with modern tech stack for optimal performance.",
    tech: ["Next.js", "TypeScript", "Node.js", "Tailwind"],
    repoType: "Private Repository",
    demoUrl: "https://fakturly.my.id",
  },
  {
    title: "Nimalis",
    image: nimalis,
    description:
      "A peer-to-peer platform connecting minimalists with those in need, enabling users to share and find free items while promoting sustainable living.",
    tech: ["Next.js", "TypeScript", "Node.js", "Tailwind"],
    repoType: "Private Repository",
    demoUrl: "https://nimalis.com",
  },
];

export default Projects;
