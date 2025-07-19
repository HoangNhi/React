import GlobalStyles from "./components/GlobalStyles";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <GlobalStyles>
        <Button />
        <Button primary />
        <Button primary disabled />
      </GlobalStyles>
    </div>
  );
}

export default App;
