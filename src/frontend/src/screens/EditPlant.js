import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AppContainer from "../components/AppContainer";
import PlantForm from "../components/PlantForm";
import { fetchPlantById } from "../utilities/plantUtilities";

export default function EditPlant({ match }) {
  const [plant, setPlant] = useState({});
  useEffect(() => {
    const getPlant = async () => {
      const fetchedPlant = await fetchPlantById(match.params.id);
      setPlant(fetchedPlant);
      console.log(fetchedPlant);
    };
    getPlant();
  }, []);

  return (
    <>
      <Navbar navLinks={[{ ref: "/app", text: "Home" }]} />
      <AppContainer>
        {plant.id && <PlantForm type="edit" plant={plant} />}
      </AppContainer>
    </>
  );
}
