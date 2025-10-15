// =============== Import Required Modules ===============
const express = require("express");
const router = express.Router(); // Create a router instance for grouping routes

// Custom utility to handle async errors without try/catch blocks
const catchAsync = require("../utilities/catchAsync");

// Custom error class for throwing HTTP errors
const ExpressError = require("../utilities/ExpressError");

// Mongoose Campground model (database schema)
const Campground = require("../models/campground");

// Joi validation schema for campground input
const { campgroundSchema } = require("../schemas");

// Custom middleware to protect routes (check if user is logged in)
const { isLoggedIn } = require("../middleware");

// =============== Validation Middleware ===============
// This function validates form input using Joi before saving or updating
const validateCampground = (req, res, next) => {
  const { error } = campgroundSchema.validate(req.body); // Validate request body
  if (error) {
    const msg = error.details.map((el) => el.message).join(","); // Join all error messages
    throw new ExpressError(msg, 400); // Throw custom error if invalid
  } else {
    next(); // Proceed to route handler
  }
};

// =============== Routes ===============

// ========== GET /campground ==========
// Show all campgrounds (main listing page)
router.get(
  "/",
  catchAsync(async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render("campgrounds/index", { campgrounds }); // Render 'index.ejs' with data
  })
);

// ========== GET /campground/new ==========
// Show form to create a new campground
router.get("/new", isLoggedIn, (req, res) => {
  res.render("campgrounds/new"); // Only accessible if user is logged in
});

// ========== POST /campground ==========
// Create a new campground and save to DB
router.post(
  "/",
  isLoggedIn, // Check if user is logged in
  validateCampground, // Validate data using Joi
  catchAsync(async (req, res, next) => {
    // Create new campground using submitted form data
    const campground = new Campground(req.body.campground);
    await campground.save(); // Save to MongoDB
    req.flash("success", "Successfully made a new campground!!");
    res.redirect(`/campground/${campground._id}`); // Redirect to show page
  })
);

// ========== GET /campground/:id ==========
// Show a specific campground by ID
router.get(
  "/:id",
  catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id).populate(
      "review"
    );
    // If campground doesn't exist, redirect back with error message
    if (!campground) {
      req.flash("error", "Cannot find that campground!");
      return res.redirect("/campground");
    }
    res.render("show", { campground }); // Render show.ejs
  })
);

// ========== GET /campground/:id/edit ==========
// Show edit form for an existing campground
router.get(
  "/:id/edit",
  isLoggedIn, // Only logged-in users can edit
  catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    if (!campground) {
      req.flash("error", "Cannot find that campground!");
      return res.redirect("/campground");
    }
    res.render("campgrounds/edit", { campground }); // Render edit form
  })
);

// ========== PUT /campground/:id ==========
// Update campground in the database
router.put(
  "/:id",
  isLoggedIn, // Protect route
  validateCampground, // Validate updated data
  catchAsync(async (req, res) => {
    const { id } = req.params;
    // Use spread operator to update campground fields
    const campground = await Campground.findByIdAndUpdate(id, {
      ...req.body.campground,
    });
    req.flash("success", "Successfully updated campground!!");
    res.redirect(`/campground/${campground._id}`); // Redirect to updated campground page
  })
);

// ========== DELETE /campground/:id ==========
// Delete campground from the database
router.delete(
  "/:id",
  isLoggedIn, // Only logged-in users can delete
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const deleteCamp = await Campground.findByIdAndDelete(id); // Remove from DB
    req.flash("success", "Successfully deleted campground!!");
    res.redirect("/campground"); // Redirect back to campgrounds list
  })
);

// =============== Export Router ===============
// Makes these routes available in app.js via app.use('/campground', campgroundRoutes)
module.exports = router;
