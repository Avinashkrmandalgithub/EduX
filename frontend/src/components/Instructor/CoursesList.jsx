import { BarChart3, Users } from "lucide-react";

const CoursesList = () => (
  <div className="mb-12">
    <h3 className="text-2xl font-bold mb-6">Your Courses</h3>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2].map((c) => (
        <div
          key={c}
          className=" border border-white/10 p-5 rounded-2xl hover:border-purple-500/40 transition"
        >
          <h4 className="font-semibold text-lg">React + Node Bootcamp</h4>
          <p className="text-gray-400 text-sm mt-1">Students: 340+</p>

          <div className="flex justify-between items-center mt-4">
            <span className="flex items-center gap-1 text-gray-300">
              <Users size={14} /> 340 Students
            </span>

            <BarChart3
              size={24}
              className="text-purple-400 cursor-pointer hover:scale-110"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default CoursesList;
