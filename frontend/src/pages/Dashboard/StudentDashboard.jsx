import React, { useState } from "react";
import Sidebar from "../../components/Student/Sidebar";
import Topbar from "../../components/Student/Topbar";
import ProgressCards from "../../components/Student/ProgressCards";
import ContinueLearning from "../../components/Student/ContinueLearning";
import EnrolledCourses from "../../components/Student/EnrolledCourses";
import ParticlesBackground from "../../components/ParticlesBackground";

const StudentDashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-white flex">
      <ParticlesBackground />

      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Mobile Sidebar */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden bg-black/40">
          <div
            className="absolute inset-0"
            onClick={() => setOpen(false)}
          ></div>

          <div className="relative z-50">
            <Sidebar mobile close={() => setOpen(false)} />
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 md:p-12 mt-20">
        <Topbar setOpen={setOpen} />

        <ProgressCards />
        <ContinueLearning />
        <EnrolledCourses />
      </main>
    </div>
  );
};

export default StudentDashboard;
