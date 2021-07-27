import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav class="p-3 w-full text-gray-50 bg-green-900 flex justify-between">
      <span class="text-xl">Eden</span>
      <div class="flex gap-x-4">
        <Link to="/app/add-plant">Add Plant</Link>
        <Link to="/logout">Log Out</Link>
      </div>
    </nav>
  );
}
