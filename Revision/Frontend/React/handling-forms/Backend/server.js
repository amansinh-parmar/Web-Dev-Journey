import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("HELLO, ReactJS Developer");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Your Form submitted from Backend Server");
  //   console.log(req.form);
});

app.listen(3000, () => {
  console.log(`Server login on PORT: 3000`);
});
