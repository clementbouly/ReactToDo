import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Task from "./Tasks/Task.component";
import TaskForm from "./Tasks/TaskForm.component";
import FilterTask from "./Tasks/FilterTask.component";
import styled from "@emotion/styled";

const FilterBar = styled.div`
  background: rgb(42, 55, 83);  
  border-radius: 5px;
  width: 100%;
`;


const App = () => {
  const filterNames = ["all", "active", "completed", "empty"];
  const [predicate, setPredicate] = useState(() => () => true);
  const [tasks, setTasks] = useState([
    { id: 1, content: "coder en react avec le sourire", completed: false },
    { id: 2, content: "manger une pomme", completed: false },
    { id: 3, content: "manger une carotte", completed: false }
  ]);

  const handleDelete = ({id}) => {
    console.log("TEST 3");

    setTasks(tasks.filter(task => task.id !== id));
  };

  /* Ajoute une tache */
  function handleAdd(task) {
    setTasks([...tasks, task]);
  }

  function handleEdition({id, content}) {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, content }
          : task
      )
    );
  }

  /* Filtre les taches */
  const filterBy = param => {
    console.log("TEST");

    switch (param) {
      case "all":
        setPredicate(() => () => true);
        break;
      case "active":
        setPredicate(() => task => !task.completed);
        break;
      case "completed":
        setPredicate(() => task => task.completed);
        break;
      case "empty":
        setPredicate(() => task => task.content === "");
        break;
      default:
    }
  };

  const toggleCompletion = ({id}) => {
    console.log("TEST 3");
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <div className="App-body">
        <div className="App-title">
          <h1>
            To Do list :<span className="countTask">{tasks.length}</span>
          </h1>
        </div>
        <div className="content">
          <TaskForm onTaskAdd={handleAdd} />
          <FilterBar
            className="btn-group btn-group-toggle mt-1 p-2"
            data-toggle="buttons"
          >
            {filterNames.map((filterName) => (
              <FilterTask
                filterName={filterName}
                onFilter={filterBy}
                key={filterName}
              ></FilterTask>
            ))}
          </FilterBar>
          <div className="App-tasks mt-3">
            <ul className="list-group list-group-flush ">
              {tasks.filter(predicate).map(task => (
                <Task
                  key={task.id}
                  task={task}
                  onDelete={handleDelete}
                  onComplete={toggleCompletion}
                  onTaskEdition={handleEdition}
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
