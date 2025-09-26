const STORAGE_KEY = 'ocean_tasks_v1';

// Simulated delay utility
const sleep = (ms = 200) => new Promise((res) => setTimeout(res, ms));

function readStore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeStore(todos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

/**
 * PUBLIC_INTERFACE
 * api is a mock service simulating REST endpoints for todos.
 * Replace the internals with real fetch/axios calls when backend is ready.
 */
export const api = {
  /**
   * Fetch all todos.
   */
  async fetchTodos() {
    await sleep();
    return readStore();
  },

  /**
   * Create a new todo item.
   * @param {{title: string}} payload
   */
  async createTodo(payload) {
    await sleep();
    const todos = readStore();
    const now = Date.now();
    const newTodo = {
      id: `t_${now}_${Math.random().toString(36).slice(2, 8)}`,
      title: payload.title,
      completed: false,
      createdAt: now,
      updatedAt: now,
    };
    const next = [newTodo, ...todos];
    writeStore(next);
    return newTodo;
  },

  /**
   * Update an existing todo by id.
   * @param {string} id
   * @param {Partial<{title: string, completed: boolean}>} patch
   */
  async updateTodo(id, patch) {
    await sleep();
    const todos = readStore();
    const next = todos.map((t) =>
      t.id === id ? { ...t, ...patch, updatedAt: Date.now() } : t
    );
    writeStore(next);
    return next.find((t) => t.id === id);
  },

  /**
   * Delete a todo by id.
   * @param {string} id
   */
  async deleteTodo(id) {
    await sleep();
    const todos = readStore();
    const next = todos.filter((t) => t.id !== id);
    writeStore(next);
    return { success: true };
  },
};
