import {
  LayoutDashboard,
  BookOpenCheck,
  PlusCircle,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";

const InstructorSidebar = ({ mobile }) => (
  <aside
    className={`${mobile ? "w-full" : "w-64 hidden md:flex"} 
                 backdrop-blur-xl
                border-r border-white/10 p-6 
                flex flex-col gap-8`}
  >
    <h1 className="text-2xl font-bold tracking-wide text-purple-400">
      Instructor Panel
    </h1>

    <nav className="flex flex-col gap-4 text-gray-300">
      <Link
        to="/instructor/dashboard"
        className="flex items-center gap-3 hover:text-white"
      >
        <LayoutDashboard size={18} /> Dashboard
      </Link>

      <Link
        to="/instructor/courses"
        className="flex items-center gap-3 hover:text-white"
      >
        <BookOpenCheck size={18} /> My Courses
      </Link>

      <Link
        to="/instructor/create"
        className="flex items-center gap-3 hover:text-white"
      >
        <PlusCircle size={18} /> Create New Course
      </Link>

      <button className="flex items-center gap-3 text-red-400 hover:text-red-300 mt-6">
        <LogOut size={18} /> Logout
      </button>
    </nav>
  </aside>
);

export default InstructorSidebar;
