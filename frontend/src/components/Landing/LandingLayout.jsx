import ParticlesBackground from "../ParticlesBackground";
import LandingNavbar from "./LandingNavbar";
import LandingHero from "./LandingHero";
import LandingStats from "./LandingStats";
import FeaturedCourses from "../courses/FeaturedCourses";

const LandingLayout = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Background Particles */}
      <ParticlesBackground />

      {/* Ambient Glow Blobs */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 
                      -translate-y-1/2 w-[600px] h-[600px] 
                      bg-blue-900/20 rounded-full blur-[120px] -z-10"
      ></div>

      <div
        className="absolute top-1/2 left-1/3 w-[400px] h-[400px] 
                      bg-orange-600/10 rounded-full blur-[100px] -z-10"
      ></div>

      <LandingNavbar />
      <LandingHero />
      <LandingStats />
      <FeaturedCourses />
    </div>
  );
};

export default LandingLayout;
