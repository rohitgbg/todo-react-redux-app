export const updateCompletedSatus = (todosArr, index) => {
  todosArr[index].isCompleted = !todosArr[index].isCompleted;
  return todosArr;
};

export const removeTodosHandle = (todosArr, itemIndex) => {
  const removeTodos = todosArr.filter((item, index) => index !== itemIndex);
  return removeTodos;
};
