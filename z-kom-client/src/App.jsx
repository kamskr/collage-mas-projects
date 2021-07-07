import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./faetures/Login";
import { Dashboard } from "./faetures/Dashboard";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default App;
