const connectDB = require("./db/connectDB");
const Product = require("./models/product");

const products = require("./products.json");

let i = 1;

const start = async () => {
  try {
    await connectDB();
    await Product.create(products);
    process.exit(0);
  } catch (error) {
    console.log("first ", error);
  }
};

start();
