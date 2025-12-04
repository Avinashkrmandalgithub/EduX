import { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Menu, X } from "lucide-react";

const LandingNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <div
        className="flex items-center justify-between w-[90%] max-w-6xl px-6 py-3
                   bg-white/5 backdrop-blur-md border border-white/10 
                   rounded-full shadow-lg transition-all"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            className="flex items-center justify-center w-8 h-8 rounded-full 
                       bg-linear-to-br from-blue-400 to-blue-600"
          >
            <Sparkles size={16} className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-wide">EduX</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>

          <Link to="/courses" className="hover:text-white transition-colors">
            Courses
          </Link>

          <Link href="/features" className="hover:text-white transition-colors">
            Features
          </Link>
          <a href="#" className="hover:text-white transition-colors">
            Community
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Pricing
          </a>
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-4">
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

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute top-[82px] w-[90%] max-w-6xl 
                    bg-white/5 backdrop-blur-md border border-white/10 
                    rounded-2xl shadow-lg px-6 py-6 flex flex-col gap-6
                    text-gray-300 transition-all duration-300
                    ${
                      menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-4 pointer-events-none"
                    }`}
      >
        <Link
          to="/courses"
          className="hover:text-white transition-colors text-base"
        >
          Courses
        </Link>
        <a href="#" className="hover:text-white transition-colors text-base">
          Features
        </a>
        <a href="#" className="hover:text-white transition-colors text-base">
          Community
        </a>
        <a href="#" className="hover:text-white transition-colors text-base">
          Pricing
        </a>

        <div className="w-full h-px bg-white/10"></div>

        <button className="text-base w-full text-left hover:text-white">
          Sign In
        </button>
        <button
          className="w-full px-4 py-3 text-base font-semibold text-black bg-orange-400 
                           hover:bg-orange-500 rounded-xl transition-all"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default LandingNavbar;
