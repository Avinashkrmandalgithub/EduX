// src/pages/Home.jsx

import React from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import LandingNavbar from "../components/Landing/LandingNavbar";
import LandingHero from "../components/Landing/LandingHero";
import FeaturedCourses from "../components/courses/FeaturedCourses";
import FeaturesSection from "../components/Features/FeaturesSection";
import CTASection from "../components/CTC/CTASection";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white">

      {/* GLOBAL BACKGROUND ONCE */}
      <ParticlesBackground />

      {/* Global Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px]"></div>

        <div className="absolute top-1/3 left-1/3 
                        w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[100px]"></div>
      </div>

      {/* NAVBAR */}
      <LandingNavbar />

      {/* HERO */}
      <section className="m-0 p-0">
        <LandingHero />
      </section>

      {/* FEATURED COURSES */}
      <section className="m-0 p-0">
        <FeaturedCourses />
      </section>

      {/* FEATURES */}
      <section className="m-0 p-0">
        <FeaturesSection />
      </section>

      {/* CTA */}
      <section className="m-0 p-0">
        <CTASection />
      </section>

      {/* FOOTER */}
      <section className="m-0 p-0">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
