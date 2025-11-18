import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    subtitle: {
      type: String,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    thumbnail: {
      type: String,
      // required: true,
    },

    price: {
      type: Number,
      default: 0,
      required: true,
    },

    discountPrice: {
      type: Number,
      default: 0,
    },

    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner",
    },

    language: {
      type: String,
      default: "English",
    },

    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    lectures: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lecture",
    },

    studentsEnrolled: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    reviews: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },

    rating: {
      type: Number,
      default: 0,
    },

    totalDuration: {
      type: Number,
      default: 0,
    },

    published: {
      type: Boolean,
      default: false,
    },

    tags: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const courseModel = mongoose.model("Course", courseSchema);
export default courseModel;
