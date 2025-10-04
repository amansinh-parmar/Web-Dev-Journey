const mongoose = require("mongoose");
const { Schema } = mongoose;

// ================ Connect Mongoose ================
mongoose
  .connect("mongodb://localhost:27017/relationshipDB")
  .then(() => {
    console.log("MONGO CONNECTION OPEN");
  })
  .catch((err) => {
    console.log("OH NO, MONGO CONNECTION ERROR!!", err);
  });

// ================ New Schema for 'Products' ================
const userSchema = new Schema({
  name: String,
  age: Number,
});

const tweetSchema = new Schema({
  text: String,
  likes: Number,
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

// ================ Create a New Models ================
const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

// ================ Create a New Tweet ================
// const makeTweet = async () => {
//   //   const user = new User({ name: "Jack", age: 25 });
//   const user = await User.findOne({ name: "Jack" });
//   const tweet2 = new Tweet({
//     text: "Database is part of Backend",
//     likes: 0,
//   });
//   tweet2.user = user;
//   user.save();
//   tweet2.save();
// };
// makeTweet();

// ================ Find the Tweet using .po ================
const findTweet = async () => {
  const t = await Tweet.findOne({}).populate("user");
  //   const t = await Tweet.findOne({}).populate("user", "name");
  console.log(t);
};
findTweet();
