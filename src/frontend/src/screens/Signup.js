import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticate } from "../app/store";
import { setAuthCookie, sendUserData } from "../utilities/authUtilities";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const checkPasswords = (password1, password2, errorCallback) => {
    if (password1 === password2) {
      if (password1.length < 8) {
        errorCallback("Password must be at least 8 characters.");
        return false;
      } else {
        errorCallback("");
        return true;
      }
    } else {
      errorCallback("Password and confirmation password must match.");
      return false;
    }
  };

  const submitSignup = async (e) => {
    e.preventDefault();
    if (checkPasswords(password, confirmPassword, setErrorMessage)) {
      const token = sendUserData("/signup", { email, password });
      if (token) {
        setAuthCookie(token);
        dispatch(authenticate(token));
        history.push("/app");
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen text-center bg-gray-50">
      <div className="w-5/6 max-w-screen-lg py-24 mx-auto bg-green-900 bg-opacity-25 rounded-sm md:px-16">
        <h1 className="text-4xl">
          Sign up for <span className="text-green-900">Eden</span>
        </h1>
        <form
          id="signup"
          onSubmit={(e) => submitSignup(e)}
          className="px-16 mt-10 space-y-8"
        >
          <div className="flex flex-col">
            <label for="email" className="self-start text-xl">
              Email:
            </label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="self-stretch h-10 pl-2 mt-1 rounded bg-gray-50"
            />
          </div>
          <div className="flex flex-col">
            <label for="password" className="self-start text-xl">
              Password:
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="self-stretch h-10 pl-2 mt-1 rounded bg-gray-50"
            />
          </div>
          <div className="flex flex-col">
            <label
              for="password"
              className={
                "self-start text-xl" + (!errorMessage ? "" : " text-red-600")
              }
            >
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirm-password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={
                "mt-1 pl-2 h-10 self-stretch bg-gray-50 rounded" +
                (!errorMessage ? "" : " border-2 border-red-600")
              }
            />
            <p
              className={
                "mt-2 text-left text-red-600" + (!errorMessage ? " hidden" : "")
              }
            >
              {errorMessage}
            </p>
          </div>
          <div className="flex justify-around pt-8">
            <input
              type="submit"
              id="submit"
              value="Sign Up"
              className="px-5 py-3 text-xl rounded-sm cursor-pointer bg-gray-50 hover:bg-green-900 hover:text-gray-50 hover:shadow-md"
            />
            <Link
              to="/login"
              className="px-5 py-3 text-xl rounded-sm bg-gray-50 hover:bg-green-900 hover:text-gray-50 hover:shadow-md"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
