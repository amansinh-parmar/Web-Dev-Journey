// ================== Import Modules ==================
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const product = require("./product");
const Product = require("../Backend/11. Express Error/Async Errors/product");

// ================== Connect Mongoose ==================
mongoose
  .connect("mongodb://127.0.0.1:27017/BuketList")
  .then(() => {
    console.log("Mongoose Connection Open");
  })
  .catch((err) => {
    console.log("Mongoose Error..!!");
    console.log(err);
  });
// ================== Import 'ejs' and 'express' ==================
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const categories = ["Habits", "Strength", "Exercise", "Travel Place"];

// ================== Home Page ==================
app.get("/", (req, res) => {
  res.render("home");
});

// ================== View Bucket List ==================
app.get("/task", (req, res) => {
  const { category } = req.query;
  if (category) {
    const products = Product.find({ category });
    res.render("index", { category, products });
  }
});

// ================== Add New Item ==================

// ================== Delete Item ==================

// ================== Update Item ==================

// ================== Error Check ==================
// app.use((req, res, err, next) => {
//   const { status = 500, message = "Something went wrong" } = err;
//   res.status(status).send(message);
//   next();
// });

// ================== Listen Port ==================
app.listen(8080, () => {
  console.log("Express Listening Port:8080");
});
