import { create } from "zustand";
import axios from "axios";

axios.defaults.withCredentials = true;
const API = import.meta.env.VITE_API_URL;

export const useReviewStore = create((set, get) => ({
  reviews: [],
  loading: false,
  error: null,

  // fetch all reviews for a course
  fetchReviews: async (courseId, type = "all") => {
    try {
      set({ loading: true });

      const { data } = await axios.get(
        `${API}/reviews/${courseId}?type=${type}`
      );

      set({
        reviews: data.reviews,
        loading: false,
        error: null,
      });
    } catch (err) {
      set({
        loading: false,
        error: err.response?.data?.message || "Failed to load reviews",
      });
    }
  },

  // add student review
  addReview: async (courseId, rating, comment) => {
    try {
      const { data } = await axios.post(`${API}/reviews/${courseId}`, {
        rating,
        comment,
      });

      set({
        reviews: [data.review, ...get().reviews],
      });

      return { success: true };
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.message,
      };
    }
  },

  // instructor reply
  replyToReview: async (reviewId, comment) => {
    try {
      const { data } = await axios.post(`${API}/reviews/reply/${reviewId}`, {
        comment,
      });

      set({
        reviews: get().reviews.map((r) =>
          r._id === reviewId ? data.review : r
        ),
      });

      return { success: true };
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.message,
      };
    }
  },

  clearReviews: () => set({ reviews: [] }),
}));
