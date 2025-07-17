import { useStore, actions } from "./store";
import { useRef } from "react";

function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput, previewTodo } = state;
  const inputRef = useRef();

  const handleAddTodo = () => {
    dispatch(actions.addTodo(todoInput));
    dispatch(actions.setTodoInput("")); // Clear input after adding

    inputRef.current.focus(); // Refocus the input field
  };

  const handlePreviewTodo = (index) => {
    dispatch(actions.previewTodo(index));

    inputRef.current.focus();
  };

  const handleCancelUpdate = () => {
    dispatch(actions.cancleUpdate());
    inputRef.current.focus(); // Refocus the input field after canceling update
  };

  const handleUpdateTodo = () => {
    dispatch(actions.updateTodo(todoInput));
    dispatch(actions.setTodoInput("")); // Clear input after updating
    inputRef.current.focus(); // Refocus the input field after updating
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={todoInput}
        placeholder="Add a todo"
        onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
      />

      {previewTodo === null ? (
        <button onClick={handleAddTodo}>Add</button>
      ) : (
        <div>
          <button onClick={handleUpdateTodo}>Update</button>
          <button onClick={handleCancelUpdate}>Cancel</button>
        </div>
      )}

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span onClick={() => handlePreviewTodo(index)}>{todo}</span>

            {previewTodo === null && (
              <button onClick={() => dispatch(actions.removeTodo(index))}>
                x
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
