import { TodosActionTypes } from "./todos.types";

export const insertTodo = todo => ({
  type: TodosActionTypes.INSERT_TODO,
  payload: todo
});

export const completeTodo = todo => ({
  type: "INSERT_TODO",
  payload: todo
});
