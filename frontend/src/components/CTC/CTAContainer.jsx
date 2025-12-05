import React from "react";
import { Rocket } from "lucide-react";
import CTAButtons from "./CTAButtons";

const CTAContainer = () => {
  return (
    <div className="relative  border border-white/5 rounded-4xl overflow-hidden 
                    p-8 md:p-12 text-center max-w-4xl mx-auto">

      {/* Light Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 
                      w-2/3 h-1/3 
                      bg-linear-to-b from-orange-500/20 to-transparent 
                      blur-[60px] pointer-events-none">
      </div>

      <div className="relative z-10 flex flex-col items-center">

        {/* Icon */}
        <div className="inline-flex items-center justify-center 
                        w-16 h-16 mb-5 
                        rounded-2xl 
                        bg-linear-to-br from-orange-400/20 to-orange-600/20
                        border border-orange-500/30 
                        text-orange-400 
                        shadow-[0_0_25px_rgba(249,115,22,0.3)]">
          <Rocket size={32} fill="currentColor" className="opacity-90" />
        </div>

        {/* Title */}
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-snug">
          Ready to <span className="text-orange-500">Transform</span> Your Future?
        </h3>

        {/* Subtext */}
        <p className="max-w-xl mx-auto text-base text-gray-400 mb-8">
          Join thousands of pioneers shaping tomorrow. Start your free trial and experience the future of learning.
        </p>

        {/* Buttons */}
        <CTAButtons />

        {/* Footer */}
        <p className="text-xs text-gray-500 mt-3">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default CTAContainer;
