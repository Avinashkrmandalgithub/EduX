import { create } from "zustand";
import axios from "axios";

axios.defaults.withCredentials = true;
const API = import.meta.env.VITE_API_URL;

export const useCourseStore = create((set, get) => ({
  courses: [],
  course: null,
  loading: false,
  error: null,

  // GET ALL COURSES
  fetchCourses: async () => {
    try {
      set({ loading: true });
      const { data } = await axios.get(`${API}/courses`);
      set({ courses: data.courses, loading: false });
    } catch (err) {
      set({ loading: false, error: err.response?.data?.message });
    }
  },

  // GET SINGLE COURSE
  fetchCourse: async (id) => {
    try {
      set({ loading: true });
      const { data } = await axios.get(`${API}/courses/${id}`);
      set({ course: data.course, loading: false });
    } catch (err) {
      set({ loading: false, error: err.response?.data?.message });
    }
  },

  // Enroll (starts Razorpay order)
  enrollCourse: async (courseId) => {
    try {
      const { data } = await axios.post(`${API}/payments/create-intent`, { courseId });
      return data; // { orderId, amount, key }
    } catch (err) {
      return { error: err.response?.data?.message };
    }
  }
}));
