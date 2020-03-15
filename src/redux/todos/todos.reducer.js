import { TodosActionTypes } from "./todos.types";

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

    default:
      return state;
  }
};

export default todosReducer;
