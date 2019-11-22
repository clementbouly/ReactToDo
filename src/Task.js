import React, { Component } from "react";

class Task extends Component {
  state = {
    isValidated: false
  };

  toggleTask = () => {
    this.setState({ isValidated: !this.state.isValidated });
  };

  render() {
    const { task, onDelete } = this.props;

    return (
      <li
        key={task.id}
        onClick={this.toggleTask}
        className={
          this.state.isValidated
            ? "task list-group-item validated"
            : "task list-group-item"
        }
      >
        {task.content}
        <i
          className="deleteTask fa fa-times float-right ml-3"
          onClick={() => onDelete(task.id)}
        ></i>
      </li>
    );
  }
}

// const Task = ({ task, onDelete }) => (
//   <li key={task.id} className="list-group-item list-group-item-action my-1">
//     {task.content}{" "}
//     <button
//       onClick={() => onDelete(task.id)}
//       className="btn btn-secondary float-right ml-3"
//     >
//       X
//     </button>
//   </li>
// );

export default Task;
