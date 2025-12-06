import React, { useState } from "react";
import InstructorSidebar from "../../components/Instructor/Sidebar";
import InstructorTopbar from "../../components/Instructor/Topbar";
import StatsCards from "../../components/Instructor/StatsCards";
import CoursesList from "../../components/Instructor/CoursesList";
import QuickActions from "../../components/Instructor/QuickActions";
import ContinueCreation from "../../components/Instructor/ContinueCreation";

import LandingNavbar from "../../components/Landing/LandingNavbar";
import ParticlesBackground from "../../components/ParticlesBackground";

const InstructorDashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-screen  text-white flex">
      <ParticlesBackground />
      {/* <LandingNavbar /> */}

      {/* Sidebar Desktop */}
      <InstructorSidebar />

      {/* Mobile Drawer */}
      {open && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          onClick={() => setOpen(false)}
        >
          <InstructorSidebar mobile />
        </div>
      )}

      {/* Main Section */}
      <main className="flex-1 p-6 md:p-12 mt-20">
        <InstructorTopbar setOpen={setOpen} />

        <StatsCards />

        <QuickActions />

        <ContinueCreation />

        <CoursesList />
      </main>
    </div>
  );
};

export default InstructorDashboard;
