import { Menu } from "lucide-react";
import { useAuthStore } from "../../store/useAuthStore";
import { Link } from "react-router-dom";

const InstructorTopbar = ({ setOpen }) => {
  const user = useAuthStore((state) => state.user);

  const avatarSrc =
    user?.avatar && user.avatar.startsWith("http")
      ? user.avatar
      : "/default-avatar.png";

  return (
    <header className="flex justify-between items-center mb-10">

      {/* Left: Greeting */}
      <h2 className="text-3xl font-bold">
        Hello {user?.name || "Instructor"} 🎓
      </h2>

      {/* Right: Mobile menu + Avatar */}
      <div className="flex items-center gap-4">

        {/* Mobile Menu */}
        <button
          className="md:hidden p-2 rounded-xl border border-white/10"
          onClick={() => setOpen(true)}
        >
          <Menu size={22} />
        </button>

        {/* Profile Avatar */}
        <Link to="/dashboard/instructor/profile">
          <img
            src={avatarSrc}
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover border border-white/20 cursor-pointer hover:opacity-80"
          />
        </Link>
      </div>
    </header>
  );
};

export default InstructorTopbar;
