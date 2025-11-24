import React from "react";
import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaGithub,
} from "react-icons/fa";
import ThemeToggle from "../components/ThemeToggle";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 relative">
      {/* Theme Switch */}
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Card */}
      <div
        className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden 
                      grid md:grid-cols-2 max-w-5xl w-full min-h-[550px]"
      >
        {/* LEFT — Image + Overlay */}
        <div className="relative h-[300px] md:h-auto lg:h-full">
          <img
            src="https://i.pinimg.com/736x/ab/b2/6f/abb26f22f8fc4bc25bf2c295962b7961.jpg"
            className="w-full h-full object-cover object-center"
            alt="login illustration"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-white/40 dark:bg-black/40 backdrop-blur-sm"></div>

          {/* Text on Image */}
          <div className="absolute inset-0 flex flex-col justify-center px-10 text-black dark:text-white">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <FaGraduationCap className="text-indigo-600 dark:text-indigo-300 text-3xl" />
              <h1 className="text-2xl font-bold">EduX</h1>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold">Welcome Back!</h2>

            <p className="text-[15px] text-gray-700 dark:text-gray-300 mt-3 max-w-sm">
              Continue learning and growing every day.
            </p>
          </div>
        </div>

        {/* RIGHT — FORM */}
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <h3 className="text-xl font-semibold mb-6 dark:text-white text-center md:text-left">
            Login to your account
          </h3>

          <form className="space-y-5">
            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-10 p-3 rounded-lg border dark:border-gray-700 dark:bg-gray-700 dark:text-white 
                focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 p-3 rounded-lg border dark:border-gray-700 dark:bg-gray-700 dark:text-white 
                focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            <button className="text-indigo-500 text-sm w-fit ml-auto">
              Forgot password?
            </button>

            {/* Submit */}
            <button
              className="w-full p-3 bg-indigo-600 text-white rounded-lg font-semibold 
                               hover:bg-indigo-700 transition shadow-md"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <hr className="flex-1 dark:border-gray-700" />
            <span className="text-gray-500 text-sm dark:text-gray-400">
              OR CONTINUE WITH
            </span>
            <hr className="flex-1 dark:border-gray-700" />
          </div>

          {/* Social Login */}
          <div className="flex gap-4">
            <button
              className="flex-1 flex items-center justify-center gap-2 border p-3 rounded-lg 
                               dark:border-gray-600 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition"
            >
              <FaGoogle className="text-red-500" />
              Google
            </button>

            <button
              className="flex-1 flex items-center justify-center gap-2 border p-3 rounded-lg 
                               dark:border-gray-600 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition"
            >
              <FaGithub />
              GitHub
            </button>
          </div>

          {/* Footer */}
          <p className="mt-6 text-sm text-gray-600 dark:text-gray-300 text-center">
            Don’t have an account?
            <span className="text-indigo-500 ml-1 cursor-pointer">
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
