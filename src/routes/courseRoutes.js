const express = require("express");
const Course = require("../models/Course");
const Courserouter = express.Router();

// ➕ Add course
Courserouter.post("/", async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 📄 Get all courses
Courserouter.get("/", async (req, res) => {
  const courses = await Course.find();
 
  res.json(courses);
});

module.exports = Courserouter;
