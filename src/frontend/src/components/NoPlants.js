import React from "react";
import { Link } from "react-router-dom";
import PlantCard from "./PlantCard";

export default function PlantContainer() {
  return (
    <>
      <h2 class="text-2xl text-center">
        You don't have any plants. <br />
        <Link to="/app/add-plant" class="text-green-700 hover:text-green-800">
          Add a new plant
        </Link>{" "}
        to start tracking
      </h2>
    </>
  );
}
