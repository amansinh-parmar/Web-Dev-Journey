// ================== Import Modules ==================
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Task = require("./task");
const methodOverride = require("method-override");

// ================== Connect Mongoose ==================
mongoose
  .connect("mongodb://127.0.0.1:27017/BuketList")
  .then(() => {
    console.log("Mongoose Connection Open");
  })
  .catch((err) => {
    console.log("Mongoose Error..!!");
    console.log(err);
  });
// ================== Middleware ==================
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const categories = ["Habits", "Strength", "Exercise", "Travel Place"];

// ================== Home Page ==================
app.get("/", (req, res) => {
  res.render("home");
});

// ================== View Bucket List ==================
app.get("/task", async (req, res) => {
  const { category } = req.query;
  let tasks;
  try {
    if (category) {
      const tasks = await Task.find({ category });
      res.render("index", { category, tasks });
    } else {
      const tasks = await Task.find({});
      res.render("index", { tasks, category: "All" });
    }
  } catch (err) {
    console.error("Error fetching tasks:", err.message);
    res.status(500).send("Error loading task....");
  }
});

// ================== Add New Task Form ==================
app.get("/task/new", (req, res) => {
  res.render("new", { categories });
});

// ================== Create Task ==================
app.post("/task", async (req, res) => {
   console.log("Incoming form data:", req.body);  // DEBUG LOG

  try {
    const newTask = new Task(req.body);
    await newTask.save(); // This is where the validation fails
    res.redirect(`/task/${newTask._id}`);
  } catch (err) {
    console.error("MongoDB Error:", err);
    res.status(400).send("Task creation failed: " + err.message);
  }

});

// ================== View Task Details ==================
app.get("/task/:id", async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  console.log(task);
  res.render("show", { task });
});

// ================== Edit Task Details ==================
app.get("/task/:id/edit", async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  res.render("edit", { task, categories });
});

app.put("/task/:id", async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndUpdate(id, req.body);
  res.redirect(`/task/${id}`);
});

// ================== Update Task ==================
app.put("/task/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Task.findByIdAndUpdate(id, req.body, { runValidators: true });
    res.redirect(`/task/${id}`);
  } catch (err) {
    console.error("Error updating task:", err.message);
    res.status(400).send("Failed to update task.");
  }
});

// ================== Delete Task ==================
app.delete("/task/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Task.findByIdAndDelete(id);
    res.redirect("/task");
  } catch (err) {
    console.error("Error deleting task:", err.message);
    res.status(500).send("Failed to delete task.");
  }
});
// ================== Delete Item ==================

// ================== Error Check ==================
// app.use((req, res, err, next) => {
//   const { status = 500, message = "Something went wrong" } = err;
//   res.status(status).send(message);
//   next();
// });

// ================== Listen Port ==================
app.listen(8080, () => {
  console.log("Express Listening Port:8080");
});
