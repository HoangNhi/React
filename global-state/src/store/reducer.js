import { SET_TODO_INPUT, ADD_TODO, REMOVE_TODO, PREVIEW_TODO, CANCEL_UPDATE, UPDATE_TODO } from "./constans";

const initState = {
    todos: [],
    todoInput: "",
    previewTodo: null,
}

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload,
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((_, index) => index !== action.payload),
            }
        case PREVIEW_TODO:
            return {
                ...state,
                previewTodo: {
                    todo: state.todos[action.payload],
                    index: action.payload,
                },
                todoInput: state.todos[action.payload] || "",
            }
        case CANCEL_UPDATE:
            return {
                ...state,
                previewTodo: null,
                todoInput: "",
            }
        case UPDATE_TODO:
            const updatedTodos = [...state.todos];
            updatedTodos[state.previewTodo.index] = action.payload;
            return {
                ...state,
                todos: updatedTodos,
                previewTodo: null,
                todoInput: "",
            }
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}

export { initState };
export default reducer;