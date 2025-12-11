import userModel from "../models/user.model.js";
import generateJWT from "../utils/generateJWT.js";

export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({
        message: "Missing fields",
      });

    const exists = await userModel.findOne({ email });
    if (exists)
      return res.status(400).json({
        message: "Email already in use",
      });

    const user = await userModel.create({
      name,
      email,
      password,
      role,
    });

    const token = generateJWT(user);
    res.cookie(
      "token",
      token,
      { httpOnly: true, maxAge: 7 * 24 * 3600 * 1000 } // 7days
    );

    res.status(201).json({
      success: true,
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({
        message: "Missing fields.",
      });

    const user = await userModel.findOne({ email });
    if (!user)
      return res.status(401).json({
        message: "Invalid credentials",
      });

    const valid = await user.comparePassword(password);
    if (!valid)
      return res.status(401).json({
        message: "Invalid credentials",
      });

    const token = generateJWT(user);
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 7 * 24 * 3600 * 1000,
    });

    res.status(200).json({
      success: true,
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({
      success: true,
      message: "Logged out",
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};

export const getMe = async (req, res) => {
  try {
    const user = await userModel.findById(req.user._id).select("-password");
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const { name, phone, bio, avatar } = req.body;

    if (name) user.name = name;
    if (phone) user.phone = phone;
    if (bio) user.bio = bio;
    if (avatar) user.avatar = avatar;

    await user.save();

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
