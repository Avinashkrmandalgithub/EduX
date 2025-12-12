import { Edit2, Trash2 } from "lucide-react";

const LectureItem = ({
  lecture,
  active,
  index,
  setCurrent,
  role,
  onEdit,
  onDelete
}) => (
  <div
    onClick={() => setCurrent(index)}
    className={`p-4 border-l-2 cursor-pointer 
      ${active ? "border-blue-500 bg-blue-500/5" : "border-transparent"}
      hover:bg-white/5 flex justify-between`}
  >
    <div>
      <p className="text-sm font-medium">{lecture.title}</p>
      <p className="text-xs text-gray-400">{lecture.duration}</p>
    </div>

    {role === "instructor" && (
      <div className="flex gap-1">
        <button
          className="text-blue-400"
          onClick={(e) => {
            e.stopPropagation();
            onEdit();
          }}
        >
          <Edit2 size={14} />
        </button>

        <button
          className="text-red-400"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          <Trash2 size={14} />
        </button>
      </div>
    )}
  </div>
);

export default LectureItem;
