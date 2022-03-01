const express = require('express');
const app = express();
require("dotenv").config();
const registryController = require("./controller/registry.controller");

app.post("/register",(req,res) => {
    console.log(req.query);
    registryController.register(req.query.appName, req.query.port);
})

app.listen(process.env.PORT, ()=> {
    console.log("service registry is running on port " + process.env.PORT);
})