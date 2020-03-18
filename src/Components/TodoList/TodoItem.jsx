import React from "react";

const TodoItem = ({
  title,
  isCompleted,
  completeTodo,
  index,
  removeTodo,
  isInserting
}) => (
  <li
    className={`todo__list-item ${
      isCompleted ? "todo__list-item--checked" : ""
    }`}
    onClick={() => completeTodo(index)}
  >
    {title}
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

export default TodoItem;
