import React from "react";
import { ArrowRight } from "lucide-react";

const CTAButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 w-full sm:w-auto">
      
      <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-black bg-orange-500 hover:bg-orange-600 rounded-full transition-all shadow-[0_0_20px_rgba(249,115,22,0.4)]">
        Start Free Trial <ArrowRight size={20} />
      </button>

      <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white border border-white/20 hover:bg-white/5 hover:border-white/40 rounded-full transition-all">
        Talk to an Expert
      </button>

    </div>
  );
};

export default CTAButtons;
