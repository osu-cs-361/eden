import React from "react";

export default function CardContainer({ children }) {
  return (
    <div class="grid grid-cols-2 md:grid-cols-4 grid-flow-row gap-3">
      {children}
    </div>
  );
}
