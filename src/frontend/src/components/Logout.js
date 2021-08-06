import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deauthenticate } from "../app/store";
import { Redirect } from "react-router";
import { deleteAuthCookie } from "../utilities/authUtilities";

export default function Logout() {
  const dispatch = useDispatch();

  useEffect(() => {
    deleteAuthCookie();
    dispatch(deauthenticate());
  }, []);

  return <Redirect to="/" />;
}
