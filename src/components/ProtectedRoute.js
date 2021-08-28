import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUserRequest } from "../redux/actions/login";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).id
    : null;

  React.useEffect(() => {
    dispatch(loginUserRequest(JSON.parse(localStorage.getItem("user"))));
  }, [dispatch, user]);

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
