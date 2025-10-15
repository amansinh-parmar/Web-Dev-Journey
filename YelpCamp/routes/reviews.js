// =============== Import Modules ===============
const express = require("express");

// `mergeParams: true` allows this router to access the :id param from the parent route (/campground/:id/review)
const router = express.Router({ mergeParams: true });

// Import Campground and Review models
const Campground = require("../models/campground");
const Review = require("../models/review");

// Joi validation schema for reviews
const { reviewSchema } = require("../schemas");

// Custom utility to handle async/await errors
const catchAsync = require("../utilities/catchAsync");

// Custom error handler class
const ExpressError = require("../utilities/ExpressError");


// =============== Middleware to Validate Review Input ===============
const validReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body); // Validate review form data
  if (error) {
    // Map all error messages and join them into one string
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400); // Throw a formatted custom error
  } else {
    next(); // Proceed to next middleware or route handler
  }
};


// =============== Routes ===============

// ========== POST /campground/:id/review ==========
// Create and add a new review to a specific campground
router.post(
  "/",
  validReview, // Validate review data using Joi
  catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id); // Get campground by ID
    const review = new Review(req.body.review); // Create new Review instance with form data
    campground.review.push(review); // Add review to campground's review array
    await review.save(); // Save review to DB
    await campground.save(); // Save campground with new review reference
    req.flash("success", "Created new review!!"); // Flash success message
    res.redirect(`/campground/${campground._id}`); // Redirect to the campground's show page
  })
);


// ========== DELETE /campground/:id/review/:reviewId ==========
// Delete a review from both the reviews collection and the campground's reference array
router.delete(
  "/:reviewId",
  catchAsync(async (req, res) => {
    // Destructure both campground ID and review ID from the URL parameters
    const { id, reviewId } = req.params;

    // Remove the reference to the review from the campground using MongoDB's $pull operator
    await Campground.findByIdAndUpdate(id, { $pull: { review: reviewId } });

    // Delete the actual review document from the Review collection
    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Successfully deleted review!");
    res.redirect(`/campground/${id}`); // Redirect back to the campground's show page
  })
);


// =============== Export Router ===============
// This router is mounted in app.js under: app.use("/campground/:id/review", reviewRoutes);
module.exports = router;