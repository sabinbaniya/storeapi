const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const res = await mongoose.connect(process.env.MONGO_URI);
    console.log("Successfully connected to DB");
  } catch (error) {
    console.log("Error: ", error);
  }
};

module.exports = connectDB;
