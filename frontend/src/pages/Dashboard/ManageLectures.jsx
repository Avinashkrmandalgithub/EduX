import React, { useEffect, useState } from "react";
import { useInstructorStore } from "../../store/useInstructorStore";
import { useCourseStore } from "../../store/useCourseStore";
import { useParams } from "react-router-dom";
import InstructorSidebar from "../../components/Instructor/Sidebar";
import InstructorTopbar from "../../components/Instructor/Topbar";
import ParticlesBackground from "../../components/ParticlesBackground";
import FileUploader from "../../components/Upload/FileUploader";

const ManageLectures = () => {
  const { id } = useParams();

  const { course, fetchCourse } = useCourseStore();
  const { addLecture, deleteLecture } = useInstructorStore();

  const [videoUrl, setVideoUrl] = useState("");

  const [form, setForm] = useState({
    title: "",
    duration: "",
    videoUrl: "",
  });

  // Load course
  useEffect(() => {
    fetchCourse(id);
  }, [id]);

  const handleAdd = async () => {
    if (!form.title || !videoUrl) {
      alert("Please fill all fields");
      return;
    }

    const [min, sec] = form.duration.split(":").map(Number);
    const durationInSeconds = min * 60 + sec;

    await addLecture(id, {
      title: form.title,
      duration: durationInSeconds,
      videoUrl,
    });

    fetchCourse(id);

    setForm({ title: "", duration: "", videoUrl: "" });
    setVideoUrl("");
  };

  return (
    <div className="relative min-h-screen text-white flex">
      <ParticlesBackground />
      <InstructorSidebar />

      <main className="flex-1 p-6 md:p-12 mt-20">
        <InstructorTopbar />
        <h2 className="text-3xl font-bold mb-6">Manage Lectures</h2>

        {course && (
          <>
            {/* ADD NEW LECTURE FORM */}
            <div className="space-y-4 max-w-xl border border-white/10 p-6 rounded-2xl bg-white/5">
              {/* TITLE */}
              <input
                placeholder="Lecture Title"
                className="bg-white/5 border border-white/10 rounded-xl p-3 w-full outline-none"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />

              {/* DURATION */}
              <input
                placeholder="Duration (mm:ss)"
                className="bg-white/5 border border-white/10 rounded-xl p-3 w-full outline-none"
                value={form.duration}
                onChange={(e) => setForm({ ...form, duration: e.target.value })}
              />

              {/* VIDEO UPLOADER */}
              <FileUploader
                label="Upload Lecture Video"
                folder="/videos"
                onUploaded={(url) => setVideoUrl(url)}
              />

              <button
                onClick={handleAdd}
                className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-xl font-bold w-full"
              >
                Add Lecture
              </button>
            </div>

            {/* SHOW ALL LECTURES */}
            <h3 className="text-2xl font-bold mt-10 mb-4">All Lectures</h3>

            <div className="space-y-3">
              {course?.lectures?.map((lec) => (
                <div
                  key={lec._id}
                  className="flex justify-between items-center border border-white/10 bg-white/5 rounded-xl px-5 py-3"
                >
                  <div>
                    <p className="font-semibold">{lec.title}</p>
                    <p className="text-sm text-gray-400">{lec.duration} sec</p>
                  </div>

                  <button
                    className="text-red-400 hover:text-red-300"
                    onClick={() => deleteLecture(id, lec._id)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default ManageLectures;
