import React from "react";
import { useCartStore } from "../store/useCartStore";
import LandingNavbar from "../components/Landing/LandingNavbar";
import ParticlesBackground from "../components/ParticlesBackground";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart } = useCartStore();

  return (
    <div className="relative min-h-screen text-white">
      <LandingNavbar />
      <ParticlesBackground />

      <div className="pt-32 px-6 md:px-20">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        {cart.length === 0 && (
          <p className="text-gray-400 text-lg">Your cart is empty.</p>
        )}

        <div className="space-y-6">
          {cart.map((c) => (
            <div
              key={c._id}
              className="flex items-center justify-between bg-white/5 border border-white/10 p-4 rounded-2xl shadow-lg hover:bg-white/10 duration-200"
            >
              <div className="flex items-center gap-4">
                <img
                  src={c.thumbnail}
                  className="w-20 h-16 rounded-lg object-cover"
                />
                <div>
                  <h2 className="text-lg font-semibold">{c.title}</h2>
                  <p className="text-gray-400 text-sm">{c.subtitle}</p>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(c._id)}
                className="text-red-400 hover:text-red-300"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <Link
            to="/checkout"
            className="block w-full md:w-64 mt-8 text-center py-3 bg-orange-500 text-black font-bold rounded-xl hover:bg-orange-600 duration-200"
          >
            Proceed to Checkout
          </Link>
        )}
      </div>
    </div>
  );
};

export default CartPage;
