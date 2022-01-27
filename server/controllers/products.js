const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const { featured, search, sort } = req.query;

  const queryObj = {};

  if (featured !== "" && featured !== undefined) {
    queryObj.featured = featured;
  }

  if (search) {
    queryObj.name = { $regex: search, $options: "i" };
  }

  let result = Product.find(queryObj);

  if (sort) {
    sortList = sort.split(",").join(" ");
    result.sort(sortList);
  }

  const data = await result;
  res.status(200).send({ nbHits: data.length, data });
};

module.exports = getAllProducts;
