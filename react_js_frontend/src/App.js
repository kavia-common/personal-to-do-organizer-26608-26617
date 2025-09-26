import React from 'react';
import './index.css';
import './App.css';
import { ToDoProvider } from './context/ToDoContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ToDoList from './components/ToDoList';
import NewToDoForm from './components/NewToDoForm';

/**
 * PUBLIC_INTERFACE
 * App is the root component that composes the Todo UI:
 * - Header: application title and theme toggle
 * - NewToDoForm: add new todo items
 * - ToDoList: list with edit/complete/delete capabilities
 * - Footer: filter controls (all/active/completed) and item count
 */
function App() {
  return (
    <ToDoProvider>
      <div className="app-root">
        <div className="gradient-bg" />
        <Header />
        <main className="main">
          <section className="card">
            <NewToDoForm />
            <ToDoList />
          </section>
        </main>
        <Footer />
      </div>
    </ToDoProvider>
  );
}

export default App;
