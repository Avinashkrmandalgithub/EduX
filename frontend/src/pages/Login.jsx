import React, { useState } from "react";
import { Mail, Lock, ArrowRight, Github, Chrome, Sparkles } from "lucide-react";
import ParticlesBackground from "../components/ParticlesBackground";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const Login = () => {
  const navigate = useNavigate();

  const login = useAuthStore((state) => state.login);
  const loading = useAuthStore((state) => state.loading);
  const error = useAuthStore((state) => state.error);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await login(email, password);
    if (res.success) {
      const user = useAuthStore.getState().user;

      if (user.role === "instructor") {
        navigate("/dashboard/instructor");
      } else {
        navigate("/dashboard/student");
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden text-white">
      <ParticlesBackground />

      {/* Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px]"></div>
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-orange-900/10 rounded-full blur-[100px]"></div>

      <div className="relative z-10 w-full max-w-md p-6">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-br from-blue-400 to-blue-600 shadow-blue-500/40 shadow-lg">
            <Sparkles size={24} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome Back <span className="text-blue-500">EduX</span>
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            Log in to continue learning
          </p>
        </div>

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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-sm text-white focus:border-blue-500/50 focus:bg-white/10 outline-none placeholder-gray-600"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2 mb-4">
            <label className="text-xs font-medium text-gray-400 ml-1">
              Password
            </label>
            <div className="relative group">
              <Lock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400"
                size={18}
              />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-sm text-white focus:border-blue-500/50 focus:bg-white/10 outline-none placeholder-gray-600"
              />
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-400 text-sm mb-2">{error}</p>}

          {/* Login Button */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-black font-bold py-3.5 rounded-2xl shadow-orange-500/40 shadow-lg transition-all hover:scale-[1.02] active:scale-[0.97] flex items-center justify-center gap-2 mt-2"
          >
            {loading ? "Signing In..." : "Sign In"} <ArrowRight size={18} />
          </button>

          {/* Divider + Social Login */}
          <div className="flex items-center gap-4 my-8">
            <div className="h-px bg-white/10 flex-1"></div>
            <span className="text-xs text-gray-500 font-medium">OR</span>
            <div className="h-px bg-white/10 flex-1"></div>
          </div>

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
