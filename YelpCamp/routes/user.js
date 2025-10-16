// ================== Import Modules ==================
const express = require("express");
const router = express.Router(); // Create a router instance

const User = require("../models/user"); // Mongoose User model
const catchAsync = require("../utilities/catchAsync"); // Async error handler
const passport = require("passport"); // For user authentication
const { storeReturnTo } = require("../middleware"); // Custom middleware to store intended redirect path

// ================== Routes ==================

// ========== GET /register ==========
// Show the registration form
router.get("/register", (req, res) => {
  res.render("users/register"); // Renders views/users/register.ejs
});

// ========== POST /register ==========
// Handle user registration logic
router.post(
  "/register",
  catchAsync(async (req, res, next) => {
    try {
      // Destructure form input values
      const { username, email, password } = req.body;

      // Create a new user instance (only email & username here, password is handled by plugin)
      const user = new User({ email, username });

      // Register the user (this hashes the password and saves it)
      const registerUser = await User.register(user, password);

      // Auto-login the user after successful registration
      req.login(registerUser, (err) => {
        if (err) return next(err);
        console.log(registerUser);
        req.flash("success", "Welcome to YelpCamp!"); // Flash welcome message
        res.redirect("/campground"); // Redirect to campground listing
      });
    } catch (err) {
      req.flash("error", err.message); // Show error message (e.g., duplicate username)
      res.redirect("/register"); // Redirect back to registration form
    }
  })
);

// ========== GET /login ==========
// Show the login form
router.get("/login", (req, res) => {
  res.render("users/login"); // Renders views/users/login.ejs
});

// ========== POST /login ==========
// Handle user login logic
router.post(
  "/login",

  // Middleware to remember the page user was trying to visit before logging in
  storeReturnTo,

  // Passport handles the authentication logic using the 'local' strategy (username + password)
  passport.authenticate("local", {
    failureFlash: true, // Show error message on failure
    failureRedirect: "/login", // Redirect back to login on failure
  }),

  // After login, redirect user to their original destination or a default
  (req, res) => {
    req.flash("success", "Welcome back!");
    const redirectUrl = res.locals.returnTo || "/campgrounds"; // Default redirect
    res.redirect(redirectUrl);
  }
);

// ========== GET /logout ==========
// Handle user logout
router.get("/logout", (req, res) => {
  // Passport's logout method — removes user from session
  req.logout(function (err) {
    if (err) {
      return next(err); // If error during logout, forward to error handler
    }
    req.flash("success", "Goodbye!"); // Flash logout message
    res.redirect("/campgrounds"); // Redirect to home or campgrounds
  });
});

// ========== Export Router ==========
module.exports = router;
