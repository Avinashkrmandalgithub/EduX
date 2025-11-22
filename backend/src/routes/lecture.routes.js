import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";
import { addLecture, deleteLecture, updateLecture } from "../controllers/lecture.controller.js";

const router = Router();

router.post(
  "/:courseId",
  authMiddleware,
  authorizeRoles("instructor", "admin"),
  addLecture
);
router.put(
  "/:courseId/:lectureId",
  authMiddleware,
  authorizeRoles("instructor", "admin"),
  updateLecture
);
router.delete(
  "/:courseId/:lectureId",
  authMiddleware,
  authorizeRoles("instructor", "admin"),
  deleteLecture
);

export default router;
