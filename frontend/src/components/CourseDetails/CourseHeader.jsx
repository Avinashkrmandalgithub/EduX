import { Star, Globe } from "lucide-react";

const CourseHeader = ({ data }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-orange-400 text-sm font-medium">
        <span>Development</span>
        <span>/</span>
        <span>Web Development</span>
      </div>

      <h1 className="text-4xl font-bold">{data.title}</h1>
      <p className="text-gray-300 text-lg">{data.subtitle}</p>

      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
        <div className="flex items-center gap-1 text-yellow-400 font-bold">
          {data.rating}
          <Star size={16} fill="currentColor" />
        </div>

        <span>({data.students.toLocaleString()} students)</span>

        <span>
          Created by{" "}
          <span className="text-blue-400 underline cursor-pointer">
            {data.instructor}
          </span>
        </span>

        <div className="flex items-center gap-1">
          <Globe size={14} />
          <span>{data.language}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
