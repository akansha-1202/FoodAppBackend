const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is Required"],
    trim: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Password is Required"],
  },
},{timestamps : true});//for timing in which user register and login

const userModel = mongoose.model("Users", userSchema);
module.exports = userModel;
