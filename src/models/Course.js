const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    unique: true,
    required: true
  },
  teacher: {
    type: String,  // link to User
   
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
