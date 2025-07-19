import './App.css';
import Heading from './components/Heading';
import Paragraph from './components/Paragraph';
import GlobalStyles from './components/GlobalStyles';

function App() {
  return (
    <GlobalStyles>
      <div className="App">
        <Heading />
        <Paragraph  />
      </div>

      <div className="d-flex">
        <Paragraph />
        <Paragraph />
      </div>
    </GlobalStyles>
  );
}

export default App;
