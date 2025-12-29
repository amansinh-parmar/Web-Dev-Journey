// ================== Import Modules ==================
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Product = require("./task");
const methodOverride = require("method-override");
const AppError = require("./AppError");

// ================== Mongoose Connection ==================
mongoose
  .connect("mongodb://127.0.0.1:27017/UnisexStore")
  .then(() => {
    console.log("MONGO CONNECTION OPEN");
  })
  .catch((err) => {
    console.log("OHH NO THIS IS MONGO ERROR");
    console.log(err);
  });

// ================== Middleware ==================
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({}));
app.use(methodOverride("_method"));

const categories = ["Clothes", "Footwear", "Accessories", "Watches"];

// ================== Routes ==================
// -->> Home Page
app.get("/", (req, res) => {
  res.render("home");
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

// -->> New Product Page
app.get("/product/new", (req, res) => {
  // throw new AppError("NOT ALLOWED", 401);
  res.render("new", { categories });
});

// -->> Create Product
app.post("/product", async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.redirect(`/product/${newProduct._id}`);
});

// -->> View Product Details
app.get("/product/:id", async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (!product) {
    throw new AppError("PRODUCT NOT FOUND!!", 404);
  }
  res.render("show", { product });
});

// -->> Edit Product Form
app.get("/product/:id/edit", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (!product) {
    throw new AppError("Invalid Product is not Edit..!!", 404);
  }
  res.render("edit", { product, categories });
});

// -->> Update Product
app.put("/product/:id", async (req, res, next) => {
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

// ================== Global Error Handler ==================
const handleValidationErr = (err) => {
  console.dir(err);
  return new AppError(`Validation Failed....${err.message}`);
};
app.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name === "ValidationError") err = handleValidationErr(err);
  next(err);
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Somethig went wrong" } = err;
  res.status(status).send(message);
});

// ================== Start Server ==================
app.listen(8080, () => {
  console.log("Sever Login Port:8080");
});
