//Actions describe the changes in the state of the application;
//Actions are objects which have a type attribute
//Actions creators are functions that return the actions;

export const loadList = (data) => {
  return {
    type: "LOAD_LIST",
    payload: data,
  };
};

export const deleteTask = (data) => {
  return {
    type: "DELETE_TASK",
    payload: data,
  };
};

export const addTask = () => {
  return {
    type: "ADD_TASK",
  };
};

export const editTask = (data) => {
  return {
    type: "EDIT_TASK",
    payload: data,
  };
};
