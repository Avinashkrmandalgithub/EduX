import { PlayCircle, Clock } from "lucide-react";

const EnrolledCourses = () => (
  <div className="mb-12">
    <h3 className="text-2xl font-bold mb-6">Your Courses</h3>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((x) => (
        <div 
          key={x} 
          className=" border border-white/10 rounded-2xl p-5 hover:border-blue-500/40 transition"
        >
          <h4 className="font-semibold text-lg">Full-Stack Web Development</h4>
          <p className="text-gray-400 text-sm mt-1">Progress: 67%</p>

          <div className="flex justify-between items-center mt-4">
            <span className="flex items-center gap-1 text-gray-300">
              <Clock size={14} /> 14h left
            </span>

            <PlayCircle size={26} className="text-blue-400 cursor-pointer hover:scale-110" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default EnrolledCourses;
