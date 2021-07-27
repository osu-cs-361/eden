import React from "react";
import Navbar from "../components/Navbar";
import PlantContainer from "../components/PlantContainer";

export default function Home() {
  return (
    <div class="h-screen">
      <Navbar />
      <div class="h-full w-full flex justify-center items-center bg-gray-100">
        <PlantContainer />
      </div>
    </div>
  );
}
