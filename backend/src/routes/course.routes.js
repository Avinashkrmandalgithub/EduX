import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { createCourse, deleteCourse, updateCourse } from '../controllers/course.controller.js';

const router = Router();

// public
router.get("/", listCourses);
router.get("/:id", getCourseById);

// instructor action
router.post("/", authMiddleware, authorizeRoles("instructor","admin"), createCourse);
router.put("/:id", authMiddleware, authorizeRoles("instructor","admin"), updateCourse);
router.delete("/:id", authMiddleware, authorizeRoles("instructor","admin"), deleteCourse);
router.post("/:id/publish", authMiddleware, authorizeRoles("instructor","admin"), publishCourse);

// enrollment/payment
router.post("/:id/enroll", authMiddleware, enrollCourse);

export default router;

