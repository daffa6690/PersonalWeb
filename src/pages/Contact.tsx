type ContactProps = {};

const Contact = (_props: ContactProps) => {
  return (
    <div id="contact">
      {/* Contact Section */}
      <div className="mb-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Let's build something together
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-8">
          Feel free to reach out if you're looking for a developer, have a
          question, or just want to connect.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <a
            href="mailto:daffadaffamdf@gmail.com"
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm">daffadaffamdf@gmail.com</span>
          </a>
          <span className="hidden md:inline text-gray-300 dark:text-gray-600">
            |
          </span>
          <div className="flex items-center space-x-2">
            <img
              src="/img/whatsapp.png"
              alt="WhatsApp"
              className="w-5 h-5 mr-2"
            />
            <span className="text-sm">+62 851-5646-1618</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
