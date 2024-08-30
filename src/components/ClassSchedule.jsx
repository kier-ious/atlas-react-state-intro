import React from 'react';
import { useCourses } from '../context/CourseContext.jsx';


export default function ClassSchedule() {
  const { enrolledCourses, dropCourse } = useCourses();

  const handleDrop = (courseNumber) => {
    dropCourse(courseNumber);
  };


  return (
    <div className="class-schedule">
      <h1>Class Schedule</h1>
      <table>
        <thead>
          <tr>
            <th>Course Number</th>
            <th>Course Name</th>
            <th>Drop</th>
          </tr>
        </thead>
        <tbody>
          {enrolledCourses.length === 0 ? (
            <tr>
              <td colSpan="3">No Courses Enrolled</td>
            </tr>
          ) : (
            enrolledCourses.map((course, index) => (
              <tr key={course.courseNumber}>
                <td>{course.courseNumber}</td>
                <td>{course.courseNumber}</td>
                <td>
                  <button onClick={() => dropCourse(course.courseNumber)}>Drop</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
