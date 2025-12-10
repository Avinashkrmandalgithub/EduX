import { create } from "zustand";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const usePlayerStore = create((set, get) => ({
  lectures: [],
  reviews: [],
  current: 0,
  loading: false,

  loadLectures: async (courseId) => {
    try {
      set({ loading: true });
      const { data } = await axios.get(`${API}/courses/${courseId}`);

      set({
        lectures: data.course.lectures,
        reviews: data.course.reviews,
        loading: false,
      });
    } catch (error) {
      set({ loading: false });
      console.log(error);
    }
  },

  setCurrent: (index) => set({ current: index }),

  addReview: async (courseId, rating, comment) => {
    try {
      const { data } = await axios.post(`${API}/reviews/${courseId}`, {
        rating,
        comment,
      });

      set({ reviews: [data.review, ...get().reviews] });
    } catch (err) {
      console.log(err);
    }
  },
}));
