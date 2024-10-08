const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  image: String,
});

const User = mongoose.model("Users", userSchema);

module.exports = User;
