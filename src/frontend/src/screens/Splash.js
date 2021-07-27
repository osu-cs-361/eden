import React from "react";
import { Link } from "react-router-dom";

export default function Splash() {
  return (
    <div class="bg-gray-50 h-screen flex justify-center items-center text-center">
      <div class="flex flex-col justify-between h-5/6 w-5/6 max-w-screen-lg p-16 mx-auto">
        <h1 class="text-6xl text-gray-900">
          Welcome to <span class="text-green-900">Eden</span>
        </h1>
        <p class=" mb-56 text-4xl max-w-4/6 text-gray-600">
          Eden allows you to{" "}
          <span class="text-green-600">keep track of your plants</span> at a
          glance. Simplify your plant care and{" "}
          <span class="text-green-600">flex your green thumb</span> with Eden.
        </p>
        <div class="flex justify-around items-end">
          <Link
            to="/signup"
            class="py-3 px-6 border rounded border-green-900 text-gray-50 bg-green-700 text-2xl hover:bg-green-900 hover:shadow-lg"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            class="py-3 px-6 border rounded border-green-900 text-green-900 text-2xl hover:bg-green-900 hover:text-gray-50 hover:shadow-lg"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
