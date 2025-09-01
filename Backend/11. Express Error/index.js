// ================ Import Modules ================
const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const AppError = require("./AppError");

// ================ use 'ejs' ================
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

// ================ use 'middleware ================
app.use(morgan("tiny"));

app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});

// ================ home page ================
app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

// ================ car page ================
app.get("/cars", (req, res) => {
  console.log(`REQUEST TIM:${req.requestTime}`);
  res.render("cars");
});

app.get("/error", (req, res) => {
  carCollection.car();
});

// ================ password verification ================
const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === "code") {
    return next();
  }
  throw new AppError("Password Required!", 401);
  //   res.send("PASSWORD NEEDED!");
  //   throw new AppError("Password Required!", 401);
};
// for password page content
app.get("/secret", verifyPassword, (req, res, next) => {
  res.send(
    "MY SECRET IS: I wear headphones in public so I don't have to talk to anyone."
  );
  next();
});

// ================ for '404' error ================
app.use((req, res) => {
  res.status(404).send("NOT FOUND!");
});

// ================ error handling using 'MiddleWare' ================
app.use((err, req, res, next) => {
  //   res.status(500).send("THIS IS 500 ERROR!");
  //   console.log(err);

  //   next(); // It will get next() code
  next(err); // It will get next(err) 'error middleware'
});

// ================ listening port ================
app.listen(8080, () => {
  console.log("SERVER LOGIN PORT:8080");
});
        