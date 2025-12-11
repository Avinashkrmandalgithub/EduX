// src/pages/ProfilePage.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthStore } from "../store/useAuthStore";
import FileUploader from "../components/Upload/FileUploader";
import ParticlesBackground from "../components/ParticlesBackground";
import { Pencil, Check, X } from "lucide-react";

const ProfilePage = () => {
  const { user, loadUser } = useAuthStore();
  const navigate = useNavigate();

  const [saving, setSaving] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
    avatar: "",
  });

  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        bio: user.bio || "",
        avatar: user.avatar || "",
      });
    }
  }, [user]);

  const handleUploaded = (payload) => {
    const url = typeof payload === "string" ? payload : payload?.url || "";
    setForm((f) => ({ ...f, avatar: url }));
  };

  const handleUpdate = async () => {
    try {
      setSaving(true);

      await axios.put(
        `${import.meta.env.VITE_API_URL}/auth/update-profile`,
        form,
        { withCredentials: true }
      );

      await loadUser();
      setSaving(false);

      alert("Profile updated!");
      setEditMode(false);

      if (user.role === "instructor") navigate("/dashboard/instructor");
      else navigate("/dashboard/student");
    } catch (err) {
      console.error("Update failed:", err);
      setSaving(false);
      alert("Update failed!");
    }
  };

  const avatarSrc =
    form.avatar && form.avatar.startsWith("http")
      ? form.avatar
      : "/default-avatar.png";

  return (
    <div className="relative min-h-screen text-white">
      <ParticlesBackground />

      <div className="max-w-3xl mx-auto p-6 pt-24">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">My Profile</h1>

          {!editMode ? (
            <button
              onClick={() => setEditMode(true)}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl"
            >
              <Pencil size={16} /> Edit
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={handleUpdate}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-xl"
              >
                <Check size={16} /> Save
              </button>
              <button
                onClick={() => setEditMode(false)}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl"
              >
                <X size={16} /> Cancel
              </button>
            </div>
          )}
        </div>

        {/* Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-6">
          {/* Avatar + Upload */}
          <div className="flex items-center gap-6">
            <img
              src={avatarSrc}
              alt="avatar"
              className="w-24 h-24 rounded-full object-cover border border-white/20"
            />

            {editMode && (
              <div className="flex flex-col gap-2">
                <FileUploader
                  label="Upload New Photo"
                  folder="/profiles"
                  onUploaded={handleUploaded}
                />
                <p className="text-xs text-gray-400">
                  Supported: png, jpg. Max 100MB
                </p>
              </div>
            )}
          </div>

          {/* Fields */}
          <Field
            label="Full Name"
            value={form.name}
            editable={editMode}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <Field
            label="Email"
            value={form.email}
            editable={false}
          />

          <Field
            label="Phone"
            value={form.phone}
            editable={editMode}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

          <FieldTextArea
            label="Bio"
            value={form.bio}
            editable={editMode}
            onChange={(e) => setForm({ ...form, bio: e.target.value })}
          />

          {/* ROLE */}
          <p className="text-sm text-purple-400 font-bold">
            Role: {user?.role?.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
};

// Small Reusable Components
const Field = ({ label, value, editable, onChange }) => (
  <div>
    <label className="text-gray-300 text-sm">{label}</label>
    <input
      disabled={!editable}
      value={value}
      onChange={onChange}
      className={`mt-1 p-3 w-full rounded-xl outline-none border ${
        editable
          ? "bg-white/5 border-white/20"
          : "bg-white/10 border-white/10 text-gray-400"
      }`}
    />
  </div>
);

const FieldTextArea = ({ label, value, editable, onChange }) => (
  <div>
    <label className="text-gray-300 text-sm">{label}</label>
    <textarea
      disabled={!editable}
      value={value}
      onChange={onChange}
      className={`mt-1 p-3 w-full min-h-28 rounded-xl outline-none border ${
        editable
          ? "bg-white/5 border-white/20"
          : "bg-white/10 border-white/10 text-gray-400"
      }`}
    />
  </div>
);

export default ProfilePage;
