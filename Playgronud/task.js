const mongoose = require("mongoose");
const { Schema } = mongoose;

const BucketList = new Schema({
  name: {
    type: String,
    required: true,
  },
  targetDate: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    enum: ["Habits", "Strength", "Exercise", "Travel Place"],
    required: true,
  },
});

// =============== Complie Model ===============
const Task = mongoose.model("Task", BucketList);

// =============== Export the file ===============
module.exports = Task;
