import React, { useState } from "react";
function Button() {
  const [count, setCount] = useState(1);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

function Info(){
  const [info, setInfo] = useState({
    name: "John Doe",
    age: 30,
    city: "New York"
  });

  const handleUpdate = () => {
    setInfo({
      ...info,
      bio: "Software Engineer",
    });
  }

  return (
    <React.Fragment>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Update Info</button>
    </React.Fragment>
  )
}

function App() {
  return (
    <div className="App">
      <Info />
    </div>
  );
} 

export default App;
