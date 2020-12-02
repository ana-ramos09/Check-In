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

export const loadLists = (data) => {
	return {
		type: "LOAD_LISTS",
		payload: data,
	};
};

export const deleteLists = (data) => {
	return {
		type: "DELETE_LISTS",
		payload: data,
	};
};

export const refreshList = (data) => {
	return {
		type: "REFRESH_LIST",
		payload: data,
	};
};

export const selectBasemap = (data) => {
	return {
		type: "SELECT_BASEMAP",
		payload: data,
	};
}
