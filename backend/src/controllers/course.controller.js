import courseModel from "../models/course.model.js";
import lectureModel from "../models/lecture.model.js";
import orderModel from "../models/order.model.js";
import { uploadImage } from "../utils/cloudUploader.js";

export const createCourse = async (req, res) => {
  try {
    const {
      title,
      subtitle,
      description,
      category,
      price,
      level,
      language,
      tags,
    } = req.body;

    const thumbnail = req.body.thumbnail || " ";

    if (
      !title ||
      !subtitle ||
      !description ||
      !category ||
      !price ||
      !level ||
      !language ||
      !tags
    )
      return res.status(401).json({
        message: "Missing fields",
      });

    const course = await courseModel.create({
      title,
      subtitle,
      description,
      category,
      price,
      level,
      language,
      tags,
      thumbnail,
      instructor: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "course created",
      course,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const course = await courseModel.findById(req.params.id);
    if (!course)
      return res.status(404).json({
        message: "Course not found.",
      });

    if (!course.instructor.equals(req.user._id) && req.user.role != "admin")
      return res.status(403).json({
        message: "Not allowed",
      });

    Object.assign(course, req.body);
    await course.save();
    res.status(200).json({
      success: true,
      course,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const course = await courseModel.findById(req.params.id);
    if (!course)
      return res.status(404).json({
        message: "course not found",
      });

    if (!course.instructor.equals(req.user._id) && req.user.role != "admin")
      return res.status(403).json({
        message: "Not allowed",
      });

    await course.remove;
    res.status(200).json({
      success: true,
      message: "Course removed",
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};
