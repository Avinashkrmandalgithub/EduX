import { useParams } from "react-router-dom";
import { allCourses } from "../data/allCourses";

import ParticlesBackground from "../components/ParticlesBackground";
import LandingNavbar from "../components/Landing/LandingNavbar";
import Footer from "../components/Footer/Footer";

import CourseHeader from "../components/CourseDetails/CourseHeader";
import CourseLearnBox from "../components/CourseDetails/CourseLearnBox";
import CourseAccordion from "../components/CourseDetails/CourseAccordion";
import CourseRequirements from "../components/CourseDetails/CourseRequirements";
import InstructorBox from "../components/CourseDetails/InstructorBox";
import CourseSidebar from "../components/CourseDetails/CourseSidebar";

const CourseDetails = () => {
  const { id } = useParams();
  const course = allCourses.find((c) => c.id === Number(id));

  if (!course) return <div className="text-white p-10">Course not found.</div>;

  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* Background Particles */}
      <ParticlesBackground />

      {/* Navbar */}
      <LandingNavbar />

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 pt-28 md:pt-32 pb-20">

        {/* GRID: 2 COL ON DESKTOP, 1 COL ON MOBILE */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* LEFT SECTION */}
          <div className="lg:col-span-2 flex flex-col gap-10">

            {/* Header */}
            <CourseHeader data={course} />

            {/* What you'll learn */}
            <CourseLearnBox list={course.learn} />

            {/* Course Content Accordion */}
            <CourseAccordion content={course.content} />

            {/* Requirements */}
            <CourseRequirements req={course.requirements} />

            {/* Instructor Box */}
            <InstructorBox instructor={course.instructor} />
          </div>

          {/* RIGHT SIDEBAR – Moves below content on mobile */}
          <div className="lg:col-span-1 w-full">
            <CourseSidebar data={course} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CourseDetails;
