const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

// ============== Create Schema ==============
const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username cannot be blank"],
  },
  password: {
    type: String,
    required: [true, "Password cannot be blank"],
  },
});

// ============== Middleware ==============
userSchema.statics.findAndValidate = async function (username, password) {
  const foundUser = await this.findOne({ username });
  const isValid = await bcrypt.compare(password, foundUser.password);
  return isValid ? foundUser : false;
};

// Replace the password with using 'middleware' so nobody can see inside the database as well.
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// ============== Export Schema ==============
const User = mongoose.model("User", userSchema);
module.exports = User;
