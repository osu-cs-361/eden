import React, { useEffect } from "react";

import Navbar from "../components/Navbar";
import AppContainer from "../components/AppContainer";

export default function LocalMap() {
  useEffect(() => {
    const populateMap = async () => {
      let url = "http://flip3.engr.oregonstate.edu:14956/beach/1";
      const config = {
        method: "GET",
      };
      const res = await fetch(url, config);
      const data = await res.json();

      // Update attributes to display selected map
      let iframe = document.querySelector("#iframeUpdate");
      iframe.setAttribute("src", data.src);
      let link = document.querySelector("#anchorUpdate");
      link.setAttribute("href", data.href);
    };
    populateMap();
  });

  return (
    <>
      <Navbar navLinks={[{ ref: "/app", text: "Home" }]} />
      <AppContainer hideAddPlantButton>
        <div>
          <iframe
            title="map"
            id="iframeUpdate"
            width="425"
            height="350"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src=""
          ></iframe>
          <br />
          <small>
            <a id="anchorUpdate" href="#">
              View Larger Map
            </a>
          </small>
        </div>
      </AppContainer>
    </>
  );
}
