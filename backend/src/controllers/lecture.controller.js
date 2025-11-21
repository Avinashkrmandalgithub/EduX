import courseModel from "../models/course.model.js";
import lectureModel from "../models/lecture.model.js";
import { uploadVideo } from "../utils/cloudUploader.js";

export const addLecture = async (req, res) => {
  try {
    const { title, description, duration } = req.body;
    const { courseId } = req.params;

    const course = await courseModel.findById(courseId);
    if (!course)
      return res.status(404).json({
        message: "course not found",
      });
    if (!course.instructor.equals(req.user._id) && req.user.role != "admin") {
      return res.status(403).json({
        message: "Not allowed",
      });
    }

    // expect req.files.video or a videoUrl from client
    let videoUrl = req.body.videoUrl;
    if (req.files && req.files.video) {
      // implement multer elsewhere to populate req.files
      // uploadVideo should return a cloud URL
      videoUrl = await uploadVideo(
        req.files.video.tempFilePath || req.files.video.path
      );
    }

    const lecture = await lectureModel.create({
      title,
      description,
      videoUrl,
      duration,
    });
    course.lectures.push(lecture._id);
    course.totalDuration = (course.totalDuration || 0) + (duration || 0);
    await course.save();

    res.status(201).json({ success: true, lecture });

    
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};
