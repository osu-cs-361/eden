import React from "react";
import { Link } from "react-router-dom";
import PlantCard from "./PlantCard";

export default function PlantContainer() {
  return (
    <>
      <h2 class="text-2xl">You don't have any plants.</h2>
      <h2 class="text-2xl">
        <Link to="/app/add-plant" class="text-green-700 hover:text-green-800">
          Add a new plant
        </Link>{" "}
        to start tracking
      </h2>
      <PlantCard />
    </>
  );
}
