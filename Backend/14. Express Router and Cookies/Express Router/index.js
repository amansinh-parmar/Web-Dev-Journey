const express = require("express");
const app = express();
const shelterRoutes = require("./routes/shelters");
const dogRoutes = require("./routes/dogs");
const adminRoute = require("./routes/admin");


// ==================== IMPORT ROUTES ====================
// Prefixed the 'route' to edit one place if we need (makes sure don't add any route in 'shelters' file)
app.use("/shelters", shelterRoutes);
app.use("/dogs", dogRoutes);
app.use("/admin", adminRoute);


// ==================== ROUTES ====================
app.get("/", (req, res) => {
  res.send("YES, SERVER is CONNECTED!");
});


// ==================== SERVER CONNECTION ====================
app.listen(3000, () => {
  console.log("Express Server Login Port:3000");
});
