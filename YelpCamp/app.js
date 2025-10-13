// =============== Import Modules ===============
const express = require("express");
const app = express();
const path = require("path");

const session = require("express-session");
const flash = require("connect-flash");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");

const ExpressError = require("./utilities/ExpressError");

const campgrounds = require("./routes/campground");
const reviews = require("./routes/reviews");

// =============== Connecting with Database ===============
const mongoose = require("mongoose");
const campground = require("./models/campground");
const review = require("./models/review");

// mongodb://server port/'database name'
mongoose.connect("mongodb://127.0.0.1:27017/yelp-camp");

// check there is an error or not
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database Connected!!");
});

// =============== Middleware ===============
// Get "ejs" Templates
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

const sessionConfig = {
  secret: "ThisShouldBeBetterSecret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};
app.use(session(sessionConfig));
app.use(flash());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

// ==================== IMPORT ROUTES ====================
// Prefixed the 'route' to edit one place if we need (makes sure don't add any route in 'shelters' file)
app.use("/campground", campgrounds);
app.use("/campground/:id/review", reviews);

// =============== Routes ===============
// =============== "Home Page" ===============
app.get("/", (req, res) => {
  res.render("home");
});

// =============== Global Error Handler ===============
app.all(/(.*)/, (req, res, next) => {
  next(new ExpressError("Page Not Found", 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = "OHHH  NO, SOMETHING WENT WRONG!!!!";
  res.status(statusCode).render("error", { err });
  // res.send("OHHH  NO, SOMETHING WENT WRONG!!!!");
});

// =============== Listen Port ===============
app.listen(3000, () => {
  console.log("Server Login Port:3000");
});
