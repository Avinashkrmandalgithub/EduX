import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { addReply, addReview, getCourseReviews } from "../controllers/review.controller.js";

const router = Router({ mergeParams: true });

router.post("/:courseId", authMiddleware, addReview);
router.get("/:courseId", getCourseReviews);
router.post(
  "/reply/:reviewId",
  authMiddleware,
  addReply
);


export default router;
