import React from 'react';


export function PaginationControls({ onPrev, onNext, hasPrev, hasNext }) {
  return (
    <div className="pagination">
    <button onClick={onPrev} disabled={!hasPrev}>Previous</button>
    <button onClick={onNext} disabled={!hasNext}>Next</button>
  </div>
  );
}
