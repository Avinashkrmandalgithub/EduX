import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sparkles, Menu, X } from "lucide-react";
import { useAuthStore } from "../../store/useAuthStore";

const LandingNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const goToDashboard = () => {
    if (!user) return;

    if (user.role === "instructor") {
      navigate("/instructor/dashboard");
    } else {
      navigate("/student/dashboard");
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <div
        className="flex items-center justify-between w-[90%] max-w-6xl px-6 py-3
                    backdrop-blur-md border border-white/10 
                    rounded-full shadow-lg transition-all"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div
            className="flex items-center justify-center w-8 h-8 rounded-full 
                       bg-linear-to-br from-blue-400 to-blue-600"
          >
            <Sparkles size={16} className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-wide">EduX</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>

          <Link to="/courses" className="hover:text-white transition-colors">
            Courses
          </Link>

          <button
            onClick={() => scrollToSection("features")}
            className="hover:text-white transition-colors"
          >
            Features
          </button>

          <a href="#" className="hover:text-white transition-colors">
            Community
          </a>

          <button
            onClick={() => scrollToSection("pricing")}
            className="hover:text-white transition-colors"
          >
            Pricing
          </button>
        </div>

        {/* Desktop Auth Section */}
        <div className="hidden md:flex items-center gap-4">
          {!user ? (
            <>
              <Link
                to="/login"
                className="text-sm font-medium hover:text-gray-300"
              >
                Sign In
              </Link>

              <Link
                to="/signup"
                className="px-5 py-2 text-sm font-semibold text-black bg-orange-400 
                           hover:bg-orange-500 rounded-full transition-all"
              >
                Get Started
              </Link>
            </>
          ) : (
            <>
              <button
                onClick={goToDashboard}
                className="text-sm font-medium hover:text-gray-300"
              >
                Dashboard
              </button>

              <button
                onClick={handleLogout}
                className="px-5 py-2 text-sm font-semibold text-black bg-red-400 
                           hover:bg-red-500 rounded-full transition-all"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-[82px] w-[90%] max-w-6xl 
                     backdrop-blur-md border border-white/10 
                    rounded-2xl shadow-lg px-6 py-6 flex flex-col gap-6
                    text-gray-300 transition-all duration-300
                    ${
                      menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-4 pointer-events-none"
                    }`}
      >
        <Link
          to="/"
          className="hover:text-white transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>

        <Link
          to="/courses"
          className="hover:text-white transition-colors text-base"
          onClick={() => setMenuOpen(false)}
        >
          Courses
        </Link>

        <button
          onClick={() => scrollToSection("features")}
          className="text-base text-left hover:text-white"
        >
          Features
        </button>

        <a href="#" className="hover:text-white transition-colors text-base">
          Community
        </a>

        <button
          onClick={() => scrollToSection("pricing")}
          className="text-base text-left hover:text-white"
        >
          Pricing
        </button>

        <div className="w-full h-px bg-white/10"></div>

        {/* Mobile Auth */} 
        {!user ? (
          <>
            <Link
              to="/login"
              className="text-base hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </Link>

            <Link
              to="/signup"
              className="w-full px-4 py-3 text-base font-semibold text-black bg-orange-400 
                      hover:bg-orange-500 rounded-xl transition-all text-center"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </Link>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                goToDashboard();
                setMenuOpen(false);
              }}
              className="text-base w-full text-left hover:text-white"
            >
              Dashboard
            </button>

            <button
              onClick={handleLogout}
              className="w-full px-4 py-3 text-base font-semibold text-black bg-red-400 
                      hover:bg-red-500 rounded-xl transition-all"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default LandingNavbar;
