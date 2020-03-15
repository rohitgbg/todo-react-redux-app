import { TodosActionTypes } from "./todos.types";
import { updateCompletedSatus, removeTodosHandle } from "./todos.util";

const INITIAL_STATE = {
  todosArr: [
    { title: "Go to gym", date: new Date(), isCompleted: false },
    { title: "Pay bills", date: new Date(), isCompleted: false },
    { title: "Meet Ramu", date: new Date(), isCompleted: true },
    { title: "Buy groceries", date: new Date(), isCompleted: false },
    { title: "Read a book", date: new Date(), isCompleted: false },
    { title: "organize office", date: new Date(), isCompleted: false }
  ]
};

const todosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TodosActionTypes.INSERT_TODO:
      return {
        ...state,
        todosArr: [
          ...state.todosArr,
          { title: action.payload.title, date: new Date(), isCompleted: false }
        ]
      };

    case TodosActionTypes.COMPLETE_TODO:
      return {
        ...state,
        todosArr: [
          ...updateCompletedSatus(state.todosArr, action.payload.index)
        ]
      };

    case TodosActionTypes.REMOVE_TODO:
      return {
        ...state,
        todosArr: removeTodosHandle(state.todosArr, action.payload.index)
      };

    default:
      return state;
  }
};

export default todosReducer;
