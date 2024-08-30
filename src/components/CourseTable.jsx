import React from 'react';
import PropTypes from 'prop-types';
import { useCourses } from '../context/CourseContext.jsx';

export function CourseTable({ data = [] }) {
  const { enrolledCourses, enrollCourse, dropCourse } = useCourses();

  const handleEnroll = (course) => {
    enrollCourse(course);
  };

  if (!Array.isArray(data)) {
    console.error("Expected 'data' to be an array but received", typeof data);
    return <p>Data is not available</p>;
  }

  return (
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          <td>{item.trimester}</td>
          <td>{item.courseNumber}</td>
          <td>{item.courseName}</td>
          <td>{item.semesterCredits}</td>
          <td>{item.totalClockHours}</td>
            <td>
              <button onClick={() => handleEnroll(item)}>Enroll</button>
            </td>
        </tr>
      ))}
    </tbody>
  );
}

CourseTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    trimester: PropTypes.string,
    courseNumber: PropTypes.string,
    courseName: PropTypes.string,
    semesterCredits: PropTypes.number,
    totalClockHours: PropTypes.number
  }))
};
