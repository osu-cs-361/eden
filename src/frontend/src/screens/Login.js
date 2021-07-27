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
    <div class="bg-gray-50 h-screen flex justify-center items-center text-center">
      <div class="md:px-16 py-24 mx-auto bg-green-900 bg-opacity-25 rounded-sm w-5/6 max-w-screen-lg">
        <h1 class="text-4xl">
          Log in to <span class="text-green-900">Eden</span>
        </h1>
        <form
          id="login"
          onSubmit={(e) => submitLogin(e)}
          class="mt-10 px-16 space-y-8"
        >
          <div class="flex flex-col">
            <label for="email" class="self-start text-xl">
              Email:
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              class="mt-1 pl-2 h-10 self-stretch bg-gray-50"
            />
          </div>
          <div class="flex flex-col">
            <label for="password" class="self-start text-xl">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              class="mt-1 pl-2 h-10 self-stretch bg-gray-50"
            />
          </div>
          <div class="flex justify-around pt-8">
            <input
              type="submit"
              id="submit"
              value="Log In"
              class="px-5 py-3 text-xl bg-gray-50 rounded-sm cursor-pointer hover:bg-green-900 hover:text-gray-50 hover:shadow-md"
            />
            <Link
              to="/signup"
              class="px-5 py-3 text-xl bg-gray-50 rounded-sm hover:bg-green-900 hover:text-gray-50 hover:shadow-md"
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
