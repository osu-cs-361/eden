import React, { useEffect } from "react";
import AppContainer from "../components/AppContainer";
import Navbar from "../components/Navbar";

export default function PlantInfo({ location, match }) {
  const plant = location.state.plant;
  return (
    <>
      <Navbar
        navLinks={[
          { ref: "/app", text: "Home" },
          { ref: "/app/add-plant", text: "Add Plant" },
        ]}
      />
      <AppContainer hideAddPlantButton>
        <div class="w-5/6 grid grid-cols-3 gap-2 p-4 mt-6 mb-12">
          <h1 className="col-span-3 text-3xl text-gray-700">Your Plant</h1>
          <img
            src={"https://source.unsplash.com/200x150?plant," + plant.id}
            className="w-48 col-span-1 rounded"
            alt={plant.species}
          />
          <div className="flex flex-col justify-center col-span-2">
            <h1 className="text-5xl font-bold">{plant.species}</h1>
            <h2 className="text-3xl italic">{plant.subtitle}</h2>
          </div>
          <div class="flex flex-col pl-1 col-span-3">
            <h3 className="text-xl">Notes</h3>
            <p>{plant.notes}</p>
          </div>
        </div>
      </AppContainer>
    </>
  );
}
