import { Sparkles } from "lucide-react";

const LandingNavbar = () => {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <div
        className="flex items-center justify-between w-[90%] max-w-6xl px-6 py-3 
                      bg-white/5 backdrop-blur-md border border-white/10 
                      rounded-full shadow-lg"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            className="flex items-center justify-center w-8 h-8 rounded-full 
                          bg-linear-to-br from-blue-400 to-blue-600"
          >
            <Sparkles size={16} className="text-white fill-white" />
          </div>
          <span className="text-xl font-bold tracking-wide">EduX</span>
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#" className="hover:text-white transition-colors">
            Courses
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Community
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Pricing
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium hover:text-gray-300">
            Sign In
          </button>
          <button
            className="px-5 py-2 text-sm font-semibold text-black bg-orange-400 
                            hover:bg-orange-500 rounded-full transition-all"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;
