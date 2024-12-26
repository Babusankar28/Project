const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/UserModel");
const { secret_key } = require("../config/config");
const ProductsModel = require("../models/ProductsModel");
const OrderModel = require("../models/OrderModel");

const authUser = async (req, res) => {
  try {
    const token = req.cookies.userAuth;
    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    const { id, token: password } = jwt.verify(token, secret_key);
    const user = await UserModel.findById(id);
    if (!user || password !== user.password) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    const userDetails = {
      _id: user._id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      mobile: user.mobile,
    };
    res.json({
      success: true,
      message: "User authenticated successfully",
      user: userDetails,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const createUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await UserModel.create({
      ...req.body,
      password: hashedPassword,
    });
    const token = jwt.sign({ id: user._id, token: user.password }, secret_key);
    const userDetails = {
      _id: user._id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      mobile: user.mobile,
    };
    res
      .cookie("userAuth", token, { maxAge: 24 * 60 * 60 * 1000 })
      .status(201)
      .json({
        success: true,
        message: "User created successfully",
        user: userDetails,
      });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid password" });
    }
    const token = jwt.sign({ id: user._id, token: user.password }, secret_key);
    const userDetails = {
      _id: user._id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      mobile: user.mobile,
    };
    res
      .cookie("userAuth", token, { maxAge: 24 * 60 * 60 * 1000 })
      .status(200)
      .json({ success: true, message: "Login successful", user: userDetails });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const logout = (req, res) => {
  res
    .clearCookie("userAuth")
    .status(200)
    .json({ success: true, message: "Logged out successfully" });
};

module.exports = { createUser, loginUser, authUser, logout };
