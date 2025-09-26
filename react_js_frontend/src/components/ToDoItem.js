import React, { useState } from 'react';
import { useToDos } from '../context/ToDoContext';

/**
 * PUBLIC_INTERFACE
 * ToDoItem displays a single todo with complete, edit, and delete controls.
 */
export default function ToDoItem({ todo }) {
  const { updateToDo, deleteToDo, toggleComplete } = useToDos();
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(todo.title);

  const save = () => {
    const title = draft.trim();
    if (title && title !== todo.title) {
      updateToDo(todo.id, { title });
    }
    setIsEditing(false);
  };

  const cancel = () => {
    setDraft(todo.title);
    setIsEditing(false);
  };

  return (
    <li className="item" role="listitem">
      <input
        type="checkbox"
        className="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
        aria-label={`Mark "${todo.title}" as ${todo.completed ? 'incomplete' : 'complete'}`}
      />
      <div className={`title ${todo.completed ? 'completed' : ''}`}>
        {isEditing ? (
          <input
            className="edit-input"
            autoFocus
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') save();
              if (e.key === 'Escape') cancel();
            }}
            onBlur={save}
            aria-label="Edit todo title"
          />
        ) : (
          <span>{todo.title}</span>
        )}
      </div>
      <div className="actions">
        {!isEditing ? (
          <button
            className="icon-btn"
            onClick={() => setIsEditing(true)}
            aria-label={`Edit ${todo.title}`}
            title="Edit"
          >
            ✏️
          </button>
        ) : (
          <button
            className="icon-btn"
            onClick={save}
            aria-label="Save changes"
            title="Save"
          >
            💾
          </button>
        )}
        <button
          className="icon-btn warn"
          onClick={() => deleteToDo(todo.id)}
          aria-label={`Delete ${todo.title}`}
          title="Delete"
        >
          🗑️
        </button>
      </div>
    </li>
  );
}
