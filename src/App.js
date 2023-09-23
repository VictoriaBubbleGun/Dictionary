import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Dictionary from "./dictionary";

function App() {
  return (
    <div className="container">
      <div className="card bg-secondary bg-opacity-25 m-5">
        <div className="App ">
          <Dictionary />
          <footer className="text-center text-white">
            {" "}
            This project was coded by Jennyfer Müller and is open-sourced on{" "}
            <a
              className="link-underline-opacity-0 link-success "
              href="https://github.com/VictoriaBubbleGun/Dictionary"
            >
              GitHub
            </a>
          </footer>
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default App;
