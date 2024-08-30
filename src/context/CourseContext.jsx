import { createContext, useState, useContext } from "react";


const CourseContext = createContext();

// Create component to provide context
export function CourseProvider({ children }) {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enrollCourse = (course) => {
    setEnrolledCourses((prev) => [...prev, course]);
  };

  const dropCourse = (courseNumber) => {
    setEnrolledCourses((prev) => prev.filter(course => course.courseNumber !== courseNumber));
  };

  return (
    <CourseContext.Provider value={{ enrolledCourses, enrollCourse, dropCourse }}>
      {children}
    </CourseContext.Provider>
  );
}

// Custom hook to use CourseContext
export function useCourses() {
  return useContext(CourseContext);
}
