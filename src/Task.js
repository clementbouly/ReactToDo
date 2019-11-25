import React, { useState } from "react";

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

const Task = ({ task, onDelete }) => {
  const [isValidated, setValidation] = useState(false);

  const toggleTask = () => {
    setValidation(!isValidated);
  };

  return (
    <li
      key={task.id}
      onClick={toggleTask}
      className={`task list-group-item my-1 ${isValidated ? " validated" : ""}`}
    >
      {task.content}
      <i
        className="deleteTask fa fa-times float-right ml-3"
        onClick={() => onDelete(task.id)}
      ></i>
    </li>
  );
};

export default Task;
