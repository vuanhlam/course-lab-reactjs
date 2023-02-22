import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Header/Navigation";
import Films from "./components/Film/Films";

function App() {
  return (
    <div className="Film-Container">
      <header className="header">
        <Navigation />
      </header>
      <main className="body">
        <Films />
      </main>
      <div className="concord-img-gradient"></div>
    </div>
  );
}

export default App;
