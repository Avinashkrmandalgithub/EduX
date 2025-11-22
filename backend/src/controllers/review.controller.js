import reviewModel from "../models/review.model.js";
import courseModel from "../models/course.model.js";

export const addReview = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { rating, comment } = req.body;

    // Validate rating
    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({
        message: "Rating must be between 1 and 5",
      });
    }

    const course = await courseModel.findById(courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    // Check enrollment first
    if (!course.studentsEnrolled.includes(req.user._id)) {
      return res.status(403).json({
        message: "You must be enrolled to review this course",
      });
    }

    // Check if already reviewed
    const alreadyReviewed = await reviewModel.findOne({
      user: req.user._id,
      course: courseId,
    });

    if (alreadyReviewed)
      return res
        .status(400)
        .json({ 
          message: "You've already reviewed this course" 
        });

    // Create review
    const review = await reviewModel.create({
      user: req.user._id,
      course: courseId,
      rating,
      comment,
    });

    course.reviews.push(review._id);

    // Recalculate average rating
    const reviews = await reviewModel.find({ course: courseId });
    const avg = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

    course.rating = Math.round(avg * 10) / 10;
    await course.save();

    res.status(201).json({
      success: true,
      message: "Review added successfully",
      review,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const getCourseReviews = async (req, res) => {
  try {
    const { courseId } = req.params;

    const reviews = await reviewModel
      .find({ course: courseId })
      .populate("user", "name avatar")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      reviews,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
