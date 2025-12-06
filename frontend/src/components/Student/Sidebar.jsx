import { BookOpen, LayoutDashboard, CreditCard, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = ({ mobile }) => {
  return (
    <aside
      className={`backdrop-blur-xl  border-r border-white/10 
                       p-6 flex flex-col gap-8 
                       ${mobile ? "w-full" : "w-64 hidden md:flex"}`}
    >
      <h1 className="text-2xl font-bold tracking-wide text-blue-400">
        Student Panel
      </h1>

      <nav className="flex flex-col gap-4 text-gray-300">
        <Link
          to="/student/dashboard"
          className="flex items-center gap-3 hover:text-white"
        >
          <LayoutDashboard size={18} /> Dashboard
        </Link>

        <Link
          to="/student/courses"
          className="flex items-center gap-3 hover:text-white"
        >
          <BookOpen size={18} /> My Courses
        </Link>

        <Link
          to="/student/billing"
          className="flex items-center gap-3 hover:text-white"
        >
          <CreditCard size={18} /> Billing
        </Link>

        <button className="flex items-center gap-3 text-red-400 hover:text-red-300 mt-6">
          <LogOut size={18} /> Logout
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
