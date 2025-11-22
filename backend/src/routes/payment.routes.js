import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { confirmPayment, createPaymentIntent, paymentWebhook } from "../controllers/payment.controller.js";

const router = Router();

router.post("/create-intent", authMiddleware, createPaymentIntent);
router.post("/webhook", paymentWebhook);
router.post("/confirm", authMiddleware, confirmPayment);

export default router;

