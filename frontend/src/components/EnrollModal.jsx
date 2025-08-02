import React, { useEffect, useState } from 'react';
import { enrollCourse, getCourses } from '../services/api';
import { toast } from 'react-toastify';

const EnrollModal = ({ onEnrolled, onClose }) => {
  const [courses, setCourses] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await getCourses();
        setCourses(res.data);
      } catch (error) {
        toast.error('Failed to fetch courses');
        setMessage('Failed to fetch courses');
      }
    };
    fetchCourses();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedCourseId) {
      setMessage('Please select a course to enroll');
      toast.warn('Please select a course to enroll');
      return;
    }

    try {
      await enrollCourse(selectedCourseId);
      toast.success('Enrolled successfully');
      setMessage('');
      onEnrolled(); // callback to parent
    } catch (error) {
      setMessage(error.response?.data?.error || 'Enrollment failed');
    }
  };

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ background: '#00000080' }}>
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">Enroll in a Course</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              {message && <div className="alert alert-warning">{message}</div>}

              <div className="mb-3">
                <label htmlFor="courseSelect" className="form-label">Select Course</label>
                <select
                  className="form-select"
                  id="courseSelect"
                  value={selectedCourseId}
                  onChange={(e) => setSelectedCourseId(e.target.value)}
                >
                  <option value="">-- Choose a course --</option>
                  {courses.map((course) => (
                    <option key={course._id} value={course._id}>
                      {course.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Enroll
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default EnrollModal;
