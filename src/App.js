import React, { useState, useReducer } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Task from "./Tasks/Task.component";
import TaskForm from "./Tasks/TaskForm.component";
import FilterTask from "./Tasks/FilterTask.component";
import styled from "@emotion/styled";
import {initialTodo, todoReducer} from "./reducers/tasks.reducer";

const FilterBar = styled.div`
  background: rgb(42, 55, 83);  
  border-radius: 5px;
  width: 100%;
`;

const App = () => {
  const filterNames = ["all", "active", "completed", "empty"];
  const [predicate, setPredicate] = useState(() => () => true);
  const [todoItems, dispatchTodo] = useReducer(todoReducer, initialTodo);

  const handleDelete = (task) => {
    dispatchTodo({type: "REMOVE_TASK", payload: task})
  };

  /* Ajoute une tache */
  function handleAdd(task) {
    dispatchTodo({type: "ADD_TASK", payload: task})
  }

  /* Edite une tache */
  function handleEdition(task) {
    dispatchTodo({type: "EDIT_TASK", payload: task})
  }

  /* Complete une tache */
  const toggleCompletion = (task) => {
    dispatchTodo({type: "COMPLETE_TASK", payload: task})
  };

  /* Filtre les taches */
  const filterBy = param => {
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



  return (
    <div className="App">
      <div className="App-body">
        <div className="App-title">
          <h1>
            To Do list :<span className="countTask">{todoItems.length}</span>
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
              {todoItems.filter(predicate).map(task => (
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
