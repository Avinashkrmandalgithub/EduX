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
    <div className="relative min-h-screen  text-white overflow-hidden">
      
      <ParticlesBackground />
      <LandingNavbar />

      <main className="max-w-7xl mx-auto px-4 md:px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-3 gap-12">

          <div className="lg:col-span-2 space-y-12">
            <CourseHeader data={course} />
            <CourseLearnBox list={course.learn} />
            <CourseAccordion content={course.content} />
            <CourseRequirements req={course.requirements} />
            <InstructorBox instructor={course.instructor} />
          </div>

          <CourseSidebar data={course} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CourseDetails;
