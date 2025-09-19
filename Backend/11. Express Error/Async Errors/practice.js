
const methodOverride = require("method-override");
const Product = require("./product");


app.get("/", (req, res) => {
  res.render("home");
});

app.get("/product", async (req, res) => {
  const { category } = req.query;
  if (category) {
    const product = await Product.fing({});
    res.render("index", { product, category: "All" });
  }
});

// app.get("/product/new", (req, res) => {
//   throw new AppError("NOT ALLOWED", 401);
//   res.render("new", { category });
// });

app.get("/secret", verifyPassword, (req, res, next) => {
  res.send("THE HACK TO GET YOUR DREAM IS LOT OF 'HARD WORK'");
});

