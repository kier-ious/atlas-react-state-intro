import { useState, useEffect } from 'react';


// Custom hook for fetching data from API
function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, loading, error };
}

function SchoolCatalog() {
  const { data: courses, loading, error } = useFetch('/api/courses.json');
  const [search, setSearch] = useState('');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading courses: {error.message}</div>;

  // Filter courses by user input
  const filteredCourses = courses.filter(course => {
    // Convert all searches to lowercase for comparison
    const searchTerm = search.toLowerCase().trim();
    const courseNumber = course.courseNumber.toLowerCase();
    const courseName = course.courseName.toLowerCase();

    console.log('Searching for:', searchTerm) ||
    console.log('Course:', courseNumber, courseName);

    // Check if course # and course name contains searched user input
    return (
      course.courseNumber.toLowerCase().includes(searchTerm) ||
      course.courseName.toLowerCase().includes(searchTerm)
    );
  });

  console.log('Filtered courses:', filteredCourses);

  return (
    <div className="school-catalog">
      <h1>School Catalog</h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        // onChange will update the search state
        onChange={(e) => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Trimester</th>
            <th>Course Number</th>
            <th>Courses Name</th>
            <th>Semester Credits</th>
            <th>Total Clock Hours</th>
            <th>Enroll</th>
          </tr>
        </thead>
        <tbody>
          {filteredCourses.length === 0 ? (
            <tr>
              <td colSpan="6">No Course Available</td>
            </tr>
          ) : (
            filteredCourses.map((course, index) => (
              <tr key={index}>
                <td>{course.trimester}</td>
                <td>{course.courseNumber}</td>
                <td>{course.courseName}</td>
                <td>{course.semesterCredits}</td>
                <td>{course.totalClockHours}</td>
                  <td>
                    <button>Enroll</button>
                  </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="pagination">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default SchoolCatalog;
