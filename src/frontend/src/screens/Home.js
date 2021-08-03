import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import AppContainer from "../components/AppContainer";
import NoPlants from "../components/NoPlants";
import PlantCard from "../components/PlantCard";
import CardContainer from "../components/CardContainer";

export default function Home() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchPlants = async (setPlants) => {
      try {
        const response = await fetch(
          process.env.REACT_APP_BACKEND_URL + "/plants"
        );
        if (response.ok) {
          const body = await response.json();
          // const body = await response.text();
          console.log(body);
          setPlants(body);
        } else {
          throw new Error("HTTP error ", response.status);
        }
      } catch (e) {
        console.error("fetchPlants error: ", e.message);
      }
    };
    fetchPlants(setPlants);
  }, []);

  return (
    <>
      <Navbar navLinks={[{ ref: "/app/add-plant", text: "Add Plant" }]} />
      <AppContainer>
        {plants.length ? (
          <CardContainer>
            {plants.map((plant) => {
              return <PlantCard plant={plant} />;
            })}
          </CardContainer>
        ) : (
          <NoPlants />
        )}
      </AppContainer>
    </>
  );
}
