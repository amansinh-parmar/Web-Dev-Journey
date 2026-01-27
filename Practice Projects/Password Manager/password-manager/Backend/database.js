// =================== IMPORT MODULES ===================
import express from "express";
import dotenv from "dotenv";
import { MongoClient, ObjectId } from "mongodb";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json()); // To parse JSON body
app.use(
  cors({
    origin: "http://localhost:5173", // Vite default frontend URL
  }),
);

// =================== DATABASE CONFIG ===================
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017";
const DB_NAME = "password-manager";

const client = new MongoClient(MONGO_URL);

async function connectDB() {
  await client.connect();
  console.log("MongoDB Connected");
}

await connectDB();

// =================== ROUTES ===================

// GET all passwords
app.get("/", async (req, res) => {
  try {
    const db = client.db(DB_NAME);
    const passwords = await db.collection("passwords").find({}).toArray();
    res.json(passwords);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch passwords" });
  }
});

// ADD new password
app.post("/add", async (req, res) => {
  try {
    const db = client.db(DB_NAME);
    const result = await db.collection("passwords").insertOne(req.body);
    res.json({ success: true, insertedId: result.insertedId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add password" });
  }
});

// DELETE password by ID
app.delete("/delete/:id", async (req, res) => {
  try {
    const db = client.db(DB_NAME);
    const result = await db
      .collection("passwords")
      .deleteOne({ _id: new ObjectId(req.params.id) });
    res.json({ success: true, deletedCount: result.deletedCount });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete password" });
  }
});

// UPDATE password by ID
app.put("/update/:id", async (req, res) => {
  try {
    const db = client.db(DB_NAME);
    const { site, username, password } = req.body;

    const result = await db
      .collection("passwords")
      .updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: { site, username, password } },
      );

    res.json({ success: true, modifiedCount: result.modifiedCount });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update password" });
  }
});

// =================== START SERVER ===================
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
