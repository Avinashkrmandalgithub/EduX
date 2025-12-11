import React, { useEffect } from "react";
import InstructorSidebar from "../../components/Instructor/Sidebar";
import InstructorTopbar from "../../components/Instructor/Topbar";
import { useInstructorStore } from "../../store/useInstructorStore";
import { Link } from "react-router-dom";
import ParticlesBackground from "../../components/ParticlesBackground";

const InstructorCourses = () => {
  const { myCourses, fetchMyCourses, loading } = useInstructorStore();

  useEffect(() => {
    fetchMyCourses();
  }, []);

  return (
    <div className="relative min-h-screen text-white flex">
      <ParticlesBackground />
      <InstructorSidebar />

      <main className="flex-1 p-6 md:p-12 mt-20">
        <InstructorTopbar />

        <h2 className="text-3xl font-bold mb-6">My Courses</h2>

        {loading && <p className="text-gray-400">Loading...</p>}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {myCourses.map((c) => (
            <div
              key={c._id}
              className="bg-[#0B1120] border border-white/10 p-5 rounded-2xl"
            >
              <h4 className="font-semibold text-lg">{c.title}</h4>
              <p className="text-gray-400 text-sm mt-1">{c.description}</p>

              <div className="flex justify-between mt-4">
                <Link
                  to={`/dashboard/instructor/edit/${c._id}`}
                  className="text-blue-400"
                >
                  Edit
                </Link>

                <Link
                  to={`/player/${c._id}?view=instructor`}
                  className="text-purple-400"
                >
                  Manage Lectures
                </Link>

                {/* <Link to={`/player/${c._id}?view=instructor`}>
                  Manage Lectures
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default InstructorCourses;
