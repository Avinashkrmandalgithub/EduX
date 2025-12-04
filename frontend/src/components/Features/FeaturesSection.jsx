import React from "react";
import FeatureGrid from "./FeatureGrid";

const FeaturesSection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">

      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-medium text-orange-400 border border-orange-500/20 rounded-full bg-orange-500/5">
            Why EduX
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Designed for <span className="text-orange-500">Tomorrow</span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Every feature crafted to accelerate your growth and connect you with the future of education.
          </p>
        </div>

        {/* Feature Grid */}
        <FeatureGrid />
      </div>
    </section>
  );
};

export default FeaturesSection;
