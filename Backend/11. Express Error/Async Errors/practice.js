
const methodOverride = require("method-override");
const Product = require("./product");


app.get("/", (req, res) => {
  res.render("home");
});


app.get("/secret", verifyPassword, (req, res, next) => {
  res.send("THE HACK TO GET YOUR DREAM IS LOT OF 'HARD WORK'");
});

