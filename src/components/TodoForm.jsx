import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex items-center space-x-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
        className="border border-gray-400 p-2 pl-3 rounded-full flex-1 pr-12 focus:border-gray-600 focus:outline-none"
      />
      <button 
        type="submit" 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 focus:outline-none"
        style={{ height: "40px", width: "40px" }}
      >
        <span className="material-icons text-3xl">add</span>
      </button>
    </form>
  );
};

export default TodoForm;