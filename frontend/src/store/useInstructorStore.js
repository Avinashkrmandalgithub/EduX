import { create } from "zustand";
import axios from "axios";
import { useAuthStore } from "./useAuthStore";

const API = import.meta.env.VITE_API_URL;

export const useInstructorStore = create((set, get) => ({
  myCourses: [],
  students: [],
  loading: false,
  error: null,

  getTotalStudents: () => get().students.length,

  // create couorse
  createCourse: async (formData) => {
    try {
      set({ loading: true, error: null });

      const { data } = await axios.post(`${API}/courses`, formData);

      //  Auto-update instructor course list
      const user = useAuthStore.getState().user;
      set((state) => ({
        myCourses: [...state.myCourses, data.course],
        loading: false,
      }));

      return data.course;
    } catch (err) {
      set({
        loading: false,
        error: err.response?.data?.message || "Course creation failed",
      });
      return null;
    }
  },

  // get instructor's courses
  fetchMyCourses: async () => {
    try {
      set({ loading: true });

      const { data } = await axios.get(`${API}/courses`);
      const user = useAuthStore.getState().user;

      set({
        myCourses: data.courses.filter((c) => c.instructor?._id === user?._id),
        loading: false,
      });
    } catch (err) {
      set({ loading: false });
    }
  },

  // add lectrue
  addLecture: async (courseId, payload) => {
    try {
      const { data } = await axios.post(`${API}/lectures/${courseId}`, payload);
      return data.lecture;
    } catch (err) {
      console.log(err);
    }
  },

  // update lecture
  updateLecture: async (courseId, lectureId, payload) => {
    try {
      const { data } = await axios.put(
        `${API}/lectures/${courseId}/${lectureId}`,
        payload
      );
      return data.lecture;
    } catch (err) {
      console.log(err);
      return null;
    }
  },

  // delete lecture
  deleteLecture: async (courseId, lectureId) => {
    try {
      await axios.delete(`${API}/lectures/${courseId}/${lectureId}`);
      return true;
    } catch (err) {
      console.log(err);
    }
  },

  fetchStudents: async () => {
    try {
      set({ loading: true });

      const { data } = await axios.get(`${API}/instructor/students`);

      set({
        students: data.students,
        loading: false,
      });
    } catch (err) {
      set({ loading: false });
    }
  },
}));
