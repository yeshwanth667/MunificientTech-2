// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CourseList from './components/CourseList';
import MyEnrollments from './components/MyEnrollments';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/my-enrollments" element={<MyEnrollments />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
