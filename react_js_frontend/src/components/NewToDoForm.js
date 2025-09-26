import React, { useState } from 'react';
import { useToDos } from '../context/ToDoContext';

/**
 * PUBLIC_INTERFACE
 * NewToDoForm provides a text field and button to add a new todo item.
 */
export default function NewToDoForm() {
  const { addToDo } = useToDos();
  const [title, setTitle] = useState('');

  const submit = (e) => {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;
    addToDo(trimmed);
    setTitle('');
  };

  return (
    <form className="form" onSubmit={submit} role="form" aria-label="Add new todo">
      <input
        className="input"
        placeholder="What do you need to do?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        aria-label="New todo title"
      />
      <button className="btn" type="submit" aria-label="Add todo">
        Add
      </button>
    </form>
  );
}
