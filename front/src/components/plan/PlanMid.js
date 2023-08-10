import React, {useEffect, useState} from 'react'
import { PlanMidBox } from './Plan.styled'

const PlanMid = ({isScrolled}) => {

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

  useEffect(() => {
    const mapBox = document.getElementById("gmp-map-box");

    if(isScrolled) {
      mapBox.style.position = 'fixed'
      mapBox.style.top = '50px'
    }else {
      mapBox.style.position = 'relative'
      mapBox.style.top = '0'
    }
  }, [isScrolled])

  return (
    <>
      <PlanMidBox id='gmp-map-box'>
        <div id="gmp-map"></div>
      </PlanMidBox>
    </>
  )
}

export default PlanMid
