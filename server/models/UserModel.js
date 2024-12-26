const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: [true, "Email address is already exists"],
    },
    mobile: {
      type: Number,
      required: true,
      unique: [true, "Mobile number is already exists"],
    },
    wishlist: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "products",
      default: [],
    },
    cart: {
      type: [
        {
          product: { type: mongoose.Schema.Types.ObjectId, default: "" },
          count: { type: Number, default: 0 },
        },
      ],
      ref: "products",
      default: [],
    },
    orders: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "orders",
      default: [],
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;
