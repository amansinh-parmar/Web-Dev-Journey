const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb://127.0.0.1:27017/UnisexStore")
//   .then(() => {
//     console.log("MONGO CONNECTION OPEN");
//   })
//   .catch((err) => {
//     console.log("MONGODB ERROR..!!");
//     console.log(err);
//   });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["Clothes", "Footware", "Accessories", "Watches"],
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
