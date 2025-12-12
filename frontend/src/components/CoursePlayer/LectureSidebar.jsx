import { Plus } from "lucide-react";
import { useState } from "react";

import LectureItem from "./LectureItem";
import LectureForm from "./LectureForm";
import { useInstructorStore } from "../../store/useInstructorStore";

const LectureSidebar = ({
  lectures,
  setLectures,
  current,
  setCurrent,
  role,
  courseId,
}) => {
  const [formVisible, setFormVisible] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    duration: "",
    videoUrl: "",
  });

  const { updateLecture, deleteLecture } = useInstructorStore();

  // OPEN EDIT FORM
  const openEdit = (lec) => {
    setForm({
      title: lec.title,
      duration: `${Math.floor(lec.duration / 60)}:${String(
        lec.duration % 60
      ).padStart(2, "0")}`,
      videoUrl: lec.videoUrl,
    });

    setEditingId(lec._id);
    setFormVisible(true);
  };

  // SAVE FORM
  const save = async () => {
    const [min, sec] = form.duration.split(":");
    const durationInSeconds = Number(min) * 60 + Number(sec);

    if (editingId) {
      const updated = await updateLecture(courseId, editingId, {
        title: form.title,
        videoUrl: form.videoUrl,
        duration: durationInSeconds,
      });

      if (updated) {
        setLectures(
          lectures.map((l) => (l._id === editingId ? { ...l, ...updated } : l))
        );
      }
    }

    setEditingId(null);
    setFormVisible(false);
    setForm({ title: "", duration: "", videoUrl: "" });
  };

  // DELETE LECTURE
  const removeLecture = async (lectureId) => {
    const ok = await deleteLecture(courseId, lectureId);
    if (ok) {
      setLectures(lectures.filter((l) => l._id !== lectureId));
    }
  };

  return (
    <div className="w-full lg:w-96 border-l border-white/10 flex flex-col">
      <div className="p-4 border-b border-white/10 flex justify-between">
        <h2 className="font-semibold">Lectures</h2>

        {role === "instructor" && (
          <button
            onClick={() => {
              setFormVisible(true);
              setEditingId(null);
              setForm({ title: "", duration: "", videoUrl: "" });
            }}
            className="p-2 bg-orange-500/10 text-orange-400 rounded-lg"
          >
            <Plus size={16} />
          </button>
        )}
      </div>

      {/* FORM */}
      {formVisible && (
        <LectureForm
          form={form}
          setForm={setForm}
          save={save}
          close={() => setFormVisible(false)}
        />
      )}

      {/* LECTURE LIST */}
      <div className="flex-1 overflow-y-auto">
        {lectures.map((lec, index) => (
          <LectureItem
            key={lec._id}
            lecture={{
              ...lec,
              duration: `${Math.floor(lec.duration / 60)}:${String(
                lec.duration % 60
              ).padStart(2, "0")}`,
            }}
            index={index}
            active={current === index}
            setCurrent={setCurrent}
            role={role}
            onEdit={() => openEdit(lec)}
            onDelete={() => removeLecture(lec._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default LectureSidebar;
