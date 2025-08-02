import React, { useEffect, useState } from 'react';
import { getCourses, enrollCourse } from '../services/api';

const MyEnrollments = () => {
  const [courses, setCourses] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [message, setMessage] = useState('');

  const fetchAllData = async () => {
    try {
      const [enrollRes, courseRes] = await Promise.all([
        fetch('http://localhost:5000/api/enrollments/me'),
        getCourses(),
      ]);

      const enrolledData = await enrollRes.json();

      if (!enrollRes.ok) {
        setMessage(enrolledData.error || 'Failed to load enrollments');
        return;
      }

      setEnrollments(enrolledData);
      setCourses(courseRes.data);
      setMessage('');
    } catch (err) {
      setMessage('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const isEnrolled = (courseId) =>
    enrollments.some((enroll) => enroll.courseId?._id === courseId);

  const handleEnroll = async (courseId) => {
    try {
      await enrollCourse(courseId);
      await fetchAllData();
      toast.success('Successfully enrolled');
    } catch (error) {
      setMessage(error.response?.data?.error || 'Enrollment failed');
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Available Courses</h3>

      {/* {message && <div className="alert alert-warning">{message}</div>} */}
      {loading ? (
        <div>Loading...</div>
      ) : courses.length === 0 ? (
        <p>No courses available.</p>
      ) : (
        <div className="row">
          {courses.map((course) => (
            <div className="col-md-4 mb-3" key={course._id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">
                    Instructor: <strong>{course.instructor}</strong>
                  </p>
                  {isEnrolled(course._id) ? (
                    <button className="btn btn-success" disabled>
                      Enrolled
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEnroll(course._id)}
                    >
                      Enroll
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyEnrollments;
