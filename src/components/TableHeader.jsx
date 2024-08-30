import React from 'react';


export function TableHeader({ onSort, sortConfig }) {
  const { key, direction } = sortConfig;

  const renderSortIcon = (columnKey) => {
    if (key === columnKey) {
      return direction === 'asc' ? '▲' : ('▼');
    }
    return null;
  };

  return (
    <thead>
      <tr>
        <th onClick={() => onSort('trimester')}>
          Trimester {renderSortIcon('trimester')}
        </th>
        <th onClick={() => onSort('courseNumber')}>
          Course Number {renderSortIcon('courseNumber')}
        </th>
        <th onClick={() => onSort('courseName')}>
          Course Name {renderSortIcon('courseName')}
        </th>
        <th onClick={() => onSort('semesterCredits')}>
          Semester Credits {renderSortIcon('semesterCredits')}
        </th>
        <th onClick={() => onSort('totalClockHours')}>
          Total Clock Hours {renderSortIcon('totalClockHours')}
        </th>
        <th><button>Enroll</button></th>
      </tr>
    </thead>
  );
}
