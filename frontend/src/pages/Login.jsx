import React from "react";
import { Mail, Lock, ArrowRight, Github, Chrome, Sparkles } from "lucide-react";
import ParticlesBackground from "../components/ParticlesBackground";

const Login = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden  text-white">
      <ParticlesBackground />

      {/* Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px]"></div>
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-orange-900/10 rounded-full blur-[100px]"></div>

      <div className="relative z-10 w-full max-w-md p-6">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div
            className="flex items-center justify-center w-12 h-12 rounded-full 
                          bg-linear-to-br from-blue-400 to-blue-600 shadow-blue-500/40 shadow-lg"
          >
            <Sparkles size={24} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome Back <span className="text-blue-500">EduX</span>
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            Log in to continue learning
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-[#0B1120]/60 backdrop-blur-xl border border-white/10 rounded-4xl p-8 shadow-2xl">
          {/* Email */}
          <div className="space-y-2 mb-4">
            <label className="text-xs font-medium text-gray-400 ml-1">
              Email
            </label>
            <div className="relative group">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400"
                size={18}
              />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 
                          text-sm text-white focus:border-blue-500/50 focus:bg-white/10 outline-none 
                          placeholder-gray-600"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2 mb-4">
            <div className="flex justify-between items-center ml-1">
              <label className="text-xs font-medium text-gray-400">
                Password
              </label>
              <a
                href="#"
                className="text-xs text-orange-400 hover:text-orange-300"
              >
                Forgot?
              </a>
            </div>
            <div className="relative group">
              <Lock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400"
                size={18}
              />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 
                          text-sm text-white focus:border-blue-500/50 focus:bg-white/10 outline-none 
                          placeholder-gray-600"
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            className="w-full bg-linear-to-r from-orange-500 to-orange-600 
                             hover:from-orange-400 hover:to-orange-500 text-black font-bold 
                             py-3.5 rounded-2xl shadow-orange-500/40 shadow-lg transition-all 
                             hover:scale-[1.02] active:scale-[0.97] flex items-center justify-center gap-2 mt-2"
          >
            Sign In <ArrowRight size={18} />
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="h-px bg-white/10 flex-1"></div>
            <span className="text-xs text-gray-500 font-medium">OR</span>
            <div className="h-px bg-white/10 flex-1"></div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-sm">
              <Chrome size={18} /> Google
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-sm">
              <Github size={18} /> GitHub
            </button>
          </div>

          <p className="text-center text-sm text-gray-400">
            New to EduX?
            <a
              href="/signup"
              className="text-blue-400 hover:text-blue-300 font-semibold ml-1"
            >
              Create Account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
