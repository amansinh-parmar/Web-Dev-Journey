const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const AppError = require("./AppError");
const methodOverride = require("method-override");
// const morgan = require("morgan");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.methodOverride("_method"));

const categories = ["clothes", "watch", "shoes", "accessories", "jacket"];

// app.get("/", async (req, res) => {
//   const category = req.query;
//   if (category) {
//     const product = await Product.find({ category });
//     res.render("index", { product, category });
//   } else {
//     const product = await Product.find({});
//     res.render("index", { product, category: "All" });
//   }
// });

const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === "code") {
    next();
  }
  res.send("PASSWORD INCORRECT");
};

app.get("/", async (req, res) => {
  res.send("HELLO BACKEND DEVELOPER, THIS IS HOME PAGE");
});

app.get("/cars", verifyPassword, (req, res) => {
  res.send("AMAN is my real name.");
});

app.get((req, res, next) => {
  const { status = 404, message = "Something went wrong" } = err;
  console.log("404 error");
  res.status(status).send(message);
  next();
});

app.listen(8080, () => {
  console.log(`Server Login:8080`);
});
