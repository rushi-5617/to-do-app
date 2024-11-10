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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditTodoForm;
