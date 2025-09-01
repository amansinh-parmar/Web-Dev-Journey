const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const AppError = require("./AppError");

const Product = require("./product");

mongoose
  .connect("mongodb://127.0.0.1:27017/UnisexStore", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  // ============== To check wather it get an error ==================

  .then(() => {
    console.log("MONGO CONNECTION OPEN!!");
  })
  .catch((err) => {
    console.log("OHH NO IT'S MONGO ERROR!!!!");
    console.log(err);
  });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const categories = ["clothes", "watch", "shoes", "accessories", "jacket"];

// ========== "aysnc call back" for 'routes' and "await" 'Mongoose operation' ==========
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

// ================== add new product ==================
app.get("/product/new", (req, res) => {
  throw new AppError("NOT ALLOWED", 401);
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
  const product = await Product.findById(id);
  console.log(product);
  res.render("show", { product });
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

app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong" } = err;
  res.status(status).send(message);
});

// ============ Listen Port ============
app.listen(8080, () => {
  console.log("Express Listening Port:8080");
});
