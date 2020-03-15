import React from "react";
import "./TodoList.scss";

const TodoList = props => {
  const { todos, completedHandle, removeHandle } = props;

  return (
    <ul className="todo__list">
      {todos.map((todo, index) => {
        return (
          <li
            key={index}
            className={`todo__list-item ${
              todo.isCompleted ? "todo__list-item--checked" : ""
            }`}
            onClick={() => completedHandle(index)}
          >
            {todo.title}{" "}
            <span
              className="todo__list-item--close"
              onClick={event => removeHandle(event, index)}
            >
              &times;
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
