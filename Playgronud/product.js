const mongoose = require("mongoose");
const { Schema } = mongoose;

const BucketList = new Schema({
  place: String,
  date: Number,
  target: String,
});

// =============== Complie Model ===============
const Task = mongoose.model("Task", BucketList);

// =============== Export the file ===============
module.exports = Task;
