import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";
import { getInstructorStudents } from "../controllers/instructor.controller.js";

const router = Router();

router.get(
  "/students",
  authMiddleware,
  authorizeRoles("instructor"),
  getInstructorStudents
);

export default router;
