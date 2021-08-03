import React from "react";
import { Link } from "react-router-dom";

export default function PlantContainer() {
  return (
    <>
      <h2 className="text-2xl text-center">
        You don't have any plants. <br />
        <Link
          to="/app/add-plant"
          className="text-green-700 hover:text-green-800"
        >
          Add a new plant
        </Link>{" "}
        to start tracking
      </h2>
    </>
  );
}
