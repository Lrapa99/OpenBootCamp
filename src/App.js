import logo from "./logo.svg";
import "./App.css";
import MyContacts from "./components/A";
import Ejercicio2 from "./components/Ejercicio2";
import ShowContacts from "./components/showContacts";
import ChangeElementColor from "./components/ChangeElementColor";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <MyContacts /> */}
        {/* <Ejercicio2 /> */}
        {/* <ShowContacts /> */}
        <ChangeElementColor />
      </header>
    </div>
  );
}

export default App;
