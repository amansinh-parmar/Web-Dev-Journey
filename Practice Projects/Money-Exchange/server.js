// ============ IMPORT MODULES ============
const express = require("express");
const path = require("path");

const app = express();

// ============ GET FRONTEND FILE ============
app.use(express.static("public"));

// ============ GET REQUEST ============
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api/rate/:from/:to", async (req, res) => {
  const { from, to } = req.params;
  const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`;

  const response = await fetch(url);
  const data = await response.json();

  const rate = data[from][to];

  res.json({ rate });
});

// ============ SERVER PORT ============
app.listen(3000, () => {
  console.log("Server Login Port:3000");
});
