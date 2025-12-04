import React from "react";
import CTAContainer from "./CTAContainer";

const CTASection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">

      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-orange-900/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Main CTA Component */}
      <div className="max-w-6xl mx-auto relative z-10">
        <CTAContainer />
      </div>
    </section>
  );
};

export default CTASection;
