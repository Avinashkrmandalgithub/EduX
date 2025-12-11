import { useState } from "react";
import { Loader2, UploadCloud } from "lucide-react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const FileUploader = ({ label, folder, onUploaded }) => {
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const convertToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
    setUploading(true);

    const base64 = await convertToBase64(file);

    const res = await axios.post(
      `${API}/upload`,
      { fileBase64: base64, folder },
      {
        onUploadProgress: (p) => {
          setProgress(Math.round((p.loaded / p.total) * 100));
        },
      }
    );

    setUploading(false);
    onUploaded(res.data.url);
  };

  return (
    <div className="space-y-3">
      <label className="font-semibold text-gray-300">{label}</label>

      {/* File Input */}
      <label className="w-full border border-white/10 bg-white/5 p-6 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-white/10">
        <UploadCloud size={38} className="text-gray-400 mb-2" />
        <span className="text-sm text-gray-400">Click to upload file</span>

        <input
          type="file"
          accept="image/*,video/*"
          className="hidden"
          onChange={handleFile}
        />
      </label>

      {/* Preview */}
      {preview && (
        <div className="mt-3">
          {preview.endsWith(".mp4") ? (
            <video src={preview} controls className="rounded-xl w-full" />
          ) : (
            <img src={preview} className="rounded-xl w-full" />
          )}
        </div>
      )}

      {/* Progress Bar */}
      {uploading && (
        <div className="bg-white/10 rounded-lg h-3 overflow-hidden">
          <div
            className="bg-blue-500 h-full transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
