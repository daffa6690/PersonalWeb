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
    logo: "/img/work/dumbways.png",
    technologies: ["JavaScript", "React", "Node.js", "Express", "PostgreSQL"],
    description: [
      "Learning JavaScript, React, Node.js, and related technologies",
      "Providing code reviews and technical guidance",
      "Developing curriculum and learning materials",
      "Conducting technical interviews and assessments",
    ],
  }
];

const WorkExperience = () => {
  return (
    <section id="experience" className="mb-32">
      {/* Section Title */}
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Work Experiences:</h2>
      </div>

      {/* Work Experience List */}
      <div className="space-y-6">
        {workExperiences.map((experience, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-start bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-sm"
          >
            <img
              src={experience.logo}
              alt={experience.company}
              className="w-16 h-16 rounded-lg mb-4 md:mb-0 object-contain bg-white"
            />
            <div className="md:ml-8 flex-grow">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="font-semibold text-xl md:text-2xl">
                    {experience.position}
                  </h3>
                  <p className="text-green-600 dark:text-green-400 text-base">
                    {experience.company}
                  </p>
                </div>
                <span className="text-base text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                  {experience.duration}
                </span>
              </div>

              <ul className="text-gray-600 dark:text-gray-400 text-base space-y-2 list-disc list-inside mb-4">
                {experience.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400"
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
