import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("backend/api/v1/login", {
      method: "POST",
      body: { email, password },
    });

    console.log(response.status);
  };

  return (
    <div className="flex items-center justify-center h-screen text-center bg-gray-50">
      <div className="w-5/6 max-w-screen-lg py-24 mx-auto bg-green-900 bg-opacity-25 rounded-sm md:px-16">
        <h1 className="text-4xl">
          Log in to <span className="text-green-900">Eden</span>
        </h1>
        <form
          id="login"
          onSubmit={(e) => submitLogin(e)}
          className="px-16 mt-10 space-y-8"
        >
          <div className="flex flex-col">
            <label for="email" className="self-start text-xl">
              Email:
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="self-stretch h-10 pl-2 mt-1 bg-gray-50"
            />
          </div>
          <div className="flex flex-col">
            <label for="password" className="self-start text-xl">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="self-stretch h-10 pl-2 mt-1 bg-gray-50"
            />
          </div>
          <div className="flex justify-around pt-8">
            <input
              type="submit"
              id="submit"
              value="Log In"
              className="px-5 py-3 text-xl rounded-sm cursor-pointer bg-gray-50 hover:bg-green-900 hover:text-gray-50 hover:shadow-md"
            />
            <Link
              to="/signup"
              className="px-5 py-3 text-xl rounded-sm bg-gray-50 hover:bg-green-900 hover:text-gray-50 hover:shadow-md"
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
