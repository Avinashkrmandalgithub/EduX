import { PlusCircle } from "lucide-react";

const ContinueCreation = () => (
  <div className="mb-12">
    <h3 className="text-2xl font-bold mb-4">Continue Creating</h3>

    <div className=" border border-white/10 p-5 rounded-2xl hover:border-purple-500/40 transition">
      <h4 className="font-semibold text-lg">React Complete Bootcamp</h4>
      <p className="text-gray-400 text-sm">
        Draft saved • 4/22 lectures created
      </p>

      <button className="mt-4 flex items-center gap-2 text-purple-400 hover:text-purple-300">
        <PlusCircle size={22} /> Continue Building Course
      </button>
    </div>
  </div>
);

export default ContinueCreation;
