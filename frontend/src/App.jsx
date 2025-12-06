import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import CourseDetails from "./pages/CourseDetails.jsx";
import ExploreCourses from "./pages/ExploreCourses.jsx";
import InstructorDashboard from "./pages/Dashboard/InstructorDashboard.jsx";
import StudentDashboard from "./pages/Dashboard/StudentDashboard.jsx";
import CoursePlayer from "./pages/CoursePlayer.jsx";

const App = () => {
  return (
    <>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<ExploreCourses />} />
        <Route path="/course/:id" element={<CourseDetails />} />

        {/* Student Dashboard */}
        <Route path="/dashboard/student" element={<StudentDashboard />} />

        {/* Instructor Dashboard */}
        <Route path="/dashboard/instructor" element={<InstructorDashboard />} />

        {/* Course Player */}
        <Route path="/player/:courseId" element={<CoursePlayer />} />
      </Routes>
    </>
  );
};

export default App;
