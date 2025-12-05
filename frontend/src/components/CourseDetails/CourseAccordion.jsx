import { ChevronDown, ChevronUp, PlayCircle } from "lucide-react";
import { useState } from "react";

const CourseAccordion = ({ content }) => {
  const [open, setOpen] = useState(null);

  return (
    <div className="space-y-4">
      {content.map((sec) => (
        <div key={sec.id} className="border border-white/10 rounded-xl ">
          <button
            className="w-full p-5 flex justify-between items-center"
            onClick={() => setOpen(open === sec.id ? null : sec.id)}
          >
            <div className="flex items-center gap-3">
              {open === sec.id ? (
                <ChevronUp className="text-blue-400" />
              ) : (
                <ChevronDown className="text-gray-400" />
              )}
              <span className="font-semibold">{sec.title}</span>
            </div>

            <span className="text-sm text-gray-500">
              {sec.lectures} lectures • {sec.time}
            </span>
          </button>

          {open === sec.id && (
            <div className="p-5 bg-black/20 border-t border-white/10">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="flex items-center justify-between px-6 py-2 text-gray-400 text-sm"
                >
                  <div className="flex items-center gap-3">
                    <PlayCircle size={14} />
                    Part {n}
                  </div>
                  <span>04:20</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CourseAccordion;
