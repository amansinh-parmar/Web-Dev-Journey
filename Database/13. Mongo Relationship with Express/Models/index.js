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

const categories = ["Fruit", "Vegetable", "Dairy"];

// ============== Routes ==================
app.get("/", (req, res) => {
  res.render("Farm/home");
});

// ============== View Farm List ==================
// ============== ONLY FOR FARM ROUTES ==================
app.get("/farms", async (req, res) => {
  const farms = await Farm.find({});
  res.render("Farm/index", { farms });
});

// ============== Add New Farm ==================
app.get("/farms/new", async (req, res) => {
  res.render("Farm/new");
});

// ============== Show Each Farm Individual ==================
app.get("/farms/:id", async (req, res) => {
  // const { id } = req.params;
  const farm = await Farm.findById(req.params.id);
  res.render("Farm/show", { farm });
});

// ============== Added Farm and get back to Farm List ==================
app.post("/farms", async (req, res) => {
  const farm = new Farm(req.body);
  await farm.save();
  res.redirect("/farms");
});

// ============== Add New Product inside Farm ==================
app.get("/farms/:id/products/new", async (req, res) => {
  const { id } = req.params;
  // const farm = await Farm.findById(id);
  res.render("Product/new", { categories, id });
});

// ==============  Product Added inside Farm ==================
app.post("/farms/:id/products", async (req, res) => {
  const { id } = req.params;
  const farm = await Farm.findById(id);
  const { name, price, category } = req.body;
  const product = new Product({ name, price, category });
  farm.product.push(product);
  product.farm = farm;
  await farm.save();
  await product.save();
  res.redirect(`/farms/${farm._id}`);
});

app.get("/product", async (req, res) => {
  const { category } = req.query;
  if (category) {
    const products = await Product.find({ category });
    res.render("product/index", { products, category });
  } else {
    const products = await Product.find({});
    res.render("product/index", { products, category: "All" });
  }
});

// ================== add new product ==================
app.get("/product/new", (req, res) => {
  res.render("new", { categories });
});

// After adding new product post request via "_id"
app.post("/product", async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.redirect(`/product/${newProduct._id}`);
});

// Get particular product page via "_id"
app.get("/product/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id).populate("farm", "name");
  console.log(product);
  res.render("show", { product });
});
// app.use((err, req, res, next) => {
//   const { status = "500", message = "Server Error" } = err;
//   res.status(status).send(message);
// });

// ============== Listening Port ==================
app.listen(8080, () => {
  console.log("Express Server Login Port: 8080");
});
