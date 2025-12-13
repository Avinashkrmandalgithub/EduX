import React, { useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import ParticlesBackground from "../components/ParticlesBackground";
import VideoPlayer from "../components/CoursePlayer/VideoPlayer";
import LectureMeta from "../components/CoursePlayer/LectureMeta";
import ReviewSection from "../components/CoursePlayer/ReviewSection";
import LectureSidebar from "../components/CoursePlayer/LectureSidebar";

import { useCourseStore } from "../store/useCourseStore";
import { useAuthStore } from "../store/useAuthStore";

const CoursePlayer = () => {
  const { courseId } = useParams();

  const { fetchCourse, course, loading } = useCourseStore();
  const { user, enrolledCourses } = useAuthStore();

  const [role, setRole] = useState("student");
  const [current, setCurrent] = useState(0);
  const [lecturesState, setLecturesState] = useState([]);

  // ROLE
  useEffect(() => {
    setRole(user?.role === "instructor" ? "instructor" : "student");
  }, [user]);

  // LOAD COURSE
  useEffect(() => {
    fetchCourse(courseId);
  }, [courseId]);

  // SYNC LECTURES
  useEffect(() => {
    if (course?.lectures) {
      setLecturesState(course.lectures);
      setCurrent(0);
    }
  }, [course]);

  if (loading || !course)
    return <div className="text-white p-10">Loading...</div>;

  const isEnrolled =
    user?.role === "instructor"
      ? true
      : enrolledCourses?.some((c) => c._id === courseId);

  if (!isEnrolled) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white relative">
        <ParticlesBackground />

        <h1 className="text-3xl font-bold mb-4">No Access</h1>
        <p className="text-gray-400 mb-6">
          You are not enrolled in this course.
        </p>

        <Link
          to={`/course/${courseId}`}
          className="px-6 py-3 bg-orange-500 rounded-xl text-black font-bold hover:bg-orange-600"
        >
          Go to Course Page
        </Link>
      </div>
    );
  }

  const lectures = lecturesState;
  const currentLecture = lectures[current];

  const backLink =
    user?.role === "instructor"
      ? "/dashboard/instructor"
      : "/dashboard/student/courses";

  return (
    <div className="min-h-screen text-white flex flex-col relative">
      <ParticlesBackground />

      {/* TOP BAR */}
      <div className="h-16 border-b border-white/10 flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Link to={backLink} className="hover:bg-white/5 p-2 rounded-full">
            <ChevronLeft size={20} />
          </Link>
          <span className="font-semibold hidden md:block">{course.title}</span>
        </div>

        <div className="flex gap-2 border border-white/10 rounded-xl p-1">
          <button
            onClick={() => setRole("student")}
            className={`px-3 py-1 rounded-lg text-xs font-bold ${
              role === "student" ? "bg-blue-600" : "text-gray-400"
            }`}
          >
            Student
          </button>

          {user?.role === "instructor" && (
            <button
              onClick={() => setRole("instructor")}
              className={`px-3 py-1 rounded-lg text-xs font-bold ${
                role === "instructor"
                  ? "bg-orange-500 text-black"
                  : "text-gray-400"
              }`}
            >
              Instructor
            </button>
          )}
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="flex flex-col lg:flex-row w-full flex-1 overflow-hidden">
        {/* LEFT CONTENT */}
        <div className="flex-1 overflow-y-auto p-6">
          <VideoPlayer videoUrl={currentLecture?.videoUrl} />

          {currentLecture && (
            <LectureMeta
              lecture={currentLecture}
              index={current}
              likes={10}
              setLikes={() => {}}
              role={role}
            />
          )}

          <ReviewSection courseId={courseId} mode="interactive" />
        </div>

        {/* RIGHT SIDEBAR */}
        <LectureSidebar
          lectures={lecturesState}
          setLectures={setLecturesState}
          current={current}
          setCurrent={setCurrent}
          role={role}
          courseId={courseId}
        />
      </div>
    </div>
  );
};

export default CoursePlayer;
