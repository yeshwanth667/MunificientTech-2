// src/services/api.js
import axios from 'axios';

const API_BASE = 'https://munificienttech-2-api.onrender.com/api';

export const getCourses = () => axios.get(`${API_BASE}/courses`);
export const fetchEnrollments = () => axios.get(`${API_BASE}/enrollments/me`);
export const enrollCourse = (courseId) =>
  axios.post(`${API_BASE}/enrollments`, { courseId });

export const addCourse = (courseData) =>
  axios.post(`${API_BASE}/courses`, courseData);
