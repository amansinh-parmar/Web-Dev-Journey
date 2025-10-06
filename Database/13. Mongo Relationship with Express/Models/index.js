// ============== Import Modules ==================
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Product = require("./product");
const Farm = require("./farm");

// ============== Mongoose Connection ==================
mongoose
  .connect("mongodb://localhost:27017/relationshipDB")
  .then(() => {
    console.log("Mongo Connection Open");
  })
  .catch((err) => {
    console.log("Oh No, Mongo Connection Error");
  });

// ============== Middleware ==================
app.set("view engine", "ejs");
app.set("Views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// ============== Farm Routes ==================
// ============== View Farm List ==================
app.get("/farms", async (req, res) => {
  const farms = await Farm.find({});
  res.render("Farm/index", { farms });
});

// ============== Add New Farm ==================
app.get("/farms/new", async (req, res) => {
  res.render("Farm/new");
});
// Post Request to add new Farm
app.post("/farms", async (req, res) => {
  const farm = new Farm(req.body);
  await farm.save();
  res.redirect("/farms");
});

app.get("/farms/:id", async (req, res) => {
  const farm = await Farm.findById(req.params.id).populate("products");
  res.render("Farm/show", { farm });
});

// ============== Products Routes ==================
// ============== Add New Product inside Farm ==================
app.get("/farms/:id/products/new", async (req, res) => {
  const { id } = req.params;
  const farm = await Farm.findById(id);
  res.render("Product/new", { categories, farm });
});

// ==============  Product Added inside Farm ==================
app.post("/farms/:id/products", async (req, res) => {
  const { id } = req.params;
  const farm = await Farm.findById(id);
  const { name, price, category } = req.body;
  const product = new Product({ name, price, category });

  farm.products.push(product);
  product.farm = farm;
  await product.save();
  await farm.save();
  res.redirect(`/farms/${farm._id}`);
});
const categories = ["Fruit", "Vegetable", "Dairy"];

// ============== Routes ==================
app.get("/", (req, res) => {
  res.render("Farm/home");
});

// ============== Product Routes ==================
// ================== add new product ==================
app.get("/products/new", (req, res) => {
  res.render("Product/new", { categories });
});

// After adding new product post request via "_id"
app.post("/products", async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.redirect(`/product/${newProduct._id}`);
});

// Get particular product page via "_id"
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id).populate("farm", "name");
  console.log(product);
  res.render("Product/show", { product });
});

// Edit particular product page via "_id"
app.get("/product/:id/edit", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("edit", { product, categories });
});

// Update particular product via "_id"
app.put("/product/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });
  res.redirect(`/product/${product._id}`);
});

// Delete particular product via "_id"
app.delete("/product/:id", async (req, res) => {
  const { id } = req.params;
  const deleteProduct = await Product.findByIdAndDelete(id);
  res.redirect("/product");
});

// app.use((err, req, res, next) => {
//   const { status = "500", message = "Server Error" } = err;
//   res.status(status).send(message);
// });

// ============== Listening Port ==================
app.listen(8080, () => {
  console.log("Express Server Login Port: 8080");
});
