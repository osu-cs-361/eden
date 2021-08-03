import React from "react";

export default function CardContainer({ children }) {
  return (
    <div className="grid grid-flow-row grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {children}
    </div>
  );
}
