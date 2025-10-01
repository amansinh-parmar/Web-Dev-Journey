const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/relationshipDB")
  .then(() => {
    console.log("MONGO CONNECTION OPEN");
  })
  .catch((err) => {
    console.log("OH NO, MONGO CONNECTION ERROR!!", err);
  });

const addressSchema = new mongoose.Schema(
  {
    street: String,
    city: String,
    state: String,
    country: String,
  },
  { _id: false }
);

const userSchema = new mongoose.Schema({
  first: String,
  last: String,
  addresses: [addressSchema], // Use addressSchema here
});

const User = mongoose.model("User", userSchema);

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

const addAddress = async (id) => {
  const user = await User.findById(id);
  user.addresses.push({
    street: "97 3rd St.",
    city: "New York",
    state: "NY",
    country: "USA",
  });
  const res = await user.save()
  console.log(res);
};

addAddress('68dd7cb9295646117c71a42b')

// makeUser();