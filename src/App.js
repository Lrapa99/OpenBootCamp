import logo from "./logo.svg";
import "./App.css";
import MyContacts from "./components/A";
import Ejercicio2 from "./components/Ejercicio2";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <MyContacts /> */}
        <Ejercicio2 />
      </header>
    </div>
  );
}

export default App;
