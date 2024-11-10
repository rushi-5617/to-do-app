import React from "react";

const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="Todo flex items-center space-x-2 bg-gray-200 p-2 rounded-full">
      <span
        className={`material-icons cursor-pointer ${task.completed ? "text-green-500 hover:text-green-600" : "text-gray-400 hover:text-gray-500"}`}
        onClick={() => toggleComplete(task.id)}
      >
        check_circle
      </span>

      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
        onClick={() => toggleComplete(task.id)}
        className="flex-1 cursor-pointer"
      >
        {task.task}
      </span>

      <span
        className="material-icons cursor-pointer text-blue-700 hover:text-blue-800"
        onClick={() => editTodo(task.id)}
      >
        edit
      </span>

      <span
        className="material-icons cursor-pointer text-red-600 hover:text-red-700"
        onClick={() => deleteTodo(task.id)}
      >
        delete
      </span>
    </div>
  );
};

export default Todo;