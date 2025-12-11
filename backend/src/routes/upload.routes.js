import { Router } from "express";
import { uploadFile } from "../controllers/upload.controller.js";

const router = Router();

// simple POST route for uploading
router.post("/", uploadFile);

export default router;
