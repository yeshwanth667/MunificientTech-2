// models/Course.js
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true,unique:true },
  description: { type: String },
  instructor: { type: String },
  duration: { type: String }
}, { timestamps: true }); // this adds createdAt and updatedAt automatically

module.exports = mongoose.model('Course', courseSchema);
