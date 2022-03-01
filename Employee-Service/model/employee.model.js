import mongoose from "mongoose";
const { Schema } = mongoose;

const employeeSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  branch: String,
  designation: String,
  salary: Number,
  age:Number,
  contact: Number,
  nationality:String,
});

const employee = mongoose.model("Employee", employeeSchema);
module.exports = employee;
