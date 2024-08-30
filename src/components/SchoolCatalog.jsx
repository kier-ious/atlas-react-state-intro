import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { useFilter } from '../hooks/useFilter';
import { useSort } from '../hooks/useSort';
import { usePagination } from '../hooks/usePagination';
import { SearchBar } from './SearchBar';
import { TableHeader } from './TableHeader';
import { PaginationControls } from './PaginationControls';
import { CourseTable } from './CourseTable';


export default function SchoolCatalog() {
  const { data: courses, loading, error } = useFetch('/api/courses.json');
  const { filteredData, search, setSearch } = useFilter(courses);
  const { sortedData, handleSort, sortConfig } = useSort(filteredData);
  const { paginatedData,
          handleNextPage,
          handlePrevPage,
          hasMore,
          hasLess,
          page } = usePagination(sortedData, 5);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading courses: {error.message}</div>;

  return (
    <div className="school-catalog">
      <h1>School Catalog</h1>
      <SearchBar search={search} onSearchChange={setSearch}/>
      <table>
        <TableHeader onSort={handleSort} sortConfig={sortConfig}/>
        <CourseTable data={paginatedData} />
      </table>
      <PaginationControls
        onPrev={handlePrevPage}
        onNext={handleNextPage}
        hasPrev={hasLess}
        hasNext={hasMore}
      />
    </div>
  );
}
