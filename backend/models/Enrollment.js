const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
    courseId: {
        type: String,
        ref: 'Course',
        required: true
    },
    studentId: {
        type: String,
        required: true
    },
    enrollmentDate: {
        type: Date,
        default: Date.now
    },
    courseTitle: {  // new field
        type: String,
        required: true
    },
});

enrollmentSchema.index({ studentId: 1, courseId: 1 }, { unique: true });
module.exports = mongoose.model('Enrollment', enrollmentSchema);
