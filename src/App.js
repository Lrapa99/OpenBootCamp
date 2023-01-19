import logo from "./logo.svg";
import "./App.css";
import MyContacts from "./components/A";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyContacts />
      </header>
    </div>
  );
}

export default App;
