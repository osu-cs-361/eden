import React from "react";
import AppContainer from "../components/AppContainer";
import Navbar from "../components/Navbar";
import PlantForm from "../components/PlantForm";

export default function AddPlant() {
  return (
    <>
      <Navbar navLinks={[{ ref: "/app", text: "Home" }]} />
      <AppContainer>
        <PlantForm type="new" />
      </AppContainer>
    </>
  );
}
