import { Plus } from "lucide-react";
import { useState } from "react";

import LectureItem from "./LectureItem";
import LectureForm from "./LectureForm";

const LectureSidebar = ({ lectures, setLectures, current, setCurrent, role }) => {
  const [formVisible, setFormVisible] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ title: "", videoId: "", duration: "" });

  const save = () => {
    if (editingId) {
      setLectures(
        lectures.map((l) => (l.id === editingId ? { ...l, ...form } : l))
      );
    } else {
      setLectures([...lectures, { ...form, id: Date.now(), completed: false }]);
    }

    setForm({ title: "", videoId: "", duration: "" });
    setEditingId(null);
    setFormVisible(false);
  };

  return (
    <div className="w-full lg:w-96  border-l border-white/10 flex flex-col">

      <div className="p-4 border-b border-white/10 flex justify-between">
        <h2 className="font-semibold">Lectures</h2>

        {role === "instructor" && (
          <button
            onClick={() => { setFormVisible(true); setEditingId(null); }}
            className="p-2 bg-orange-500/10 text-orange-400 rounded-lg"
          >
            <Plus size={16} />
          </button>
        )}
      </div>

      {formVisible && (
        <LectureForm 
          form={form}
          setForm={setForm}
          save={save}
          close={() => setFormVisible(false)}
        />
      )}

      <div className="flex-1 overflow-y-auto">
        {lectures.map((lec, index) => (
          <LectureItem
            key={lec.id}
            lecture={lec}
            index={index}
            active={current === index}
            setCurrent={setCurrent}
            role={role}
            onEdit={() => {
              setFormVisible(true);
              setEditingId(lec.id);
              setForm(lec);
            }}
            onDelete={() => setLectures(lectures.filter((l) => l.id !== lec.id))}
          />
        ))}
      </div>

    </div>
  );
};

export default LectureSidebar;
