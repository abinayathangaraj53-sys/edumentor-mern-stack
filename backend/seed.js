const mongoose = require("mongoose");
const Course = require("./models/Course");
const courses = require("./data/courseData");

mongoose.connect("mongodb://127.0.0.1:27017/edumentor")
  .then(async () => {
    await Course.deleteMany({});
    await Course.insertMany(courses);
    console.log("✅ Courses inserted");
    process.exit();
  })
  .catch(err => console.error(err));
