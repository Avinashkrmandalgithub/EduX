import { BarChart3, Users, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useInstructorStore } from "../../store/useInstructorStore";
import { useEffect } from "react";

const CoursesList = () => {
  const { myCourses, fetchMyCourses, loading } = useInstructorStore();

  useEffect(() => {
    fetchMyCourses();
  }, []);

  if (loading)
    return <p className="text-gray-400">Loading your courses...</p>;

  if (myCourses.length === 0)
    return (
      <p className="text-gray-400">No courses yet. Start creating one!</p>
    );

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-6">Your Courses</h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {myCourses.map((course) => (
          <div
            key={course._id}
            className="bg-[#0B1120] border border-white/10 p-5 rounded-2xl hover:border-purple-500/40 transition shadow-md"
          >
            <h4 className="font-semibold text-lg">{course.title}</h4>

            <p className="text-gray-400 text-sm mt-1 flex gap-1">
              <Users size={14} /> {course.studentsEnrolled?.length || 0} students
            </p>

            <p
              className={`text-xs mt-2 font-bold ${
                course.published ? "text-green-400" : "text-yellow-400"
              }`}
            >
              ● {course.published ? "Published" : "Draft"}
            </p>

            <div className="flex justify-between items-center mt-5">
              <Link
                to={`/dashboard/instructor/lectures/${course._id}`}
                className="text-purple-400 hover:text-purple-300 flex items-center gap-1 text-sm"
              >
                <PlayCircle size={18} /> Manage Lectures
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
