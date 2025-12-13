import React, { useEffect, useState } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import ParticlesBackground from "../../components/ParticlesBackground";
import Sidebar from "../../components/Student/Sidebar";
import Topbar from "../../components/Student/Topbar";
import { Link } from "react-router-dom";

const StudentCourses = () => {
  const enrolledCourses = useAuthStore((s) => s.enrolledCourses);

  const [open, setOpen] = useState(false);

  useEffect(() => {}, []);  // only load user once on mount

  return (
    <div className="relative min-h-screen text-white flex">
      <ParticlesBackground />
      <Sidebar />

      {open && (
        <div className="fixed inset-0 z-50 md:hidden bg-black/40">
          <div className="absolute inset-0" onClick={() => setOpen(false)}></div>
          <div className="relative z-50">
            <Sidebar mobile close={() => setOpen(false)} />
          </div>
        </div>
      )}

      <main className="flex-1 p-6 md:p-12 mt-20">
        <Topbar setOpen={setOpen} />

        <h1 className="text-3xl font-bold mb-6">My Courses</h1>

        {enrolledCourses.length === 0 && (
          <p className="text-gray-400 text-lg">
            You haven’t enrolled in any course yet.
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {enrolledCourses.map((c) => (
            <Link
              to={`/player/${c._id}`}
              key={c._id}
              className="border border-white/10 bg-white/5 rounded-2xl p-4 hover:bg-white/10 duration-200 cursor-pointer shadow-xl"
            >
              <img
                src={c.thumbnail}
                className="w-full h-40 object-cover rounded-xl mb-4"
                alt=""
              />

              <h2 className="text-xl font-semibold">{c.title}</h2>
              <p className="text-gray-400 text-sm">{c.subtitle}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default StudentCourses;
