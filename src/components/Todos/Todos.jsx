import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { Form } from "../Form/Form";
import { TodoList } from "../TodoList/TodoList";

const LOCAL_STORAGE_KEY = "todos"; // 🔹 Ключ для localStorage

export const Todos = () => {
  // 🔹 Читаємо тудушки з localStorage при завантаженні сторінки
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem(LOCAL_STORAGE_KEY); // Отримуємо дані
    return savedTodos ? JSON.parse(savedTodos) : []; // Якщо є – парсимо, якщо немає – повертаємо []
  });

  // 🔹 Зберігаємо тудушки у localStorage при кожній зміні `todos`
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  // 🔹 Додаємо нову тудушку
  const addTodo = (text) => {
    const newTodo = { id: nanoid(), text }; // Створюємо { id, text }
    setTodos((prevTodos) => [...prevTodos, newTodo]); // Додаємо у state
  };

  // 🔹 Видаляємо тудушку
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <Form onSubmit={addTodo} /> {/* Передаємо addTodo у форму */}
      <TodoList todos={todos} onDelete={deleteTodo} /> {/* Передаємо список і deleteTodo */}
    </div>
  );
};

