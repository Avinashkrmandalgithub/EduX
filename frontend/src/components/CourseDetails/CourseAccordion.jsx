import { ChevronDown, ChevronUp, PlayCircle } from "lucide-react";
import { useState } from "react";

const CourseAccordion = ({ lectures }) => {
  const [open, setOpen] = useState(true); // open by default

  return (
    <div className="space-y-4">
      <div className="border border-white/10 rounded-xl">
        <button
          className="w-full p-5 flex justify-between items-center"
          onClick={() => setOpen(!open)}
        >
          <div className="flex items-center gap-3">
            {open ? (
              <ChevronUp className="text-blue-400" />
            ) : (
              <ChevronDown className="text-gray-400" />
            )}
            <span className="font-semibold">Course Lectures</span>
          </div>

          <span className="text-sm text-gray-500">
            {lectures?.length || 0} lectures
          </span>
        </button>

        {open && (
          <div className="p-5 bg-black/20 border-t border-white/10">
            {lectures?.map((lec, i) => (
              <div
                key={lec._id}
                className="flex items-center justify-between px-6 py-2 text-gray-400 text-sm"
              >
                <div className="flex items-center gap-3">
                  <PlayCircle size={14} />
                  {i + 1}. {lec.title}
                </div>

                <span>{lec.duration || "00:00"}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseAccordion;
