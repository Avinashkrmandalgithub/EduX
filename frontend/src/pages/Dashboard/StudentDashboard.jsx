import React, { useState } from "react";
import Sidebar from "../../components/Student/Sidebar";
import Topbar from "../../components/Student/Topbar";
import ProgressCards from "../../components/Student/ProgressCards";
import ContinueLearning from "../../components/Student/ContinueLearning";
import EnrolledCourses from "../../components/Student/EnrolledCourses";

import ParticlesBackground from "../../components/ParticlesBackground";
import LandingNavbar from "../../components/Landing/LandingNavbar";

const StudentDashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-screen  text-white flex">
      {/* Global Background */}
      <ParticlesBackground />

      {/* Navbar */}
      {/* <LandingNavbar /> */}

      {/* Sidebar Desktop */}
      <Sidebar />

      {/* Sidebar Mobile Drawer */}
      {open && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          onClick={() => setOpen(false)}
        >
          <Sidebar mobile />
        </div>
      )}

      {/* Main Content */}
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
