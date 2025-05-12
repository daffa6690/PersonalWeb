import Marquee from "react-fast-marquee";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const techs = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express", icon: <SiExpress className="text-gray-600" /> },
  { name: "Prisma", icon: <SiPrisma className="text-indigo-600" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" /> },
];

function TechStack() {
  return (
    <section id="techstack" className="mb-32">
      <div className="container mx-auto px-4 max-w">
        <h2 className="text-xl md:text-5xl font-bold mb-12">
          Tech Stack - Tools I Use Everyday
        </h2>

        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white dark:from-gray-950 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white dark:from-gray-950 to-transparent pointer-events-none" />

          <Marquee
            pauseOnHover={false}
            gradient={false}
            speed={50}
            direction="right"
          
          >
            {techs.map((tech, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center px-4 sm:px-6"
              >
                <div className="w-16 h-16 sm:w-14 sm:h-14 bg-white dark:bg-gray-800 rounded-xl p-4 flex items-center justify-center shadow transition-transform hover:scale-105 hover:shadow-lg text-4xl">
                  {tech.icon}
                </div>
                <span className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  {tech.name}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
