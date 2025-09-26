// =============== Import Mongoose ===============
const mongoose = require("mongoose");

// =============== Create New Schema ===============
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
    // lowercase: true,
    enum: ["Clothes", "Footwear", "Accessories", "Watches"],
  },
});

// =============== Complie Model ===============
const Product = mongoose.model("Product", productSchema);

// =============== Export the file ===============
module.exports = Product;
