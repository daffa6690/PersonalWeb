import ProjectCard, { type Project } from "../components/ProjectCard";
import Circle from "../assets/circle.png";
import DigitalCard from "../assets/digital-card.png";

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

export const projects: Project[] = [
{
  title: "Circle",
  image: Circle,
  description:
    "Circle is a Threads-like social platform for text-based interactions, featuring a React frontend and Express backend that handles authentication, post management, and real-time feeds.",
  tech: ["React js", "Express js","TypeScript", "Node.js", "TailwindCSS", "PostgreSQL"],
  repoType: "Private Repository",
  demoUrl: "https://circleku.vercel.app/",
},
  {
    title: "DumbCard",
    image: DigitalCard,
    description:
      "DumbCard is a platform to make digital business card, featuring React frontend and Express backend that make card for digital business inspired by CamCard",
    tech: ["React js", "Express js","TypeScript", "Node.js", "TailwindCSS", "PostgreSQL"],
    repoType: "Private Repository",
    demoUrl: "https://https://dumb-card-fe.vercel.app/",
  },
];

export default Projects;
