import { useState, useMemo } from 'react';


export function useSort(data) {
  const [sortConfig, setSortConfig] = useState({ key: 'courseNumber', direction: 'asc'});

  // Sort filtered courses based on sortConfig
  const sortedData = useMemo(() => {
    if (!data) return [];
    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
    });
  }, [data, sortConfig]);

  // Handle sort changes
  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  return { sortedData, handleSort, sortConfig };
}
