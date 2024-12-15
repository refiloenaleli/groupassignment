import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await axios.get('http://localhost:5000/architecture/courses');
      setCourses(response.data.courses);
    };
    fetchCourses();
  }, []);

  return (
    <div>
      <h1>Architecture Courses</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;
