import { PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ContinueLearning = () => {
  // Mock (replace with real user course data later)
  const course = {
    id: 1,
    title: "Full-Stack React Crash Course",
    lecture: "Lecture 5 • State & Props",
    progress: 62,
  };

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-4">Continue Learning</h3>

      <div className="p-5 rounded-2xl bg-[#0B1120] border border-white/10 hover:border-blue-500/40 transition shadow-lg">
        <h4 className="text-lg font-semibold">{course.title}</h4>
        <p className="text-gray-400 text-sm">{course.lecture}</p>

        {/* Progress Bar */}
        <div className="mt-4 w-full bg-white/10 h-2 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 rounded-full transition-all"
            style={{ width: `${course.progress}%` }}
          />
        </div>

        <Link
          to={`/player/${course.id}`}
          className="mt-4 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
        >
          <PlayCircle size={24} /> Resume Lecture
        </Link>
      </div>
    </div>
  );
};

export default ContinueLearning;
