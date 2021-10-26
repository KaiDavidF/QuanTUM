import Start from "./Start";
import Landing from "./Landing";
import Impressum from "./Impressum";
import Datenschutz from "./Datenschutz";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Start} />
          <Route path="/Home" exact component={Landing} />
          <Route path="/Impressum" exact component={Impressum} />
          <Route path="/Datenschutz" exact component={Datenschutz} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
