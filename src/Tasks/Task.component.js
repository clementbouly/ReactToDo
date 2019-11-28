import React, { useState } from "react";
import { DeleteIcon, TaskList } from "../style";

function Task({ task, onDelete, onComplete, onTaskEdition }) {
  const [editedContent, setEditedContent] = useState(task.content);
  const [isEdited, setIsEdited] = useState(false);

  function handleChange(event) {
    setEditedContent(event.currentTarget.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const content = editedContent;
    onTaskEdition({ id: task.id, content, completed: task.completed });
    setIsEdited(false);
  }
  return (
    <TaskList
      completed={task.completed}
      key={task.id}
      onDoubleClick={() => setIsEdited(!isEdited)}
      className="list-group-item my-1"
    >
      {isEdited && (
        <form onSubmit={handleSubmit} className="edition">
          <input value={editedContent} onChange={handleChange} />
        </form>
      )}
      {!isEdited && (
        <span onClick={() => onComplete(task)}>{task.content}</span>
      )}
      <DeleteIcon
        className="fa fa-times float-right ml-3"
        onClick={() => onDelete(task)}
      ></DeleteIcon>
    </TaskList>
  );
}

export default Task;
