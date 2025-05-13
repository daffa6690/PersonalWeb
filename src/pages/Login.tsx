import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

interface LoginForm {
  email: string;
  password: string;
}

function Login() {
  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<LoginForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors: Partial<LoginForm> = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      // Simulasi API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Login success:", formData);

      // ✅ Redirect ke halaman home
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      setErrors({ email: "Login failed. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof LoginForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="min-h-screen w-screen bg-white dark:bg-gray-950 flex items-center justify-center px-4 py-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-4 sm:p-6 md:p-8 w-full max-w-[90vw] sm:max-w-[380px] max-h-[95vh] overflow-auto">
        <h2 className="text-[2.5vw] sm:text-[1.5rem] md:text-[2rem] font-bold text-center text-gray-800 dark:text-gray-200 mb-[2vh]">
          Sign In
        </h2>

        <form onSubmit={handleSubmit} className="space-y-[2vh]">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-[1.8vw] sm:text-sm md:text-base font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <div className="mt-[0.5vh] flex items-center border border-gray-300 dark:border-gray-600 rounded-md focus-within:ring-2 focus-within:ring-blue-500">
              <svg
                className="w-[4vw] h-[4vw] sm:w-5 sm:h-5 md:w-6 md:h-6 mx-[2vw] text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zM16 12v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-[2vw] py-[1.5vh] text-[1.8vw] sm:text-sm md:text-base bg-transparent border-none focus:outline-none dark:text-gray-200"
                placeholder="Enter your email"
                required
              />
            </div>
            {errors.email && (
              <p className="mt-[0.5vh] text-[1.6vw] sm:text-xs md:text-sm text-red-500">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-[1.8vw] sm:text-sm md:text-base font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <div className="mt-[0.5vh] flex items-center border border-gray-300 dark:border-gray-600 rounded-md focus-within:ring-2 focus-within:ring-blue-500">
              <svg
                className="w-[4vw] h-[4vw] sm:w-5 sm:h-5 md:w-6 md:h-6 mx-[2vw] text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 11c0-1.104-.896-2-2-2s-2 .896-2 2 2 4 2 4m0 0c0 1.104.896 2 2 2s2-.896 2-2-2-4-2-4zm0 0h4m-4 0H8m8-3v6m-4-6v6m4-6h4a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2h4"
                />
              </svg>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-[2vw] py-[1.5vh] text-[1.8vw] sm:text-sm md:text-base bg-transparent border-none focus:outline-none dark:text-gray-200"
                placeholder="Enter your password"
                required
              />
            </div>
            {errors.password && (
              <p className="mt-[0.5vh] text-[1.6vw] sm:text-xs md:text-sm text-red-500">
                {errors.password}
              </p>
            )}
          </div>

          {/* Link */}
          <div className="flex justify-between items-center">
            <Link
              to="/forgot-password"
              className="text-[1.6vw] sm:text-xs md:text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-[1.8vw] sm:text-sm md:text-base py-[1.5vh] rounded-md hover:from-blue-700 hover:to-blue-800 transition-all disabled:opacity-50 flex items-center justify-center"
          >
            {isSubmitting && (
              <svg
                className="animate-spin w-[4vw] h-[4vw] sm:w-5 sm:h-5 md:w-6 md:h-6 mr-[1vw]"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            )}
            {isSubmitting ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {/* Sign Up Prompt */}
        <p className="mt-[2vh] text-center text-[1.6vw] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
