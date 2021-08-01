import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ navLinks }) {
  return (
    <nav class="p-3 h-1/12 w-full text-gray-50 bg-green-900 flex justify-between items-center">
      <span class="text-xl">Eden</span>
      <div class="flex gap-x-4">
        {navLinks.map((link) => {
          return <Link to={link.ref}>{link.text}</Link>;
        })}
        <Link to="/logout">Log Out</Link>
      </div>
    </nav>
  );
}
