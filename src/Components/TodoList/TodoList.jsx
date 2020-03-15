import React from "react";
import "./TodoList.scss";
import { connect } from "react-redux";
import { completeTodo, removeTodo } from "../../redux/todos/todos.actions";

const TodoList = ({ todos, completeTodo, removeTodo }) => {
  return (
    <ul className="todo__list">
      {todos &&
        todos.map((todo, index) => {
          return (
            <li
              key={index}
              className={`todo__list-item ${
                todo.isCompleted ? "todo__list-item--checked" : ""
              }`}
              onClick={() => completeTodo(index)}
            >
              {todo.title}{" "}
              <span
                className="todo__list-item--close"
                onClick={event => {
                  event.stopPropagation();
                  removeTodo(index);
                }}
              >
                &times;
              </span>
            </li>
          );
        })}
    </ul>
  );
};

const mapDispatchToprops = dispatch => ({
  completeTodo: index => dispatch(completeTodo({ index: index })),
  removeTodo: index => dispatch(removeTodo({ index: index }))
});

const mapStateToProps = state => ({
  todos: state.todos.todosArr
});

export default connect(mapStateToProps, mapDispatchToprops)(TodoList);
