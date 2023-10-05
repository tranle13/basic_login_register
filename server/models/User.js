const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// create "Users" table with given schema
const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
