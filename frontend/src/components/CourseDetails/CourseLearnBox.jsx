import { CheckCircle2 } from "lucide-react";

const CourseLearnBox = ({ list = [] }) => {
  return (
    <div className="p-8 border border-white/10 rounded-3xl bg-white/5">
      <h2 className="text-2xl font-bold mb-6">What you'll learn</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {list.length > 0 ? (
          list.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 size={20} className="text-green-400 mt-1" />
              <p className="text-gray-300 text-sm">{item}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No details provided.</p>
        )}
      </div>
    </div>
  );
};


export default CourseLearnBox;
