const INITIAL_STATE = {
  todosArr: [
    { title: "Go to gym", date: new Date(), isCompleted: false },
    { title: "Pay bills", date: new Date(), isCompleted: false },
    { title: "Meet Ramu", date: new Date(), isCompleted: true },
    { title: "Buy groceries", date: new Date(), isCompleted: false },
    { title: "Read a book", date: new Date(), isCompleted: false },
    { title: "organize office", date: new Date(), isCompleted: false }
  ],
  title: ""
};

const todosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INSERT_TODO":
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

export default todosReducer;
