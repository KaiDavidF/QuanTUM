import Start from "./Start";
import Landing from "./Landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Start} />
          <Route path="/l1" exact component={Landing} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
