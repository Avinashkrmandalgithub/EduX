import React from "react";
import { Link } from "react-router-dom";
import { Clock, Users, Star } from "lucide-react";
import { allCourses } from "../../data/allCourses.js";

const CourseCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
      {allCourses.map((course) => (
        <Link
          to={`/course/${course.id}`}
          key={course.id}
          className="group relative bg-[#0B1120] border border-white/10 
                     rounded-2xl overflow-hidden hover:border-blue-500/40 
                     transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] 
                     flex flex-col max-w-sm w-full mx-auto no-underline"
        >
          {/* Image */}
          <div className="relative h-36 overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0B1120] to-transparent opacity-80"></div>

            {/* Badge */}
            <span
              className={`absolute top-3 left-3 px-2 py-0.5 text-[10px] font-medium
                          rounded-full border backdrop-blur-md ${course.badgeColor}`}
            >
              {course.category}
            </span>
          </div>

          {/* Content */}
          <div className="p-4 flex flex-col grow">
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
              {course.title}
            </h3>

            <p className="text-gray-400 text-xs leading-relaxed mb-4 grow">
              {course.description}
            </p>

            {/* Meta Data */}
            <div className="flex items-center gap-3 text-[11px] font-medium text-gray-500 mb-4 pt-3 border-t border-white/5">
              <div className="flex items-center gap-1">
                <Clock size={12} />
                <span>{course.duration}</span>
              </div>

              <div className="flex items-center gap-1">
                <Users size={12} />
                <span>{course.students}</span>
              </div>

              <div className="flex items-center gap-1 ml-auto text-yellow-400">
                <Star size={12} fill="currentColor" />
                <span>{course.rating}</span>
              </div>
            </div>

            <button
              className="w-full py-2 text-xs font-semibold text-white border border-white/20 
                               rounded-lg hover:bg-white/5 hover:border-white/40 
                               transition-all group-hover:border-blue-500/40 
                               group-hover:text-blue-400"
            >
              Explore Course
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CourseCard;
