import dotenv from "dotenv";
dotenv.config();

import Razorpay from "razorpay";
import crypto from "crypto";
import orderModel from "../models/order.model.js";
import courseModel from "../models/course.model.js";
import userModel from "../models/user.model.js";

// Create instance ONLY here AFTER dotenv is loaded
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export const createPaymentIntent = async (req, res) => {
  try {
    const { courseId } = req.body;

    if (!courseId) {
      return res.status(400).json({ message: "courseId missing" });
    }

    const course = await courseModel.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    const razorpayOrder = await razorpay.orders.create({
      amount: course.price * 100,
      currency: "INR",
      receipt: `rcpt_${Date.now()}`, // FIXED
      notes: {
        courseId,
        userId: req.user._id,
      },
    });

    await orderModel.create({
      user: req.user._id,
      course: course._id,
      amount: course.price,
      paymentId: razorpayOrder.id,
      currency: "INR",
      status: "created",
    });

    res.status(200).json({
      success: true,
      orderId: razorpayOrder.id,
      amount: razorpayOrder.amount,
      key: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    console.log("PAYMENT ERROR:", error);
    res.status(500).json({
      message: "Payment creation failed",
      error: error.message,
    });
  }
};

export const confirmPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const sign = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign)
      .digest("hex");

    if (expectedSign !== razorpay_signature) {
      return res.status(400).json({ message: "Invalid signature" });
    }

    const order = await orderModel.findOne({ paymentId: razorpay_order_id });
    if (!order) return res.status(404).json({ message: "Order not found" });

    // mark paid
    order.status = "paid";
    order.paymentId = razorpay_payment_id;
    await order.save();

    //  enroll user in course
    await courseModel.findByIdAndUpdate(order.course, {
      $addToSet: { studentsEnrolled: order.user },
    });

    //  THIS WAS MISSING
    await userModel.findByIdAndUpdate(order.user, {
      $addToSet: { coursesEnrolled: order.course },
    });

    res.json({
      success: true,
      message: "Payment verified & course unlocked",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const paymentWebhook = async (req, res) => {
  res.status(200).json({
    received: true,
  });
};
