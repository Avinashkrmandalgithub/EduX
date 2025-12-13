import { create } from "zustand";
import axios from "axios";
import { useAuthStore } from "./useAuthStore";

axios.defaults.withCredentials = true;

const API = import.meta.env.VITE_API_URL;

export const useCartStore = create((set, get) => ({
  cart: [],

  addToCart: (course) => {
    const exists = get().cart.find((c) => c._id === course._id);
    if (!exists) set({ cart: [...get().cart, course] });
  },

  removeFromCart: (id) => {
    set({ cart: get().cart.filter((c) => c._id !== id) });
  },

  clearCart: () => set({ cart: [] }),

  // Create Razorpay order
  buyCourse: async (courseId) => {
    try {
      const { data } = await axios.post(`${API}/payments/create-intent`, {
        courseId,
      });
      return data;
    } catch (err) {
      console.log("PAYMENT ERROR:", err);
      return null;
    }
  },

  // Confirm Razorpay payment
  confirmPayment: async (payload) => {
    try {
      const { data } = await axios.post(`${API}/payments/confirm`, payload);

      // Update user + enrolled courses
      await useAuthStore.getState().refreshEnrollments();

      return data;
    } catch (err) {
      console.log("Confirm payment error:", err);
      return null;
    }
  },
}));
