const express = require("express");
const Feedback = require("../models/Feedback");
const User = require("../models/user");   // add this

const Feedbackrouter = express.Router();

// ➕ Add feedback
Feedbackrouter.post("/", async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json(feedback);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 📄 Get all feedback (with student & course info)
Feedbackrouter.get("/", async (req, res) => {
  const feedbacks = await Feedback.find()
    .populate("student", "firstName lastName email")
    .populate("course", "name code");
  res.json(feedbacks);
});

module.exports = Feedbackrouter;
