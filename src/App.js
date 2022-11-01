import logo from './logo.svg';
import './App.css';

const HelloWorld = "Hello World";
const HelloWorld2 = {
  first: "Hello",
  second: "World"
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p> Variable: { HelloWorld } </p>
        <p> Object: { HelloWorld2.first + " " + HelloWorld2.second } </p>
      </header>
    </div>
  );
}

export default App;
