import courseModel from "../models/course.model.js";
import userModel from "../models/user.model.js";

export const getInstructorStudents = async (req, res) => {
  try {
    const instructorId = req.user._id;

    //  Get instructor's courses
    const courses = await courseModel
      .find({ instructor: instructorId })
      .select("_id title");

    const courseIds = courses.map((course) => course._id);

    if (courseIds.length === 0) {
      return res.status(200).json({
        success: true,
        students: [],
      });
    }

    //  Get students enrolled in those courses
    const students = await userModel
      .find({
        role: "student",
        coursesEnrolled: { $in: courseIds },
      })
      .select("name email coursesEnrolled")
      .populate({
        path: "coursesEnrolled",
        match: { _id: { $in: courseIds } },
        select: "title",
      });

    //  Shape response
    res.status(200).json({
      success: true,
      students: students.map((student) => ({
        _id: student._id,
        name: student.name,
        email: student.email,
        courses: student.coursesEnrolled,
      })),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
