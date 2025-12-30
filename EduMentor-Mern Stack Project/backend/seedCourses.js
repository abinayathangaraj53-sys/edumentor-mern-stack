const mongoose = require("mongoose");
const Course = require("./models/Course");
const { courseContents } = require("./courseContents"); // copy file

mongoose.connect("mongodb://127.0.0.1:27017/edumentor");

async function seed() {
  await Course.deleteMany({});
  await Course.insertMany(Object.values(courseContents));
  console.log("Courses seeded");
  process.exit();
}

seed();
