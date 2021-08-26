import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useSelector((state) => state.authUser);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} user={user} /> : <Redirect to="/" />
      }
    />
  );
};

export default ProtectedRoute;
