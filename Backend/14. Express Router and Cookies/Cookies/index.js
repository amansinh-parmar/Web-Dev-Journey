const express = require("express");
const app = express();

app.get("/greet", (req, res) => {
  res.send("HEYY, THERE..!!");
});

app.listen(3000, () => {
  console.log("Express Server Login Port:3000");
});
