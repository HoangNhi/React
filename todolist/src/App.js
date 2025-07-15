import React, { useState } from "react";

function ToDoList() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("todoItems")) || []);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    setItems([...items, inputValue]);
    setInputValue(""); // Clear input after adding

    localStorage.setItem("todoItems", JSON.stringify([...items, inputValue]));
  };

  return (
    <React.Fragment>
      <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}

function App() {
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <ToDoList />
      <p>Type an item and click "Add" to see it in the list.</p>
      <p>
        Note: This is a simple example without advanced features like editing or
        deleting items.
      </p>
    </div>
  );
}

export default App;
