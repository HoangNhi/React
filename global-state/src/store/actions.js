import { SET_TODO_INPUT, ADD_TODO, REMOVE_TODO, PREVIEW_TODO, CANCEL_UPDATE, UPDATE_TODO } from "./constans";

export const setTodoInput = payload => ({
    type: SET_TODO_INPUT,
    payload
});

export const addTodo = payload => ({
    type: ADD_TODO,
    payload
}); 

export const removeTodo = payload => ({
    type: REMOVE_TODO,
    payload
});

export const previewTodo = payload => ({
    type: PREVIEW_TODO,
    payload
});

export const cancleUpdate = () => ({
    type: CANCEL_UPDATE,
});

export const updateTodo = payload => ({
    type: UPDATE_TODO,
    payload
});