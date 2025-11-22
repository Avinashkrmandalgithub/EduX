import courseModel from "../models/course.model.js";
import lectureModel from "../models/lecture.model.js";
import { uploadVideo } from "../utils/cloudUploader.js";

export const addLecture = async (req, res) => {
  try {
    const { title, description, duration } = req.body;
    const { courseId } = req.params;

    if (!title)
      return res.status(400).json({
        message: "Title is required",
      });

    const course = await courseModel.findById(courseId);
    if (!course)
      return res.status(404).json({
        message: "Course not found",
      });

    if (!course.instructor.equals(req.user._id) && req.user.role !== "admin") {
      return res.status(403).json({
        message: "Not allowed",
      });
    }

    let videoUrl = req.body.videoUrl;

    // If video file is uploaded
    if (req.file) {
      videoUrl = await uploadVideo(req.file.path);
    }

    if (!videoUrl)
      return res.status(400).json({
        message: "Video file is required",
      });

    const lecture = await lectureModel.create({
      title,
      description,
      videoUrl,
      duration,
    });

    // Add lecture to course
    course.lectures.push(lecture._id);
    course.totalDuration += Number(duration || 0);
    await course.save();

    res.status(201).json({
      success: true,
      lecture,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const updateLecture = async (req, res) => {
  try {
    const { courseId, lectureId } = req.params;
    const course = await courseModel.findById(courseId);
    if (!course)
      return res.status(404).json({
        message: "course not found",
      });

    if (!course.instructor.equals(req.user._id) && req.user.role !== "admin") {
      return res.status(403).json({
        message: "Not allowed",
      });
    }

    const lecture = await lectureModel.findById(lectureId);
    if (!lecture)
      return res.status(404).json({
        message: "Lecture not found",
      });

    Object.assign(lecture, req.body);
    await lecture.save();
    res.status(200).json({
      success: true,
      lecture,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};

export const deleteLecture = async (req, res) => {
  try {
    const { courseId, lectureId } = req.params;
    const course = await courseModel.findById(courseId);
    if (!course)
      return res.status(404).json({
        message: "course not found",
      });

    if (!course.instructor.equals(req.user._id) && req.user.role !== "admin") {
      return res.status(403).json({
        message: "Not allowed",
      });
    }

    await lectureModel.findByIdAndDelete(lectureId);
    course.lectures = course.lectures.filter((l) => l.toString() !== lectureId);
    await course.save();

    res.status(200).json({
      success: true,
      message: "Lecture deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};
