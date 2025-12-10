import {
  PlayCircle,
  FileText,
  Smartphone,
  Infinity,
  Award,
} from "lucide-react";

const CourseSidebar = ({ data }) => {
  return (
    <div className="sticky top-28 border border-white/10 rounded-3xl shadow-xl overflow-hidden">
      <div className="relative h-48 group overflow-hidden">
        <img
          src={data.thumbnail}
          className="w-full h-full object-cover group-hover:scale-105 duration-300"
        />
      </div>

      <div className="p-6">
        <div className="flex items-baseline gap-3 mb-6">
          <span className="text-4xl font-bold">₹{data.price}</span>
        </div>

        <button className="w-full py-3 bg-orange-500 rounded-xl text-black font-bold mb-3">
          Buy Now
        </button>

        <button className="w-full py-3 bg-white/5 border border-white/10 rounded-xl">
          Add to Cart
        </button>

        <div className="text-center mt-4 text-gray-500 text-xs">
          30-Day Money Back Guarantee
        </div>

        <h4 className="mt-6 font-bold mb-4">This course includes:</h4>

        <ul className="space-y-3 text-gray-300 text-sm">
          <li className="flex gap-2">
            <PlayCircle size={16} /> {data.totalDuration} hours video
          </li>
          <li className="flex gap-2">
            <FileText size={16} /> {data.lectures?.length || 0} lectures
          </li>
          <li className="flex gap-2">
            <Infinity size={16} /> Lifetime access
          </li>
          <li className="flex gap-2">
            <Smartphone size={16} /> Mobile access
          </li>
          <li className="flex gap-2">
            <Award size={16} /> Certificate included
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CourseSidebar;
