const mongoose = require("../db");

const Schema = mongoose.Schema;
const studentSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: String,
  dob: String,
  phone: String,
  email: { type: String, required: true },
  sex: String,
  level: String,
  address: String,
  town: String,
  region: String,
  country: String,
  score: Number,
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
