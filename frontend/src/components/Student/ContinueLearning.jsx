import { PlayCircle } from "lucide-react";

const ContinueLearning = () => (
  <div className="mb-12">
    <h3 className="text-2xl font-bold mb-4">Continue Learning</h3>

    <div className=" p-5 rounded-2xl border border-white/10 hover:border-blue-500/40 transition">
      <h4 className="text-lg font-semibold">React Crash Course</h4>
      <p className="text-gray-400 text-sm">Lecture 5 • State & Props</p>

      <button className="mt-4 flex items-center gap-2 text-blue-400 hover:text-blue-300">
        <PlayCircle size={24} /> Resume Lecture
      </button>
    </div>
  </div>
);

export default ContinueLearning;
