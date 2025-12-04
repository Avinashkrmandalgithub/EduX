import React, { useState } from "react";
import { Search, Filter } from "lucide-react";
import { allCourses } from "../data/allCourses";
import { Link } from "react-router-dom";

import LandingNavbar from "../components/Landing/LandingNavbar";
import Footer from "../components/Footer/Footer";
import ParticlesBackground from "../components/ParticlesBackground";

const ExploreCourses = () => {
  const [search, setSearch] = useState("");

  const filtered = allCourses.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">

      {/* GLOBAL PARTICLES LIKE HOME PAGE */}
      <ParticlesBackground />

      {/* Glow Effects */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 
                        -translate-x-1/2 -translate-y-1/2 
                        w-[600px] h-[600px] 
                        bg-blue-900/20 rounded-full blur-[120px]"></div>

        <div className="absolute top-1/3 left-1/3 
                        w-[400px] h-[400px] 
                        bg-orange-600/10 rounded-full blur-[100px]"></div>
      </div>

      {/* NAVBAR */}
      <LandingNavbar />

      {/* CONTENT */}
      <main className="max-w-7xl mx-auto pt-32 px-6 md:px-12 pb-24">

        {/* HEADER */}
        <h1 className="text-4xl font-bold">Explore Courses</h1>
        <p className="text-gray-400 text-lg mb-8">
          Discover thousands of courses from expert instructors
        </p>

        {/* FILTER BAR */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-5 
                       shadow-lg flex flex-wrap gap-4 backdrop-blur-xl">

          <div className="flex items-center gap-2 bg-white/10 
                          px-4 py-3 rounded-xl flex-1 border border-white/10">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search courses..."
              className="bg-transparent w-full outline-none text-white"
            />
          </div>

          <button className="flex items-center gap-2 px-4 py-3 text-sm 
                             border border-white/10 rounded-xl 
                             hover:bg-white/10 transition">
            <Filter size={18} /> More Filters
          </button>
        </div>

        <p className="text-sm text-gray-400 mt-4">
          Showing {filtered.length} courses
        </p>

        {/* COURSES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                        gap-10 mt-10">
          {filtered.map((course) => (
            <Link
              key={course.id}
              to={`/course/${course.id}`}
              className="block rounded-2xl border border-white/10 
                         bg-[#0B1120] shadow hover:shadow-blue-500/20 
                         hover:border-blue-500/40 
                         transition overflow-hidden"
            >
              {/* IMAGE */}
              <img
                src={course.image}
                className="h-48 w-full object-cover"
              />

              <div className="p-4">
                <span className="text-xs bg-white/10 border border-white/20 
                                 px-3 py-1 rounded-full text-blue-300">
                  {course.category}
                </span>

                <h3 className="text-lg font-semibold mt-3 hover:text-blue-400">
                  {course.title}
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  {course.description}
                </p>

                <div className="flex justify-between items-center mt-4 text-sm">
                  <span>⭐ {course.rating}</span>
                  <span>| {course.duration}</span>
                </div>

                <p className="text-orange-400 font-bold mt-3 text-lg">
                  ₹{course.price}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default ExploreCourses;
