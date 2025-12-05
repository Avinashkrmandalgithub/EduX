import { PlayCircle, Globe, Star } from "lucide-react";

const InstructorBox = ({ instructor }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold">Instructor</h2>

    {/* Responsive Wrapper */}
    <div className="flex flex-col sm:flex-row sm:items-center gap-6">

      {/* Instructor Avatar */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 
                      bg-linear-to-br from-blue-500 to-purple-600 
                      rounded-full flex items-center justify-center 
                      text-3xl sm:text-4xl font-bold shrink-0">
        {instructor.charAt(0)}
      </div>

      {/* Instructor Details */}
      <div className="flex flex-col">
        <h3 className="text-xl text-blue-400 underline leading-snug">
          {instructor}
        </h3>

        <p className="text-gray-400 text-sm">
          Full Stack Developer • Lead Instructor
        </p>

        {/* Stats — Responsive */}
        <div className="
            grid grid-cols-1 xs:grid-cols-2 sm:flex 
            gap-3 sm:gap-6 mt-4 text-gray-300 text-sm
        ">
          <span className="flex items-center gap-1">
            <Star size={14} fill="currentColor" className="text-yellow-500" />
            4.8 Rating
          </span>

          <span className="flex items-center gap-1">
            <PlayCircle size={14} />
            12 Courses
          </span>

          <span className="flex items-center gap-1">
            <Globe size={14} />
            250,000 Students
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default InstructorBox;
