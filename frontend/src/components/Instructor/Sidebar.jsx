import {
  LayoutDashboard,
  BookOpenCheck,
  PlusCircle,
  LogOut,
  House,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";

const InstructorSidebar = ({ mobile, close }) => {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <aside
      className={`${mobile ? "w-full" : "w-64 hidden md:flex"}
                  backdrop-blur-xl border-r border-white/10 
                  p-6 flex flex-col gap-8`}
    >
      <h1 className="text-2xl font-bold tracking-wide text-purple-400">
        Instructor Panel
      </h1>

      <nav className="flex flex-col gap-4 text-gray-300">
        <Link to="/"
        className="flex itmes-center gap-3 hover:text-white"
        onClick={close}
        >
          <House  size={18}/> Home
        </Link>

        <Link
          to="/dashboard/instructor"
          className="flex items-center gap-3 hover:text-white"
          onClick={close}
        >
          <LayoutDashboard size={18} /> Dashboard
        </Link>

        <Link
          to="/dashboard/instructor/courses"
          className="flex items-center gap-3 hover:text-white"
          onClick={close}
        >
          <BookOpenCheck size={18} /> My Courses
        </Link>

        <Link
          to="/dashboard/instructor/create"
          className="flex items-center gap-3 hover:text-white"
          onClick={close}
        >
          <PlusCircle size={18} /> Create New Course
        </Link>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 text-red-400 hover:text-red-300 mt-6"
        >
          <LogOut size={18} /> Logout
        </button>
      </nav>
    </aside>
  );
};

export default InstructorSidebar;
