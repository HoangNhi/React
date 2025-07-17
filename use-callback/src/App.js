import React, { useCallback, useState } from 'react';
import Content from './Content';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div className="App">
      <Content handleClick={handleClick} />
      <h1>Counter: {count}</h1>
    </div>
  );
}

export default App;
