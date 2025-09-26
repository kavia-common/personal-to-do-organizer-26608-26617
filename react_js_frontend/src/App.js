import React from 'react';
import './App.css';

/**
 * PUBLIC_INTERFACE
 * App is the root component.
 * This is the minimal template version before any to-do features were added.
 */
function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="container">
          <div className="brand">
            <span className="logo" aria-hidden>⚛️</span>
            <h1 className="title">React KAVIA Template</h1>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="hero-card">
          <h2 className="subtitle">Welcome</h2>
          <p className="description">
            This is a lightweight React starter with modern, minimal styling.
          </p>
          <a
            className="btn btn-large"
            href="https://react.dev"
            target="_blank"
            rel="noreferrer"
          >
            Learn React
          </a>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <span className="muted">Built with the KAVIA lightweight template</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
