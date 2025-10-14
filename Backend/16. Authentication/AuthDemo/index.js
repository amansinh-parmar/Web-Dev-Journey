// ================ Import Modules ================
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/user");

// ================ Middleware ================
mongoose
  .connect("mongodb://127.0.0.1:27017/authDemo")
  .then(() => {
    console.log("MONGO CONNECTION OPEN");
  })
  .catch((err) => {
    console.log("MONGO CONNECTION ERROR..", err);
  });

// ================ Middleware ================
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

// ================ Routes ================
// 'HOME PAGE'
app.get("/", (req, res) => {
  //   res.send("SERVER IS SUCCESSFULLY CONNECTED");
  res.send("THIS IS THE HOME PAGE.");
});

// ================ Registeration Page ================
app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  // Store password in "Hash Formation"
  const hash = await bcrypt.hash(password, 12);
  const user = new User({
    username,
    password: hash,
  });
  await user.save();
  //   res.send(hash);
  console.log(user);
  res.redirect("/");
});

app.get("/login", (req, res) => {
  res.render("login");
});
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  const validPassword = await bcrypt.compare(password, user.password);
  if (validPassword) {
    res.send("YAY WELCOME!");
  } else {
    res.send("OOPS, TRY AGAIN!!");
  }
  // res.render("login");
});
// ================ Server Port Login ================
app.listen(8080, () => {
  console.log("EXPRESS SERVER LOGIN PORT:8080");
});
