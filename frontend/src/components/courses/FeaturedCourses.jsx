import React from "react";
import CourseCard from "./CourseCard";

const FeaturedCourses = () => {
  return (
    <section className="relative w-full py-24 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-900/20 border border-blue-500/20 rounded-full">
            Featured Courses
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore the <span className="text-blue-500">Frontier</span>
          </h2>

          <p className="max-w-2xl text-gray-400 text-lg">
            Curated learning paths created by world-class experts to take you
            from beginner to professional.
          </p>
        </div>

        {/* Cards Grid */}
        <CourseCard />
      </div>
    </section>
  );
};

export default FeaturedCourses;
