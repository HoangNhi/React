import { useReducer } from "react";

const initialState = 0;
const UP_ACTION = "UP";
const DOWN_ACTION = "DOWN";

function reducer(state, action) {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error(`Unknown action: ${action}`);
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{ padding: "0 20px" }}>
      <h1>{count}</h1>
      <button onClick={() => dispatch(UP_ACTION)}>Increment</button>
      <button onClick={() => dispatch(DOWN_ACTION)}>Decrement</button>
    </div>
  );
}

export default App;
