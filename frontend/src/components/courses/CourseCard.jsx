import React from "react";
import { Link } from "react-router-dom";
import { Clock, Users, Star } from "lucide-react";
import { allCourses } from "../../data/allCourses.js";

const CourseCard = () => {
  return (
    <div className="flex flex-col items-center gap-16 w-full">

      {/* ==== COURSE GRID (Same as ExploreCourses) ==== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
        
        {allCourses.slice(0, 3).map((course) => (
          <Link
            to={`/course/${course.id}`}
            key={course.id}
            className="group block  border border-white/10 
                       rounded-2xl overflow-hidden hover:border-blue-500/40 
                       hover:shadow-blue-500/20 transition-all 
                       max-w-sm w-full"
          >
            {/* IMAGE */}
            <img
              src={course.image}
              alt={course.title}
              className="h-48 w-full object-cover group-hover:scale-105 
                         transition-transform duration-500"
            />

            {/* CONTENT */}
            <div className="p-4">

              {/* CATEGORY CHIP */}
              <span
                className={`text-[11px] px-3 py-1 rounded-full 
                            bg-white/10 border border-white/20 
                            text-blue-300`}
              >
                {course.category}
              </span>

              {/* TITLE */}
              <h3 className="text-lg font-semibold mt-3 text-white 
                             group-hover:text-blue-400 transition">
                {course.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                {course.description}
              </p>

              {/* META */}
              <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
                <span>⭐ {course.rating}</span>
                <span>| {course.duration}</span>
              </div>

              {/* PRICE */}
              <p className="text-orange-400 font-bold mt-3 text-lg">
                ₹{course.price}
              </p>

            </div>
          </Link>
        ))}

      </div>

      {/* SEE ALL COURSES BUTTON */}
      <div className="flex justify-center w-full">
        <Link
          to="/courses"
          className="px-10 py-4 text-lg font-bold text-black 
                     bg-orange-500 hover:bg-orange-600 rounded-full 
                     shadow-[0_0_25px_rgba(249,115,22,0.45)]
                     transition-all hover:scale-105"
        >
          See All Courses →
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
