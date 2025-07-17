import Content from "./Content";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import './App.css'

function App() {
  const {toggleTheme} = useContext(ThemeContext);

  return (
     <div style={{ padding: 20 }}>
        <button onClick={toggleTheme}>Toggle theme</button>
        <Content />
      </div>
  );
}

export default App;
