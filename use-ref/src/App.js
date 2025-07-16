import React, { useState, useRef, useEffect, use } from "react";

function App() {
  const [count, setCount] = useState(60);
  const timeId = useRef();
  const prevCount = useRef();
  const h1Ref = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count])

  useEffect(() => {
    console.log(h1Ref.current.getBoundingClientRect());
  });

  const handleStart = () => {
    timeId.current = setInterval(() => {
      setCount(prevCount => prevCount - 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timeId.current);
  };

  console.log(count, prevCount.current);

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1 ref={h1Ref}>{count}</h1>

      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default App;
