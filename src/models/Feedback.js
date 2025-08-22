const mongoose = require("mongoose");
const feedbackSchema = new mongoose.Schema({
  student: {
    type:String,
    ref: "User",
    required: true
  },
  course: {
    type: String,
    ref: "Course",
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  comments: {
    type: String,
    maxlength: 500
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Feedback = mongoose.model("Feedback", feedbackSchema);
module.exports = Feedback;
