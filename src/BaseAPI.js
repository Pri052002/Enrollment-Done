import axios from 'axios';

const API_BASE_URL = 'http://localhost:5033/api/Student';

export const fetchCourses = () => {
    return axios.get(`${API_BASE_URL}/courses`);
};

export const enrollInCourse = (studentId, courseId) => {
    return axios.post(`${API_BASE_URL}/enroll?studentId=${studentId}&courseId=${courseId}`);
};

export const payForCourse = (enrollmentId) => {
    return axios.post(`${API_BASE_URL}/pay`, null, { params: { enrollmentId } });
};


