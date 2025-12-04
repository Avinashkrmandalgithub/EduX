import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import CourseDetails from "./pages/CourseDetails.jsx";
import ExploreCourses from "./pages/ExploreCourses.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<ExploreCourses />} />
        <Route path="/course/:id" element={<CourseDetails />} />
      </Routes>
    </>
  );
};

export default App;
