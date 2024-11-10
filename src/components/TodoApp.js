import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";

const TodoApp = () => {
  // Load saved todos from localStorage or set it to an empty array
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add new todo
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: Math.random(), task: todo, completed: false, isEditing: false },
    ]);
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle completion of a todo
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Edit todo
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  // Update todo
  const updateTodo = (id, task) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: false } : todo
      )
    );
  };

  return (
    <div className="TodoApp">
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm key={todo.id} task={todo} updateTodo={updateTodo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};

export default TodoApp;
