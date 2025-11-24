import { 
  FaGraduationCap, 
  FaGoogle, 
  FaGithub, 
  FaUser, 
  FaEnvelope, 
  FaLock 
} from "react-icons/fa";

import ThemeToggle from "../components/ThemeToggle";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 relative">

      {/* Theme Switch Button */}
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Outer Card */}
      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-3xl overflow-hidden 
                      max-w-5xl w-full grid md:grid-cols-2">

        {/* LEFT SIDE — FULL IMAGE WITH TEXT OVERLAY */}
        <div className="relative h-[350px] md:h-full">

          {/* Background Image */}
          <img
            src="https://i.pinimg.com/736x/4d/a7/85/4da7852cd8d1673b38ca81cf1b4ba4be.jpg"
            className="w-full h-full object-cover"
            alt="illustration"
          />

          {/* Overlay to blend with theme */}
          <div className="absolute inset-0 bg-white/40 dark:bg-black/40 backdrop-blur-sm"></div>

          {/* TEXT OVER IT */}
          <div className="absolute inset-0 flex flex-col justify-center px-10 text-black dark:text-white">

            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <FaGraduationCap className="text-indigo-600 dark:text-indigo-300 text-3xl" />
              <h1 className="text-2xl font-bold">EduX</h1>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Start your journey
            </h2>

            <p className="text-[15px] text-gray-700 dark:text-gray-300 mt-3 max-w-sm">
              Join thousands of learners and instructors building their future.
            </p>

          </div>
        </div>

        {/* RIGHT SIDE — FORM */}
        <div className="p-8 md:p-10 flex flex-col justify-center">

          <h3 className="text-xl font-semibold mb-5 dark:text-white">
            Create an account
          </h3>

          <form className="space-y-5">

            {/* FULL NAME */}
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full pl-10 p-3 rounded-lg border dark:border-gray-700 
                           dark:bg-gray-700 dark:text-white focus:ring-2 
                           focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* EMAIL */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-10 p-3 rounded-lg border dark:border-gray-700 
                           dark:bg-gray-700 dark:text-white focus:ring-2 
                           focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 p-3 rounded-lg border dark:border-gray-700 
                           dark:bg-gray-700 dark:text-white focus:ring-2 
                           focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* ROLE SELECT */}
            <div className="flex gap-6 dark:text-gray-300 mt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="role" defaultChecked />
                <span>Student</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="role" />
                <span>Instructor</span>
              </label>
            </div>

            {/* SUBMIT */}
            <button className="w-full p-3 bg-indigo-600 text-white rounded-lg font-semibold 
                               hover:bg-indigo-700 transition-all shadow-md">
              Create Account
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

          {/* SOCIAL BUTTONS */}
          <div className="flex gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 border p-3 
                               rounded-lg dark:border-gray-600 dark:text-white 
                               hover:bg-gray-50 dark:hover:bg-gray-700 transition">
              <FaGoogle className="text-red-500" />
              Google
            </button>

            <button className="flex-1 flex items-center justify-center gap-2 border p-3 
                               rounded-lg dark:border-gray-600 dark:text-white 
                               hover:bg-gray-50 dark:hover:bg-gray-700 transition">
              <FaGithub className="text-black dark:text-white" />
              GitHub
            </button>
          </div>

          {/* Login redirect */}
          <p className="mt-6 text-sm text-gray-600 dark:text-gray-300 text-center">
            Already have an account?
            <span className="text-indigo-500 ml-1 cursor-pointer">
              <Link to="/login">Login</Link>
              </span>
          </p>

        </div>
      </div>
    </div>
  );
}
