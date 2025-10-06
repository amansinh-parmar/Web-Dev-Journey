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
  name: String,
  price: Number,
  season: {
    type: String,
    enum: ["Spring", "Fall", "Summer", "Winter"],
  },
});

// ================ New Schema for 'Farm' ================
const farmSchema = new Schema({
  name: String,
  city: String,
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

// ================ Add multipl products ================
// Add Multiple data using 'insertMany()'
// Product.insertMany([
//   { name: "Goddess Melon", price: 4.99, season: "Summer" },
//   { name: "Suger Baby Watermelon", price: 4.99, season: "Summer" },
//   { name: "Asparagus", price: 3.99, season: "Spring" },
// ]);

// ================ New Models ================
const Product = mongoose.model("Product", productSchema);
const Farm = mongoose.model("Farm", farmSchema);

// ======== make a farm and get products from products model ========
const makeFarm = async () => {
  const farm = new Farm({ name: "Full Belly Farm", city: "Guinda CA" });
  const melon = await Product.findOne({ name: "Goddess Melon" });
  farm.products.push(melon);
  await farm.save(); // save for mongoDB
  console.log(farm);
};
// makeFarm();

// add another product in farm data library
const addProduct = async () => {
  const farm = await Farm.findOne({ name: "Full Belly Farm" });
  const watermelon = await Product.findOne({ name: "Sugar Baby Watermelon" });
  farm.products.push(watermelon);
  await farm.save(); // save for mongoDB
  console.log(farm);
};
// addProduct();

Farm.findOne({ name: "Full Belly Farm" })
  // use "populate" to gather all the information for each 'product'
  .populate("products")
  .then((farm) => console.log(farm));
