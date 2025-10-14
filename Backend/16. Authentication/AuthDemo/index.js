// ================ Import Modules ================
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/user");
const session = require("express-session");

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
app.use(
  session({ secret: "notagoodsecret", saveUninitialized: false, resave: false })
);

// check for user this session to use middleware
const requireLogin = (req, res, next) => {
  if (!req.session.user_id) {
    return res.redirect("/login");
  }
  next();
};

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
  // ==>> Note: Use this line to get password from user do hashing function and then save in model/mongoose.
  // const hash = await bcrypt.hash(password, 12);
  // const user = new User({ username, password: hash });

  // ==>> Note: Use this line we need middleware in 'user.js' model file.
  const user = new User({ username, password });
  await user.save();
  //   res.send(hash);
  console.log(user);
  req.session.user_id = user._id;
  res.redirect("/");
});

// ================ Login Page ================
app.get("/login", (req, res) => {
  res.render("login");
});
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const foundUser = await User.findAndValidate(username, password);
  if (foundUser) {
    req.session.user_id = foundUser._id;
    res.redirect("/secret");
  } else {
    res.redirect("/login");
  }
  // res.render("login");
});

// ================ Logout Page ================
app.post("/logout", (req, res) => {
  // req.session.user_id = null;
  req.session.destroy(); //use this to destroy the session entirely
  res.redirect("/login");
});

// ================ Secret Page ================
// use middleware 'requireLogin'
app.get("/secret", requireLogin, (req, res) => {
  // res.send("THIS IS SECRET! YOU CAN'T SEE ME UNLESS YOU ARE LOGGED IN!!");
  res.render("secret");
});

// use middleware 'requireLogin'
app.get("/topsecret", requireLogin, (req, res) => {
  res.send("This is the 'TOP SECRET' to come here..!!");
});
// ================ Server Port Login ================
app.listen(8080, () => {
  console.log("EXPRESS SERVER LOGIN PORT:8080");
});
