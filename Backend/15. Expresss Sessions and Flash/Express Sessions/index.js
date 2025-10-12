// ================= Import Modules =================
const express = require("express");
const app = express();
const session = require("express-session");

// ================= Middleware =================
const sessionOption = {
  secret: "thisisnotgoodsecret",
  resave: false,
  saveUninitialized: false,
};

app.use(session(sessionOption));

// ================= Routes =================
app.get("/viewcount", (req, res) => {
  if (req.session.count) {
    req.session.count += 1;
  } else {
    req.session.count = 1;
  }
  // res.send("YOU HAVE VIEWED THIS 'X' PAGE");
  res.send(`You have viewed this page ${req.session.count} times.`);
});

app.get("/register", (req, res) => {
  const { username = "Anonymous" } = req.query;
  req.session.username = username;
  res.redirect("/greet");
});

app.get("/greet", (req, res) => {
  const { username } = req.session;
  res.send(`Welcome back, ${username}`);
});

// ================= Listen Port =================
app.listen(3000, () => {
  console.log("Express Server Login Port:3000");
});
