import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Login } from "./faetures/Login";
import { Dashboard } from "./faetures/Dashboard";
import { AddProduct } from "./faetures/AddProduct";
import { AddOrder } from "./faetures/AddOrder";
import { ShowOrders } from "./faetures/ShowOrders";
import { GuestRoute, PrivateRoute } from "./routes";
import { AuthProvider } from "./contexts/AuthContext";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Router>
          <Switch>
            <GuestRoute exacts path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute exact path="/addProduct" component={AddProduct} />
            <PrivateRoute exact path="/addOrder" component={AddOrder} />
            <PrivateRoute exact path="/showOrders" component={ShowOrders} />
          </Switch>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
