import React from "react";

const Task = ({ task, onDelete, onComplete }) => {
  return (
    <li
      key={task.id}
      className={`task list-group-item my-1 ${
        task.completed ? " completed" : ""
      }`}
    >
      <span onClick={() => onComplete(task.id)}>{task.content}</span>
      <i
        className="deleteTask fa fa-times float-right ml-3"
        onClick={() => onDelete(task.id)}
      ></i>
    </li>
  );
};

export default Task;
