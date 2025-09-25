const mongoose = require("mongoose");
const { Schema } = mongoose;

const BucketList = new Schema({
  title: String,
});
