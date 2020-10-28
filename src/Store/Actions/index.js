//Actions describe the changes in the state of the application;

//Actions creators are functions witch return the actions;

export const loadList = (data) => {
    return {
        type: 'LOAD_LIST',
        payload: data
    }
}

export const deleteTask = (data) => {
    return {
        type: 'DELETE_TASK',
        payload: data
    }
}

export const refreshList = (data) => {
    return {
        type: 'REFRESH_LIST',
        payload: data
    }
}