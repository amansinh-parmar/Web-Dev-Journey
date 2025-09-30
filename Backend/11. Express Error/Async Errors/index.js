// ================== Import Modules ==================
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const AppError = require("./AppError");
const Product = require("./product");

// ================== Connect Mongoose ==================
mongoose
  .connect("mongodb://127.0.0.1:27017/UnisexStore")
  // To check wather it get an error
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!");
  })
  .catch((err) => {
    console.log("OHH NO IT'S MONGO ERROR!!!!");
    console.log(err);
  });

// ================== Middleware ==================
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const categories = ["Clothes", "Footwear", "Accessories", "Watches"];

// ================== Routes ==================
// ================== Home Page ==================
app.get("/", (req, res) => {
  res.render("home");
});

// ================== View Bucket List ==================
// "aysnc call back" for 'routes' and "await" 'Mongoose operation'
app.get(
  "/product",
  wrapAsync(async (req, res, next) => {
    const { category } = req.query;
    if (category) {
      const products = await Product.find({ category });
      res.render("index", { products, category });
    } else {
      const products = await Product.find({});
      res.render("index", { products, category: "All" });
    }
  })
);

// ================== Add New Product Form ==================
app.get("/product/new", (req, res) => {
  // throw new AppError("NOT ALLOWED", 401);
  res.render("new", { categories });
});

// ================== Create Product ==================
// After adding new product post request via "_id"
app.post(
  "/product",
  wrapAsync(async (req, res, next) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/product/${newProduct._id}`);
  })
);

// ================== View Product Details ==================
// Get particular product page via "_id"

function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((e) => next(e));
  };
}
app.get(
  "/product/:id",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      throw new AppError("Product Not Found!!", 404);
    }
    res.render("show", { product });
  })
);

// ================== Edit Product Form ==================
// Edit particular product page via "_id"
app.get(
  "/product/:id/edit",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      throw new AppError("Invalid Product Is Not Edit....!!", 404);
    }
    res.render("edit", { product, categories });
  })
);

// ================== Update Product ==================
// Update particular product via "_id"
app.put(
  "/product/:id",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });
    res.redirect(`/product/${product._id}`);
  })
);

// ================== Delete Product ==================
// Delete particular product via "_id"
app.delete(
  "/product/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id);
    res.redirect("/product");
  })
);


// ================== Global Error Handler ==================
const handleValidationErr = err => {
  console.dir (err);
  return new AppError(`Validation Failed....${err.message}`, 400)
}
app.use((err, req, res, next) => {
  console.log(err.name)
  if(err.name === 'ValidationError') err = handleValidationErr(err)
  next(err);
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong" } = err;
  res.status(status).send(message);
});

// ================== Start Server ==================
app.listen(3000, () => {
  console.log("Express Listening Port:3000");
});
