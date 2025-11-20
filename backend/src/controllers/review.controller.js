import reviewModel from "../models/review.model.js";
import courseModel from "../models/course.model.js";

export const addReview = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { rating, comment } = req.body;

    const course = await courseModel.findById(courseId);
    if (!course)
      return res.status(404).json({
        message: "course not found",
      });

    // if user enrolled then
    const alreadyReviewed = await reviewModel.findOne({
      user: req.user._id,
      course: courseId,
    });
    if (alreadyReviewed)
      return res.status(400).json({ message: "Already reviewed" });

    const review = await reviewModel.create({
      user: req.user._id,
      course: courseId,
      comment,
      rating,
    });

    course.reviews.push(review._id);

    // recompute rating
    const reviews = await reviewModel.find({ course: courseId });
    const avg = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;
    course.rating = Math.round(avg * 10) / 10;
    await course.save();

    res.status(201).json({ success: true, review });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};

export const getCourseReviews = async (req, res) => {
  try {
    const { courseId } = req.params;
    const review = await reviewModel
      .find({ course: courseId })
      .populate("user", "name avatar");

    res.status(200).json({
      success: true,
      review,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};
