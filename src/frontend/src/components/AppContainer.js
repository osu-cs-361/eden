import React from "react";

export default function AppContainer({ children }) {
  return (
    <div class="h-11/12 w-full flex justify-center items-center bg-gray-100">
      <div class="w-5/6 h-5/6 flex flex-wrap bg-gray-300 gap-y-4 justify-center items-center">
        {children}
      </div>
    </div>
  );
}
