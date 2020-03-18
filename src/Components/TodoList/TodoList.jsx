import React from "react";
import "./TodoList.scss";
import { connect } from "react-redux";
import { completeTodo, removeTodo } from "../../redux/todos/todos.actions";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, completeTodo, removeTodo, isInserting }) => {
  return (
    <ul className="todo__list">
      {todos &&
        todos.map((todo, index) => {
          return (
            <TodoItem
              key={index}
              title={todo.title}
              isCompleted={todo.isCompleted}
              completeTodo={completeTodo}
              index={index}
              removeTodo={removeTodo}
            />
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
  todos: state.todos.todosArr,
  isInserting: state.todos.isInserting
});

export default connect(mapStateToProps, mapDispatchToprops)(TodoList);
