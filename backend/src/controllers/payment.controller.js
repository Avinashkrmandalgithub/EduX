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
    const { courseId } = req.params;
    const course = await courseModel.findById(courseId);
    if (!course)
      return res.status(404).json({
        message: "course not found",
      });

    const order = await orderModel.create({
      user: req.user._id,
      course: course._id,
      amount: course.price,
      currency: "INR",
      status: "created",
    });
    // TODO: create stripe payment intent and attach orderId in metadata
    // return clientSecret, orderId
    res.status(200).json({
      success: true,
      order,
      clientSecret: "CLIENT_SECRET_PLACEHOLDER",
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};

export const paymentWebhook = async (req, res) => {
  try {
    // validate provider signature, update order
    res.status(200).json({
      received: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};

export const confirmPayment = async (req, res) => {
  try {
    const { orderId, paymentId } = req.params;
    const order = await orderModel.findById(courseId);
    if (!order)
      return res.status(404).json({
        message: "order not found",
      });

    order.status = "paid";
    order.paymentId = paymentId;
    order.paymentMeta = req.body.paymentMeta || {};
    await order.save();

    // enroll user
    const course = await courseModel.findById(order.course);
    if (course && !course.studentsEnrolled.includes(order.user)) {
      course.studentsEnrolled.push(order.user);
      await course.save();
    }

    res.status(200).json({
      success: true,
      order,
    });
    
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};
