import quantlogo from "./quantlogo3.svg";
import "./App.css";
import "./Button.css";
import { useHistory } from "react-router-dom";

function Start() {
  const history = useHistory();

  const routeChange = () => {
    let path = "Home";
    history.push(path);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={quantlogo} className="logo" fill="white" />
        <div> We will be back soon</div>
      </header>
    </div>
  );
}

export default Start;
