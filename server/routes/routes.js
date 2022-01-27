const express = require("express");
const router = express.Router();

const getAllProducts = require("../controllers/products");
const errorHandler = require("../middlewares/errorHandler");

router.route("/api/v1/store").get(getAllProducts);
router.route("/api/v1/store/*").get(errorHandler);
router.route("*").get(errorHandler);

module.exports = router;
