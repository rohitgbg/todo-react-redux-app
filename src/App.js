import React from "react";
import "./App.scss";
import TodoList from "./Components/TodoList/TodoList";
import { connect } from "react-redux";
import { insertTodo } from "./redux/todos/todos.actions";

const App = props => {
  const { todos, insertTodo } = props;
  return (
    <>
      <div className="app__header">
        <h2>My To Do List</h2>

        <form
          onSubmit={e => {
            e.preventDefault();
            insertTodo(e);
          }}
        >
          <input type="text" placeholder="Title..." />
          <input className="addBtn" type="submit" value="Add" />
        </form>
      </div>
      <TodoList todos={todos} />
    </>
  );
};

const mapStateToProps = state => ({
  todos: state.todos.todosArr
});

const mapDispatchToProps = dispatch => ({
  insertTodo: e =>
    dispatch(
      insertTodo({
        title: e.target.querySelector("input").value
      })
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
