import React, { useReducer } from "react";
import { SET_JOB, ADD_TODO, REMOVE_TODO } from "./constants";
import reducer, { initialState } from "./reducer";
import logger from "./logger";

function App() {
  const [state, dispatch] = useReducer(logger(reducer), initialState);
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