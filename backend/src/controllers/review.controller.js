import reviewModel from "../models/review.model.js";
import courseModel from "../models/course.model.js";

export const addReview = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { rating, comment } = req.body;

    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({
        message: "Rating must be between 1 and 5",
      });
    }

    const course = await courseModel.findById(courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    // enrolled check
    if (!course.studentsEnrolled.includes(req.user._id)) {
      return res.status(403).json({
        message: "You must be enrolled to review this course",
      });
    }

    // prevent duplicate review
    const alreadyReviewed = await reviewModel.findOne({
      user: req.user._id,
      course: courseId,
    });

    if (alreadyReviewed) {
      return res.status(400).json({
        message: "You've already reviewed this course",
      });
    }

    // create review
    const review = await reviewModel.create({
      user: req.user._id,
      course: courseId,
      rating,
      comment,
    });

    course.reviews.push(review._id);

    // ⭐ STUDENT-ONLY RATING
    const reviews = await reviewModel
      .find({ course: courseId })
      .populate("user", "role");

    const studentReviews = reviews.filter((r) => r.user?.role === "student");

    const avg =
      studentReviews.reduce((acc, r) => acc + r.rating, 0) /
      (studentReviews.length || 1);

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
    const { type } = req.query;

    let query = { course: courseId };

    const reviews = await reviewModel
      .find(query)
      .populate("user", "name avatar role")
      .sort({ createdAt: -1 });

    //  filtering
    const filteredReviews =
      type === "student"
        ? reviews.filter((r) => r.user?.role === "student")
        : reviews;

    res.status(200).json({
      success: true,
      reviews: filteredReviews,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const addReply = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const { comment } = req.body;

    const review = await reviewModel.findById(reviewId);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    // only instructor or admin
    if (req.user.role !== "instructor" && req.user.role !== "admin") {
      return res.status(403).json({ message: "Not allowed" });
    }

    review.replies.push({
      user: req.user._id,
      comment,
    });

    await review.save();

    res.status(200).json({
      success: true,
      review,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
