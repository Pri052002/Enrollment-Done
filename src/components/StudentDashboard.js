import React from 'react';
import CourseList from './CourseList';

const StudentDashboard = () => {
    // Fetch studentId from localStorage
    const studentId = localStorage.getItem('studentId');

    if (!studentId) {
        return <p>Please log in to view your dashboard.</p>;
    }

    return (
        <div className="App">
            <h1>Student Dashboard</h1>
            <CourseList studentId={studentId} />
        </div>
    );
};

export default StudentDashboard;
