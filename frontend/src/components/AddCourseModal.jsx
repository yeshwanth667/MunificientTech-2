// src/components/AddCourseModal.jsx
import React, { useState } from 'react';
import { addCourse } from '../services/api';

const AddCourseModal = ({ onClose, onCourseAdded }) => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    instructor: '',
    duration: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addCourse(form);
    onCourseAdded();
  };

  return (
    <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">Add Course</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <input className="form-control mb-2" placeholder="Title" name="title" value={form.title} onChange={handleChange} />
              <input className="form-control mb-2" placeholder="Description" name="description" value={form.description} onChange={handleChange} />
              <input className="form-control mb-2" placeholder="Instructor" name="instructor" value={form.instructor} onChange={handleChange} />
              <input className="form-control mb-2" placeholder="Duration" name="duration" value={form.duration} onChange={handleChange} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
              <button type="submit" className="btn btn-primary">Add Course</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCourseModal;
