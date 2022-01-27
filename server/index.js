const express = require("express");
// const morgan = require("morgan");
const app = express();

require("dotenv").config();

const connectDB = require("./db/connectDB");

const errorHandler = require("./middlewares/errorHandler");
const router = require("./routes/routes");

// app.use(morgan("tiny"));

app.use("/api/v1/store", router);

app.use(errorHandler);

connectDB();

const port = process.env.PUBLIC_PORT || 4000;

app.listen(port, () => {
  console.log("Successfully connected to port " + port);
});
