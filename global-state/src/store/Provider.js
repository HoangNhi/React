import Context from "./Context";
import { useReducer } from "react";
import reducer, { initState } from "./reducer"; // Assuming you have a reducer defined
import logger from "./logger";


function Provider({ children }) {
  const [state, dispatch] = useReducer(logger(reducer), initState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

export default Provider;
