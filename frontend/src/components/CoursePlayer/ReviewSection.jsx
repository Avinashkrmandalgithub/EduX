import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { useReviewStore } from "../../store/useReviewStore";
import { useAuthStore } from "../../store/useAuthStore";

const ReviewSection = ({ courseId, mode = "interactive" }) => {
  const { user } = useAuthStore();
  const { reviews, fetchReviews, addReview, replyToReview, loading } =
    useReviewStore();

  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [reply, setReply] = useState({});

  useEffect(() => {
    if (mode === "read") {
      fetchReviews(courseId, "student"); //  only student reviews
    } else {
      fetchReviews(courseId, "all"); //  full discussion
    }
  }, [courseId, mode]);

  const submitReview = async () => {
    if (!comment.trim()) return;
    await addReview(courseId, rating, comment);
    setComment("");
    setRating(5);
  };

  const submitReply = async (reviewId) => {
    if (!reply[reviewId]) return;
    await replyToReview(reviewId, reply[reviewId]);
    setReply((p) => ({ ...p, [reviewId]: "" }));
  };

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-4">
        {mode === "read" ? "Student Reviews" : "Reviews & Discussion"} (
        {reviews.length})
      </h2>

      {/* ✨ STUDENT WRITE REVIEW (ONLY IN PLAYER) */}
      {mode === "interactive" && user?.role === "student" && (
        <div className="mb-6">
          <div className="flex gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((n) => (
              <Star
                key={n}
                size={18}
                onClick={() => setRating(n)}
                className={`cursor-pointer ${
                  n <= rating ? "text-yellow-500" : "text-gray-500"
                }`}
              />
            ))}
          </div>

          <textarea
            className="w-full h-20 p-3 bg-white/5 rounded-lg"
            placeholder="Write your review..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <button
            onClick={submitReview}
            className="mt-2 bg-blue-600 px-4 py-2 rounded-lg font-bold"
          >
            Submit Review
          </button>
        </div>
      )}

      {/* REVIEW LIST */}
      {loading ? (
        <p className="text-gray-400">Loading reviews...</p>
      ) : (
        <div className="space-y-6">
          {reviews.map((rev) => (
            <div key={rev._id} className="border-b border-white/10 pb-4">
              <p className="font-bold">{rev.user?.name}</p>

              <div className="flex text-yellow-500 my-1">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-300">{rev.comment}</p>

              {/* Instructor replies (ONLY IN PLAYER) */}
              {mode === "interactive" &&
                rev.replies?.map((r, i) => (
                  <div key={i} className="ml-6 mt-2 bg-white/5 p-2 rounded">
                    <p className="text-xs font-bold text-orange-400">
                      Instructor
                    </p>
                    <p className="text-sm">{r.comment}</p>
                  </div>
                ))}

              {/* ✨ INSTRUCTOR REPLY (ONLY IN PLAYER) */}
              {mode === "interactive" && user?.role === "instructor" && (
                <div className="ml-6 mt-3">
                  <textarea
                    className="w-full h-16 p-2 bg-white/5 rounded"
                    placeholder="Reply..."
                    value={reply[rev._id] || ""}
                    onChange={(e) =>
                      setReply({
                        ...reply,
                        [rev._id]: e.target.value,
                      })
                    }
                  />
                  <button
                    onClick={() => submitReply(rev._id)}
                    className="mt-1 bg-orange-500 px-3 py-1 rounded text-black font-bold"
                  >
                    Reply
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewSection;
