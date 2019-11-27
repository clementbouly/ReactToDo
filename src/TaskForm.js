import React, { useState } from "react";

function TaskForm({ onTaskAdd }) {
  const [newContent, setNewContent] = useState("");

  function handleChange(event) {
    setNewContent(event.currentTarget.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const id = new Date().getTime();
    const content = newContent;
    const completed = false;
    onTaskAdd({ id, content, completed });
    setNewContent("");
  }

  return (
    <form>
      <input
        value={newContent}
        onChange={handleChange}
        type="text"
        className="inputTask"
        placeholder="What to do ?"
      />
      <button
        onClick={handleSubmit}
        className="addTask btn btn-success ml-2 mb-1"
      >
        Confirm
      </button>
    </form>
  );
}

export default TaskForm;
