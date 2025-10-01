const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose
  .connect("mongodb://localhost:27017/relationshipDB")
  .then(() => {
    console.log("MONGO CONNECTION OPEN");
  })
  .catch((err) => {
    console.log("OH NO, MONGO CONNECTION ERROR!!", err);
  });

const productSchema = new Schema({
  name: String,
  price: Number,
  type: {
    type: String,
    enum: ["Sedan", "SUV", "Hatchback", "Convertible"],
  },
});

const carCollectionSchema = new mongoose.Schema({
  name: String,
  brand: String,
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

const Product = mongoose.model("Product", productSchema);
const CarCollection = mongoose.model("CarCollection", carCollectionSchema);

/*
const CarCollection = mongoose.model("CarCollection", carCollectionSchema);

const sportsCar = async () => {
  const sports = new CarCollection({ name: "M4i", brand: "BMW" });
  const McLaren = await Product.findOne({ name: "McLaren GT" });
  sports.products.push(McLaren);
  await sports.save();
  console.log(sports);
};
sportsCar();
*/

// Product.insertMany([
//   {
//     name: "Aston Martin Vanquish V12",
//     price: "1060000",
//     type: "Convertible",
//   },
//   { name: "Lamborghini Urus S", price: "500000", type: "SUV" },
//   { name: "McLaren GT", price: "540000", type: "Sedan" },
// ]);

const addCar = async () => {
  const sports = new CarCollection({ name: "Mustang GT", brand: "Ford" });
  const Lamborghini = await Product.findOne({ name: "Lamborghini Urus S" });
  sports.products.push(Lamborghini);
  console.log(sports);
};

addCar();
