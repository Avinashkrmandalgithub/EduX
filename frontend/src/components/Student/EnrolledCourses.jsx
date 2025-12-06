import { PlayCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { allCourses } from "../../data/allCourses"; // make sure path is correct

const EnrolledCourses = () => {
  // TEMP MOCK: student is enrolled in first 3 courses
  const enrolled = allCourses.slice(0, 3);

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-6">Your Courses</h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {enrolled.map((course) => (
          <div
            key={course.id}
            className="border border-white/10 rounded-2xl p-5 hover:border-blue-500/40 transition"
          >
            <h4 className="font-semibold text-lg">{course.title}</h4>

            <p className="text-gray-400 text-sm mt-1">
              Progress: {course.progress || 0}%
            </p>

            <div className="flex justify-between items-center mt-4">
              <span className="flex items-center gap-1 text-gray-300">
                <Clock size={14} /> {course.duration}
              </span>

              <Link to={`/player/${course.id}`}>
                <PlayCircle
                  size={26}
                  className="text-blue-400 cursor-pointer hover:scale-110"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrolledCourses;
