const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Products" },
      quantity: Number,
    },
  ],
  total: Number,
  status: { type: String, default: "Pending" },
  createdAt: { type: Date, default: Date.now },
});

const OrderModel = mongoose.model("Orders", OrderSchema);

module.exports = OrderModel;
