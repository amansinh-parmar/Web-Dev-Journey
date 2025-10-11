const express = require("express");
const router = express.Router();

// ==================== MIDDLEWARE ====================
router.use((req, res, next) => {
  if (req.query.isAdmin) {
    next();
  }
  res.send("SORRY NOT AN ADMIN");
});

// ==================== ROUTES ====================
router.get("/secret", (req, res) => {
  res.send("WE WILL KEEP YOUR SECRET PRIVATE..!!");
});
router.get("/delete", (req, res) => {
  res.send("OKAY DELETE EVERYTHING..!!");
});

module.exports = router;
