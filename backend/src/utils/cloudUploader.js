import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

export const uploadImage = async (filePath, folder = "courses") => {
  const result = await cloudinary.v2.uploader.upload(filePath, {
    folder,
    resource_type: "image",
  });

  return result.secure_url;
};

export const uploadVideo = async (filePath, folder = "lectures") => {
  const result = await cloudinary.v2.uploader.upload(filePath, {
    folder,
    resource_type: "video",
  });

  return result.secure_url;
};
