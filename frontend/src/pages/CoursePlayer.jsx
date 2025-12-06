import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import ParticlesBackground from "../components/ParticlesBackground";

// Course Player Components
import VideoPlayer from "../components/CoursePlayer/VideoPlayer";
import LectureMeta from "../components/CoursePlayer/LectureMeta";
import ReviewSection from "../components/CoursePlayer/ReviewSection";
import LectureSidebar from "../components/CoursePlayer/LectureSidebar";

import { allCourses } from "../data/allCourses";

const CoursePlayer = () => {
  const { courseId } = useParams();

  // FIND COURSE
  const course = allCourses.find((c) => c.id === Number(courseId));

  // If course not found
  if (!course) return <div className="text-white p-10">Course not found.</div>;

  // STATE
  const [role, setRole] = useState("student");
  const [lectures, setLectures] = useState(course.lectures);
  const [current, setCurrent] = useState(0);
  const [reviews, setReviews] = useState(course.reviews);
  const [likes, setLikes] = useState(120);

  const currentLecture = lectures[current];

  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col relative">
      <ParticlesBackground />

      {/* TOP BAR */}
      <div
        className="h-16 bg-[#0B1120]/80 backdrop-blur-xl border-b border-white/10 
                      flex items-center justify-between px-6"
      >
        <div className="flex items-center gap-3">
          <Link
            to="/dashboard/student"
            className="hover:bg-white/5 p-2 rounded-full"
          >
            <ChevronLeft size={20} />
          </Link>
          <span className="font-semibold hidden md:block">{course.title}</span>
        </div>

        {/* Role Switch */}
        <div className="flex gap-2 bg-white/10 border border-white/10 rounded-xl p-1">
          <button
            onClick={() => setRole("student")}
            className={`px-3 py-1 rounded-lg text-xs font-bold 
              ${role === "student" ? "bg-blue-600" : "text-gray-400"}`}
          >
            Student
          </button>

          <button
            onClick={() => setRole("instructor")}
            className={`px-3 py-1 rounded-lg text-xs font-bold 
              ${
                role === "instructor"
                  ? "bg-orange-500 text-black"
                  : "text-gray-400"
              }`}
          >
            Instructor
          </button>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="flex flex-col lg:flex-row w-full flex-1 overflow-hidden">
        {/* LEFT CONTENT */}
        <div className="flex-1 overflow-y-auto p-6">
          <VideoPlayer videoId={currentLecture.videoId} />

          <LectureMeta
            lecture={currentLecture}
            index={current}
            likes={likes}
            setLikes={setLikes}
            role={role}
          />

          <ReviewSection
            reviews={reviews}
            setReviews={setReviews}
            role={role}
          />
        </div>

        {/* RIGHT SIDEBAR */}
        <LectureSidebar
          lectures={lectures}
          setLectures={setLectures}
          current={current}
          setCurrent={setCurrent}
          role={role}
        />
      </div>
    </div>
  );
};

export default CoursePlayer;
