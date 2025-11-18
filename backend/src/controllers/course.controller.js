import courseModel from "../models/course.model.js";
import lectureModel from "../models/lecture.model.js";
import orderModel from "../models/order.model.js";
// <----image uploader----> import 

export const createCourse = async (req, res) => {
  try {
    const { title, subtitle, description, category, price , level , language , tags  } = req.body;

    // thumbnail logic
    // const thumbnail = req.body.thumbnail || " ";

    const course = await courseModel.create({
      
    })

  } catch (error) {
    
  }
}