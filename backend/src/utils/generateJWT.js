import jwt from "jsonwebtoken";

const generateJWT = (user) => {
  return jwt.sign(
    { _id: user._id, role: user.role, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES || "7d" }
  );
};

export default generateJWT;
