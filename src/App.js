import React, { Component } from "react";
import "./App.scss";
import TodoList from "./Components/TodoList/TodoList";

class App extends Component {
  state = {
    todos: [
      { title: "Go to gym", date: new Date(), isCompleted: false },
      { title: "Pay bills", date: new Date(), isCompleted: false },
      { title: "Meet Ramu", date: new Date(), isCompleted: true },
      { title: "Buy groceries", date: new Date(), isCompleted: false },
      { title: "Read a book", date: new Date(), isCompleted: false },
      { title: "organize office", date: new Date(), isCompleted: false }
    ],
    title: ""
  };

  insertTodosHandle() {
    this.setState(prevState => {
      return {
        todos: [
          ...prevState.todos,
          { title: this.state.title, date: new Date() }
        ]
      };
    });
  }

  completedHandle = index => {
    const { todos } = this.state;
    todos[index].isCompleted = !todos[index].isCompleted;
    this.setState(prevState => {
      return {
        todos
      };
    });
  };

  removeHandle = (event, itemIndex) => {
    event.stopPropagation();
    const { todos } = this.state;
    const removeTodos = todos.filter((item, index) => index !== itemIndex);
    this.setState(prevState => {
      return {
        todos: removeTodos
      };
    });
  };

  render() {
    console.log("state", this.state);
    return (
      <>
        <div className="app__header">
          <h2>My To Do List</h2>
          <input
            type="text"
            placeholder="Title..."
            value={this.state.title}
            onChange={event => this.setState({ title: event.target.value })}
          />
          <span className="addBtn" onClick={() => this.insertTodosHandle()}>
            Add
          </span>
        </div>
        <TodoList
          todos={this.state.todos}
          completedHandle={this.completedHandle}
          removeHandle={this.removeHandle}
        />
      </>
    );
  }
}
export default App;
