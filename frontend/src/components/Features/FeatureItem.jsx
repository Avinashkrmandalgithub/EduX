import React from "react";

const FeatureItem = ({ feature }) => {
  return (
    <div
      className={`group p-8 rounded-3xl border border-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-[#0B1120] ${feature.border}`}
    >
      {/* Icon */}
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-xl mb-6 ${feature.bg} ${feature.color}`}
      >
        {feature.icon}
      </div>

      <h3 className="text-xl font-bold text-white mb-3">
        {feature.title}
      </h3>

      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
        {feature.description}
      </p>
    </div>
  );
};

export default FeatureItem;
