const mongoose = require("mongoose");

const ProductsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name cannot be empty"],
    },
    price: {
      type: Number,
      required: [true, "Product price cannot be empty"],
    },
    quantity: {
      type: Number,
      required: [true, "Product quantity cannot be empty"],
    },
    brand: {
      type: String,
      required: [true, "Product brand cannot be empty"],
    },
    description: {
      type: String,
      required: [true, "Product description cannot be empty"],
    },
    category: {
      type: String,
      required: [true, "Product category cannot be empty"],
      enum: [
        "Electronics",
        "Fashions",
        "Accessories",
        "Smart Watches",
        "Smartphones",
        "Speakers and Headphones",
      ],
    },
    ratings: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
      required: [true, "Product image cannot be empty"],
    },
  },
  { timestamps: true }
);

const ProductsModel = mongoose.model("products", ProductsSchema);

module.exports = ProductsModel;
