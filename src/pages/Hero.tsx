import pp from "../assets/pp.jpeg"
import logoWa from "../assets/WhatsApp.svg.webp"

function Hero() {
  return (
    <div className="container mx-auto max-w-[95vw] px-[1vw] sm:px-[2vw] md:px-[3vw] mb-12 pt-12 sm:pt-16 md:pt-20">
      <div id="hero">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16 mb-20">
          <div className="relative w-full lg:w-1/3 flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <img
                src={pp}
                alt="Profile"
                className="relative w-64 h-64 lg:w-[320px] lg:h-[320px] rounded-xl shadow-lg object-cover transform transition duration-500 hover:scale-105"
              />
            </div>
          </div>

          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <div className="mb-8">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Hi, I'm Daffa 👋
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 font-medium mb-6">
                Full-Stack Developer
              </p>
              <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I build and ship digital products from scratch to production.
                Passionate about creating end-to-end solutions and turning ideas
                into fully functional applications. With expertise in both
                frontend and backend development, I handle everything from
                initial concept to deployment and maintenance.
              </p>
            </div>
            
            <div className="flex flex-col items-center lg:items-start space-y-3 mb-8">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-500 dark:text-gray-400">
                  Depok, Sawangan, Indonesia
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-gray-500 dark:text-gray-400">
                  Available for new projects
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="https://wa.me/6285156461618"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg transition-colors flex items-center justify-center font-medium"
              >
                <img
                  src={logoWa}
                  alt="WhatsApp"
                  className="w-5 h-5 mr-2"
                />
                Let's Talk
              </a>
              <a
                href="tes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-black dark:bg-white text-white dark:text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors flex items-center justify-center font-medium"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
