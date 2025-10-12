const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session");
const flash = require("connect-flash");

// ================= Middleware =================
const sessionOption = {
  secret: "thisisnotgoodsecret",
  resave: false,
  saveUninitialized: false,
};

app.use(session(sessionOption));
app.use(flash());

// ================= Connect Mongoose =================
const Farm = require("./Models/farm");

mongoose
  .connect("mongodb://localhost:27017/relationshipDB")
  .then(() => {
    console.log("Mongo Connection Open");
  })
  .catch((err) => {
    console.log("Oh No, Mongo Connection Error", err);
  });

// ============== Middleware ==================
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.locals.messages = req.flash("success");
  next();
});

// ============== Farm Routes ==================
// View Farm List
app.get("/farms", async (req, res) => {
  const farms = await Farm.find({});
  res.render("Farm/index", { farms, messages: req.flash("success") }); // set a message while create a new file
});

// Add New Farm
app.get("/farms/new", async (req, res) => {
  res.render("Farm/new");
});

// Show each farm individually
app.get("/farms/:id", async (req, res) => {
  const farm = await Farm.findById(req.params.id).populate("products");
  res.render("Farm/show", { farm });
});

// Post Request to add new Farm
app.post("/farms", async (req, res) => {
  const farm = new Farm(req.body);
  await farm.save();
  req.flash("success", "Successfully made a new farm!!"); //set a message while create a new file
  res.redirect("/farms");
});

// Delete farm according using "id"
// app.delete("/farms/:id", async (req, res) => {
//   await Farm.findByIdAndDelete(req.params.id);
//   res.redirect("/farms");
// });

// ============== Global Errors ==================
app.use((err, req, res, next) => {
  const { status = 500, message = "Server Error" } = err;
  res.status(status).send(message);
});

// ============== Listening Port ==================
app.listen(8080, () => {
  console.log("Express Server Login Port: 8080");
});
