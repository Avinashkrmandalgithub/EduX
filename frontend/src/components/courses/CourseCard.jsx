import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { useCourseStore } from "../../store/useCourseStore";

const CourseCard = () => {
  const { courses, fetchCourses, loading } = useCourseStore();

  useEffect(() => {
    fetchCourses(); // fetch from backend once
  }, []);

  if (loading)
    return (
      <div className="text-center text-gray-400 text-lg py-20">
        Loading courses...
      </div>
    );

  return (
    <div className="flex flex-col items-center gap-16 w-full">
      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
        {courses.slice(0, 3).map((course) => (
          <Link
            to={`/course/${course._id}`}
            key={course._id}
            className="group block border border-white/10 
                       rounded-2xl overflow-hidden hover:border-blue-500/40 
                       hover:shadow-blue-500/20 transition-all 
                       max-w-sm w-full"
          >
            <img
              src={course.thumbnail}
              alt={course.title}
              className="h-48 w-full object-cover group-hover:scale-105 
                         transition-transform duration-500"
            />

            <div className="p-4">
              <span className="text-[11px] px-3 py-1 bg-white/10 border border-white/20 
                               rounded-full text-blue-300">
                {course.category || "General"}
              </span>

              <h3 className="text-lg font-semibold mt-3 group-hover:text-blue-400 transition">
                {course.title}
              </h3>

              <p className="text-gray-400 text-sm mt-1">{course.description}</p>

              <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
                <span>⭐ {course.rating || 4.8}</span>
                <span>| {course.lectures?.length || 0} Lectures</span>
              </div>

              <p className="text-orange-400 font-bold mt-3 text-lg">
                ₹{course.price}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* See All Courses */}
      <div className="flex justify-center w-full">
        <Link
          to="/courses"
          className="px-10 py-4 text-lg font-bold text-black bg-orange-500 
                     hover:bg-orange-600 rounded-full shadow-[0_0_25px_rgba(249,115,22,0.45)] 
                     transition-all"
        >
          See All Courses →
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
