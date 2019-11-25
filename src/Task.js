import React from "react";

// class Task extends Component {
//   state = {
//     isValidated: false
//   };

//   toggleTask = () => {
//     this.setState({ isValidated: !this.state.isValidated });
//   };

//   render() {
//     const { task, onDelete } = this.props;

//     return (
//       <li
//         key={task.id}
//         onClick={this.toggleTask}
//         className={
//           this.state.isValidated
//             ? "task list-group-item my-1 validated"
//             : "task list-group-item my-1"
//         }
//       >
//         {task.content}
//         <i
//           className="deleteTask fa fa-times float-right ml-3"
//           onClick={() => onDelete(task.id)}
//         ></i>
//       </li>
//     );
//   }
// }

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
