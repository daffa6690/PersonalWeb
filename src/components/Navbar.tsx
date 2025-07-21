import { useState } from "react";
import { ModeToggle } from "./ui/mode-toggle";
import logoMD from "@/assets/md-logo.png"
 import logoWa from "@/assets/Whatsapp.svg"
 


function Navbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);
     
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-30 bg-white dark:bg-gray-950 transition-colors duration-300 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="group">
              <img
                src={logoMD}
                alt="MD Logo"
                className="h-11 w-auto transition-transform duration-300 group-hover:scale-110"
              />
            </a>

            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#techstack"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Tech Stack
              </a>
              <a
                href="#experience"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Projects
              </a>

              <a
                href="https://wa.me/6285156461618"
                target="_blank"
                className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-lg flex items-center font-medium transition-colors"
              >
                <img
                  src={logoWa}
                  alt="WhatsApp"
                  className="w-4 h-4 mr-2"
                />
                Let's Talk
              </a>

              <a
                href="test"
                target="_blank"
                className="bg-black dark:bg-white text-white dark:text-gray-900 text-sm px-4 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors flex items-center font-medium"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download CV
              </a>
              <ModeToggle />
            </div>

            <div className="flex items-center md:hidden space-x-4">
              <button
                onClick={openDrawer}
                className=" bg-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="h-5"></div>

      <div
        className={`fixed inset-0 z-40 ${
          isDrawerOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
            isDrawerOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeDrawer}
        ></div>

        <div
          className={`absolute right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out ${
            isDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-end p-4">
              <button
                onClick={closeDrawer}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-col px-6 py-4 space-y-6">
              <a
                href="#techstack"
                className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Tech Stack
              </a>
              <a
                href="#experience"
                className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="test"
                target="_blank"
                className="bg-black dark:bg-white text-white dark:text-gray-900 text-base px-5 py-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-center"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
