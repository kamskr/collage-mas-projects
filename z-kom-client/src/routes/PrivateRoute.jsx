//in PrivateRoute.tsx
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const {
    user: { authenticated },
  } = useAuth();
  console.log("hello");
  console.log(authenticated);
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? (
          <>
            <Component {...props} />
          </>
        ) : (
          <>
            <p>Hello</p>
            <Redirect to="/login" />
          </>
        )
      }
    />
  );
};
