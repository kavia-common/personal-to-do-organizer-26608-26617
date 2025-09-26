import React from 'react';
import { useToDos } from '../context/ToDoContext';
import ToDoItem from './ToDoItem';

/**
 * PUBLIC_INTERFACE
 * ToDoList renders the list of todos, filtered by the current selection.
 */
export default function ToDoList() {
  const { filteredToDos } = useToDos();

  if (!filteredToDos.length) {
    return (
      <ul className="list" aria-live="polite">
        <li className="item" style={{ justifyContent: 'center' }}>
          <span>Nothing here yet — add a task to get started.</span>
        </li>
      </ul>
    );
  }

  return (
    <ul className="list" aria-live="polite">
      {filteredToDos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
