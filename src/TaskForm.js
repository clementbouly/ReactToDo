import React, { Component } from "react";

class TaskForm extends Component {
  state = {
    newContent: ""
  };

  handleChange = event => {
    this.setState({ newContent: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const id = new Date().getTime();
    const content = this.state.newContent;
    this.props.onTaskAdd({ id, content });
    this.setState({newContent : ""})
  };

  render() {
    return (
      <form>
        <input
          value={this.state.newContent}
          onChange={this.handleChange}
          type="text"
          className="inputTask"
          placeholder="What to do ?"
        />
        <button onClick={this.handleSubmit} className="addTask btn btn-success ml-2 mb-1">
          Confirm
        </button>
      </form>
    );
  }
}

export default TaskForm;
