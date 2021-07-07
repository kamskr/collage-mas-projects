import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./faetures/Login";
import { Dashboard } from "./faetures/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exacts path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
