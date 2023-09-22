import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Dictionary from "./dictionary";

function App() {
  return (
    <div className="container">
      <div className="App ">
        <Dictionary />
        <footer className="text-center">
          {" "}
          This project was coded by Jennyfer Müller and is open-sourced on{" "}
          <a href="https://github.com/VictoriaBubbleGun/Dictionary">GitHub</a>
        </footer>
      </div>{" "}
    </div>
  );
}

export default App;
