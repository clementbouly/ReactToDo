import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Task from "./Task";
import TaskForm from "./TaskForm";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, content: "coder en react avec le sourire", completed: false },
    { id: 2, content: "manger une pomme", completed: false },
    { id: 3, content: "manger une carotte", completed: false }
  ]);
  const [taskCount, setTaskCount] = useState(3);

  const handleDelete = id => {
    const updatedTasks = [...tasks];
    console.log(tasks);

    setTasks(updatedTasks.filter(task => task.id !== id));
    setTaskCount(taskCount-1)
  };

  const handleAdd = task => {
    const updatedTasks = [...tasks];
    updatedTasks.push(task);

    setTasks(updatedTasks);
    setTaskCount(taskCount+1)
  };

  const filterBy = param => {
    const tasks = [...tasks];

    switch (param) {
      case "all":
        //do something
        break;
      case "active":
        //do something
        break;
      default:
    }
  };

  const completeTask = id => {
    const updatedTasks = [...tasks];
    const index = updatedTasks.findIndex(task => task.id === id);
    updatedTasks[index].completed = !updatedTasks[index].completed;

    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <div className="App-body">
        <div className="App-title">
          <h1>
            To Do list :<span className="countTask">{taskCount}</span>
          </h1>
        </div>
        <div className="content">
          <TaskForm onTaskAdd={handleAdd} />
          <div
            className="btn-group btn-group-toggle filterBar mt-1 p-2"
            data-toggle="buttons"
          >
            <button
              className="btn btn-secondary mr-2 filterAll"
              onClick={() => filterBy("all")}
            >
              All
            </button>
            <button
              className="btn btn-secondary mr-2 filterAll"
              onClick={() => filterBy("active")}
            >
              Active
            </button>
            <button className="btn btn-secondary mr-2 filterAll">
              Completed
            </button>
          </div>
          <div className="App-tasks mt-3">
            <ul className="list-group list-group-flush ">
              {tasks.map(task => (
                <Task
                  key={task.id}
                  task={task}
                  onDelete={handleDelete}
                  onComplete={completeTask}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
