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
const productSchema = new Schema({
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
    enum: ["Fruit", "Vegetable", "Dairy"],
  },
  farm: {
    type: Schema.Types.ObjectId,
    ref: "Farm",
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
// ================ Add multipl products ================
