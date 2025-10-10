// =============== Import Modules ===============
const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const { campgroundSchema, reviewSchema } = require("./schemas");
const catchAsync = require("./utilities/catchAsync");
const ExpressError = require("./utilities/ExpressError");
const methodOverride = require("method-override");
const Campground = require("./models/campground");
const Review = require("./models/review");

// =============== Connecting with Database ===============
const mongoose = require("mongoose");
const campground = require("./models/campground");
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

const validateCampground = (req, res, next) => {
  const { error } = campgroundSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

const validReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};
// =============== Routes ===============
// =============== "Home Page" ===============
app.get("/", (req, res) => {
  res.render("home");
});

// =============== "campground page" ===============
app.get(
  "/campground",
  catchAsync(async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render("campgrounds/index", { campgrounds });
  })
);

// =============== "add new campground page" ===============
app.get("/campground/new", async (req, res, next) => {
  res.render("campgrounds/new");
});

app.post(
  "/campground",
  validateCampground,
  catchAsync(async (req, res, next) => {
    // if (!req.body.campground)
    //   throw new ExpressError("Invalid Campground Data", 400);
    const campground = new Campground(req.body.campground);
    await campground.save();
    res.redirect(`/campground/${campground._id}`);
  })
);

// =============== "campground each place location" ===============
app.get(
  "/campground/:id",
  catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id).populate(
      "review"
    );
    res.render("show", { campground });
  })
);

// =============== "edit/update campground each place location" ===============
app.get(
  "/campground/:id/edit",
  catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    res.render("campgrounds/edit", { campground });
  })
);

app.put(
  "/campground/:id",
  validateCampground,
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, {
      ...req.body.campground,
    }); // Spread Operator
    res.redirect(`/campground/${campground._id}`);
  })
);

// =============== "delete campground" ===============
app.delete(
  "/campground/:id",
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const deleteCamp = await Campground.findByIdAndDelete(id);
    res.redirect("/campground");
  })
);

// =============== For Review ===============
app.post(
  "/campground/:id/review",
  validReview,
  catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    campground.review.push(review);
    await review.save();
    await campground.save();
    res.redirect(`/campground/${campground._id}`);
    // res.send("Yes, Now you can add DB for Reviews")  ;
  })
);

app.delete(
  "/campground/:id/review/:reviewId",
  catchAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    await Campground.findByIdAndUpdate(id, { $pull: { review: reviewId } });
    await Review.findByIdAndDelete(req.params.reviewId);
    res.redirect(`/campground/${id}`);
  })
);
// =============== Global Error ===============
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
