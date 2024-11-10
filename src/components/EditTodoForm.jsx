import React, { useState } from "react";

const EditTodoForm = ({ task, updateTodo }) => {
  const [input, setInput] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      updateTodo(task.id, input);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border border-gray-400 p-1 pl-3 rounded-full flex-1 focus:border-gray-600 focus:outline-none"
        placeholder="Edit your task"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white p-1 px-2 rounded-full hover:bg-blue-600 focus:outline-none"
      >
        Update
      </button>
    </form>
  );
};

export default EditTodoForm;