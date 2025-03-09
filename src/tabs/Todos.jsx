import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { Form } from "../components/Form/Form";
import TodoList from "../components/TodoList/TodoList";
import EditForm from "../components/EditForm/EditForm"; // ✅ Додано імпорт

const LOCAL_STORAGE_KEY = "todos";

const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  // ✅ Функція для редагування
  const handleEditTodo = (todo) => {
    setIsEditing(true);
    setCurrentTodo(todo);
  };

  // ✅ Функція для оновлення тудушки
  const updateTodo = (text) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === currentTodo.id ? { ...todo, text } : todo
      )
    );
    setIsEditing(false);
    setCurrentTodo({});
  };

  // ✅ Функція для скасування редагування
  const cancelUpdate = () => {
    setIsEditing(false);
    setCurrentTodo({});
  };

  const addTodo = (text) => {
    const newTodo = { id: nanoid(), text };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>

      {isEditing ? (
        <EditForm
          updateTodo={updateTodo}
          cancelUpdate={cancelUpdate}
          defaultValue={currentTodo.text}
        />
      ) : (
        <>
          <Form onSubmit={addTodo} />
          <TodoList todos={todos} onDelete={deleteTodo} onEdit={handleEditTodo} />
        </>
      )}
    </div>
  );
};

export default Todos;
