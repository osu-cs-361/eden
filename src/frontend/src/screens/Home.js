import React from "react";
import Navbar from "../components/Navbar";
import AppContainer from "../components/AppContainer";
import NoPlants from "../components/NoPlants";

export default function Home() {
  return (
    <>
      <Navbar navLinks={[{ ref: "/app/add-plant", text: "Add Plant" }]} />
      <AppContainer>
        <NoPlants />
      </AppContainer>
    </>
  );
}
