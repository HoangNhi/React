import logo from "./logo.svg";
import "./App.css";
import GlobalStyles from "./components/GlobalStyles";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <GlobalStyles>
        <div style={{ padding: "20px" }}>
          <Button />
          <Button primary />
        </div>
      </GlobalStyles>
    </div>
  );
}

export default App;
