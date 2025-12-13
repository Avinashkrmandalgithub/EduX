import { create } from "zustand";
import axios from "axios";

axios.defaults.withCredentials = true;
const API = import.meta.env.VITE_API_URL;

export const useCourseStore = create((set, get) => ({
  courses: [],
  course: null,
  loading: false,
  error: null,
  hasFetched: false,

  // get all the courses
  fetchCourses: async () => {
    const { hasFetched } = get();
    if (hasFetched) return; // prevent reapeat call

    try {
      set({ loading: true });

      const { data } = await axios.get(`${API}/courses`);

      set({
        courses: data.courses,
        loading: false,
        hasFetched: true, // mark as fetched
        error: null,
      });
    } catch (err) {
      set({
        loading: false,
        error: err.response?.data?.message || "Failed to load courses",
      });
    }
  },

  // get single course
  fetchCourse: async (id) => {
    try {
      set({ loading: true });

      const { data } = await axios.get(`${API}/courses/${id}`);

      set({
        course: data.course,
        loading: false,
        error: null,
      });
    } catch (err) {
      set({
        loading: false,
        error: err.response?.data?.message || "Failed to load course",
      });
    }
  },

  // enroll
  enrollCourse: async (courseId) => {
    try {
      const { data } = await axios.post(`${API}/payments/create-intent`, {
        courseId,
      });

      return data; // { orderId, amount, key }
    } catch (err) {
      return {
        error: err.response?.data?.message || "Payment failed",
      };
    }
  },

  // reset store
  resetCourses: () =>
    set({
      courses: [],
      course: null,
      hasFetched: false,
      loading: false,
      error: null,
    }),
}));
