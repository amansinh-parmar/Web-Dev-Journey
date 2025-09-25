// ================== Import Modules ==================
const express = require("express");
const app = express();
const path = require("path");
const AppError = require("./AppError");
const morgan = require("morgan");

// ================== Middleware ==================
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(morgan("tiny"));

app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});

app.use("/cars", (req, res, next) => {
  console.log("I LOVE SPORTS CARS");
  next();
});

// ================== Verification ==================
const reqVerification = (req, res, next) => {
  const { password } = req.query;
  if (password === "car") {
    return next();
  }
  throw new AppError("OOPS, PASSWORD REQUIRED..!!", 401);
  // res.send("PASSWORD NEEDED");
};
// ================== Routes ==================
// -->> Home Page
app.get("/", (req, res) => {
  res.render("home");
});

// -->> Car Page
app.get("/cars", (req, res) => {
  // res.render("home");
  res.send("CAR COLLECTION IS EMPTY");
});

// -->> Error Page
app.get("/error", (req, res) => {
  car.fly();
});
// -->> Verification Page
app.get("/personal", reqVerification, (req, res, next) => {
  res.render("secret");
  // res.send("THIS IS SECRET CODE");
});
// -->> Admin Page
app.get("/admin", (req, res) => {
  throw new AppError("You are not an ADMIN.....", 403);
});

// ================== Global Error Handler ==================
app.use((req, res) => {
  res.status(404).send("NOT FOUND!!");
});

app.use((err, req, res, next) => {
  const { status = 500, message = "SEARCHING ERROR FOUND" } = err;
  res.status(status).send(message);
});

// ================== Listen Port ==================
app.listen(8080, () => {
  console.log("Express Listening Port:8080");
});
