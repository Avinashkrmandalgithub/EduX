import React from "react";
import { Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";

import ExploreCourses from "./pages/ExploreCourses";
import CourseDetails from "./pages/CourseDetails";
import CoursePlayer from "./pages/CoursePlayer";

import StudentDashboard from "./pages/Dashboard/StudentDashboard";
import InstructorDashboard from "./pages/Dashboard/InstructorDashboard";

import InstructorCourses from "./pages/Dashboard/InstructorCourses";
import CreateCourse from "./pages/Dashboard/CreateCourse";
import EditCourse from "./pages/Dashboard/EditCourse";
import ManageLectures from "./pages/Dashboard/ManageLectures";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/courses" element={<ExploreCourses />} />
      <Route path="/course/:id" element={<CourseDetails />} />
      <Route path="/player/:courseId" element={<CoursePlayer />} />

      {/* Student */}
      <Route path="/dashboard/student" element={<StudentDashboard />} />
      <Route path="/dashboard/student/profile" element={<ProfilePage />} />


      {/* Instructor */}
      <Route path="/dashboard/instructor" element={<InstructorDashboard />} />
      <Route path="/dashboard/instructor/courses" element={<InstructorCourses />} />
      <Route path="/dashboard/instructor/create" element={<CreateCourse />} />
      <Route path="/dashboard/instructor/edit/:id" element={<EditCourse />} />
      <Route path="/dashboard/instructor/lectures/:id" element={<ManageLectures />} />
      <Route path="/dashboard/instructor/profile" element={<ProfilePage />} />

    </Routes>
  );
};

export default App;
