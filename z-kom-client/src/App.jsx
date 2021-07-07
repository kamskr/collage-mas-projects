import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Login } from "./faetures/Login";
import { Dashboard } from "./faetures/Dashboard";
import { AuthProvider } from "./contexts/AuthContext";
import { GuestRoute, PrivateRoute } from "./routes";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <GuestRoute exacts path="/login" component={Login} />
          <PrivateRoute path="/" component={Dashboard} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
