const express = require("express");
const app = express();

require("dotenv").config();

const connectDB = require("./db/connectDB");

const router = require("./routes/routes");

app.use(router);

connectDB();

const port = process.env.PUBLIC_PORT || 4000;

app.listen(port, () => {
  console.log("Successfully connected to port " + port);
});
