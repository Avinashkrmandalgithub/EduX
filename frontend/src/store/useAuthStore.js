import { create } from "zustand";
import axios from "axios";

axios.defaults.withCredentials = true;

//  API base
const API = import.meta.env.VITE_API_URL;

export const useAuthStore = create((set, get) => ({
  user: null,
  token: null,
  loading: false,
  error: null,
  enrolledCourses: [],

  // load logged In user
  loadUser: async () => {
    try {
      set({ loading: true });
      const { data } = await axios.get(`${API}/auth/me`);

      set({
        user: data.user,
        enrolledCourses: data.user.coursesEnrolled || [],
        loading: false,
        error: null,
      });
    } catch (err) {
      set({
        user: null,
        loading: false,
      });
    }
  },

  // Login
  login: async (email, password) => {
    try {
      set({ loading: true });

      const { data } = await axios.post(`${API}/auth/login`, {
        email,
        password,
      });

      set({
        user: data.user,
        token: data.token,
        loading: false,
        error: null,
        enrolledCourses: data.user.coursesEnrolled || [],
      });

      return { success: true };
    } catch (err) {
      set({
        error: err.response?.data?.message || "Login failed",
        loading: false,
      });
      return { success: false };
    }
  },

  // Register

  register: async (formData) => {
    try {
      set({ loading: true });

      const { data } = await axios.post(`${API}/auth/register`, formData);

      set({
        user: data.user,
        token: data.token,
        loading: false,
        error: null,
        enrolledCourses: data.user.coursesEnrolled || [],
      });

      return { success: true };
    } catch (err) {
      set({
        error: err.response?.data?.message || "Registration failed",
        loading: false,
      });
      return { success: false };
    }
  },

  // 🔹 Logout
  logout: async () => {
    try {
      await axios.post(`${API}/auth/logout`);
      set({
        user: null,
        token: null,
        enrolledCourses: [],
      });
    } catch (err) {
      console.log("Logout error:", err);
    }
  },

  //  Update enrolled courses after Razorpay payment

  refreshEnrollments: async () => {
    try {
      const { data } = await axios.get(`${API}/auth/me`);
      set({
        enrolledCourses: data.user.coursesEnrolled || [],
        user: data.user,
      });
    } catch (err) {
      console.log("Enrollment update failed:", err);
    }
  },
}));
