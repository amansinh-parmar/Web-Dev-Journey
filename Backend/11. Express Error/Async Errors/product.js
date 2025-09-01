const mongoose = require("mongoose");

// =============== Make Schema ===============
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
    min: 0,
  },
  category: {
    type: String,
    lowercase: true,
    enum: ["clothes", "watch", "shoes", "accessories", "jacket"],
  },
});

// =============== Complie Model ===============
const Product = mongoose.model("Product", productSchema);

// =============== Export the file ===============
module.exports = Product;
