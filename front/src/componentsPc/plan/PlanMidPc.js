import React, { useEffect } from "react";
import { PlanMidBox } from "./Plan.styled";

const PlanMidPc = () => {
  const initMap = () => {
    const myLatLng = {
      lat: 40.12150192260742,
      lng: -100.45039367675781,
    };

    const map = new window.google.maps.Map(document.getElementById("gmp-map"), {
      zoom: 4,
      center: myLatLng,
      fullscreenControl: false,
      zoomControl: true,
      streetViewControl: false,
    });
    new window.google.maps.Marker({
      position: myLatLng,
      map,
      title: "My location",
    });
    console.log(document.getElementById("gmp-map"));
  };

  useEffect(() => {
    initMap();
  }, []);

  return (
    <>
      <PlanMidBox>
        <div id="gmp-map"></div>
      </PlanMidBox>
      <br />
    </>
  );
};

export default PlanMidPc;
