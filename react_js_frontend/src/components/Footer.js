import React from 'react';
import { useToDos } from '../context/ToDoContext';

/**
 * PUBLIC_INTERFACE
 * Footer hosts filter controls (All/Active/Completed) and the remaining items counter.
 */
export default function Footer() {
  const { filter, setFilter, remainingCount } = useToDos();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <div className="filters" role="group" aria-label="Filter Todos">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
            onClick={() => setFilter('active')}
          >
            Active
          </button>
          <button
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
        </div>
        <div className="counter" aria-live="polite">
          {remainingCount} item{remainingCount !== 1 ? 's' : ''} left
        </div>
      </div>
    </footer>
  );
}
