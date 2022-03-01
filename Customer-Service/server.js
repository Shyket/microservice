const express = require("express");
const app = express();
const router = require("./routes/index");
const mongoose = require("mongoose");
const database = require("./database");
const registry = require("./controller/registry");
require("dotenv").config();

app.use("/", router);
registry.register("customer-service", process.env.PORT);

database();

app.listen(process.env.PORT, () => {
  console.log("customer service running at port " + process.env.PORT);
});
