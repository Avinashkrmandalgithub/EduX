import { Star, Globe } from "lucide-react";

const CourseHeader = ({ data }) => {
  return (
    <div className="space-y-6">
      {/* Category (static for now, or replace with data.category) */}
      <div className="flex items-center gap-2 text-orange-400 text-sm font-medium">
        <span>{data.category || "Category"}</span>
        <span>/</span>
        <span>{data.level || "Beginner"}</span>
      </div>

      {/* Course Title */}
      <h1 className="text-4xl font-bold">{data.title}</h1>

      {/* Subtitle */}
      <p className="text-gray-300 text-lg">{data.subtitle}</p>

      {/* Rating / Students / Instructor / Language */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
        {/* Rating */}
        {data.rating && (
          <div className="flex items-center gap-1 text-yellow-400 font-bold">
            {data.rating}
            <Star size={16} fill="currentColor" />
          </div>
        )}

        {/* Students Count */}
        <h4 className="text-sm text-gray-400">
          Trusted by {data.studentsEnrolled?.length || 0}+ students
        </h4>

        {/* Instructor */}
        <span>
          Created by{" "}
          <span className="text-blue-400 underline cursor-pointer">
            {data.instructor?.name || "Unknown Instructor"}
          </span>
        </span>

        {/* Language */}
        <div className="flex items-center gap-1">
          <Globe size={14} />
          <span>{data.language}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
