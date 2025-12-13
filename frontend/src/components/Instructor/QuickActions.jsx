import { PlusCircle, BarChart3, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <div className="grid sm:grid-cols-3 gap-4 mb-12">
      <button
        onClick={() => navigate("/dashboard/instructor/create")}
        className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition"
      >
        <PlusCircle size={22} className="text-purple-300 mb-2" />
        <p className="text-sm font-semibold">Create New Course</p>
      </button>

      <button
        onClick={() => navigate("/dashboard/instructor/students")}
        className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition"
      >
        <Users size={22} className="text-blue-300 mb-2" />
        <p className="text-sm font-semibold">View Student Analytics</p>
      </button>

      <button className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition">
        <BarChart3 size={22} className="text-orange-300 mb-2" />
        <p className="text-sm font-semibold">Revenue Reports</p>
      </button>
    </div>
  );
};

export default QuickActions;
