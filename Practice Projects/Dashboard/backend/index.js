import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoutes from "./routes/auth.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database is Connected....");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

// Middleware to handle "CORS"
app.use(
  cors({
    origin: process.env.FRONT_END_URL || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// Middleware to handle JSON object in req body
app.use(express.json());

// APIs
app.get("/", (req, res) => {
  res.send("Hello Backend Developer.. :)");
});

app.get("/login", (req, res) => {
  res.send("This is your LOGIN PAGE:");
});

// Middleware for API
app.use("/api/auth", authRoutes);

// Middleware for Error Handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  const message = err.message || "Internal server error..!!";

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Server Connection
app.listen(3000, () => {
  console.log(`Server Port Connect: 3000`);
});
