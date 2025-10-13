// =============== Import Modules ===============
const express = require("express");
const router = express.Router({ mergeParams: true });

const Campground = require("../models/campground");
const Review = require("../models/review");

const { reviewSchema } = require("../schemas");

const catchAsync = require("../utilities/catchAsync");
const ExpressError = require("../utilities/ExpressError");

// =============== Middleware ===============
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
router.post(
  "/",
  validReview,
  catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    campground.review.push(review);
    await review.save();
    await campground.save();
    req.flash("success", "Created new review!!");
    res.redirect(`/campground/${campground._id}`);
    // res.send("Yes, Now you can add DB for Reviews")  ;
  })
);

// =============== Delete Review ===============
router.delete(
  "/:reviewId",
  catchAsync(async (req, res) => {
    console.log(req.params);
    const { id, reviewId } = req.params;
    await Campground.findByIdAndUpdate(id, { $pull: { review: reviewId } });
    await Review.findByIdAndDelete(req.params.reviewId);
    req.flash("success", "Successfully deleted review!");
    res.redirect(`/campground/${id}`);
  })
);

module.exports = router;
