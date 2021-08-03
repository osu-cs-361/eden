import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ navLinks }) {
  return (
    <nav className="flex items-center justify-between w-full p-3 bg-green-900 h-1/12 text-gray-50">
      <span className="text-xl">Eden</span>
      <div className="flex gap-x-4">
        {navLinks.map((link) => {
          return (
            <Link to={link.ref} key={link.ref}>
              {link.text}
            </Link>
          );
        })}
        <Link to="/logout">Log Out</Link>
      </div>
    </nav>
  );
}
