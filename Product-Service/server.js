const express = require("express");
const app = express();
const router = require("./routes/index");
const mongoose = require("mongoose");
const database = require("./database");
require("dotenv").config();

app.use("/", router);

database();

app.listen(process.env.PORT, () => {
  console.log("product service running at port " + process.env.PORT);
});
