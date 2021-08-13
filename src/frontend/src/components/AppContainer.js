import React from "react";
import { Link } from "react-router-dom";

export default function AppContainer({ children, hideAddPlantButton }) {
  return (
    <div className="flex items-center justify-center w-full bg-gray-100 h-11/12">
      <div className="relative flex flex-wrap items-center justify-center w-5/6 bg-gray-300 h-5/6 gap-y-4">
        {!hideAddPlantButton && (
          <Link to="/app/add-plant">
            <button className="absolute right-0 w-12 h-8 text-xl text-center bg-gray-400 rounded-t -top-8">
              +
            </button>
          </Link>
        )}
        {children}
      </div>
    </div>
  );
}
