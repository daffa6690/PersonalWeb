import dumbwaysLogo from "../assets/dumbways.png";

interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  logo: string;
  technologies: string[];
  description: string[];
}

const workExperiences: WorkExperience[] = [
  {
    company: "DumbWays Indonesia",
    position: "Full Stack Web Developer",
    duration: "Des 2024 - Present",
    logo: dumbwaysLogo,
    technologies: ["JavaScript", "React", "Node.js", "Express", "PostgreSQL"],
    description: [
      "Learning JavaScript, React, Node.js, and related technologies",
      "Providing code reviews and technical guidance",
      "Developing curriculum and learning materials",
      "Conducting technical interviews and assessments",
    ],
  },
];

const WorkExperience = () => {
  return (
    <section id="experience" className="mb-10 overflow-x-hidden">
      <div className="container mx-auto max-w-[95vw] px-[1vw] sm:px-[2vw] md:px-[3vw] mb-12 pt-12 sm:pt-16 md:pt-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Work Experiences:
        </h2>
      </div>

      <div className="container mx-auto max-w-[95vw] px-[1vw] sm:px-[2vw] md:px-[3vw] space-y-4 sm:space-y-6 md:space-y-10">
        {workExperiences.map((experience, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row items-start bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm w-full"
          >
            <img
              src={experience.logo}
              alt={experience.company}
              className="w-12 sm:w-16 h-12 sm:h-16 rounded-lg mb-2 sm:mb-0 object-contain bg-white"
            />
            <div className="sm:ml-4 md:ml-8 flex-grow">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 sm:mb-4">
                <div>
                  <h3 className="font-semibold text-lg sm:text-xl md:text-2xl">
                    {experience.position}
                  </h3>
                  <p className="text-green-600 dark:text-green-400 text-sm sm:text-base">
                    {experience.company}
                  </p>
                </div>
                <span className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
                  {experience.duration}
                </span>
              </div>

              <ul className="text-gray-600 dark:text-gray-400 text-sm sm:text-base space-y-1 sm:space-y-2 list-disc list-inside mb-2 sm:mb-4">
                {experience.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1 sm:gap-2">
                {experience.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 sm:px-4 py-1 sm:py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-xs sm:text-xs font-medium text-gray-600 dark:text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
