import Marquee from "react-fast-marquee";

export const techs = [
  {
    name: "JavaScript",
    image:
      "https://res.cloudinary.com/dgifxur5j/image/upload/v1747291829/JavaScript_oh9sku.svg",
  },
  {
    name: "TypeScript",
    image:
      "https://res.cloudinary.com/dgifxur5j/image/upload/v1747291829/TypeScript_o2c8sg.svg",
  },
  {
    name: "React",
    image:
      "https://res.cloudinary.com/dgifxur5j/image/upload/v1747291828/React_njjqo5.svg",
  },
  {
    name: "Tailwind CSS",
    image:
      "https://res.cloudinary.com/dgifxur5j/image/upload/v1747291827/Tailwind_CSS_xx40l6.svg",
  },
  {
    name: "Node.js",
    image:
      "https://res.cloudinary.com/dgifxur5j/image/upload/v1747291827/Node.js_moxdvj.svg",
  },
  {
    name: "Express",
    image:
      "https://res.cloudinary.com/dgifxur5j/image/upload/v1747291827/Express_quad8s.svg",
  },
  {
    name: "Prisma",
    image:
      "https://res.cloudinary.com/dgifxur5j/image/upload/v1747291827/Prisma_mnx1ss.svg",
  },
  {
    name: "PostgreSQL",
    image:
      "https://res.cloudinary.com/dgifxur5j/image/upload/v1747291829/PostgresSQL_dloh6c.svg",
  },
];

function TechStack() {
  return (
    <section id="techstack" className="mb-10">
      <div className="container mx-auto max-w-[95vw] px-[1vw] sm:px-[2vw] md:px-[3vw] mb-12 pt-12 sm:pt-16 md:pt-20">
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
            speed={100}
            direction="right"
          
          >
            {techs.map((tech, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center px-4 sm:px-6"
              >
                <div className="w-16 h-16 sm:w-14 sm:h-14 bg-white dark:bg-gray-800 rounded-xl p-4 flex items-center justify-center shadow transition-transform hover:scale-105 hover:shadow-lg text-4xl">
                  <img src={tech.image}/>
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
