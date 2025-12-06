import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import CourseDetails from "./pages/CourseDetails.jsx";
import ExploreCourses from "./pages/ExploreCourses.jsx";
import InstructorDashboard from "./pages/Dashboard/InstructorDashboard.jsx";
import StudentDashboard from "./pages/Dashboard/StudentDashboard.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<ExploreCourses />} />
        <Route path="/course/:id" element={<CourseDetails />} />

        {/* testing */}
        <Route path="/dashboard/instructor" element={ <InstructorDashboard /> } />
        <Route path="/dashboard/student" element={ <StudentDashboard /> } />
      </Routes>
    </>
  );
};

export default App;
