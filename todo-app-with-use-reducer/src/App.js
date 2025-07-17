import React, { useReducer } from "react";

const initialState = {
  job: "",
  todos: [],
};

const SET_JOB = "SET_JOB";
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";

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

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { job, todos } = state;
  const inputRef = React.useRef();

  const handleAddTodo = () => {
    dispatch({
      type: ADD_TODO,
      payload: job,
    });

    dispatch({
      type: SET_JOB,
      payload: "",
    });

    inputRef.current.focus();
  };

  return (
    <div style={{ padding: "0 20px" }}>
      <h3>Todo</h3>
      <input
        ref={inputRef}
        placeholder="Enter todo..."
        value={job}
        onChange={(e) => {
          dispatch({ type: SET_JOB, payload: e.target.value });
        }}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos &&
          todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => {
                dispatch({ type: REMOVE_TODO, payload: index });
              }}>x</button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
