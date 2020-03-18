import { TodosActionTypes } from "./todos.types";

export const completeTodo = todo => ({
  type: TodosActionTypes.COMPLETE_TODO,
  payload: todo
});

export const removeTodo = todo => ({
  type: TodosActionTypes.REMOVE_TODO,
  payload: todo
});

const insertTodoStart = () => ({
  type: TodosActionTypes.INSERT_TODO_START
});

const insertTodoSuccess = todo => ({
  type: TodosActionTypes.INSERT_TODO_SUCCESS,
  payload: todo
});

const insertTodoFailure = errorMsg => ({
  type: TodosActionTypes.INSERT_TODO_FAILURE,
  payload: errorMsg
});

export const insertTodoStartAsync = todo => {
  return dispatch => {
    dispatch(insertTodoStart());
    if (todo) {
      setTimeout(() => {
        dispatch(insertTodoSuccess(todo));
      }, 1000);
    } else {
      dispatch(insertTodoFailure("Error occured while inserting todo"));
    }
  };
};
