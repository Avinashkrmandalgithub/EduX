import React, { useState } from "react";
import { Star } from "lucide-react";

const ReviewSection = ({ reviews, setReviews, role }) => {
  const [newReview, setNewReview] = useState("");

  const submitReview = (e) => {
    e.preventDefault();
    if (!newReview.trim()) return;

    setReviews([
      { id: Date.now(), user: "You", rating: 5, text: newReview, date: "Just now" },
      ...reviews
    ]);
    setNewReview("");
  };

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-3">Reviews ({reviews.length})</h2>

      {role === "student" && (
        <form onSubmit={submitReview} className="mb-6">
          <textarea
            className="w-full  h-20 border-b border-white/10 p-3 outline-none"
            placeholder="Add a review..."
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
          />
          <button className="mt-2 bg-blue-600 px-4 py-2 rounded-lg font-bold">
            Submit
          </button>
        </form>
      )}

      <div className="space-y-6">
        {reviews.map((rev) => (
          <div key={rev.id} className="flex gap-3">
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
              {rev.user[0]}
            </div>

            <div>
              <p className="font-bold">{rev.user}</p>
              <p className="text-xs text-gray-500">{rev.date}</p>

              <div className="text-yellow-500 flex my-1">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-300 text-sm">{rev.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
