// src/components/CourseCard.jsx
import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">{course.description}</p>
        <p><strong>Instructor:</strong> {course.instructor}</p>
        <p><strong>Duration:</strong> {course.duration}</p>
      </div>
    </div>
  );
};

export default CourseCard;
