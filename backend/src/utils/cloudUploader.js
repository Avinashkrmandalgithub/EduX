import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImage = async (filePath, folder = "courses") => {
  try {
    const result = await cloudinary.v2.uploader.upload(filePath, {
      folder,
      resource_type: "image",
    });
    return result.secure_url;
  } catch (error) {
    throw new Error("Image upload failed: " + error.message);
  }
};

export const uploadVideo = async (filePath, folder = "lectures") => {
  try {
    const result = await cloudinary.v2.uploader.upload(filePath, {
      folder,
      resource_type: "video",
    });
    return result.secure_url;
  } catch (error) {
    throw new Error("Video upload failed: " + error.message);
  }
};
