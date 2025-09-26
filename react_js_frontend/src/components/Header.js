import React from 'react';
import { useTheme } from '../context/ToDoContext';

/**
 * PUBLIC_INTERFACE
 * Header displays the app title and provides a theme toggle button.
 */
export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header" role="banner" aria-label="Application Header">
      <div className="brand" aria-label="Brand">
        <div className="brand-badge" aria-hidden>
          <span role="img" aria-label="wave">🌊</span>
        </div>
        <div className="brand-title">Ocean Tasks</div>
      </div>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        title="Toggle theme"
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </header>
  );
}
