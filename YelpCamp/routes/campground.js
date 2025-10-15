// =============== Import Modules ===============
const express = require("express");
const router = express.Router();

const catchAsync = require("../utilities/catchAsync");
const ExpressError = require("../utilities/ExpressError");

const Campground = require("../models/campground");
const { campgroundSchema } = require("../schemas");
const { isLoggedIn } = require("../middleware");

// =============== Middleware ===============
const validateCampground = (req, res, next) => {
  const { error } = campgroundSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

// =============== Routes ===============
// =============== "Home Page" ===============
// router.get("/", (req, res) => {
//   res.render("home");
// });

// =============== "campground page" ===============
router.get(
  "/",
  catchAsync(async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render("campgrounds/index", { campgrounds });
  })
);

// =============== "add new campground page" ===============
router.get("/new", isLoggedIn, (req, res) => {
  res.render("campgrounds/new");
});

router.post(
  "/",
  isLoggedIn,
  validateCampground,
  catchAsync(async (req, res, next) => {
    // if (!req.body.campground)
    //   throw new ExpressError("Invalid Campground Data", 400);
    const campground = new Campground(req.body.campground);
    await campground.save();
    req.flash("success", "Successfully made a new campground!!");
    res.redirect(`/campground/${campground._id}`);
  })
);

// =============== "campground each place location" ===============
router.get(
  "/:id",
  catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id).populate(
      "review"
    );
    if (!campground) {
      req.flash("error", "Cannot find that campground!");
      return res.redirect("/campground");
    }
    res.render("show", { campground });
  })
);

// =============== "edit/update campground each place location" ===============
router.get(
  "/:id/edit",
  isLoggedIn,
  catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    if (!campground) {
      req.flash("error", "Cannot find that campground!");
      return res.redirect("/campground");
    }
    res.render("campgrounds/edit", { campground });
  })
);

router.put(
  "/:id",
  isLoggedIn,
  validateCampground,
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, {
      ...req.body.campground,
    }); // Spread Operator
    req.flash("success", "Successfully updated campground!!");
    res.redirect(`/campground/${campground._id}`);
  })
);

// =============== "delete campground" ===============
router.delete(
  "/:id",
  isLoggedIn,
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const deleteCamp = await Campground.findByIdAndDelete(id);
    req.flash("success", "Successfully deleted campground!!");
    res.redirect("/campground");
  })
);



module.exports = router;
