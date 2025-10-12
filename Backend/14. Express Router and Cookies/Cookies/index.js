// =============== Import Modules ===============
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

// =============== Middleware ===============
app.use(cookieParser("ThisIsYourSecret"));

// =============== Routes ===============
app.get("/greet", (req, res) => {
  const { name = Anonyoums } = req.cookies;
  res.send(`Heyy there, ${name}`);
});

app.get("/setname", (req, res) => {
  res.cookie("name", "APEX");
  res.cookie("animal", "Tiger");
  res.send("OKAY, SET YOU A COOKIE!!");
});

app.get("/getsingedcookie", (req, res) => {
  res.cookie("fruit", "grape", { signed: true });
  res.send("Okay, Signed your 'Fruit Cookie'!! ");
});

app.get("/verifyfruit", (req, res) => {
  console.log(req.cookies);
  res.send(req.signedCookies);
});

// =============== Listen Port ===============
app.listen(3000, () => {
  console.log("Express Server Login Port:3000");
});
