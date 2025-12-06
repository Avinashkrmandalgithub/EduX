import { BarChart3, Users, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CoursesList = () => {
  const courses = [
    {
      id: 1,
      title: "React + Node Bootcamp",
      students: 340,
      status: "Published",
    },
    {
      id: 2,
      title: "JavaScript Mastery",
      students: 220,
      status: "Draft",
    },
  ];

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-6">Your Courses</h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((c) => (
          <div
            key={c.id}
            className="bg-[#0B1120] border border-white/10 p-5 rounded-2xl hover:border-purple-500/40 transition shadow-md"
          >
            <h4 className="font-semibold text-lg">{c.title}</h4>

            <p className="text-gray-400 text-sm mt-1 flex items-center gap-1">
              <Users size={14} /> {c.students} Students
            </p>

            <p
              className={`text-xs mt-2 font-bold ${
                c.status === "Published"
                  ? "text-green-400"
                  : "text-yellow-400"
              }`}
            >
              ● {c.status}
            </p>

            <div className="flex justify-between items-center mt-5">
              {/* Manage Lectures */}
              <Link
                to={`/player/${c.id}?view=instructor`}
                className="text-purple-400 hover:text-purple-300 flex items-center gap-1 text-sm"
              >
                <PlayCircle size={18} />
                Manage Lectures
              </Link>

              <BarChart3
                size={22}
                className="text-purple-400 cursor-pointer hover:scale-110 transition"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
