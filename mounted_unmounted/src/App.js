import Content from "./Content";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <button onClick={e => setShow(!show)}>Toggle</button>
      {show && <Content />}
    </div>
  );
}

export default App;
