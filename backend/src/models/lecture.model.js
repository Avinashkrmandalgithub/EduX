import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    videoUrl: {
      type: String,
      required: true,
    },

    duration: {
      type: Number,
      default: 0,
    },

    resources: [
      {
        filename: String,
        url: String,
      },
    ],

    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const lectureModel = mongoose.model("Lecture", lectureSchema);
export default lectureModel;
