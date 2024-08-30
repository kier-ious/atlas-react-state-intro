import React from 'react';


export function SearchBar({ search, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search"
      value={search}
      // onChange will update the search state
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}
