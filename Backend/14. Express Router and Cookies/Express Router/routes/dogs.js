const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("ALL DOGS LIST..!!");
});

router.get("/:id", (req, res) => {
  res.send("VIEW ONE DOG..!!");
});
router.get("/:id/edit", (req, res) => {
  res.send("VIEW & EDIT ONE DOG..!!");
});

module.exports = router;