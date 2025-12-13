import { useEffect, useState } from "react";
import { useInstructorStore } from "../../store/useInstructorStore";

import InstructorSidebar from "../../components/Instructor/Sidebar";
import InstructorTopbar from "../../components/Instructor/Topbar";
import ParticlesBackground from "../../components/ParticlesBackground";

const InstructorStudents = () => {
  const { students, fetchStudents, loading } = useInstructorStore();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="relative min-h-screen text-white flex">
      <ParticlesBackground />

      {/* Desktop Sidebar */}
      <InstructorSidebar />

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden bg-black/40">
          <div
            className="absolute inset-0"
            onClick={() => setOpen(false)}
          />
          <div className="relative z-50">
            <InstructorSidebar mobile close={() => setOpen(false)} />
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 md:p-12 mt-20">
        <InstructorTopbar setOpen={setOpen} />

        {/* PAGE HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Student Analytics</h1>
          <p className="text-gray-400 mt-1">
            Students enrolled in your courses
          </p>
        </div>

        {/* CONTENT CARD */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          {loading ? (
            <p className="text-gray-400">Loading students...</p>
          ) : students.length === 0 ? (
            <p className="text-gray-400">No students enrolled yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-gray-300 border-b border-white/10">
                  <tr>
                    <th className="p-3 text-left">Student Name</th>
                    <th className="p-3 text-left">Email</th>
                    <th className="p-3 text-left">Courses Enrolled</th>
                  </tr>
                </thead>

                <tbody>
                  {students.map((s) => (
                    <tr
                      key={s._id}
                      className="border-b border-white/5 hover:bg-white/5 transition"
                    >
                      <td className="p-3 font-medium">{s.name}</td>
                      <td className="p-3 text-gray-400">{s.email}</td>
                      <td className="p-3 flex flex-wrap gap-2">
                        {s.courses.map((c) => (
                          <span
                            key={c._id}
                            className="bg-white/10 px-3 py-1 rounded-full text-xs"
                          >
                            {c.title}
                          </span>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default InstructorStudents;
