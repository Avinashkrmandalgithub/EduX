import courseModel from "../models/course.model.js";
import lectureModel from "../models/lecture.model.js";
import reviewModel from "../models/review.model.js";
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

    if (
      !title ||
      !subtitle ||
      !description ||
      !category ||
      !price ||
      !level ||
      !language ||
      !tags
    ) {
      return res.status(400).json({
        message: "Missing fields",
      });
    }

    // Thumbnail handling
    let thumbnail = req.body.thumbnail;

    if (req.file) {
      thumbnail = await uploadImage(req.file.path);
    }

    if (!thumbnail) {
      return res.status(400).json({
        message: "Thumbnail is required",
      });
    }

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
      message: "Course created",
      course,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
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

    if (!course.instructor.equals(req.user._id) && req.user.role !== "admin")
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
        message: "Course not found",
      });

    if (!course.instructor.equals(req.user._id) && req.user.role !== "admin")
      return res.status(403).json({
        message: "Not allowed",
      });

    await course.deleteOne();

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

export const getCourseById = async (req, res) => {
  try {
    const course = await courseModel
      .findById(req.params.id)
      .populate("instructor", "name email avatar")
      .populate({
        path: "lectures",
        select: "title duration videoUrl description order",
      })
      .populate({
        path: "reviews",
        populate: { path: "user", select: "name" },
      });

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json({ success: true, course });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const listCourses = async (req, res) => {
  try {
    const {
      q,
      level,
      category,
      sortBy = "createdAt",
      page = 1,
      limit = 12,
    } = req.query;

    const filter = {};
    if (q) filter.$text = { $search: q };
    if (category) filter.category = category;
    if (level) filter.level = level;

    const skip = (page - 1) * limit;

    const total = await courseModel.countDocuments(filter);
    const courses = await courseModel
      .find(filter)
      .populate("instructor", "name email _id")
      .sort({ [sortBy]: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    res.status(200).json({ success: true, total, page, courses });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};

export const publishCourse = async (req, res) => {
  try {
    const course = await courseModel.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });

    if (!course.instructor.equals(req.user._id) && req.user.role !== "admin")
      return res.status(403).json({ message: "Not allowed" });

    course.published = true;
    await course.save();

    res.status(200).json({ success: true, course });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};

export const enrollCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const course = await courseModel.findById(courseId);

    if (!course)
      return res.status(404).json({
        message: "Course not found",
      });

    // Already enrolled
    if (course.studentsEnrolled.includes(req.user._id)) {
      return res.status(400).json({
        message: "You are already enrolled in this course",
      });
    }

    // Instead of creating order here,
    // we direct user to the Razorpay payment API
    res.status(200).json({
      success: true,
      message: "Proceed to payment",
      redirect: "/payments/create-intent",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
