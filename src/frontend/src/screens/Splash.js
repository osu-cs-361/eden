import React from "react";
import { Link } from "react-router-dom";

export default function Splash() {
  return (
    <div className="flex items-center justify-center h-screen text-center bg-gray-50">
      <div className="flex flex-col justify-between w-5/6 max-w-screen-lg p-16 mx-auto h-5/6">
        <h1 className="text-6xl text-gray-900">
          Welcome to <span className="text-green-900">Eden</span>
        </h1>
        <p className="mb-56 text-4xl text-gray-600  max-w-4/6">
          Eden allows you to{" "}
          <span className="text-green-600">keep track of your plants</span> at a
          glance. Simplify your plant care and{" "}
          <span className="text-green-600">flex your green thumb</span> with
          Eden.
        </p>
        <div className="flex items-end justify-around">
          <Link
            to="/signup"
            className="px-6 py-3 text-2xl bg-green-700 border border-green-900 rounded text-gray-50 hover:bg-green-900 hover:shadow-lg"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="px-6 py-3 text-2xl text-green-900 border border-green-900 rounded hover:bg-green-900 hover:text-gray-50 hover:shadow-lg"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
