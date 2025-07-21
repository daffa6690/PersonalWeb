type Project = {
  title: string;
  image: string ;
  description: string;
  tech: string[];
  repoType: string;
  demoUrl: string;
};

function ProjectCard({
  title,
  image,
  description,
  tech,
  repoType,
  demoUrl,
}: Project) {
  return (
    <div className="group bg-white  dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden transition-colors hover:shadow-md">
      {" "}
      <div className="relative h-52 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
        {" "}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain group-hover:opacity-90 transition-opacity"
        />{" "}
      </div>{" "}
      <div className="p-6 md:p-8">
        {" "}
        <h3 className="font-semibold text-xl mb-3">{title}</h3>{" "}
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {description}{" "}
        </p>{" "}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400"
            >
              {t}{" "}
            </span>
          ))}{" "}
        </div>{" "}
        <div className="flex gap-3">
          {" "}
          <span className="inline-flex items-center px-3 py-1.5 text-xs text-gray-500 dark:text-gray-400">
            {" "}
            <svg
              className="w-4 h-4 mr-1.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              {" "}
              <path d="M12 0c-6.626 0-12 5.373-12 12 ..." />{" "}
            </svg>
            {repoType}{" "}
          </span>{" "}
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1.5 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            {" "}
            <svg
              className="w-4 h-4 mr-1.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />{" "}
            </svg>
            Live Demo{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default ProjectCard;
export type { Project };
