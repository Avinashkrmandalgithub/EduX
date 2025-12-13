import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCourseStore } from "../store/useCourseStore";

import ParticlesBackground from "../components/ParticlesBackground";
import LandingNavbar from "../components/Landing/LandingNavbar";
import Footer from "../components/Footer/Footer";

import CourseHeader from "../components/CourseDetails/CourseHeader";
import CourseLearnBox from "../components/CourseDetails/CourseLearnBox";
import CourseAccordion from "../components/CourseDetails/CourseAccordion";
import CourseRequirements from "../components/CourseDetails/CourseRequirements";
import InstructorBox from "../components/CourseDetails/InstructorBox";
import CourseSidebar from "../components/CourseDetails/CourseSidebar";
import ReviewSection from "../components/CoursePlayer/ReviewSection";

const CourseDetails = () => {
  const { id } = useParams();
  const { fetchCourse, course, loading } = useCourseStore();

  // Load course from backend
  useEffect(() => {
    fetchCourse(id);
  }, [id]);

  if (loading || !course)
    return <div className="text-white p-10">Loading...</div>;

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <ParticlesBackground />
      <LandingNavbar />

      <main className="max-w-7xl mx-auto px-4 md:px-6 pt-28 md:pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* LEFT SECTION */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            <CourseHeader data={course} />
            <CourseLearnBox list={course.tags || []} />
            <CourseAccordion lectures={course.lectures || []} />
            <CourseRequirements req={course.requirements || []} />
            <ReviewSection courseId={id} mode="read" />
            <InstructorBox instructor={course.instructor} />
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-1">
            <CourseSidebar data={course} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CourseDetails;
