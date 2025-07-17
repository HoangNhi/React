import { SET_JOB, ADD_TODO, REMOVE_TODO } from "./constants";

export const initialState = {
  job: "",
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.payload),
      };
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
    default:
      throw new Error(`Unknown action: ${action}`);
  }
};

export default reducer;