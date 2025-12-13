import {
  PlayCircle,
  FileText,
  Smartphone,
  Infinity,
  Award,
} from "lucide-react";

import { useCartStore } from "../../store/useCartStore";
import { loadRazorpay } from "../../utils/razorpay";
import { useAuthStore } from "../../store/useAuthStore";

const CourseSidebar = ({ data }) => {
  const addToCart = useCartStore((s) => s.addToCart);
  const buyCourse = useCartStore((s) => s.buyCourse);
  const confirmPayment = useCartStore((s) => s.confirmPayment);

  const user = useAuthStore((s) => s.user);

  const handleBuyNow = async () => {
    if (!user) return alert("Please login first");

    const loaded = await loadRazorpay();
    if (!loaded) return alert("Razorpay SDK failed to load.");

    const order = await buyCourse(data._id);
    if (!order) return alert("Order creation failed!");

    const options = {
      key: order.key,
      amount: order.amount,
      currency: "INR",
      name: data.title,
      description: "Course Purchase",
      order_id: order.orderId,

      handler: async function (response) {
        await confirmPayment({
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
        });

        alert("Payment Successful 🎉");
        window.location.href = "/dashboard/student/courses";
      },

      prefill: {
        name: user.name,
        email: user.email,
      },
      theme: { color: "#ff7f50" },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="sticky top-28 border border-white/10 rounded-3xl shadow-xl overflow-hidden">
      <div className="relative h-48 group overflow-hidden">
        <img
          src={data.thumbnail}
          className="w-full h-full object-cover group-hover:scale-105 duration-300"
        />
      </div>

      <div className="p-6">
        <span className="text-4xl font-bold">₹{data.price}</span>

        <button
          onClick={handleBuyNow}
          className="w-full py-3 bg-orange-500 rounded-xl text-black font-bold my-3"
        >
          Buy Now
        </button>

        <button
          onClick={() => addToCart(data)}
          className="w-full py-3 bg-white/5 border border-white/10 rounded-xl"
        >
          Add to Cart
        </button>

        <div className="text-center mt-4 text-gray-500 text-xs">
          30-Day Money Back Guarantee
        </div>

        <h4 className="mt-6 font-bold mb-4">This course includes:</h4>

        <ul className="space-y-3 text-gray-300 text-sm">
          <li className="flex gap-2">
            <PlayCircle size={16} /> {data.totalDuration} hours{" "}
          </li>
          <li className="flex gap-2">
            <FileText size={16} /> {data.lectures?.length || 0} lectures
          </li>
          <li className="flex gap-2">
            <Infinity size={16} /> Lifetime access
          </li>
          <li className="flex gap-2">
            <Smartphone size={16} /> Mobile access
          </li>
          <li className="flex gap-2">
            <Award size={16} /> Certificate included
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CourseSidebar;
