import { useState } from 'react';


export function usePagination(data, itemsPerPage) {
  const [page, setPage] = useState(1);

  const paginatedData = data.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  const hasMore = data.length > page * itemsPerPage;
  const hasLess = page > 1;

  const handleNextPage = () => setPage(prev => prev + 1);
  const handlePrevPage = () => setPage(prev => - 1);

  return { paginatedData,
          handleNextPage,
          handlePrevPage,
          hasMore,
          hasLess,
          page
        };
}
