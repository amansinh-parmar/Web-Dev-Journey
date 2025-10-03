const mongoose = require("mongoose");
// ================= Connect with Mongoose =================
mongoose
  .connect("mongodb://localhost:27017/relationshipDB")
  .then(() => {
    console.log("MONGO CONNECTION OPEN");
  })
  .catch((err) => {
    console.log("OH NO, MONGO CONNECTION ERROR!!", err);
  });

// ================= Create new Schema =================
const userSchema = new mongoose.Schema({
  first: String,
  last: String,
  addresses: [
    {
      _id: { _id: false },
      street: String,
      city: String,
      state: String,
      country: String,
    },
  ],
});
// Create a 'user' Model
const User = mongoose.model("User", userSchema);

// Add new User
const makeUser = async () => {
  const u = new User({
    first: "Harry",
    last: "Potter",
  });
  u.addresses.push({
    street: "123 Sesame St.",
    city: "New York",
    state: "NY",
    country: "USA",
  });
  const res = await u.save();
  console.log(res);
};
// makeUser();

// Add 'new address'
const addAddress = async (id) => {
  const user = await User.findById(id);
  user.addresses.push({
    street: "97 3rd St.",
    city: "New York",
    state: "NY",
    country: "USA",
  });
  const res = await user.save();
  console.log(res);
};
// make sure to add same and valid user _id:
addAddress("68dd7cb9295646117c71a42b");