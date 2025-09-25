// ================== Import Modules ==================
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const Product = require("./task");
const AppError = require("./AppError");
const { profileEnd } = require("console");

// ================== Connect Mongoose ==================
mongoose
  .connect("mongodb://127.0.0.1:27017/UnisexStore")
  .then(() => {
    console.log("MONGODB CONNECTION OPEN");
  })
  .catch((err) => {
    console.log("MONGODB CONNECTION ERROR");
    console.log(err);
  });
// ================== Middleware ==================
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({}));
// app.use(methodOverride("_method"));

const categories = ["Clothes", "Footware", "Accessories", "Watches"];

// ================== Routes ==================
// -->> Home Page
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/cars", (req, res) => {
  res.render("secret");
});

// -->> Product Page
app.get("/product", async (req, res) => {
  const { category } = req.query;
  if (category) {
    const products = await Product.find({ category });
    res.render("index", { products, category });
  } else {
    const products = await Product.find({});
    res.render("index", { products, category: "All" });
  }
});

// -->> Add New Product
app.get("/product/new", (req, res) => {
  // throw new AppError("SEARCHING NOT ALLOWED..!!", 401);
  res.render("new", { categories });
});

app.post("/product", async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.redirect(`/product/${newProduct._id}`);
});

// -->> View Product
app.get("/product/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("show", { product });
});

// -->> View Product
app.get("/product/:id/edit", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("edit", { product, categories });
});

// -->> Update Product
app.put("/product/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });
  res.redirect(`/product/${product._id}`);
});

// -->> Delete Product
app.delete("/product/:id", async (req, res) => {
  const { id } = req.params;
  const deleteProduct = await Product.findByIdAndDelete(id);
  // res.redirect(`/product/${deleteProduct._id}`);
  res.redirect("/product");
});

// ================== Global Error ==================
// app.use((err, req, res, next) => {
//   res.status(401).send("SEARCH RESULT NOT FOUND!!");
//   next();
// });

// ================== Connect Mongoose ==================
app.listen(8080, () => {
  console.log("Express Server Port:8080");
});
