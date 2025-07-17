import { useStore, actions } from "./store";
import { useRef } from "react";

function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;
  const inputRef = useRef();


  const handleAddTodo = () => {
    dispatch(actions.addTodo(todoInput));
    dispatch(actions.setTodoInput("")); // Clear input after adding

    inputRef.current.focus(); // Refocus the input field
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={todoInput}
        placeholder="Add a todo"
        onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
      />
      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => dispatch(actions.removeTodo(index))}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
