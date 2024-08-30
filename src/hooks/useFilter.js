import { useState } from 'react';


export function useFilter(data = []) {
  const [search, setSearch] = useState('');

  // Filter courses by user input
  const filteredData = data.filter(course => {
    // Convert all searches to lowercase for comparison
    const searchTerm = search.toLowerCase().trim();
    // Check if course # and course name contains searched user input
    return course.courseNumber.toLowerCase().includes(searchTerm) ||
          course.courseName.toLowerCase().includes(searchTerm);
  });

  return { filteredData, search, setSearch };
};
