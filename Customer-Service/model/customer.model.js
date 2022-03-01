import mongoose from "mongoose";
const { Schema } = mongoose;

const customerSchema = new Schema({
  name: String, 
  age: Number,
  address: String,
  profession: String,
});

const customer = mongoose.model("Customer", customerSchema);
module.exports = customer;
