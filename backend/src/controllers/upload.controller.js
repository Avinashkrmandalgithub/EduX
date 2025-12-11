import dotenv from "dotenv";
dotenv.config();

import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});


export const uploadFile = async (req, res) => {
  try {
    const file = req.body.fileBase64;  // base64 string
    const folder = req.body.folder;    // "/videos", "/thumbnails", "/profiles"

    if (!file || !folder)
      return res.status(400).json({ message: "Missing fileBase64 or folder" });

    const result = await imagekit.upload({
      file,
      fileName: Date.now() + "",
      folder,
    });

    res.status(200).json({
      success: true,
      url: result.url,
      fileId: result.fileId,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Upload failed", error: err.message });
  }
};
