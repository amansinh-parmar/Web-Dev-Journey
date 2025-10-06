const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose
  .connect("mongodb://127.0.0.1:27017/Playground")
  .then(() => {
    console.log("Mongo Connection Open");
  })
  .catch((err) => {
    console.log("Oops, Mongo Connection Error!!", err);
  });

const collectionSchema = new Schema({
  brand: String,
  type: {
    variant: String,
    price: Number,
    bodyType: {
      type: String,
      enum: ["Sedan", "Suv", "Sports", "Xuv"],
    },
  },
});

const categorySchema = new Schema({
  category: {
    type: String,
    enum: ["Sports Car", "Luxuries Car", "Vintage Car"],
  },
  collections: [{ type: Schema.Types.ObjectId, ref: "CarCollection" }],
});

const CarCollection = mongoose.model("CarCollection", collectionSchema);
const Category = mongoose.model("Category", categorySchema);

const makeCollection = async () => {
  const category = new Category({ category: "Sports Car" });
  const bmw = await CarCollection.findOne({ brand: "BMW" });

  if (!bmw) {
    console.log("BMW car not found");
    return;
  }

  category.collections.push(bmw);
  await category.save();
  console.log("Category after adding BMW:", category);
};

const addCar = async () => {
  const category = await Category.findOne({ category: "Sports Car" }); // fixed field
  const mercedes = await CarCollection.findOne({ brand: "Mercedes" });

  if (!category) {
    console.log("Category not found");
    return;
  }
  if (!mercedes) {
    console.log("Mercedes car not found");
    return;
  }

  category.collections.push(mercedes);
  await category.save();
  console.log("Category after adding Mercedes:", category);
};

makeCollection();
addCar();

// CarCollection.insertMany([
//   {
//     brand: "Ford",
//     type: { variant: "Mustang GT", price: "49000", bodyType: "Sedan" },
//   },
//   {
//     brand: "Mercedes",
//     type: { variant: "G-Wagon", price: "24000", bodyType: "Xuv" },
//   },
//   {
//     brand: "Lamborghini",
//     type: { variant: "Urus", price: "20000", bodyType: "Suv" },
//   },
// ]);
