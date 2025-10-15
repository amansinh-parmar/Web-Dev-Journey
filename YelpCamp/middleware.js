// =================== Middleware Functions ===================

// Middleware to check if the user is authenticated (logged in)
// If the user is NOT logged in:
//   1. Store the URL they originally requested in the session as 'returnTo'
//   2. Make 'returnTo' available in response locals (for redirects after login)
//   3. Flash an error message asking them to sign in
//   4. Redirect them to the login page
// If the user IS logged in, simply call next() to continue

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    // Store the original URL the user wanted to access
    req.session.returnTo = req.originalUrl;
    res.locals.returnTo = req.session.returnTo;

    // Flash an error to inform user they need to log in first
    req.flash("error", "You must be signed in first!");

    // Redirect to login page
    return res.redirect("/login");
  }
  next(); // User is authenticated, proceed to next middleware or route handler
};

// Middleware to transfer the 'returnTo' URL from session to res.locals
// This allows templates or redirect logic to access 'returnTo' easily after login
// It ensures the user can be redirected back to where they wanted to go

module.exports.storeReturnTo = (req, res, next) => {
  if (req.session.returnTo) {
    // Make 'returnTo' available to views and later middleware
    res.locals.returnTo = req.session.returnTo;
  }
  next();
};