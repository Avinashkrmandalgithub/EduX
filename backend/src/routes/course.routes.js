import { Router } from "express";
import {
  createCourse,
  deleteCourse,
  enrollCourse,
  getCourseById,
  listCourses,
  publishCourse,
  updateCourse,
} from "../controllers/course.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

const router = Router();

// public
router.get("/", listCourses);
router.get("/:id", getCourseById);

// instructor action
router.post(
  "/",
  authMiddleware,
  authorizeRoles("instructor", "admin"),
  createCourse
);
router.put(
  "/:id",
  authMiddleware,
  authorizeRoles("instructor", "admin"),
  updateCourse
);
router.delete(
  "/:id",
  authMiddleware,
  authorizeRoles("instructor", "admin"),
  deleteCourse
);
router.post(
  "/:id/publish",
  authMiddleware,
  authorizeRoles("instructor", "admin"),
  publishCourse
);

// enrollment/payment
router.post("/:id/enroll", authMiddleware, enrollCourse);

export default router;
