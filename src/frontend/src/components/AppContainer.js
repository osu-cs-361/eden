import React from "react";

export default function AppContainer({ children }) {
  return (
    <div className="flex items-center justify-center w-full bg-gray-100 h-11/12">
      <div className="flex flex-wrap items-center justify-center w-5/6 bg-gray-300 h-5/6 gap-y-4">
        {children}
      </div>
    </div>
  );
}
