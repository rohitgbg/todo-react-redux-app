import React from "react";
import "./App.scss";
import TodoList from "./Components/TodoList/TodoList";
import { connect } from "react-redux";

const App = props => {
  const { todos, title } = props;
  return (
    <>
      <div className="app__header">
        <h2>My To Do List</h2>
        <input
          type="text"
          placeholder="Title..."
          value={title}
          // onChange={event => this.setState({ title: event.target.value })}
        />
        <span className="addBtn">Add</span>
      </div>
      <TodoList todos={todos} />
    </>
  );
};

const mapStateToProps = state => ({
  todos: state.todos.todosArr,
  title: state.todos.title
});

export default connect(mapStateToProps)(App);
