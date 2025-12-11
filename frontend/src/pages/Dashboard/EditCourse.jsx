import React, { useEffect, useState } from "react";
import { useCourseStore } from "../../store/useCourseStore";
import { useInstructorStore } from "../../store/useInstructorStore";
import { useParams } from "react-router-dom";
import InstructorSidebar from "../../components/Instructor/Sidebar";
import InstructorTopbar from "../../components/Instructor/Topbar";
import ParticlesBackground from "../../components/ParticlesBackground";

const EditCourse = () => {
  const { id } = useParams();
  const { course, fetchCourse } = useCourseStore();
  const { updateCourse } = useInstructorStore();
  const [form, setForm] = useState(null);

  useEffect(() => {
    fetchCourse(id);
  }, [id]);

  useEffect(() => {
    if (course) {
      setForm({
        title: course.title,
        description: course.description,
        price: course.price,
        category: course.category,
      });
    }
  }, [course]);

  if (!form) return null;

  return (
    <div className="relative min-h-screen text-white flex">
      <ParticlesBackground />
      <InstructorSidebar />

      <main className="flex-1 p-6 md:p-12 mt-20">
        <InstructorTopbar />
        <h2 className="text-3xl font-bold mb-6">Edit Course</h2>

        <div className="space-y-4 max-w-xl">
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="bg-white/5 border border-white/10 rounded-xl p-3 w-full"
          />

          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="bg-white/5 border border-white/10 rounded-xl p-3 w-full"
          />

          <button
            onClick={() => updateCourse(id, form)}
            className="bg-blue-500 px-6 py-3 rounded-xl font-bold"
          >
            Update
          </button>
        </div>
      </main>
    </div>
  );
};

export default EditCourse;
