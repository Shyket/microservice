import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  categoty: String,
  price: Number,
  rating:Number,
  brand: String,
});

const product = mongoose.model("Product",productSchema);
module.exports = product;