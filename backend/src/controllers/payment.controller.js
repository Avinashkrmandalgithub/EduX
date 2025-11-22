import orderModel from "../models/order.model.js";
import courseModel from "../models/course.model.js";

/*
  NOTE: integrate Stripe or Razorpay here.
  createPaymentIntent => create payment session or intent & return client secret
  paymentWebhook => validate signature and update Order status
  confirmPayment => after client notifies success, mark order as paid and enroll user
*/

export const createPaymentIntent = async (req, res) => {
  try {
    const { courseId } = req.body; // send from frontend body
    const course = await courseModel.findById(courseId);

    if (!course)
      return res.status(404).json({
        message: "Course not found",
      });

    // Create Razorpay order
    const razorpayOrder = await razorpay.orders.create({
      amount: course.price * 100, // in paise
      currency: "INR",
      receipt: `receipt_${courseId}_${Date.now()}`,
      notes: {
        courseId: courseId,
        userId: req.user._id,
      },
    });

    // Create DB order
    const order = await orderModel.create({
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
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const paymentWebhook = async (req, res) => {
  res.status(200).json({
    received: true,
  });
};

export const confirmPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    // signature check
    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign)
      .digest("hex");

    if (expectedSign !== razorpay_signature) {
      return res.status(400).json({ message: "Invalid signature" });
    }

    // Find your DB order
    const order = await orderModel.findOne({ paymentId: razorpay_order_id });
    if (!order) return res.status(404).json({ message: "Order not found" });

    order.status = "paid";
    order.paymentId = razorpay_payment_id;
    await order.save();

    // Enroll user
    const course = await courseModel.findById(order.course);
    if (course && !course.studentsEnrolled.includes(order.user)) {
      course.studentsEnrolled.push(order.user);
      await course.save();
    }

    res.json({
      success: true,
      message: "Payment verified successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
