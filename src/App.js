import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Task from "./Task";
import TaskForm from "./TaskForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state.compteur = this.state.tasks.length;
  }
  state = {
    tasks: [
      { id: 1, content: "coder en react avec le sourire" },
      { id: 2, content: "manger une pomme" },
      { id: 3, content: "manger une carotte" }
    ],
    compteur: 0
  };

  handleDelete = id => {
    const tasks = [...this.state.tasks];

    this.setState({
      tasks: tasks.filter(task => task.id !== id),
      compteur: this.state.compteur - 1
    });
  };

  handleAdd = task => {
    const tasks = [...this.state.tasks];
    tasks.push(task);

    this.setState({
      tasks,
      compteur: this.state.compteur + 1
    });
  };

  setToDoNumber() {
    this.setState({ compteur: this.state.tasks.length });
  }

  render() {
    return (
      <div className="App">
        <div className="App-body">
          <div className="App-title">
            <h1>
              To Do list :
              <span className="countTask">{this.state.compteur}</span>
            </h1>
          </div>
          <div className="content">
            <TaskForm onTaskAdd={this.handleAdd} />
            <div className="btn-group btn-group-toggle filterBar mt-1 p-2" data-toggle="buttons"> 
              <button className="btn btn-secondary mr-2 filterAll" onClick={()=>{console.log("Filter All")}}>All</button>
              <button className="btn btn-secondary mr-2 filterAll">Active</button>
              <button className="btn btn-secondary mr-2 filterAll">Completed</button>
            </div>
            <div className="App-tasks mt-3">
              <ul className="list-group list-group-flush ">
                {this.state.tasks.map(task => (
                  <Task
                    key={task.id}
                    task={task}
                    onDelete={this.handleDelete}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
