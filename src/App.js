import React from "react";
import "./App.scss";
import TodoList from "./Components/TodoList/TodoList";
import { connect } from "react-redux";
import { insertTodoStartAsync } from "./redux/todos/todos.actions";

const App = ({ insertTodoStartAsync }) => (
  <>
    <div className="app__header">
      <h2>My To Do List</h2>

      <form
        onSubmit={e => {
          e.preventDefault();
          insertTodoStartAsync({
            title: e.target.querySelector("input").value
          });
          e.target.querySelector("input").value = "";
        }}
      >
        <input type="text" placeholder="Title..." />
        <input className="addBtn" type="submit" value="Add" />
      </form>
    </div>
    <TodoList />
  </>
);

const mapsToDispatch = dispatch => ({
  insertTodoStartAsync: state => dispatch(insertTodoStartAsync(state))
});

export default connect(null, mapsToDispatch)(App);
