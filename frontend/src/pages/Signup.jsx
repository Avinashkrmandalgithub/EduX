import React, { use, useState } from "react";
import {
  Mail,
  Lock,
  User,
  ArrowRight,
  Github,
  Chrome,
  Sparkles,
} from "lucide-react";
import ParticlesBackground from "../components/ParticlesBackground";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const Signup = () => {
  const navigate = useNavigate();

  const registerUser = useAuthStore((state) => state.register);
  const loading = useAuthStore((state) => state.loading);
  const error = useAuthStore((state) => state.error);

  const [role, setRole] = useState("student");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const payload = {
      name: form.name,
      email: form.email,
      password: form.password,
      role,
    };
    const res = await registerUser(payload);

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
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      <ParticlesBackground />

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[140px]"></div>
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-orange-900/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto p-6 flex items-center justify-center min-h-screen">
        <div className="w-full">
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-br from-blue-400 to-blue-600 mb-4 shadow-[0_0_20px_rgba(59,130,246,0.6)]">
              <Sparkles size={24} className="text-white" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">
              Create your <span className="text-blue-500">EduX</span> Account
            </h1>
            <p className="text-gray-400 mt-2 text-sm">
              Join the future of learning
            </p>
          </div>

          {/* Card */}
          <div className="bg-[#0B1120]/60 backdrop-blur-xl border border-white/10 rounded-4xl p-8 shadow-2xl">
            {/* Name */}
            <div className="space-y-2 mb-4">
              <label className="text-xs font-medium text-gray-400 ml-1">
                Full Name
              </label>
              <div className="relative group">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400"
                />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 
                  text-sm text-white focus:border-blue-500/50 focus:bg-white/10 outline-none placeholder-gray-600"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2 mb-4">
              <label className="text-xs font-medium text-gray-400 ml-1">
                Email
              </label>
              <div className="relative group">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 
                  text-sm text-white focus:border-blue-500/50 focus:bg-white/10 outline-none placeholder-gray-600"
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
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400"
                />
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 
                  text-sm text-white focus:border-blue-500/50 focus:bg-white/10 outline-none placeholder-gray-600"
                />
              </div>
            </div>

            {/* Role Selector */}
            <div className="text-xs font-medium text-gray-400 ml-1 mb-2">
              Register as
            </div>

            <div className="grid grid-cols-2 mb-6 bg-white/5 rounded-2xl p-1 border border-white/10">
              <button
                onClick={() => setRole("student")}
                className={`py-2 rounded-xl font-semibold text-sm transition-all 
                  ${
                    role === "student"
                      ? "bg-blue-500 text-black"
                      : "text-gray-300 hover:bg-white/10"
                  }`}
              >
                Student
              </button>

              <button
                onClick={() => setRole("instructor")}
                className={`py-2 rounded-xl font-semibold text-sm transition-all 
                  ${
                    role === "instructor"
                      ? "bg-blue-500 text-black"
                      : "text-gray-300 hover:bg-white/10"
                  }`}
              >
                Instructor
              </button>
            </div>

            {/* Error */}
            {error && <p className="text-red-400 text-sm mb-2">{error}</p>}

            {/* Submit */}
            <button
              onClick={handleSignup}
              disabled={loading}
              className="w-full bg-linear-to-r from-orange-500 to-orange-600 
              hover:from-orange-400 hover:to-orange-500 text-black font-bold 
              py-3.5 rounded-2xl shadow-[0_0_20px_rgba(249,115,22,0.5)]
              hover:scale-[1.02] active:scale-[0.97] transition-all flex items-center justify-center gap-2"
            >
              {loading ? "Creating..." : "Create Account"}
              <ArrowRight size={18} />
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
              Already have an account?
              <a
                href="/login"
                className="text-blue-400 hover:text-blue-300 font-semibold ml-1"
              >
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
