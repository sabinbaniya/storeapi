const mongoose = require("mongoose");
const { Schema } = mongoose;

const product = new Schema({
  name: {
    type: String,
    required: [true, "Product name must be provided."],
  },
  price: {
    type: Number,
    required: [true, "Price must be provided."],
  },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "marcos", "caressa"],
      message: "{VALUE} is not supported",
    },
  },
  rating: {
    type: Number,
    default: 3,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", product);
