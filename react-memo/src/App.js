import {useState} from 'react';
import Content from './Content';

function App() {
const [count, setCount] = useState(0);

const increase = () => {
  setCount(count + 1);
}

  return (
    <div style={{ padding: '10px 32px' }}>
      <Content />
      <h1>Count: {count}</h1>
      <button onClick={increase}>Increase Count</button>
    </div>
  );
}

export default App;
