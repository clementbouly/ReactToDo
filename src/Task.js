import React, { useState } from "react";

function Task({ task, onDelete, onComplete, onTaskEdition }) {
  const [editedContent, setEditedContent] = useState(task.content);
  const [isEdited, setIsEdited] = useState(false);

  function handleChange(event) {
    setEditedContent(event.currentTarget.value);
  }

  function handleSubmit(event) {
    console.log("toto");
    event.preventDefault();
    const content = editedContent;
    onTaskEdition({ id: task.id, content, completed: task.completed });
    setIsEdited(false);
  }
  return (
    <li
      key={task.id}
      onDoubleClick={() => setIsEdited(!isEdited)}
      className={`task list-group-item my-1 ${
        task.completed ? " completed" : ""
      }`}
    >
      {isEdited && (
        <form onSubmit={handleSubmit} className="edition">
          <input
            value={editedContent}
            onChange={handleChange}
          />
        </form>
      )}
      {!isEdited && (
        <span onClick={() => onComplete(task.id)}>{task.content}</span>
      )}

      <i
        className="deleteTask fa fa-times float-right ml-3"
        onClick={() => onDelete(task)}
      ></i>
    </li>
  );
}

export default Task;
