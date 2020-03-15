import { TodosActionTypes } from "./todos.types";

export const insertTodo = todo => ({
  type: TodosActionTypes.INSERT_TODO,
  payload: todo
});

export const completeTodo = todo => ({
  type: TodosActionTypes.COMPLETE_TODO,
  payload: todo
});

export const removeTodo = todo => ({
  type: TodosActionTypes.REMOVE_TODO,
  payload: todo
});
