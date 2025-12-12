import { PlayCircle, Globe, Star } from "lucide-react";

const InstructorBox = ({ instructor = {} }) => {
  const avatar = instructor.avatar?.startsWith("http")
    ? instructor.avatar
    : "/default-avatar.png";

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Instructor</h2>

      <div className="flex flex-col sm:flex-row sm:items-center gap-6">

        {/* Avatar */}
        <img
          src={avatar}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border border-white/10"
          alt="instructor avatar"
        />

        {/* Info */}
        <div className="flex flex-col">
          <h3 className="text-xl text-blue-400 underline">
            {instructor.name}
          </h3>

          <p className="text-gray-400 text-sm">{instructor.email}</p>

          <div className="flex gap-6 mt-4 text-gray-300 text-sm">
            <span className="flex items-center gap-1">
              <Star size={14} fill="currentColor" className="text-yellow-500" />
              {instructor.rating || "4.8"} Rating
            </span>

            <span className="flex items-center gap-1">
              <PlayCircle size={14} />
              {instructor.coursesCount || 12} Courses
            </span>

            <span className="flex items-center gap-1">
              <Globe size={14} />
              {instructor.studentsCount || "250,000"} Students
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorBox;
