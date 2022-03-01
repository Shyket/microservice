const express = require("express");
const app = express();
const proxy = require("express-http-proxy");
const serverDiscovery = require("./controller/serverDiscovery");
const axios = require("axios");
require("dotenv").config();

var data;
axios
  .get(`${process.env.REGISTRY}`)
  .then((res) => {
    data = res.data;
    console.log(data);
  })
  .catch((err) => console.log(err));
console.log(data);

const customerProxy = proxy("localhost:8080");
const productProxy = proxy("localhost:8082");
const employeeProxy = proxy("localhost:8081");

app.use("/customer", customerProxy);
app.use("/employee", employeeProxy);
app.use("/product", productProxy);

app.listen(process.env.PORT, () => {
  console.log("api gateway running at port " + process.env.PORT);
});
