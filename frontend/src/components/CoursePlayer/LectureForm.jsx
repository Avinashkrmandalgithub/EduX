import { X } from "lucide-react";

const LectureForm = ({ form, setForm, save, close }) => (
  <div className="p-4 bg-orange-500/5 border-b border-white/10 space-y-3">

    <input 
      placeholder="Lecture Title"
      className="p-2 w-full bg-[#020617] border border-white/10 rounded-md"
      value={form.title}
      onChange={(e) => setForm({ ...form, title: e.target.value })}
    />

    <input 
      placeholder="YouTube Video ID"
      className="p-2 w-full bg-[#020617] border border-white/10 rounded-md"
      value={form.videoId}
      onChange={(e) => setForm({ ...form, videoId: e.target.value })}
    />

    <input 
      placeholder="Duration (10:00)"
      className="p-2 w-full bg-[#020617] border border-white/10 rounded-md"
      value={form.duration}
      onChange={(e) => setForm({ ...form, duration: e.target.value })}
    />

    <div className="flex gap-2">
      <button onClick={save} className="flex-1 bg-orange-500 text-black rounded-lg py-2 font-bold">
        Save
      </button>

      <button onClick={close} className="px-3 bg-white/10 rounded-lg">
        <X size={16} />
      </button>
    </div>

  </div>
);

export default LectureForm;
