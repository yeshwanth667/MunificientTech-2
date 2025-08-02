// src/components/CourseList.jsx
import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import AddCourseModal from './AddCourseModal';
import { getCourses } from '../services/api';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [showModal, setShowModal] = useState(false); // modal state

  const fetchCourses = async () => {
    const response = await getCourses();
    const courseList = response.data;
    setCourses(courseList);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Courses</h2>
        <button className="btn btn-success" onClick={() => setShowModal(true)}>
          Add Course
        </button>
      </div>

      <div className="row">
        {courses.map((course) => (
          <div key={course._id} className="col-md-4 mb-3">
            <CourseCard course={course} />
          </div>
        ))}
      </div>

      {/* Modal controlled by state */}
      {showModal && (
        <AddCourseModal
          onClose={() => setShowModal(false)}
          onCourseAdded={() => {
            fetchCourses();
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
};

export default CourseList;
