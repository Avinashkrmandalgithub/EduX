import React, { useEffect, useState } from "react";
import { Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { useCourseStore } from "../store/useCourseStore";

import LandingNavbar from "../components/Landing/LandingNavbar";
import Footer from "../components/Footer/Footer";
import ParticlesBackground from "../components/ParticlesBackground";

const ExploreCourses = () => {
  const { courses, fetchCourses, loading } = useCourseStore();
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchCourses();
  }, []);

  const filtered = courses.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      <ParticlesBackground />
      <LandingNavbar />

      <main className="max-w-7xl mx-auto pt-32 px-6 md:px-12 pb-24">
        <h1 className="text-4xl font-bold">Explore Courses</h1>
        <p className="text-gray-400 text-lg mb-8">
          Discover courses from expert instructors
        </p>

        {/* Search Bar */}
        <div className="border border-white/10 rounded-3xl p-5 
                        shadow-lg flex flex-wrap gap-4 backdrop-blur-xl">
          <div className="flex items-center px-4 py-3 rounded-xl flex-1 border border-white/10">
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
                             border border-white/10 rounded-xl hover:bg-white/10">
            <Filter size={18} /> More Filters
          </button>
        </div>

        {loading ? (
          <div className="text-gray-400 text-lg mt-10">Loading...</div>
        ) : (
          <>
            <p className="text-sm text-gray-400 mt-4">
              Showing {filtered.length} courses
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
              {filtered.map((course) => (
                <Link
                  key={course._id}
                  to={`/course/${course._id}`}
                  className="block rounded-2xl border border-white/10 
                              hover:shadow-blue-500/20 hover:border-blue-500/40 
                              transition overflow-hidden"
                >
                  <img src={course.thumbnail} className="h-48 w-full object-cover" />

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
                      <span>⭐ {course.rating || 4.8}</span>
                      <span>| {course.lectures?.length || 0} lectures</span>
                    </div>

                    <p className="text-orange-400 font-bold mt-3 text-lg">
                      ₹{course.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ExploreCourses;
