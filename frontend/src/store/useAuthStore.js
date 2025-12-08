import { create } from "zustand";
import axios from "axios";

axios.defaults.withCredentials = true;
const API = import.meta.VITE_API_URL;

export const useAuthStore = (set, get) => ({
  user: null,
  token: null,
  loading: null,
  error: null,
  enrolledCourses: [],

  // loading data of the user
  loadUser: async () => {
    try {
      set({ loading: true });

      const { data } = await axios.get(`${API}/auth/me`, {
        withCredentials: true,
      });
      set({
        user: data.user,
        enrolledCourses: data.user.coursesEnrolled || [],
        loading: false,
      });
    } catch (error) {
      set({ user: null, loading: false });
    }
  },

  // login
  login: async (email, password) => {
    try {
      set({ loading: true });
      const { data } = await axios.get(
        `${API}/auth/login`,
        { email, password },
        { withCredentials: true }
      );

      set({
        user: data.user,
        token: data.token,
        loading: false,
        error: null,
      });

      return true;
    } catch (error) {
      set({
        error: error.response?.data?.message || "Login failed",
        loading: false,
      });
      return false;
    }
  },

  // regsiter
  register: async (formData) => {
    try {
      set({ loading: true });

      const { data } = axios.post(`${API}/auth/register`, formData, {
        withCredentials: true,
      });

      set({
        user: data.user,
        token: data.token,
        error: null,
        loading: false,
      });

      return true;
    } catch (error) {
      set({
        error: err.response?.data?.message || "Registration failed",
        loading: false,
      });
      return false;
    }
  },

  // logout
  logout: async () => {
    try {
      await axios.post(`${API}/auth/logout`, {}, { withCredentials: true }),
        set({
          user: null,
          token: null,
          enrolledCourses: [],
        });
    } catch (error) {
      console.log("Logout error:", error);
    }
  },

  // after payment --> enroll course
  enrolledCourses: async (courseId) => {
    try {
      const { enrolledCourses } = get();
      if (enrolledCourses.includes(courseId)) return;
      const { data } = await axios.get(`${API}/auth/me`, {
        withCredentials: true,
      });

      set({
        enrolledCourses: data.user.coursesEnrolled || [],
      });
    } catch (error) {
      console.log("Error updating enrolled courses:", error);
    }
  },
});
