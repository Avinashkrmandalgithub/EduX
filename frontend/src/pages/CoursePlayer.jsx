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
  const { user } = useAuthStore();

  const [role, setRole] = useState("student");
  const [current, setCurrent] = useState(0);

  // Auto-set role (instructor / student)
  useEffect(() => {
    if (user?.role === "instructor") setRole("instructor");
    else setRole("student");
  }, [user]);

  // Load course data
  useEffect(() => {
    fetchCourse(courseId);
  }, [courseId]);

  if (loading || !course)
    return <div className="text-white p-10">Loading...</div>;

  const lectures = course?.lectures || [];
  const currentLecture = lectures[current];

  // Smart back button
  const backLink =
    user?.role === "instructor"
      ? "/dashboard/instructor"
      : "/dashboard/student";

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

        {/* Role Switch */}
        <div className="flex gap-2 border border-white/10 rounded-xl p-1">
          {/* Student always visible */}
          <button
            onClick={() => setRole("student")}
            className={`px-3 py-1 rounded-lg text-xs font-bold 
      ${role === "student" ? "bg-blue-600" : "text-gray-400"}`}
          >
            Student
          </button>

          {/* Instructor only if user is instructor */}
          {user?.role === "instructor" && (
            <button
              onClick={() => setRole("instructor")}
              className={`px-3 py-1 rounded-lg text-xs font-bold 
        ${
          role === "instructor" ? "bg-orange-500 text-black" : "text-gray-400"
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
          <VideoPlayer videoUrl={currentLecture.videoUrl} />

          <LectureMeta
            lecture={currentLecture}
            index={current}
            likes={10}
            setLikes={() => {}}
            role={role}
          />

          <ReviewSection
            reviews={course.reviews || []}
            setReviews={() => {}}
            role={role}
          />
        </div>

        {/* RIGHT SIDEBAR */}
        <LectureSidebar
          lectures={lectures}
          setLectures={() => {}}
          current={current}
          setCurrent={setCurrent}
          role={role}
        />
      </div>
    </div>
  );
};

export default CoursePlayer;
