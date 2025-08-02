const express = require('express');
const Course = require('../models/Course');
const router = express.Router();

// GET /api/courses - Fetch all courses
router.get('/', async (req, res) => {
  console.log("GET /api/courses - Fetching all courses");
  try {
    const courses = await Course.find();
    console.log(`Found ${courses.length} courses`);
    res.json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error.message);
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

// POST /api/courses - Create a new course (for inserting dummy data)
router.post('/', async (req, res) => {
  const { title, description, instructor, duration } = req.body;

  try {
    const existingCourse = await Course.findOne({ title });
    if (existingCourse) {
      return res.status(400).json({ error: 'Course with this title already exists' });
    }

    const newCourse = new Course({ title, description, instructor, duration });
    const savedCourse = await newCourse.save();

    res.status(201).json(savedCourse);
  } catch (error) {
    console.error("Error creating course:", error.message);
    res.status(500).json({ error: 'Failed to create course' });
  }
});

module.exports = router;
