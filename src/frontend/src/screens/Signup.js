import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const submitSignup = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      if (password.length < 8) {
        setErrorMessage("Password must be at least 8 characters.");
      } else {
        setErrorMessage("");
        const response = await fetch("backend/api/v1/signup", {
          method: "POST",
          body: { email, password },
        });
        console.log(response.status);
      }
    } else {
      setErrorMessage("Password and confirmation password must match.");
    }
  };

  return (
    <div class="bg-gray-50 h-screen flex justify-center items-center text-center">
      <div class="md:px-16 py-24 mx-auto bg-green-900 bg-opacity-25 rounded-sm w-5/6 max-w-screen-lg">
        <h1 class="text-4xl">
          Sign up for <span class="text-green-900">Eden</span>
        </h1>
        <form
          id="signup"
          onSubmit={(e) => submitSignup(e)}
          class="mt-10 px-16 space-y-8"
        >
          <div class="flex flex-col">
            <label for="email" class="self-start text-xl">
              Email:
            </label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              class="mt-1 pl-2 h-10 self-stretch bg-gray-50 rounded"
            />
          </div>
          <div class="flex flex-col">
            <label for="password" class="self-start text-xl">
              Password:
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              class="mt-1 pl-2 h-10 self-stretch bg-gray-50 rounded"
            />
          </div>
          <div class="flex flex-col">
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
          <div class="flex justify-around pt-8">
            <input
              type="submit"
              id="submit"
              value="Sign Up"
              class="px-5 py-3 text-xl bg-gray-50 rounded-sm cursor-pointer hover:bg-green-900 hover:text-gray-50 hover:shadow-md"
            />
            <Link
              to="/login"
              class="px-5 py-3 text-xl bg-gray-50 rounded-sm hover:bg-green-900 hover:text-gray-50 hover:shadow-md"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
