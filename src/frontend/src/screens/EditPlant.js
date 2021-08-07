import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AppContainer from "../components/AppContainer";
import PlantForm from "../components/PlantForm";
import { fetchPlantById } from "../utilities/plantUtilities";
import { useSelector } from "react-redux";

export default function EditPlant({ match }) {
  const [plant, setPlant] = useState({});
  const token = useSelector((state) => state.authentication.token);
  useEffect(() => {
    const getPlant = async () => {
      const fetchedPlant = await fetchPlantById(match.params.id, token);
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
