import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { Link } from "react-router-dom";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

function Register() {
  const [formData, setFormData] = useState<RegisterForm>({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Register attempt:", formData);
    // Tambahkan logika registrasi di sini
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-[4vw] py-[4vh]">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-[4vw] sm:p-[6vw] md:p-[8vw] w-full max-w-[90vw] sm:max-w-[400px] md:max-w-[450px]">
        <h2 className="text-[2.5vw] sm:text-[1.5rem] md:text-[2rem] font-bold text-center text-gray-800 dark:text-gray-200 mb-[2vh]">
          Create Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-[2vh]">
          <div>
            <label
              htmlFor="name"
              className="block text-[1.8vw] sm:text-[0.875rem] md:text-[1rem] font-medium text-gray-700 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-[0.5vh] w-full px-[2vw] py-[1.5vh] text-[1.8vw] sm:text-[0.875rem] md:text-[1rem] border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-[1.8vw] sm:text-[0.875rem] md:text-[1rem] font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-[0.5vh] w-full px-[2vw] py-[1.5vh] text-[1.8vw] sm:text-[0.875rem] md:text-[1rem] border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-[1.8vw] sm:text-[0.875rem] md:text-[1rem] font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="mt-[0.5vh] w-full px-[2vw] py-[1.5vh] text-[1.8vw] sm:text-[0.875rem] md:text-[1rem] border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white text-[1.8vw] sm:text-[0.875rem] md:text-[1rem] py-[1.5vh] rounded-md hover:bg-blue-700 transition-colors"
          >
            Register
          </button>
        </form>
        <p className="mt-[2vh] text-center text-[1.6vw] sm:text-[0.75rem] md:text-[0.875rem] text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
