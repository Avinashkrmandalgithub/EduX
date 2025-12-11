import React, { useState } from "react";
import { useInstructorStore } from "../../store/useInstructorStore";
import InstructorSidebar from "../../components/Instructor/Sidebar";
import InstructorTopbar from "../../components/Instructor/Topbar";
import ParticlesBackground from "../../components/ParticlesBackground";
import FileUploader from "../../components/Upload/FileUploader";

const CreateCourse = () => {
  const { createCourse, loading } = useInstructorStore();
  const [thumbnail, setThumbnail] = useState("");

  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    description: "",
    category: "",
    price: "",
    level: "",
    language: "",
    tags: "",
  });

  const inputClass =
    "bg-white/5 border border-white/10 rounded-xl p-3 w-full outline-none focus:border-purple-500 transition";

  const handleCreate = async () => {
    const payload = {
      ...form,
      tags: form.tags.split(",").map((s) => s.trim()),
      thumbnail,
    };

    const res = await createCourse(payload);

    if (res) alert("Course created successfully!");
  };

  return (
    <div className="relative min-h-screen text-white flex">
      <ParticlesBackground />
      <InstructorSidebar />

      <main className="flex-1 p-6 md:p-12 mt-20">
        <InstructorTopbar />
        <h2 className="text-3xl font-bold mb-6">Create New Course</h2>

        <div className="space-y-4 max-w-xl">

          <input
            type="text"
            placeholder="Course Title"
            className={inputClass}
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />

          <input
            type="text"
            placeholder="Subtitle"
            className={inputClass}
            value={form.subtitle}
            onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
          />

          <textarea
            placeholder="Course Description"
            className={inputClass}
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Category"
            className={inputClass}
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          />

          <input
            type="number"
            placeholder="Price"
            className={inputClass}
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />

          <input
            type="text"
            placeholder="Level"
            className={inputClass}
            value={form.level}
            onChange={(e) => setForm({ ...form, level: e.target.value })}
          />

          <input
            type="text"
            placeholder="Language"
            className={inputClass}
            value={form.language}
            onChange={(e) => setForm({ ...form, language: e.target.value })}
          />

          <input
            type="text"
            placeholder="Tags (comma separated)"
            className={inputClass}
            value={form.tags}
            onChange={(e) => setForm({ ...form, tags: e.target.value })}
          />

          {/* THUMBNAIL UPLOADER */}
          <FileUploader
            label="Course Thumbnail"
            folder="/thumbnails"
            onUploaded={(url) => setThumbnail(url)}
          />

          <button
            onClick={handleCreate}
            className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-xl font-bold w-full"
          >
            {loading ? "Creating..." : "Create Course"}
          </button>
        </div>
      </main>
    </div>
  );
};

export default CreateCourse;
