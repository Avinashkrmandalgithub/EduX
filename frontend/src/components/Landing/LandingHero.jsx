import { Play } from "lucide-react";
import LandingStats from "./LandingStats";

const LandingHero = () => {
  return (
    <main
      className="relative flex flex-col items-center justify-center min-h-screen 
                     px-4 pt-20 text-center"
    >
      {/* Badge */}
      <div
        className="inline-flex items-center gap-2 px-4 py-1.5 m-6 text-xs font-medium 
                      text-gray-300 bg-white/5 border border-white/10 rounded-full 
                      backdrop-blur-sm"
      >
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        The Future of Learning is Here
      </div>

      {/* Headline */}
      <h1 className="max-w-5xl mx-auto text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
        <span className="block text-white">
          Learn Without <span className="text-orange-500">Limits</span>
        </span>
        <span className="block text-gray-400">
          Explore the <span className="text-blue-500">Universe</span>
        </span>
      </h1>

      {/* Subtext */}
      <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-400 leading-relaxed">
        Immerse yourself in a revolutionary learning experience with AI-powered
        courses, holographic tutorials, and a global community of explorers.
      </p>

      {/* Call-to-Action */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
        <button
          className="flex items-center gap-2 px-8 py-4 text-base font-bold text-black 
                          bg-orange-500 hover:bg-orange-600 rounded-full transition-all 
                          shadow-[0_0_20px_rgba(249,115,22,0.4)]"
        >
          Start Learning Free →
        </button>

        <button
          className="flex items-center gap-2 px-8 py-4 text-base font-bold text-white 
                          border border-white/20 hover:bg-white/5 rounded-full 
                          transition-all"
        >
          <Play size={18} fill="currentColor" />
          Watch Demo
        </button>
      </div>
      {/* stats  */}
      <LandingStats />
    </main>
  );
};

export default LandingHero;
