import { Heart } from "lucide-react";

const LectureMeta = ({ lecture, index, likes, setLikes, role }) => {
  if (!lecture) return null;

  return (
    <div className="mt-6 flex justify-between flex-col md:flex-row gap-3">
      <div>
        <h1 className="text-2xl font-bold">{lecture.title}</h1>
        <p className="text-gray-400 text-sm">
          Lecture {index + 1} • {lecture.duration}
        </p>
      </div>

      {role === "student" && (
        <button
          onClick={() => setLikes(likes + 1)}
          className="px-4 py-2 rounded-full border bg-white/5 border-white/10 flex items-center gap-2 text-gray-300"
        >
          ❤️ {likes}
        </button>
      )}
    </div>
  );
};

export default LectureMeta;
