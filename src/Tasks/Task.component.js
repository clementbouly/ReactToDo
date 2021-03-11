import React, { useState } from "react";
import { DeleteIcon, TaskList , EditIcon} from "../style";

function Task({ task, onDelete, onComplete, onTaskEdition }) {
  const [editedContent, setEditedContent] = useState(task.content);
  const [isEdited, setIsEdited] = useState(false);

  function handleChange(event) {
    setEditedContent(event.currentTarget.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onTaskEdition({...task, content: editedContent});
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
        <div>
          <form onSubmit={handleSubmit} className="edition">
            <input value={editedContent} onChange={handleChange} />
            <EditIcon
              className="fa fa-pencil float-right ml-3"
              type="submit">      
            </EditIcon>
          </form>
          
      </div>
      )}
      {!isEdited && (
        <div>
          <span onClick={() => onComplete(task)}>{task.content}</span>
          <DeleteIcon
            className="fa fa-times float-right ml-3"
            onClick={() => onDelete(task)}>
          </DeleteIcon>
      </div>
      )}
      
    </TaskList>
  );
}

export default Task;
