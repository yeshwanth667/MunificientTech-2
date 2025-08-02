const express = require('express');
const router = express.Router();
const Enrollment = require('../models/Enrollment');
const Course = require('../models/Course');

// GET /api/enrollments/me - Get enrollments of dummy student
router.get('/me', async (req, res) => {
  console.log("GET /api/enrollments/me");

  try {
    const enrollments = await Enrollment.find({ studentId: 'dummyStudent123' }).populate('courseId');
    console.log(`Found ${enrollments.length} enrollments`);
    res.json(enrollments);
  } catch (error) {
    console.error("Error fetching enrollments:", error.message);
    res.status(500).json({ error: 'Failed to fetch enrollments' });
  }
});


// POST /api/enrollments
router.post('/', async (req, res) => {
  try {
    const { courseId } = req.body;

    // Validate course exists
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(400).json({ error: 'Course not found' });
    }

    // Prevent duplicate enrollment
    const existing = await Enrollment.findOne({ courseId, studentId: 'dummyStudent123' });
    if (existing) {
      return res.status(409).json({ error: 'Already enrolled' });
    }

    const enrollment = new Enrollment({
      courseId,
      courseTitle: course.title, // Add title here
      studentId: 'dummyStudent123'
    });

    await enrollment.save();
    res.status(201).json({ message: 'Enrolled successfully' });
  } catch (error) {
    console.error('Enrollment error:', error.message);
    res.status(500).json({ error: 'Failed to enroll' });
  }
});



module.exports = router;
