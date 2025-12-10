import { create } from "zustand";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const useInstructorStore = create((set, get) => ({
  myCourses: [],
  loading: false,

  fetchMyCourses: async () => {
    try {
      set({ loading: true });

      const { data } = await axios.get(`${API}/courses`);
      const user = get().user;

      set({
        myCourses: data.courses.filter(
          (course) => course.instructor?._id === user?._id
        ),
        loading: false,
      });
    } catch (err) {
      set({ loading: false });
    }
  },

  // Add new lecture
  addLecture: async (courseId, payload) => {
    try {
      const { data } = await axios.post(`${API}/lectures/${courseId}`, payload);

      return data.lecture;
    } catch (err) {
      console.log(err);
    }
  },

  deleteLecture: async (courseId, lectureId) => {
    try {
      await axios.delete(`${API}/lectures/${courseId}/${lectureId}`);
      return true;
    } catch (err) {
      console.log(err);
    }
  },
}));
