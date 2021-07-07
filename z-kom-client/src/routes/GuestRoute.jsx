import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const GuestRoute = ({ component: Component, ...rest }) => {
  const {
    user: { authenticated },
  } = useAuth();
  console.log(authenticated);
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? <Redirect to={`/`} /> : <Component {...props} />
      }
    />
  );
};
