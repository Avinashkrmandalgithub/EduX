import React from "react";
import LandingNavbar from "../components/Landing/LandingNavbar";
import ParticlesBackground from "../components/ParticlesBackground";
import { useCartStore } from "../store/useCartStore";

const CheckoutPage = () => {
  const { cart } = useCartStore();

  const total = cart.reduce((acc, c) => acc + c.price, 0);

  return (
    <div className="relative min-h-screen text-white">
      <LandingNavbar />
      <ParticlesBackground />

      <div className="pt-32 px-6 md:px-20 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl">
          {cart.map((c) => (
            <div key={c._id} className="flex justify-between py-3 border-b border-white/10">
              <span>{c.title}</span>
              <span>₹{c.price}</span>
            </div>
          ))}

          <div className="flex justify-between text-xl font-bold mt-4">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
        </div>

        <p className="text-gray-400 mt-4">
          Click "Buy Now" on the course page to complete payment.
        </p>
      </div>
    </div>
  );
};

export default CheckoutPage;
