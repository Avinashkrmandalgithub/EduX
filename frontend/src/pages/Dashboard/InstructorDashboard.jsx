import React, { useState } from "react";
import InstructorSidebar from "../../components/Instructor/Sidebar";
import InstructorTopbar from "../../components/Instructor/Topbar";
import StatsCards from "../../components/Instructor/StatsCards";
import CoursesList from "../../components/Instructor/CoursesList";
import QuickActions from "../../components/Instructor/QuickActions";
import ContinueCreation from "../../components/Instructor/ContinueCreation";
import ParticlesBackground from "../../components/ParticlesBackground";

const InstructorDashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-white flex">
      <ParticlesBackground />

      {/* Desktop Sidebar */}
      <InstructorSidebar />

      {/* MOBILE DRAWER */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden bg-black/40">
          {/* Clicking outside closes, clicking inside does NOT close */}
          <div
            className="absolute inset-0"
            onClick={() => setOpen(false)}
          ></div>

          <div className="relative z-50">
            <InstructorSidebar mobile close={() => setOpen(false)} />
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
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
