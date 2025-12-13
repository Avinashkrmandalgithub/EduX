import { create } from "zustand";
import axios from "axios";

axios.defaults.withCredentials = true;
const API = import.meta.env.VITE_API_URL;

export const useAuthStore = create((set, get) => ({
  user: null,
  token: null,
  enrolledCourses: [],
  loading: false,
  error: null,
  hasLoaded: false,

  // load user once
  loadUser: async () => {
    try {
      set({ loading: true });

      const { data } = await axios.get(`${API}/auth/me`);

      set({
        user: data.user,
        enrolledCourses: data.user.coursesEnrolled || [],
        loading: false,
        error: null,
        hasLoaded: true,
      });
    } catch (err) {
      set({
        user: null,
        enrolledCourses: [],
        loading: false,
        hasLoaded: true, // mark loaded EVEN IF FAILS
      });
    }
  },

  // login
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
        enrolledCourses: data.user.coursesEnrolled || [],
        loading: false,
        error: null,
        hasLoaded: true,
      });

      return { success: true };
    } catch (err) {
      set({
        loading: false,
        error: err.response?.data?.message || "Login failed",
      });
      return { success: false };
    }
  },

  // register
  register: async (formData) => {
    try {
      set({ loading: true });

      const { data } = await axios.post(`${API}/auth/register`, formData);

      set({
        user: data.user,
        token: data.token,
        enrolledCourses: data.user.coursesEnrolled || [],
        loading: false,
        error: null,
        hasLoaded: true,
      });

      return { success: true };
    } catch (err) {
      set({
        loading: false,
        error: err.response?.data?.message || "Registration failed",
      });
      return { success: false };
    }
  },

  // logout
  logout: async () => {
    try {
      await axios.post(`${API}/auth/logout`);
    } finally {
      set({
        user: null,
        token: null,
        enrolledCourses: [],
        hasLoaded: false, // allow reload on next login
      });
    }
  },

  // after payment
  refreshEnrollments: async () => {
    try {
      const { data } = await axios.get(`${API}/auth/me`);

      set({
        user: data.user,
        enrolledCourses: data.user.coursesEnrolled || [],
      });
    } catch (err) {
      console.log("Enrollment update failed:", err);
    }
  },
}));
