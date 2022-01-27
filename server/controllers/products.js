const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const { featured, name } = req.query;

  const queryObj = {};

  if (featured !== "" && featured !== undefined) {
    queryObj.featured = featured;
  }

  if (name) {
    queryObj.name = { $regex: name, $options: "i" };
  }

  const data = await Product.find(queryObj);
  res.status(200).send({ nbHits: data.length, data });
};

module.exports = getAllProducts;
