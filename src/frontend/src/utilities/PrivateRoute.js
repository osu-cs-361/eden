import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ children, ...rest }) {
  const authenticated = useSelector((state) => state.authentication.value);

  return authenticated ? (
    <Route {...rest}>{children}</Route>
  ) : (
    <Redirect to="/login" />
  );
}
