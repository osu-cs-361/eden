import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import AppContainer from "../components/AppContainer";
import NoPlants from "../components/NoPlants";
import PlantCard from "../components/PlantCard";
import CardContainer from "../components/CardContainer";
import { deletePlant, waterPlant } from "../utilities/plantUtilities";
import { useSelector } from "react-redux";

export default function Home() {
  const [plants, setPlants] = useState([]);
  const token = useSelector((state) => state.authentication.token);

  const deleteCallback = async (id) => {
    if (await deletePlant(id, token)) {
      setPlants(plants.filter((plant) => plant.id !== id));
    }
  };

  const waterCallback = async (id) => {
    if (await waterPlant(id, token)) {
      setPlants(
        plants.map((plant) => {
          if (plant.id === id) {
            return { ...plant, last_watered: Date.now() };
          } else return plant;
        })
      );
    }
  };

  useEffect(() => {
    const fetchPlants = async (setPlants) => {
      try {
        const response = await fetch(
          process.env.REACT_APP_BACKEND_URL + "/plants",
          { method: "GET", headers: { Authorization: token } }
        );
        if (response.ok) {
          const body = await response.json();
          setPlants(body);
        } else {
          throw new Error("HTTP error " + response.status);
        }
      } catch (e) {
        console.error("fetchPlants error: ", e.message);
      }
    };
    fetchPlants(setPlants);
  }, []);

  return (
    <>
      <Navbar
        navLinks={[
          { ref: "/app/add-plant", text: "Add Plant" },
          { ref: "/app/local-map", text: "Local Map" },
        ]}
      />
      <AppContainer>
        {plants.length ? (
          <CardContainer>
            {plants.map((plant) => {
              return (
                <PlantCard
                  plant={plant}
                  deleteCallback={deleteCallback}
                  waterCallback={waterCallback}
                  key={plant.id}
                />
              );
            })}
          </CardContainer>
        ) : (
          <NoPlants />
        )}
      </AppContainer>
    </>
  );
}
