import quantlogo from "./quantlogo3.svg";
import "./App.css";
import "./Button.css";
import { useHistory } from "react-router-dom";

function Start() {
  const history = useHistory();

  const routeChange = () => {
    let path = "l1";
    history.push(path);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={quantlogo} className="logo" fill="white" />
        <button className="shrink-border" onClick={routeChange}>
          Enter{" "}
        </button>
      </header>
    </div>
  );
}

export default Start;
