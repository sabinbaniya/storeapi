const express = require("express");
const app = express();

const getAllProducts = async (req, res) => {
  res.send("Hello");
};

module.exports = getAllProducts;
